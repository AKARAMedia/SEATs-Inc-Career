"use server";

import { loadJobs, type PublicJob } from "@/lib/jobs";

// The home page shows a 2 x 2 grid.
const PREVIEW_COUNT = 4;

// Isolates the live/uncached jobs fetch behind a Server Action so the rest of the merged
// homepage can stay a static Server Component instead of the whole route being force-dynamic.
// This is a "now hiring" teaser, unlike the full /jobs directory: it shows the newest open
// positions, and a closed position drops out of it (the next-newest one takes its place)
// instead of showing closed here too.
export async function getOpenPositionsPreview(): Promise<{ jobs: PublicJob[]; unavailable: boolean }> {
  const { jobs, unavailable } = await loadJobs();
  const newest = jobs
    .filter((j) => j.open)
    // Array.sort is stable, so jobs posted at the same moment keep the API's display order.
    .sort((a, b) => Date.parse(b.postedAt) - Date.parse(a.postedAt))
    .slice(0, PREVIEW_COUNT);
  return { jobs: newest, unavailable };
}
