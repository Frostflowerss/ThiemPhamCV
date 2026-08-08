"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useApp } from "./providers";
import { ThemeToggle, LangToggle } from "./toggles";
import { t } from "@/lib/i18n";

export function Header() {
  const { lang } = useApp();
  const pathname = usePathname();
  const links = [
    { href: "/", label: t(lang, "nav_home") },
    { href: "/projects", label: t(lang, "nav_projects") },
    { href: "/cv", label: t(lang, "nav_cv") },
  ];

  return (
    <header className="no-print sticky top-0 z-40 border-b border-line bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-content items-center justify-between px-5">
        <Link href="/" className="font-display text-lg font-semibold tracking-tight">
          pnt<span className="text-accent">arch</span>
        </Link>
        <nav className="flex items-center gap-1">
          {links.map((l) => {
            const active =
              l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-md px-3 py-1.5 text-sm transition-colors ${
                  active ? "text-ink" : "text-muted hover:text-ink"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
          <span className="mx-2 h-5 w-px bg-line" />
          <LangToggle />
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
