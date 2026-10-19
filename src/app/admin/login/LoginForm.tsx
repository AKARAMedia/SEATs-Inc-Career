"use client";

import { startTransition, useActionState } from "react";
import { loginAction } from "../actions";

export default function LoginForm() {
  const [state, action, pending] = useActionState(loginAction, undefined);
  return (
    <form
      className="space-y-4"
      // Submit manually so a failed attempt doesn't reset the email field
      onSubmit={(e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        startTransition(() => action(data));
      }}
    >
      <label className="block">
        <span className="mb-1 block text-xs font-semibold text-heading">Email</span>
        <input name="email" type="email" required autoComplete="username" className="w-full rounded border border-border px-3 py-2 text-sm" />
      </label>
      <label className="block">
        <span className="mb-1 block text-xs font-semibold text-heading">Password</span>
        <input name="password" type="password" required autoComplete="current-password" className="w-full rounded border border-border px-3 py-2 text-sm" />
      </label>
      {state?.error && (
        <p role="alert" className="rounded bg-red-50 px-3 py-2 text-xs text-red-700">
          {state.error}
        </p>
      )}
      <button type="submit" disabled={pending} className="btn-primary w-full justify-center">
        {pending ? "Signing in…" : "Sign in"}
      </button>
    </form>
  );
}
