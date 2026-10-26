"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import JobCard from "@/components/JobCard";
import { useVisibleInterval } from "@/hooks/useVisibleInterval";
import { getOpenPositionsPreview } from "@/app/(site)/open-positions.actions";
import type { PublicJob } from "@/lib/jobs";

type State = { status: "loading" } | { status: "error" } | { status: "ready"; jobs: PublicJob[] };

export default function OpenPositionsLive() {
  const [state, setState] = useState<State>({ status: "loading" });

  const refresh = useCallback(() => {
    getOpenPositionsPreview()
      .then((r) => setState({ status: "ready", jobs: r.jobs }))
      .catch(() => setState({ status: "error" }));
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);
  useVisibleInterval(refresh, 20_000);

  return (
    <>
      {state.status === "loading" && (
        <ul className="mt-10 flex flex-wrap justify-center gap-4 text-left">
          {Array.from({ length: 4 }, (_, i) => (
            <li key={i} className="w-full animate-pulse tablet:w-[calc(50%-8px)]">
              <div className="h-[104px] rounded-xl border border-border bg-border/60" />
            </li>
          ))}
        </ul>
      )}

      {state.status === "error" && (
        <p className="mt-10 text-text">Couldn&rsquo;t load positions right now — see all open roles below.</p>
      )}

      {state.status === "ready" && state.jobs.length === 0 && (
        <p className="mt-10 text-text">No featured positions right now — see all open roles below.</p>
      )}

      {state.status === "ready" && state.jobs.length > 0 && (
        <ul className="mt-10 flex flex-wrap justify-center gap-4 text-left">
          {state.jobs.map((job, i) => (
            <li key={job.slug} className="w-full tablet:w-[calc(50%-8px)]">
              <JobCard job={job} index={i} />
            </li>
          ))}
        </ul>
      )}

      <Link
        href="/jobs"
        className="mt-10 inline-flex items-center justify-center rounded-full border border-primary px-6 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
      >
        SEE MORE <span aria-hidden className="ml-1.5">→</span>
      </Link>
    </>
  );
}
