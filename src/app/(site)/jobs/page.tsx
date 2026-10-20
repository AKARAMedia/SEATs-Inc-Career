import Image from "next/image";
import Link from "next/link";
import { listOpenJobs } from "@/lib/jobs";
import { TELEGRAM_HR } from "@/lib/links";

export default async function JobsPage() {
  const openJobs = await listOpenJobs();

  return (
    <>
      <section className="relative flex min-h-[420px] items-center justify-center text-center">
        <Image
          src="/media/2026/01/DSC01606-scaled.jpg"
          alt=""
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="container-site relative text-white">
          <h1 className="text-4xl text-white desktop:text-5xl">Recruit</h1>
          <p className="mt-2 text-xl">តម្រូវការជ្រើសរើសបុគ្គលិក</p>
          <div className="mx-auto mt-3 h-0.5 w-16 bg-primary" />
        </div>
      </section>

      <div className="container-site grid gap-10 py-16 desktop:grid-cols-[300px_1fr]">
        <aside>
          <h1 className="text-2xl text-primary">CAREER</h1>
          <p className="mt-3 text-sm text-text">
            If you&rsquo;re interested, please click the button below for more
            information or apply now!
          </p>
          <a
            href={TELEGRAM_HR}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-5 w-fit"
          >
            Get in touch <span aria-hidden>→</span>
          </a>
        </aside>

        <div>
          <h2 className="text-2xl text-primary">WE ARE LOOKING FOR</h2>
          <ul className="mt-6 divide-y divide-border rounded-xl bg-white ring-1 ring-border">
            {openJobs.map((job) => (
              <li
                key={job.slug}
                className="flex items-center justify-between gap-4 px-6 py-5"
              >
                <div>
                  <Link
                    href={`/jobs/${job.slug}`}
                    className="font-semibold text-primary hover:underline"
                  >
                    {job.title}
                  </Link>
                  <p className="mt-1 text-xs text-muted">
                    {new Date(job.postedAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
                <Link
                  href={`/jobs/${job.slug}`}
                  className="shrink-0 rounded-full bg-primary px-5 py-2 text-xs font-bold uppercase text-white transition-colors hover:bg-[#015a94]"
                >
                  Apply Now »
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
