import "server-only";
import { cacheLife, cacheTag } from "next/cache";
import { eq } from "drizzle-orm";
import { z } from "zod";
import { db, ready } from "@/db";
import { siteSettings } from "@/db/schema";

export const SETTINGS_TAG = "settings";
const HR_CONTACT_KEY = "hr_contact";

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
  cacheTag(SETTINGS_TAG);
  cacheLife("hours");
  await ready();
  const [row] = await db.select().from(siteSettings).where(eq(siteSettings.key, HR_CONTACT_KEY));
  const parsed = row ? HrContactSchema.safeParse(row.value) : null;
  return parsed?.success ? parsed.data : DEFAULT_HR_CONTACT;
}

export async function saveHrContact(value: HrContact) {
  await ready();
  await db
    .insert(siteSettings)
    .values({ key: HR_CONTACT_KEY, value, updatedAt: new Date() })
    .onConflictDoUpdate({ target: siteSettings.key, set: { value, updatedAt: new Date() } });
}
