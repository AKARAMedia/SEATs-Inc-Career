import { boolean, integer, jsonb, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

// This app is read-only against the shared seats-inc.com database: SEATs-Inc owns the
// schema, migrations, and the admin panel (Career Jobs + Career Site HR Contact). The
// property names below match what the rest of this codebase already expects; only the
// db-column mapping (the quoted "..." name) matters for talking to the real tables.
export const jobs = pgTable("jobs", {
  id: serial("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  site: text("site").notNull().default("career"),
  title: text("title_en").notNull(),
  jobType: text("type").notNull().default("Full-time"),
  salaryRange: text("salary_range").notNull().default(""),
  workDays: text("work_days").notNull().default(""),
  workplace: text("location").notNull().default(""),
  responsibilitiesHtml: text("description_en").notNull().default(""),
  open: boolean("open").notNull().default(true),
  sortOrder: integer("sort_order").notNull().default(0),
  postedAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  wpId: integer("wp_id"),
});

export const siteSettings = pgTable("site_settings", {
  key: text("key").primaryKey(),
  value: jsonb("value").notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
});
