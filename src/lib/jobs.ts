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
const FIVE_MINUTES_MS = 5 * 60 * 1000;

const MAX_ATTEMPTS = 4;
let lastGood: PublicJob[] | null = null;

// The API sits behind a deployment that intermittently answers 5xx, so a single failed request
// must not take the page down: retry a few times, then fall back to the last list we got.
async function fetchJobs(): Promise<PublicJob[]> {
  let lastError: unknown;
  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
    try {
      // `no-store` keeps Next from freezing the response into the build; the TTL cache below does the throttling.
      const res = await fetch(JOBS_API_URL, { headers: { Accept: "application/json" }, cache: "no-store" });
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

// Edits happen in the seats-inc.com admin panel, a separate deployment — this app has no
// way to receive an instant cache-invalidation signal from it, so edits show up within a
// few minutes instead of immediately. Acceptable staleness for job postings.
export const listOpenJobs = withTtlCache("listOpenJobs", FIVE_MINUTES_MS, async (): Promise<PublicJob[]> => {
  try {
    return (lastGood = await fetchJobs());
  } catch (err) {
    if (!lastGood) throw err;
    console.error("Jobs API unavailable, serving the last list we fetched:", err);
    return lastGood;
  }
});

export async function getOpenJob(slug: string): Promise<PublicJob | null> {
  const jobs = await listOpenJobs();
  return jobs.find((j) => j.slug === slug) ?? null;
}
