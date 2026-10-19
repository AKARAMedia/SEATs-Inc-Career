import "server-only";
import { cacheLife, cacheTag } from "next/cache";
import { asc, eq } from "drizzle-orm";
import { db, ready } from "@/db";
import { jobs } from "@/db/schema";

export const JOBS_TAG = "jobs";

export type PublicJob = typeof jobs.$inferSelect;

export async function listOpenJobs(): Promise<PublicJob[]> {
  "use cache";
  cacheTag(JOBS_TAG);
  cacheLife("hours");
  await ready();
  return db.select().from(jobs).where(eq(jobs.open, true)).orderBy(asc(jobs.sortOrder));
}

export async function getOpenJob(slug: string): Promise<PublicJob | null> {
  "use cache";
  cacheTag(JOBS_TAG);
  cacheLife("hours");
  await ready();
  const [row] = await db.select().from(jobs).where(eq(jobs.slug, slug));
  return row && row.open ? row : null;
}
