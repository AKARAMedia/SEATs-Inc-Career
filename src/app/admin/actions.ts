"use server";

import { redirect } from "next/navigation";
import { updateTag } from "next/cache";
import { eq } from "drizzle-orm";
import { z } from "zod";
import { db, ready } from "@/db";
import { jobs } from "@/db/schema";
import { login, logout, requireAdmin } from "@/lib/auth";
import { JOBS_TAG } from "@/lib/jobs";
import { HrContactSchema, saveHrContact, SETTINGS_TAG } from "@/lib/settings";
import { sanitizeBody } from "@/lib/sanitize";

export type FormState = { error?: string; fieldErrors?: Record<string, string>; ok?: string } | undefined;

// ---------- auth ----------

export async function loginAction(_: FormState, formData: FormData): Promise<FormState> {
  const email = String(formData.get("email") ?? "");
  const password = String(formData.get("password") ?? "");
  if (!email || !password) return { error: "Enter your email and password." };
  const result = await login(email, password);
  if (!result.ok) return { error: result.error };
  redirect("/admin/");
}

export async function logoutAction() {
  await logout();
  redirect("/admin/login/");
}

// ---------- jobs ----------

const JobInput = z.object({
  id: z.coerce.number().int().positive().optional(),
  title: z.string().trim().min(1, "Title is required").max(300),
  jobType: z.string().trim().min(1).max(60),
  salaryRange: z.string().trim().max(60).default(""),
  workDays: z.string().trim().max(60).default(""),
  workplace: z.string().trim().max(300).default(""),
  responsibilitiesHtml: z.string().max(20000).default(""),
  open: z.coerce.boolean().default(true),
});

function jobSlugify(input: string): string {
  return input
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 120);
}

export async function saveJobAction(_: FormState, formData: FormData): Promise<FormState> {
  await requireAdmin();
  const parsed = JobInput.safeParse({
    id: formData.get("id") || undefined,
    title: formData.get("title") ?? "",
    jobType: formData.get("jobType") ?? "",
    salaryRange: formData.get("salaryRange") ?? "",
    workDays: formData.get("workDays") ?? "",
    workplace: formData.get("workplace") ?? "",
    responsibilitiesHtml: formData.get("responsibilitiesHtml") ?? "",
    open: formData.get("open") === "on",
  });
  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const i of parsed.error.issues) fieldErrors[String(i.path[0])] = i.message;
    return { fieldErrors };
  }
  const { id, ...d } = parsed.data;
  const responsibilitiesHtml = sanitizeBody(d.responsibilitiesHtml);
  await ready();

  if (id) {
    await db.update(jobs).set({ ...d, responsibilitiesHtml, updatedAt: new Date() }).where(eq(jobs.id, id));
  } else {
    const slug = jobSlugify(d.title) || `job-${Date.now()}`;
    await db.insert(jobs).values({ ...d, responsibilitiesHtml, slug });
  }
  updateTag(JOBS_TAG);
  redirect("/admin/jobs/");
}

export async function deleteJobAction(id: number) {
  await requireAdmin();
  await ready();
  await db.delete(jobs).where(eq(jobs.id, id));
  updateTag(JOBS_TAG);
}

export async function toggleJobOpenAction(id: number, open: boolean) {
  await requireAdmin();
  await ready();
  await db.update(jobs).set({ open, updatedAt: new Date() }).where(eq(jobs.id, id));
  updateTag(JOBS_TAG);
}

// ---------- settings ----------

export async function saveHrContactAction(_: FormState, formData: FormData): Promise<FormState> {
  await requireAdmin();
  const parsed = HrContactSchema.safeParse({
    name: formData.get("name") ?? "",
    email: formData.get("email") ?? "",
    phone: formData.get("phone") ?? "",
    address: formData.get("address") ?? "",
  });
  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const i of parsed.error.issues) fieldErrors[String(i.path[0])] = i.message;
    return { fieldErrors };
  }
  await saveHrContact(parsed.data);
  updateTag(SETTINGS_TAG);
  return { ok: "Saved." };
}
