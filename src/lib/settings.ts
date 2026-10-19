import "server-only";
import { cacheLife } from "next/cache";
import { eq } from "drizzle-orm";
import { z } from "zod";
import { db, ready } from "@/db";
import { siteSettings } from "@/db/schema";

// Matches the "careerHrContact" settings group key in the seats-inc.com admin panel —
// that's the single source of truth; this app only ever reads it.
const HR_CONTACT_KEY = "careerHrContact";

export const HrContactSchema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().max(320).pipe(z.email()),
  phone: z.string().trim().max(50),
  address: z.string().trim().max(300),
});
export type HrContact = z.infer<typeof HrContactSchema>;

const DEFAULT_HR_CONTACT: HrContact = {
  name: "SOVANNRIM RUOM",
  email: "hr-recruiting@seats-inc.com",
  phone: "089 777 231",
  address: "Street 388, Sangkat Toul Svay Prey, 1, Phnom Penh.",
};

export async function getHrContact(): Promise<HrContact> {
  "use cache";
  cacheLife("minutes");
  await ready();
  const [row] = await db.select().from(siteSettings).where(eq(siteSettings.key, HR_CONTACT_KEY));
  const parsed = row ? HrContactSchema.safeParse(row.value) : null;
  return parsed?.success ? parsed.data : DEFAULT_HR_CONTACT;
}
