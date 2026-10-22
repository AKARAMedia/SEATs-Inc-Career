"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { jobsHref } from "@/lib/jobs-url";

type Option = { value: string; label: string };

type Props = {
  limit: number;
  q: string;
  department: string;
  type: string;
  departments: Option[];
  types: string[];
};

const FIELD =
  "h-11 rounded-lg bg-white px-3 text-sm text-text ring-1 ring-border outline-none focus:ring-2 focus:ring-primary";

export default function JobsFilters({ limit, q, department, type, departments, types }: Props) {
  const router = useRouter();
  const [query, setQuery] = useState(q);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  // Any filter change goes back to page 1 and keeps the scroll position
  function go(next: { q?: string; department?: string; type?: string }) {
    router.push(jobsHref({ page: 1, limit, q, department, type, ...next }), { scroll: false });
  }

  function onSearch(value: string) {
    setQuery(value);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => go({ q: value.trim() }), 350);
  }

  const active = Boolean(query.trim() || department || type);

  return (
    <form
      role="search"
      onSubmit={(e) => {
        e.preventDefault();
        clearTimeout(timer.current);
        go({ q: query.trim() });
      }}
      className="mt-6 grid gap-3 tablet:grid-cols-2 desktop:grid-cols-[1fr_220px_220px_auto]"
    >
      <div className="relative tablet:col-span-2 desktop:col-span-1">
        <svg
          aria-hidden
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted"
        >
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" />
        </svg>
        <input
          type="search"
          value={query}
          onChange={(e) => onSearch(e.target.value)}
          placeholder="Search jobs by title, department or location"
          aria-label="Search jobs"
          className={`${FIELD} w-full pl-9`}
        />
      </div>

      <select
        value={department}
        onChange={(e) => go({ department: e.target.value })}
        aria-label="Filter by department"
        className={`${FIELD} cursor-pointer`}
      >
        <option value="">All departments</option>
        {departments.map((d) => (
          <option key={d.value} value={d.value}>
            {d.label}
          </option>
        ))}
      </select>

      <select
        value={type}
        onChange={(e) => go({ type: e.target.value })}
        aria-label="Filter by job type"
        className={`${FIELD} cursor-pointer`}
      >
        <option value="">All job types</option>
        {types.map((t) => (
          <option key={t} value={t}>
            {t}
          </option>
        ))}
      </select>

      {active && (
        <button
          type="button"
          onClick={() => {
            clearTimeout(timer.current);
            setQuery("");
            go({ q: "", department: "", type: "" });
          }}
          className="h-11 rounded-lg px-4 text-sm font-semibold text-primary ring-1 ring-primary/30 hover:bg-primary/10"
        >
          Clear
        </button>
      )}
    </form>
  );
}
