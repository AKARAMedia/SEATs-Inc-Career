"use client";

import { useRouter } from "next/navigation";
import { jobsHref, type JobsQuery } from "@/lib/jobs-url";

const OPTIONS = [6, 12, 24, 50];

export default function JobsLimitSelect({ filters }: { filters: Omit<JobsQuery, "page"> }) {
  const router = useRouter();
  const { limit } = filters;
  const options = OPTIONS.includes(limit) ? OPTIONS : [...OPTIONS, limit].sort((a, b) => a - b);

  return (
    <label className="flex items-center gap-2 text-sm text-text">
      Show
      <select
        value={limit}
        onChange={(e) => router.push(jobsHref({ ...filters, page: 1, limit: Number(e.target.value) }), { scroll: false })}
        className="h-10 cursor-pointer rounded-lg bg-white px-3 text-sm font-semibold text-primary ring-1 ring-border outline-none focus:ring-2 focus:ring-primary"
      >
        {options.map((n) => (
          <option key={n} value={n}>
            {n}
          </option>
        ))}
      </select>
      per page
    </label>
  );
}
