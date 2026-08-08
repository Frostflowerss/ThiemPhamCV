"use client";

import { useMemo, useState } from "react";
import type { Project } from "@/lib/types";
import { useApp } from "./providers";
import { t } from "@/lib/i18n";
import { Reveal } from "./reveal";
import { ProjectCard } from "./project-card";
import { Header } from "./header";
import { Footer } from "./footer";

export function ProjectsView({
  projects,
  ok,
  email,
}: {
  projects: Project[];
  ok: boolean;
  email?: string | null;
}) {
  const { lang } = useApp();
  const [active, setActive] = useState<string | null>(null);

  const tags = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p) => p.tags?.forEach((tg) => set.add(tg)));
    return Array.from(set).sort();
  }, [projects]);

  const filtered = active
    ? projects.filter((p) => p.tags?.includes(active))
    : projects;

  return (
    <>
      <Header />
      <main className="mx-auto max-w-content px-5 py-16">
        <Reveal>
          <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            {t(lang, "projects_title")}
          </h1>
        </Reveal>

        {tags.length > 0 && (
          <Reveal delay={80}>
            <div className="mt-8 flex flex-wrap gap-2">
              <FilterChip active={active === null} onClick={() => setActive(null)}>
                {lang === "vi" ? "Tất cả" : "All"}
              </FilterChip>
              {tags.map((tg) => (
                <FilterChip key={tg} active={active === tg} onClick={() => setActive(tg)}>
                  {tg}
                </FilterChip>
              ))}
            </div>
          </Reveal>
        )}

        <div className="mt-10">
          {filtered.length === 0 ? (
            <p className="rounded-xl border border-dashed border-line py-16 text-center text-muted">
              {ok ? t(lang, "projects_empty") : t(lang, "error")}
            </p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((p, i) => (
                <Reveal key={p.id} delay={i * 50}>
                  <ProjectCard project={p} />
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer email={email} />
    </>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      aria-pressed={active}
      className={`rounded-full border px-3.5 py-1.5 font-mono text-xs transition-colors ${
        active
          ? "border-accent bg-accent text-white"
          : "border-line text-muted hover:text-ink hover:border-accent"
      }`}
    >
      {children}
    </button>
  );
}
