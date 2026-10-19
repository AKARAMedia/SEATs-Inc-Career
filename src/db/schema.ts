import { boolean, integer, pgTable, serial, text, timestamp, uniqueIndex } from "drizzle-orm/pg-core";

export const jobs = pgTable(
  "jobs",
  {
    id: serial("id").primaryKey(),
    slug: text("slug").notNull().unique(),
    title: text("title").notNull(),
    jobType: text("job_type").notNull().default("Full-time"),
    salaryRange: text("salary_range").notNull().default(""),
    workDays: text("work_days").notNull().default(""),
    workplace: text("workplace").notNull().default(""),
    // Sanitized HTML (Responsibilities, Requirements, etc.)
    responsibilitiesHtml: text("responsibilities_html").notNull().default(""),
    open: boolean("open").notNull().default(true),
    sortOrder: integer("sort_order").notNull().default(0),
    postedAt: timestamp("posted_at", { withTimezone: true }).notNull().defaultNow(),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
    // Original WordPress post id, kept for import idempotency
    wpId: integer("wp_id"),
  },
  (t) => [uniqueIndex("jobs_slug_idx").on(t.slug)],
);
