"use server";

import { loadJobs, type PublicJob } from "@/lib/jobs";
import { JOB_ANNOUNCEMENT_SLUGS } from "@/content/home";

// Isolates the live/uncached jobs fetch behind a Server Action so the rest of the merged
// homepage can stay a static Server Component instead of the whole route being force-dynamic.
// This is a "now hiring" teaser, unlike the full /jobs directory — a closed position drops out of
// it instead of showing closed here too.
export async function getOpenPositionsPreview(): Promise<{ jobs: PublicJob[]; unavailable: boolean }> {
  const { jobs, unavailable } = await loadJobs();
  const announced = JOB_ANNOUNCEMENT_SLUGS.flatMap((slug) => jobs.find((j) => j.slug === slug && j.open) ?? []);
  return { jobs: announced, unavailable };
}
