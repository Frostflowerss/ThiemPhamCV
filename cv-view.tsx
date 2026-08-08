"use client";

import { useApp } from "./providers";

export function Footer({ email }: { email?: string | null }) {
  const { lang } = useApp();
  const year = new Date().getFullYear();
  return (
    <footer className="no-print border-t border-line">
      <div className="mx-auto flex max-w-content flex-col gap-2 px-5 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono">© {year} pntarch</p>
        {email && (
          <a href={`mailto:${email}`} className="transition-colors hover:text-ink">
            {email}
          </a>
        )}
        <p>{lang === "vi" ? "Built with Next.js + Supabase" : "Built with Next.js + Supabase"}</p>
      </div>
    </footer>
  );
}
