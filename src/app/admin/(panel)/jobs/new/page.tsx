import { requireAdmin } from "@/lib/auth";
import JobForm from "../JobForm";

export const metadata = { title: "New job" };

export default async function NewJobPage() {
  await requireAdmin();
  return (
    <div>
      <h1 className="text-xl font-bold text-heading">New job</h1>
      <div className="mt-6">
        <JobForm />
      </div>
    </div>
  );
}
