import { requireAdmin } from "@/lib/auth";
import { getHrContact } from "@/lib/settings";
import HrContactForm from "./HrContactForm";

export const metadata = { title: "HR Contact Card" };

export default async function SettingsPage() {
  await requireAdmin();
  const contact = await getHrContact();

  return (
    <div>
      <h1 className="text-xl font-bold text-heading">HR Contact Card</h1>
      <p className="mt-1 text-sm text-muted">Shown on every job detail page. No photo is shown, by design.</p>
      <div className="mt-6">
        <HrContactForm contact={contact} />
      </div>
    </div>
  );
}
