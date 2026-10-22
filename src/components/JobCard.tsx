import Image from "next/image";
import Link from "next/link";
import JobIcon from "@/components/JobIcon";
import { departmentLogo } from "@/lib/departments";
import { daysSince, postedLabel } from "@/lib/job-format";
import type { PublicJob } from "@/lib/jobs";

const AVATAR_STYLES = [
  "bg-primary/15 text-primary",
  "bg-logo-green/25 text-[#4d7a12]",
  "bg-accent/25 text-[#0b6aa8]",
  "bg-navy/10 text-navy",
];

// Up to two capital letters from the title, e.g. "Web Developer Intern" -> "WD"
function initials(title: string) {
  return title
    .split(/[\s/&-]+/)
    .filter((w) => /^[A-Za-z]/.test(w))
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");
}

const NEW_WITHIN_DAYS = 14;

export default function JobCard({ job, index }: { job: PublicJob; index: number }) {
  const logo = departmentLogo(job.department);
  const isNew = daysSince(job.postedAt) < NEW_WITHIN_DAYS;
  return (
    <Link
      href={`/jobs/${job.slug}`}
      className="group flex h-full items-center gap-4 rounded-xl bg-white p-3 shadow-sm ring-1 ring-border transition hover:shadow-md hover:ring-primary/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    >
      <div className="relative size-20 shrink-0 tablet:size-[104px]">
        {logo ? (
          <span className="relative block size-full overflow-hidden rounded-xl bg-white ring-1 ring-border">
            <Image
              src={logo.src}
              alt={logo.label}
              fill
              sizes="(min-width: 768px) 104px, 80px"
              className="object-contain p-3"
            />
          </span>
        ) : (
          <span
            aria-hidden
            className={`flex size-full items-center justify-center rounded-xl font-heading text-xl font-bold tablet:text-2xl ${AVATAR_STYLES[index % AVATAR_STYLES.length]}`}
          >
            {initials(job.title)}
          </span>
        )}
        {isNew && (
          <span className="absolute left-1.5 top-1.5 rounded-full bg-red-500 px-2 py-0.5 text-[11px] font-bold leading-4 text-white shadow-sm">
            New
          </span>
        )}
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="line-clamp-2 font-heading text-base font-bold leading-snug text-primary group-hover:underline tablet:text-[17px]">
          {job.title}
        </h3>
        <div className="mt-2 flex flex-col gap-y-1 text-[13px] text-text min-[480px]:flex-row min-[480px]:flex-wrap min-[480px]:gap-x-4">
          {job.workDays && (
            <span className="flex items-center gap-1.5">
              <JobIcon>
                <rect x="3" y="4.5" width="18" height="16" rx="2" />
                <path d="M3 9.5h18M8 2.5v4M16 2.5v4" />
              </JobIcon>
              {job.workDays}
            </span>
          )}
          {job.jobType && (
            <span className="flex items-center gap-1.5">
              <JobIcon>
                <rect x="3" y="7" width="18" height="13" rx="2" />
                <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18" />
              </JobIcon>
              {job.jobType}
            </span>
          )}
        </div>
        {job.workplace && (
          <p className="mt-1.5 flex items-center gap-1.5 text-[13px] text-text">
            <JobIcon>
              <path d="M12 21s7-6.2 7-11.5a7 7 0 0 0-14 0C5 14.8 12 21 12 21Z" />
              <circle cx="12" cy="9.5" r="2.5" />
            </JobIcon>
            <span className="min-w-0 truncate" title={job.workplace}>
              {job.workplace}
            </span>
          </p>
        )}
        <p className="mt-1.5 flex items-center gap-1.5 text-xs text-muted">
          <JobIcon>
            <circle cx="12" cy="12" r="9" />
            <path d="M12 7v5l3 2" />
          </JobIcon>
          {postedLabel(job.postedAt)}
        </p>
      </div>

      <svg
        aria-hidden
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-5 shrink-0 text-primary transition-transform group-hover:translate-x-0.5"
      >
        <path d="m9 5 7 7-7 7" />
      </svg>
    </Link>
  );
}
