"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV_ITEMS, TELEGRAM_RECRUIT } from "@/lib/links";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useHideOnScroll } from "@/hooks/useHideOnScroll";

// Stable module-level reference, safe to pass straight into the hook's dependency array.
const ANCHOR_IDS = NAV_ITEMS.filter((item) => item.href.startsWith("/#")).map((item) => item.href.slice(2));

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  // Only the merged homepage has these section ids — the hook is a safe no-op anywhere else.
  const activeId = useActiveSection(ANCHOR_IDS);
  // Slide away while scrolling down, come back on scroll up; stay put while the mobile menu is open.
  const { hidden: scrolledDown, atTop } = useHideOnScroll();
  const hidden = scrolledDown && !open;
  // Pages that open on a dark hero photo get a see-through bar at the very top; everywhere else (and
  // once scrolled, or with the mobile menu open) it is the solid white pill.
  const route = pathname?.replace(/\/$/, "") || "/";
  const clear = (route === "/" || route === "/jobs") && atTop && !open;

  const isActive = (href: string) => {
    if (href.startsWith("/#")) return pathname === "/" && activeId === href.slice(2);
    return pathname?.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-40 h-0">
      {/* Zero-height header so the pill floats over the hero image instead of pushing it down. */}
      <div
        className={`px-3 pt-3 transition-transform duration-300 ease-out has-[:focus-visible]:translate-y-0 tablet:px-6 tablet:pt-4 ${
          hidden ? "-translate-y-[150%]" : ""
        }`}
      >
      <div
        className={`flex items-stretch gap-2 rounded-full p-2 transition-[background-color,box-shadow,backdrop-filter] duration-300 ${
          clear
            ? "bg-white/10 shadow-none ring-1 ring-white/25 backdrop-blur-md"
            : "bg-white shadow-[0_4px_20px_rgba(0,0,0,0.15)] ring-1 ring-transparent"
        }`}
      >
        <Link href="/" className="flex shrink-0 items-center rounded-full bg-primary px-5 py-1.5">
          <Image src="/media/2022/10/test.png" alt="S.E.A.T.S Inc." width={1701} height={298} priority className="h-[36px] w-auto" />
        </Link>

        <div className="flex flex-1 items-center gap-4 pl-2 pr-2">
          <div className="hidden flex-col leading-tight desktop:flex">
            <span className={`text-[11px] transition-colors duration-300 ${clear ? "text-white/80" : "text-muted"}`}>គេហទំព័រជ្រើសរើសបុគ្គលិកថ្មីៗ</span>
            <Image src="/media/2022/10/Header-e1666593258561.png" alt="RECRUIT SITE" width={489} height={90}
              className={`h-[30px] w-auto transition-[filter] duration-300 ${clear ? "brightness-0 invert" : ""}`}
            />
          </div>

          <nav aria-label="Main navigation" className="ml-auto hidden items-center gap-6 desktop:flex">
            {NAV_ITEMS.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`border-b-2 pb-1 text-sm font-semibold uppercase tracking-wide transition-colors ${
                    clear
                      ? active
                        ? "border-white text-white"
                        : "border-transparent text-white/90 hover:text-white"
                      : active
                        ? "border-primary text-primary"
                        : "border-transparent text-heading hover:text-primary"
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
            className={`ml-auto hidden items-center gap-1.5 rounded-full border px-5 py-2 text-sm font-semibold transition-colors desktop:ml-0 desktop:flex ${
              clear
                ? "border-white text-white hover:bg-white hover:text-primary"
                : "border-primary text-primary hover:bg-primary hover:text-white"
            }`}
          >
            REGISTER <span aria-hidden>→</span>
          </a>

          <button
            type="button"
            className={`ml-auto flex size-9 items-center justify-center transition-colors desktop:hidden ${clear ? "text-white" : "text-heading"}`}
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
        <nav
          aria-label="Mobile navigation"
          className="mt-2 flex flex-col overflow-hidden rounded-3xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.15)] desktop:hidden"
        >
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
      </div>
    </header>
  );
}
