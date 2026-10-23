import "server-only";
import { withTtlCache } from "@/lib/ttl-cache";

// Shape the job pages render; field names are kept from the old DB-backed version so the pages didn't change.
export type PublicJob = {
  slug: string;
  title: string;
  jobType: string;
  department: string;
  salaryRange: string;
  workDays: string;
  workplace: string;
  responsibilitiesHtml: string;
  postedAt: string;
};

// Shape returned by GET https://seats-inc.com/api/jobs/ (open career jobs, already in display order).
type ApiJob = {
  slug: string;
  title: string;
  type: string;
  department: string;
  location: string;
  salaryRange: string;
  workDays: string;
  descriptionHtml: string;
  postedAt: string;
};

const JOBS_API_URL = process.env.JOBS_API_URL ?? "https://seats-inc.com/api/jobs/";
const CACHE_TTL_MS = 15 * 1000;

const MAX_ATTEMPTS = 4;
const REQUEST_TIMEOUT_MS = 8000;
let lastGood: PublicJob[] | null = null;

// The API sits behind a deployment that intermittently answers 5xx, so a single failed request
// must not take the page down: retry a few times, then fall back to the last list we got.
async function fetchJobs(): Promise<PublicJob[]> {
  let lastError: unknown;
  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
    try {
      // `no-store` keeps Next from freezing the response into the build; the TTL cache below does the throttling.
      const res = await fetch(JOBS_API_URL, {
        headers: { Accept: "application/json" },
        cache: "no-store",
        signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
      });
      if (!res.ok) throw new Error(`Jobs API responded ${res.status} for ${JOBS_API_URL}`);
      const data = (await res.json()) as { jobs?: ApiJob[] };
      if (!Array.isArray(data.jobs)) throw new Error(`Jobs API returned an unexpected payload from ${JOBS_API_URL}`);
      return data.jobs.map((j) => ({
        slug: j.slug,
        title: j.title,
        jobType: j.type,
        department: j.department ?? "",
        salaryRange: j.salaryRange,
        workDays: j.workDays,
        workplace: j.location,
        responsibilitiesHtml: j.descriptionHtml,
        // The API still reports the 2025 posting year; show these listings as 2026 postings.
        postedAt: j.postedAt.replace(/^2025-/, "2026-"),
      }));
    } catch (err) {
      lastError = err;
      if (attempt < MAX_ATTEMPTS) await new Promise((r) => setTimeout(r, 250 * attempt));
    }
  }
  throw lastError;
}

// Thrown when the jobs API is down and there is no earlier list to fall back to (e.g. right after a cold start)
export class JobsUnavailableError extends Error {
  constructor(cause: unknown) {
    super("The jobs list is temporarily unavailable", { cause });
    this.name = "JobsUnavailableError";
  }
}

// Edits happen in the seats-inc.com admin panel, a separate deployment — this app has no
// way to receive an instant cache-invalidation signal from it, so edits (a new department
// logo, a changed title) show up within about half a minute instead of immediately.
const cachedJobs = withTtlCache("listOpenJobs", CACHE_TTL_MS, async (): Promise<PublicJob[]> => {
  try {
    return (lastGood = await fetchJobs());
  } catch (err) {
    if (!lastGood) throw new JobsUnavailableError(err);
    console.warn("Jobs API unavailable, serving the last list we fetched:", err);
    return lastGood;
  }
});

// Concurrent requests share one fetch (with its retries) instead of each hammering a struggling API
let inflight: Promise<PublicJob[]> | null = null;

export function listOpenJobs(): Promise<PublicJob[]> {
  inflight ??= cachedJobs().finally(() => {
    inflight = null;
  });
  return inflight;
}

// For pages that can render without the list: reports an outage instead of throwing
export async function loadOpenJobs(): Promise<{ jobs: PublicJob[]; unavailable: boolean }> {
  try {
    return { jobs: await listOpenJobs(), unavailable: false };
  } catch (err) {
    if (!(err instanceof JobsUnavailableError)) throw err;
    console.warn(err.message, err.cause);
    return { jobs: [], unavailable: true };
  }
}

export async function getOpenJob(slug: string): Promise<PublicJob | null> {
  const jobs = await listOpenJobs();
  return jobs.find((j) => j.slug === slug) ?? null;
}
