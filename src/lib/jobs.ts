import "server-only";
import { and, asc, eq } from "drizzle-orm";
import { db, ready } from "@/db";
import { jobs } from "@/db/schema";
import { withTtlCache } from "@/lib/ttl-cache";

export type PublicJob = typeof jobs.$inferSelect;

const FIVE_MINUTES_MS = 5 * 60 * 1000;

// Edits happen in the seats-inc.com admin panel, a separate deployment — this app has no
// way to receive an instant cache-invalidation signal from it, so edits show up within a
// few minutes instead of immediately. Acceptable staleness for job postings.
export const listOpenJobs = withTtlCache("listOpenJobs", FIVE_MINUTES_MS, async (): Promise<PublicJob[]> => {
  await ready();
  return db.select().from(jobs).where(and(eq(jobs.site, "career"), eq(jobs.open, true))).orderBy(asc(jobs.sortOrder));
});

export const getOpenJob = withTtlCache("getOpenJob", FIVE_MINUTES_MS, async (slug: string): Promise<PublicJob | null> => {
  await ready();
  const [row] = await db.select().from(jobs).where(and(eq(jobs.site, "career"), eq(jobs.slug, slug)));
  return row && row.open ? row : null;
});
