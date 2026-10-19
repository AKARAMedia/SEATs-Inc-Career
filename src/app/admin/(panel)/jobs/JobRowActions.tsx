"use client";

import Link from "next/link";
import { useTransition } from "react";
import { deleteJobAction, toggleJobOpenAction } from "../../actions";

export default function JobRowActions({ job }: { job: { id: number; open: boolean } }) {
  const [pending, startTransition] = useTransition();

  return (
    <div className="flex items-center justify-end gap-3 text-xs font-semibold">
      <button
        type="button"
        disabled={pending}
        onClick={() => startTransition(() => toggleJobOpenAction(job.id, !job.open))}
        className="text-primary hover:underline"
      >
        {job.open ? "Close" : "Reopen"}
      </button>
      <Link href={`/admin/jobs/${job.id}`} className="text-primary hover:underline">
        Edit
      </Link>
      <button
        type="button"
        disabled={pending}
        onClick={() => {
          if (confirm("Delete this job? This can't be undone.")) startTransition(() => deleteJobAction(job.id));
        }}
        className="text-red-700 hover:underline"
      >
        Delete
      </button>
    </div>
  );
}
