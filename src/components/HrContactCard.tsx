import type { HrContact } from "@/lib/settings";

export default function HrContactCard({ contact }: { contact: HrContact }) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-border">
      <p className="text-center font-bold text-heading">{contact.name}</p>
      <dl className="mt-4 space-y-3 text-sm text-text">
        <div>
          <dt className="font-bold text-heading">Email:</dt>
          <dd>
            <a href={`mailto:${contact.email}`} className="text-primary hover:underline">
              {contact.email}
            </a>
          </dd>
        </div>
        <div>
          <dt className="font-bold text-heading">Phone:</dt>
          <dd>
            <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="hover:text-primary">
              {contact.phone}
            </a>
          </dd>
        </div>
        <div>
          <dt className="font-bold text-heading">Address:</dt>
          <dd>{contact.address}</dd>
        </div>
      </dl>
    </div>
  );
}
