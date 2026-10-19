"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV_ITEMS, TELEGRAM_RECRUIT } from "@/lib/links";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-40 border-b border-border bg-white">
      <div className="flex flex-wrap items-stretch">
        <Link href="/" className="flex shrink-0 items-center bg-primary px-4 py-2">
          <Image src="/media/2022/10/test.png" alt="S.E.A.T.S Inc." width={1701} height={298} priority className="h-[42px] w-auto" />
        </Link>

        <div className="flex flex-1 items-center gap-4 px-4 py-2">
          <div className="hidden flex-col leading-tight desktop:flex">
            <span className="text-[11px] text-muted">គេហទំព័រជ្រើសរើសបុគ្គលិកថ្មីៗ</span>
            <Image src="/media/2022/10/Header-e1666593258561.png" alt="RECRUIT SITE" width={489} height={90} className="h-[34px] w-auto" />
          </div>

          <nav aria-label="Main navigation" className="ml-auto hidden items-center gap-6 desktop:flex">
            {NAV_ITEMS.map((item) => {
              const active = item.href === "/" ? pathname === "/" : pathname?.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`border-b-2 pb-1 text-sm font-semibold uppercase tracking-wide ${
                    active ? "border-primary text-primary" : "border-transparent text-heading hover:text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <a
            href={TELEGRAM_RECRUIT}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto hidden items-center gap-1.5 rounded-full border border-primary px-5 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white desktop:ml-0 desktop:flex"
          >
            REGISTER <span aria-hidden>→</span>
          </a>

          <button
            type="button"
            className="ml-auto flex size-9 items-center justify-center text-heading desktop:hidden"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="flex w-6 flex-col gap-1.5">
              <span className="block h-0.5 w-full bg-current" />
              <span className="block h-0.5 w-full bg-current" />
              <span className="block h-0.5 w-full bg-current" />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <nav aria-label="Mobile navigation" className="flex flex-col border-t border-border desktop:hidden">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-border px-5 py-3 text-sm font-semibold uppercase text-heading"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={TELEGRAM_RECRUIT}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 text-sm font-semibold uppercase text-primary"
          >
            Register →
          </a>
        </nav>
      )}
    </header>
  );
}
