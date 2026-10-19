"use client";

import { useActionState } from "react";
import { saveJobAction } from "../../actions";
import type { PublicJob } from "@/lib/jobs";

const inputClass = "w-full rounded border border-border px-3 py-2 text-sm";
const labelClass = "mb-1 block text-xs font-semibold text-heading";

export default function JobForm({ job }: { job?: PublicJob }) {
  const [state, action, pending] = useActionState(saveJobAction, undefined);

  return (
    <form action={action} className="max-w-2xl space-y-5">
      {job && <input type="hidden" name="id" value={job.id} />}

      <label className="block">
        <span className={labelClass}>Title</span>
        <input name="title" defaultValue={job?.title} required className={inputClass} />
        {state?.fieldErrors?.title && <p className="mt-1 text-xs text-red-700">{state.fieldErrors.title}</p>}
      </label>

      <div className="grid gap-4 desktop:grid-cols-2">
        <label className="block">
          <span className={labelClass}>Job Type</span>
          <input name="jobType" defaultValue={job?.jobType ?? "Full-time"} required className={inputClass} />
        </label>
        <label className="block">
          <span className={labelClass}>Salary Range</span>
          <input name="salaryRange" defaultValue={job?.salaryRange} placeholder="$500 - $900" className={inputClass} />
        </label>
        <label className="block">
          <span className={labelClass}>Work Days</span>
          <input name="workDays" defaultValue={job?.workDays} placeholder="Mon - Sat" className={inputClass} />
        </label>
        <label className="block">
          <span className={labelClass}>Workplace</span>
          <input name="workplace" defaultValue={job?.workplace} className={inputClass} />
        </label>
      </div>

      <label className="block">
        <span className={labelClass}>Responsibilities (HTML)</span>
        <textarea
          name="responsibilitiesHtml"
          defaultValue={job?.responsibilitiesHtml}
          rows={14}
          className={`${inputClass} font-mono text-xs`}
        />
        <p className="mt-1 text-xs text-muted">
          Basic HTML (&lt;p&gt;, &lt;b&gt;, &lt;ul&gt;/&lt;li&gt;) — unsafe tags are stripped on save.
        </p>
      </label>

      <label className="flex items-center gap-2">
        <input type="checkbox" name="open" defaultChecked={job?.open ?? true} />
        <span className="text-sm text-heading">Open (visible on the public jobs page)</span>
      </label>

      {state?.error && <p className="text-sm text-red-700">{state.error}</p>}

      <button type="submit" disabled={pending} className="btn-primary">
        {pending ? "Saving…" : "Save"}
      </button>
    </form>
  );
}
