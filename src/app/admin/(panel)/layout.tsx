import { Suspense } from "react";
import Link from "next/link";
import { requireAdmin } from "@/lib/auth";
import { logoutAction } from "../actions";

async function SidebarUser() {
  const session = await requireAdmin();
  return <p className="mt-1 truncate text-xs text-muted">{session.email}</p>;
}

export default function PanelLayout({ children }: LayoutProps<"/admin">) {
  return (
    <div className="min-h-screen desktop:pl-[220px]">
      <aside className="border-b border-border bg-white desktop:fixed desktop:inset-y-0 desktop:left-0 desktop:w-[220px] desktop:border-b-0 desktop:border-r">
        <div className="px-5 py-4">
          <p className="font-bold text-primary">S.E.A.T.S Career</p>
          <Suspense fallback={<p className="mt-1 text-xs text-muted">&nbsp;</p>}>
            <SidebarUser />
          </Suspense>
        </div>
        <nav className="flex flex-col px-2 pb-4">
          <Link href="/admin/jobs" className="rounded px-3 py-2 text-sm font-semibold text-heading hover:bg-surface">
            Jobs
          </Link>
          <Link href="/admin/settings" className="rounded px-3 py-2 text-sm font-semibold text-heading hover:bg-surface">
            HR Contact Card
          </Link>
          <form action={logoutAction}>
            <button type="submit" className="w-full rounded px-3 py-2 text-left text-sm font-semibold text-muted hover:bg-surface">
              Log out
            </button>
          </form>
        </nav>
      </aside>
      <main className="mx-auto max-w-[1000px] px-4 py-8 desktop:px-8">
        <Suspense fallback={<p className="text-muted">Loading…</p>}>{children}</Suspense>
      </main>
    </div>
  );
}
