"use client";

import { useActionState } from "react";
import { saveHrContactAction } from "../../actions";
import type { HrContact } from "@/lib/settings";

const inputClass = "w-full rounded border border-border px-3 py-2 text-sm";
const labelClass = "mb-1 block text-xs font-semibold text-heading";

export default function HrContactForm({ contact }: { contact: HrContact }) {
  const [state, action, pending] = useActionState(saveHrContactAction, undefined);

  return (
    <form action={action} className="max-w-md space-y-5">
      <label className="block">
        <span className={labelClass}>Name</span>
        <input name="name" defaultValue={contact.name} required className={inputClass} />
        {state?.fieldErrors?.name && <p className="mt-1 text-xs text-red-700">{state.fieldErrors.name}</p>}
      </label>
      <label className="block">
        <span className={labelClass}>Email</span>
        <input name="email" type="email" defaultValue={contact.email} required className={inputClass} />
        {state?.fieldErrors?.email && <p className="mt-1 text-xs text-red-700">{state.fieldErrors.email}</p>}
      </label>
      <label className="block">
        <span className={labelClass}>Phone</span>
        <input name="phone" defaultValue={contact.phone} required className={inputClass} />
      </label>
      <label className="block">
        <span className={labelClass}>Address</span>
        <textarea name="address" defaultValue={contact.address} rows={3} required className={inputClass} />
      </label>

      {state?.ok && <p className="text-sm text-green-700">{state.ok}</p>}

      <button type="submit" disabled={pending} className="btn-primary">
        {pending ? "Saving…" : "Save"}
      </button>
    </form>
  );
}
