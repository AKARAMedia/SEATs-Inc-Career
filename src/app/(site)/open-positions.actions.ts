"use server";

import { loadOpenJobs, type PublicJob } from "@/lib/jobs";
import { JOB_ANNOUNCEMENT_SLUGS } from "@/content/home";

// Isolates the live/uncached jobs fetch behind a Server Action so the rest of the merged
// homepage can stay a static Server Component instead of the whole route being force-dynamic.
export async function getOpenPositionsPreview(): Promise<{ jobs: PublicJob[]; unavailable: boolean }> {
  const { jobs, unavailable } = await loadOpenJobs();
  const announced = JOB_ANNOUNCEMENT_SLUGS.flatMap((slug) => jobs.find((j) => j.slug === slug) ?? []);
  return { jobs: announced, unavailable };
}
