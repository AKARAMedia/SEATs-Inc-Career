"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

// Goes back in history when the visitor came from the job list, so the page, filters and scroll position
// they left are restored; otherwise (direct link, new tab) it falls back to a plain link to /jobs.
export default function BackToJobs() {
  const router = useRouter();

  return (
    <Link
      href="/jobs"
      onClick={(e) => {
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
        try {
          const from = new URL(document.referrer);
          if (from.origin === window.location.origin && /^\/jobs\/?$/.test(from.pathname)) {
            e.preventDefault();
            router.back();
          }
        } catch {
          // no usable referrer: follow the link
        }
      }}
      className="group inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-primary shadow-sm ring-1 ring-border transition hover:bg-primary hover:text-white hover:ring-primary"
    >
      <svg
        aria-hidden
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-4 transition-transform group-hover:-translate-x-0.5"
      >
        <path d="m15 5-7 7 7 7" />
      </svg>
      Back to jobs
    </Link>
  );
}
