import "server-only";
import { cacheLife } from "next/cache";
import { and, asc, eq } from "drizzle-orm";
import { db, ready } from "@/db";
import { jobs } from "@/db/schema";

export type PublicJob = typeof jobs.$inferSelect;

// Edits happen in the seats-inc.com admin panel, a separate deployment — this app has no
// way to receive an instant cache-invalidation signal from it, so edits show up within a
// few minutes instead of immediately. Acceptable staleness for job postings.
export async function listOpenJobs(): Promise<PublicJob[]> {
  "use cache";
  cacheLife("minutes");
  await ready();
  return db.select().from(jobs).where(and(eq(jobs.site, "career"), eq(jobs.open, true))).orderBy(asc(jobs.sortOrder));
}

export async function getOpenJob(slug: string): Promise<PublicJob | null> {
  "use cache";
  cacheLife("minutes");
  await ready();
  const [row] = await db.select().from(jobs).where(and(eq(jobs.site, "career"), eq(jobs.slug, slug)));
  return row && row.open ? row : null;
}
