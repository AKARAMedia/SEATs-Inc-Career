CREATE TABLE "jobs" (
	"id" serial PRIMARY KEY NOT NULL,
	"slug" text NOT NULL,
	"site" text DEFAULT 'career' NOT NULL,
	"title_en" text NOT NULL,
	"type" text DEFAULT 'Full-time' NOT NULL,
	"salary_range" text DEFAULT '' NOT NULL,
	"work_days" text DEFAULT '' NOT NULL,
	"location" text DEFAULT '' NOT NULL,
	"description_en" text DEFAULT '' NOT NULL,
	"open" boolean DEFAULT true NOT NULL,
	"sort_order" integer DEFAULT 0 NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"wp_id" integer,
	CONSTRAINT "jobs_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "site_settings" (
	"key" text PRIMARY KEY NOT NULL,
	"value" jsonb NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
