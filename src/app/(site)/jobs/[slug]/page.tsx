import { notFound } from "next/navigation";
import { getOpenJob, listOpenJobs } from "@/lib/jobs";
import { getHrContact } from "@/lib/settings";
import { TELEGRAM_HR } from "@/lib/links";
import HrContactCard from "@/components/HrContactCard";

export async function generateStaticParams() {
  const openJobs = await listOpenJobs();
  return openJobs.map((j) => ({ slug: j.slug }));
}

export async function generateMetadata({ params }: PageProps<"/jobs/[slug]">) {
  const { slug } = await params;
  const job = await getOpenJob(slug);
  return { title: job?.title ?? "Job" };
}

const INFO_ROWS = (job: { jobType: string; salaryRange: string; workDays: string; workplace: string }) => [
  { label: "Job Type", value: job.jobType },
  { label: "Salary Range", value: job.salaryRange },
  { label: "Work Days", value: job.workDays },
  { label: "Workplace", value: job.workplace },
];

export default async function JobDetailPage({ params }: PageProps<"/jobs/[slug]">) {
  const { slug } = await params;
  const [job, contact] = await Promise.all([getOpenJob(slug), getHrContact()]);
  if (!job) notFound();

  return (
    <div className="container-site grid gap-10 py-16 desktop:grid-cols-[1fr_320px]">
      <article>
        <h1 className="text-3xl text-heading">{job.title}</h1>
        <p className="mt-1 text-sm text-muted">
          Posted: {new Date(job.postedAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </p>

        <a
          href={TELEGRAM_HR}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary mt-6 w-fit"
        >
          Apply For This Job <span aria-hidden>→</span>
        </a>

        <dl className="mt-8 grid gap-x-8 gap-y-3 border-t border-border pt-6 desktop:grid-cols-2">
          {INFO_ROWS(job).map((row) => (
            <div key={row.label} className="flex gap-2 text-sm">
              <dt className="w-32 shrink-0 font-semibold text-heading">{row.label}</dt>
              <dd className="text-text">:&nbsp; {row.value}</dd>
            </div>
          ))}
        </dl>

        <div
          className="prose prose-sm mt-8 max-w-none text-text [&_b]:text-heading [&_p]:mb-3 [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-6"
          dangerouslySetInnerHTML={{ __html: job.responsibilitiesHtml }}
        />
      </article>

      <aside>
        <HrContactCard contact={contact} />
      </aside>
    </div>
  );
}
