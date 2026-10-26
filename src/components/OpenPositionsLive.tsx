"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import JobCard from "@/components/JobCard";
import { useVisibleInterval } from "@/hooks/useVisibleInterval";
import { getOpenPositionsPreview } from "@/app/(site)/open-positions.actions";
import type { PublicJob } from "@/lib/jobs";

export default function OpenPositionsLive() {
  const [jobs, setJobs] = useState<PublicJob[] | null>(null);

  const refresh = useCallback(() => {
    getOpenPositionsPreview().then((r) => setJobs(r.jobs));
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);
  useVisibleInterval(refresh, 20_000);

  return (
    <>
      <ul className="mt-10 flex flex-wrap justify-center gap-4 text-left">
        {jobs === null
          ? Array.from({ length: 4 }, (_, i) => (
              <li key={i} className="w-full animate-pulse tablet:w-[calc(50%-8px)]">
                <div className="h-[104px] rounded-xl bg-surface" />
              </li>
            ))
          : jobs.map((job, i) => (
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
    </>
  );
}
