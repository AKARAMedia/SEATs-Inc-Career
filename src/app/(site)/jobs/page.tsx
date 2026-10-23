import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import AutoRefresh from "@/components/AutoRefresh";
import JobCard from "@/components/JobCard";
import JobsUnavailable from "@/components/JobsUnavailable";
import JobsFilters from "@/components/JobsFilters";
import JobsLimitSelect from "@/components/JobsLimitSelect";
import { DEPARTMENTS, departmentLogo } from "@/lib/departments";
import { loadOpenJobs } from "@/lib/jobs";
import { jobsHref, type JobsQuery } from "@/lib/jobs-url";
import { TELEGRAM_HR } from "@/lib/links";

const DEFAULT_LIMIT = 6;
const MAX_LIMIT = 50;

// Page numbers to render, with null marking a gap: [1, null, 4, 5, 6, null, 9]
function pageWindow(current: number, total: number): (number | null)[] {
  const pages = new Set([1, total, current - 1, current, current + 1]);
  const sorted = [...pages].filter((p) => p >= 1 && p <= total).sort((a, b) => a - b);
  const out: (number | null)[] = [];
  sorted.forEach((p, i) => {
    if (i > 0 && p - sorted[i - 1] > 1) out.push(null);
    out.push(p);
  });
  return out;
}

function parseParam(value: string | string[] | undefined, fallback: number, max: number) {
  const n = Number.parseInt(String(Array.isArray(value) ? value[0] : (value ?? "")), 10);
  return Number.isNaN(n) ? fallback : Math.min(max, Math.max(1, n));
}

function firstValue(value: string | string[] | undefined) {
  return (Array.isArray(value) ? value[0] : value) ?? "";
}

function Pagination({ current, total, filters }: { current: number; total: number; filters: Omit<JobsQuery, "page"> }) {
  const pageHref = (page: number) => jobsHref({ ...filters, page });
  const base = "flex size-10 items-center justify-center rounded-full text-sm font-semibold transition-colors";
  const idle = "bg-white text-primary ring-1 ring-border hover:bg-primary/10";
  const disabled = "pointer-events-none bg-white text-muted/50 ring-1 ring-border";
  return (
    <nav aria-label="Pagination" className="flex flex-wrap items-center justify-center gap-2">
      <Link
        href={pageHref(current - 1)}
        scroll={false}
        aria-label="Previous page"
        aria-disabled={current === 1}
        tabIndex={current === 1 ? -1 : undefined}
        className={`${base} ${current === 1 ? disabled : idle}`}
      >
        ‹
      </Link>
      {pageWindow(current, total).map((p, i) =>
        p === null ? (
          <span key={`gap-${i}`} aria-hidden className="px-1 text-muted">
            …
          </span>
        ) : (
          <Link
            key={p}
            href={pageHref(p)}
            scroll={false}
            aria-label={`Page ${p}`}
            aria-current={p === current ? "page" : undefined}
            className={`${base} ${p === current ? "bg-primary text-white" : idle}`}
          >
            {p}
          </Link>
        ),
      )}
      <Link
        href={pageHref(current + 1)}
        scroll={false}
        aria-label="Next page"
        aria-disabled={current === total}
        tabIndex={current === total ? -1 : undefined}
        className={`${base} ${current === total ? disabled : idle}`}
      >
        ›
      </Link>
    </nav>
  );
}

type SearchParams = { [key: string]: string | string[] | undefined };

export default async function JobsPage({ searchParams }: { searchParams: Promise<SearchParams> }) {
  const params = await searchParams;
  const { jobs: allJobs, unavailable } = await loadOpenJobs();

  const q = firstValue(params.q).trim();
  const department = firstValue(params.department).trim();
  const type = firstValue(params.type).trim();

  // All known departments, plus any unknown one a job happens to use
  const known = new Set(DEPARTMENTS.map((d) => d.value));
  const extra = [...new Set(allJobs.map((j) => j.department.trim().toLowerCase()).filter((d) => d && !known.has(d)))];
  const departments = [...DEPARTMENTS, ...extra.map((value) => ({ value, label: value }))];
  const types = [...new Set(allJobs.map((j) => j.jobType.trim()).filter(Boolean))].sort((a, b) => a.localeCompare(b));

  const needle = q.toLowerCase();
  const filteredJobs = allJobs.filter(
    (j) =>
      (!department || j.department.trim().toLowerCase() === department.toLowerCase()) &&
      (!type || j.jobType.trim() === type) &&
      (!needle ||
        [j.title, j.department, departmentLogo(j.department)?.label, j.workplace, j.jobType].some((f) =>
          f?.toLowerCase().includes(needle),
        )),
  );

  const limit = parseParam(params.limit, DEFAULT_LIMIT, MAX_LIMIT);
  const totalPages = Math.max(1, Math.ceil(filteredJobs.length / limit));
  const page = parseParam(params.page, 1, totalPages);
  const filters = { limit, q, department, type };

  // Keep the URL canonical: always /jobs?page=N&limit=M, with empty or untidy filters dropped
  const filtersTidy = (["q", "department", "type"] as const).every(
    (k) => params[k] === undefined || params[k] === (filters[k] || undefined),
  );
  if (String(params.page) !== String(page) || String(params.limit) !== String(limit) || !filtersTidy) {
    redirect(jobsHref({ page, ...filters }));
  }
  const openJobs = filteredJobs.slice((page - 1) * limit, page * limit);

  return (
    <>
      <AutoRefresh />
      <section className="relative flex min-h-[420px] items-center justify-center text-center">
        <Image src="/media/2026/10/team-photo-hero.jpg" alt="" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-black/35" />
        <div className="container-site relative text-white">
          <h1 className="text-4xl text-white desktop:text-5xl">Recruit</h1>
          <p className="mt-2 text-xl">តម្រូវការជ្រើសរើសបុគ្គលិក</p>
          <div className="mx-auto mt-3 h-0.5 w-16 bg-primary" />
        </div>
      </section>

      <div className="container-site py-16">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
          <div>
            <h1 className="text-2xl text-primary">CAREER</h1>
            <p className="mt-3 text-sm text-text">
              If you&rsquo;re interested, please click the button below for more information or apply now!
            </p>
          </div>
          <a href={TELEGRAM_HR} target="_blank" rel="noopener noreferrer" className="btn-primary w-fit">
            Get in touch <span aria-hidden>→</span>
          </a>
        </div>

        <h2 className="mt-12 text-2xl text-primary">WE ARE LOOKING FOR</h2>
        <JobsFilters limit={limit} q={q} department={department} type={type} departments={departments} types={types} />
        {!unavailable && (
          <p className="mt-4 text-sm text-muted" aria-live="polite">
            {filteredJobs.length} {filteredJobs.length === 1 ? "job" : "jobs"} found
          </p>
        )}
        <ul className="mt-4 grid grid-cols-1 gap-4 tablet:grid-cols-2">
          {openJobs.map((job, i) => (
            <li key={job.slug} className="h-full">
              <JobCard job={job} index={i} />
            </li>
          ))}
        </ul>
        {unavailable && <JobsUnavailable className="mt-4" />}
        {!unavailable && filteredJobs.length === 0 && (
          <p className="rounded-xl bg-surface p-10 text-center text-text">
            No jobs match your search. Try different keywords or clear the filters.
          </p>
        )}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {totalPages > 1 && <Pagination current={page} total={totalPages} filters={filters} />}
          <JobsLimitSelect filters={filters} />
        </div>
      </div>
    </>
  );
}
