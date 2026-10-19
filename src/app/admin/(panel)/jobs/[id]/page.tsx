import { notFound } from "next/navigation";
import { requireAdmin } from "@/lib/auth";
import { getJobById } from "@/lib/jobs";
import JobForm from "../JobForm";

export const metadata = { title: "Edit job" };

export default async function EditJobPage({ params }: PageProps<"/admin/jobs/[id]">) {
  await requireAdmin();
  const { id } = await params;
  const job = await getJobById(Number(id));
  if (!job) notFound();

  return (
    <div>
      <h1 className="text-xl font-bold text-heading">Edit job</h1>
      <div className="mt-6">
        <JobForm job={job} />
      </div>
    </div>
  );
}
