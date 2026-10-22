import Image from "next/image";
import Link from "next/link";
import JobCard from "@/components/JobCard";
import CtaApplyBand from "@/components/CtaApplyBand";
import VideoPlaylist from "@/components/VideoPlaylist";
import { listOpenJobs } from "@/lib/jobs";

const JOB_ANNOUNCEMENT_SLUGS = [
  "product-development-agribusiness",
  "representative-of-sales-and-order-management",
  "supervisor-of-operations",
  "copywriter",
  "freelance-sales-and-marketing-advisor-2",
];

const VIDEOS = [
  { title: "How to improve productivity?", youtubeId: "Smppx4YojC0", duration: "0:16", thumbnail: "/media/2022/11/7.jpg" },
  { title: "2 Strong Ownership | Four Mindsets /S.E.A.T.S Inc.", youtubeId: "awxKg04t5Ag", duration: "0:16", thumbnail: "/media/2022/11/2-1.jpg" },
  { title: "3 Learning Flexibly | Four Mindsets /S.E.A.T.S Inc.", youtubeId: "p6APtqh6JCg", duration: "0:16", thumbnail: "/media/2022/11/3.jpg" },
  { title: "4 One For All | Four Mindsets /S.E.A.T.S Inc.", youtubeId: "r77ewf-3Wu4", duration: "0:16", thumbnail: "/media/2022/11/4.jpg" },
];

export default async function WorkPage() {
  const openJobs = await listOpenJobs();
  const announced = JOB_ANNOUNCEMENT_SLUGS.flatMap((slug) => openJobs.find((j) => j.slug === slug) ?? []);

  return (
    <>
      <section className="container-site overflow-x-clip py-20">
        <div className="relative">
          <div
            aria-hidden
            className="pointer-events-none absolute left-40 top-1/2 hidden -translate-y-1/2 select-none whitespace-nowrap font-[Arial,Helvetica,sans-serif] text-[120px] font-extrabold leading-none text-[#e5f0f8] desktop:block"
          >
            Why Join Us?
          </div>
          <div className="relative">
            <h1 className="text-3xl text-primary">Mission</h1>
            <p className="mt-1 text-sm text-muted">បេសកកម្ម របស់យើង !</p>
          </div>
        </div>
        <div className="mt-10 grid items-center gap-10 desktop:grid-cols-2">
          <div className="space-y-4 text-text">
            <p>For Growth, Changes, Challenges, &amp; For US With S.E.A.T.S Inc.</p>
            <p>
              We provide an environment and an opportunity to those that seek challenges to further improvement of
              their better selves.
            </p>
            <p>
              Our mission is to raise potential members which we believed that everyone got the potential and what
              they needed are the key to unlock those.
            </p>
          </div>
          <div className="relative hidden aspect-[608/255] w-full desktop:block">
            <Image src="/media/2022/10/d.png" alt="" fill className="object-contain" />
          </div>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="container-site text-center">
          <h2 className="text-3xl text-primary">Jobs Announcements</h2>
          <p className="mt-1 text-sm text-muted">ផ្នែកណាមួយដែរអ្នកចង់ ចូលរួមជាមួយយើង​ !</p>
          <ul className="mt-10 flex flex-wrap justify-center gap-4 text-left">
            {announced.map((job, i) => (
              <li key={job.slug} className="w-full tablet:w-[calc(50%-8px)]">
                <JobCard job={job} index={i} />
              </li>
            ))}
          </ul>
          <Link
            href="/jobs"
            className="mt-10 inline-flex items-center justify-center rounded-full border border-primary px-6 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
          >
            SEE MORE <span aria-hidden className="ml-1.5">→</span>
          </Link>
        </div>
      </section>

      <section className="bg-gradient-to-b from-primary to-white py-20 text-white">
        <div className="container-site">
          <h2 className="text-3xl">Our Video</h2>
          <p className="mt-1 text-sm text-white/80">សារចែករំលែក ពីCEOក្រុមហ៊ុន</p>
          <div className="mt-8">
            <VideoPlaylist videos={VIDEOS} />
          </div>
        </div>
      </section>

      <CtaApplyBand />
    </>
  );
}
