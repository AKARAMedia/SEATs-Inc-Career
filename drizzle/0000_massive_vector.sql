CREATE TABLE "jobs" (
	"id" serial PRIMARY KEY NOT NULL,
	"slug" text NOT NULL,
	"title" text NOT NULL,
	"job_type" text DEFAULT 'Full-time' NOT NULL,
	"salary_range" text DEFAULT '' NOT NULL,
	"work_days" text DEFAULT '' NOT NULL,
	"workplace" text DEFAULT '' NOT NULL,
	"responsibilities_html" text DEFAULT '' NOT NULL,
	"open" boolean DEFAULT true NOT NULL,
	"sort_order" integer DEFAULT 0 NOT NULL,
	"posted_at" timestamp with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	"wp_id" integer,
	CONSTRAINT "jobs_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE UNIQUE INDEX "jobs_slug_idx" ON "jobs" USING btree ("slug");