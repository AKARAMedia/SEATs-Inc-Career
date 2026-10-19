import Link from "next/link";
import { requireAdmin } from "@/lib/auth";
import { listAllJobs } from "@/lib/jobs";
import JobRowActions from "./JobRowActions";

export const metadata = { title: "Jobs" };

export default async function AdminJobsPage() {
  await requireAdmin();
  const allJobs = await listAllJobs();

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-heading">Jobs</h1>
        <Link href="/admin/jobs/new" className="btn-primary">
          + New job
        </Link>
      </div>

      <div className="mt-6 overflow-hidden rounded-xl bg-white ring-1 ring-border">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-border bg-surface text-xs uppercase text-muted">
            <tr>
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Posted</th>
              <th className="px-4 py-3" />
            </tr>
          </thead>
          <tbody>
            {allJobs.map((job) => (
              <tr key={job.id} className="border-b border-border last:border-0">
                <td className="px-4 py-3 font-semibold text-heading">{job.title}</td>
                <td className="px-4 py-3">
                  <span className={job.open ? "text-green-700" : "text-muted"}>{job.open ? "Open" : "Closed"}</span>
                </td>
                <td className="px-4 py-3 text-muted">{new Date(job.postedAt).toLocaleDateString()}</td>
                <td className="px-4 py-3">
                  <JobRowActions job={{ id: job.id, open: job.open }} />
                </td>
              </tr>
            ))}
            {allJobs.length === 0 && (
              <tr>
                <td colSpan={4} className="px-4 py-8 text-center text-muted">
                  No jobs yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
