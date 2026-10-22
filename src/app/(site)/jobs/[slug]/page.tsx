import Image from "next/image";
import { notFound } from "next/navigation";
import { departmentLogo } from "@/lib/departments";
import { postedLabel } from "@/lib/job-format";
import { splitJobDescription, type SectionKind } from "@/lib/job-sections";
import { getOpenJob, JobsUnavailableError } from "@/lib/jobs";
import { getHrContact } from "@/lib/settings";
import { TELEGRAM_HR } from "@/lib/links";
import AutoRefresh from "@/components/AutoRefresh";
import BackToJobs from "@/components/BackToJobs";
import JobsUnavailable from "@/components/JobsUnavailable";
import HrContactCard from "@/components/HrContactCard";
import JobIcon from "@/components/JobIcon";

// Job data and department logos come from the live jobs API, so render per request (not at build time)
export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: PageProps<"/jobs/[slug]">) {
  const { slug } = await params;
  const job = await getOpenJob(slug).catch(() => null);
  return { title: job?.title ?? "Job" };
}

const DEFAULT_LOGO = "/media/2022/10/full-logo.jpg";

const SECTION_TITLES: Record<SectionKind, string> = {
  overview: "Job Overview",
  responsibilities: "Key Responsibilities",
  requirements: "Requirements",
  priority: "Priority",
  benefits: "Benefits",
};

// Descriptions are HTML from the admin editor; lists get check marks and tighter spacing
const BODY =
  "text-sm text-text [&_b]:text-heading [&_strong]:text-heading [&_p]:mb-2 [&_ul]:mb-3 [&_ul]:space-y-2 " +
  "[&_li]:relative [&_li]:pl-6 [&_li_p]:m-0 [&_li]:before:absolute [&_li]:before:left-0 [&_li]:before:font-bold " +
  "[&_li]:before:text-primary [&_li]:before:content-['✓']";

function Section({ title, html, className = "" }: { title: string; html: string; className?: string }) {
  return (
    <section className={className}>
      <h2 className="mb-3 text-lg text-primary">{title}</h2>
      <div className={BODY} dangerouslySetInnerHTML={{ __html: html }} />
    </section>
  );
}

export default async function JobDetailPage({ params }: PageProps<"/jobs/[slug]">) {
  const { slug } = await params;
  let job;
  let contact;
  try {
    [job, contact] = await Promise.all([getOpenJob(slug), getHrContact()]);
  } catch (err) {
    if (!(err instanceof JobsUnavailableError)) throw err;
    return (
      <div className="container-site py-10 tablet:py-12">
        <AutoRefresh />
        <div className="mb-5">
          <BackToJobs />
        </div>
        <JobsUnavailable />
      </div>
    );
  }
  if (!job) notFound();

  const logo = departmentLogo(job.department);
  const sections = splitJobDescription(job.responsibilitiesHtml);
  const html = (kind: SectionKind) => sections.find((s) => s.kind === kind)?.html;
  const benefits = html("benefits");
  const postedOn = new Date(job.postedAt).toLocaleDateString("en-US", {
    timeZone: "Asia/Phnom_Penh",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="container-site py-10 tablet:py-12">
      <AutoRefresh />
      <div className="mb-5">
        <BackToJobs />
      </div>
      <article className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-border tablet:p-8">
        <header className="flex flex-col gap-6 desktop:flex-row desktop:items-start desktop:justify-between">
          <div className="flex min-w-0 flex-col items-start gap-6 tablet:flex-row tablet:items-center">
            <div className="relative size-36 shrink-0 overflow-hidden rounded-xl bg-white ring-1 ring-border tablet:size-44">
              <Image
                src={logo?.src ?? DEFAULT_LOGO}
                alt={logo?.label ?? "S.E.A.T.S Inc."}
                fill
                priority
                sizes="176px"
                className={logo ? "object-contain p-4" : "object-cover"}
              />
            </div>

            <div className="min-w-0">
              <h1 className="text-2xl font-bold text-navy tablet:text-3xl">{job.title}</h1>

              <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-text">
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
                {job.workplace && (
                  <span className="flex items-center gap-1.5">
                    <JobIcon>
                      <path d="M12 21s7-6.2 7-11.5a7 7 0 0 0-14 0C5 14.8 12 21 12 21Z" />
                      <circle cx="12" cy="9.5" r="2.5" />
                    </JobIcon>
                    {job.workplace}
                  </span>
                )}
                {job.salaryRange && (
                  <span className="flex items-center gap-1.5">
                    <JobIcon>
                      <circle cx="12" cy="12" r="9" />
                      <path d="M14.5 9.5c-.4-.9-1.3-1.5-2.5-1.5-1.4 0-2.5.8-2.5 2s1 1.7 2.5 2 2.5.8 2.5 2-1.1 2-2.5 2c-1.2 0-2.1-.6-2.5-1.5M12 6.5V8m0 8v1.5" />
                    </JobIcon>
                    {job.salaryRange}
                  </span>
                )}
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2">
                <a href={TELEGRAM_HR} target="_blank" rel="noopener noreferrer" className="btn-primary w-fit">
                  Apply Now <span aria-hidden>→</span>
                </a>
                <span className="text-xs text-muted" title={postedOn}>
                  {postedLabel(job.postedAt)}
                </span>
              </div>
            </div>
          </div>

          <div className="w-full desktop:w-80 desktop:shrink-0">
            <HrContactCard contact={contact} />
          </div>
        </header>

        <div className="mt-8 grid gap-8 border-t border-border pt-8 desktop:grid-cols-2">
          {sections.length === 0 ? (
            <div
              className={`${BODY} desktop:col-span-2`}
              dangerouslySetInnerHTML={{ __html: job.responsibilitiesHtml }}
            />
          ) : (
            <>
              <div className="space-y-8">
                {(["overview", "responsibilities"] as const).map(
                  (kind) => html(kind) && <Section key={kind} title={SECTION_TITLES[kind]} html={html(kind)!} />,
                )}
              </div>
              <div className="space-y-8">
                {(["requirements", "priority"] as const).map(
                  (kind) => html(kind) && <Section key={kind} title={SECTION_TITLES[kind]} html={html(kind)!} />,
                )}
                {benefits && (
                  <Section title={SECTION_TITLES.benefits} html={benefits} className="rounded-xl bg-sky-50 p-5" />
                )}
              </div>
            </>
          )}
        </div>
      </article>
    </div>
  );
}
