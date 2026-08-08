"use client";

import Link from "next/link";
import type { SiteData } from "@/lib/data";
import { useApp } from "./providers";
import { pick, t } from "@/lib/i18n";
import { Reveal } from "./reveal";
import { ProjectCard } from "./project-card";
import { Header } from "./header";
import { Footer } from "./footer";

export function HomeView({ data }: { data: SiteData }) {
  const { lang } = useApp();
  const { profile, projects } = data;
  const featured = projects.slice(0, 6);

  const title = profile ? pick(profile, "title", lang) : "";
  const bio = profile ? pick(profile, "bio", lang) : "";

  return (
    <>
      <Header />
      <main>
        {/* HERO */}
        <section className="relative overflow-hidden border-b border-line">
          <div className="blueprint-grid pointer-events-none absolute inset-0" />
          <div className="relative mx-auto max-w-content px-5 py-24 sm:py-32">
            <Reveal>
              <p className="mb-4 font-mono text-sm uppercase tracking-widest text-accent">
                {profile?.location ?? "Hà Nội, Vietnam"}
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="max-w-3xl font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl">
                {profile?.name ?? "Phạm Ngọc Thiêm"}
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-4 font-display text-xl text-muted sm:text-2xl">
                {title || "Architect & BIM Coordinator"}
              </p>
            </Reveal>
            {bio && (
              <Reveal delay={240}>
                <p className="mt-6 max-w-2xl leading-relaxed text-muted">{bio}</p>
              </Reveal>
            )}
            <Reveal delay={320}>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  href="/projects"
                  className="rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
                >
                  {t(lang, "hero_cta")}
                </Link>
                {profile?.email && (
                  <a
                    href={`mailto:${profile.email}`}
                    className="rounded-lg border border-line px-6 py-3 text-sm font-medium transition-colors hover:border-accent"
                  >
                    {t(lang, "hero_contact")}
                  </a>
                )}
              </div>
            </Reveal>
          </div>
        </section>

        {/* FEATURED PROJECTS */}
        <section className="mx-auto max-w-content px-5 py-20">
          <Reveal>
            <div className="mb-10 flex items-end justify-between">
              <h2 className="font-display text-3xl font-semibold tracking-tight">
                {t(lang, "projects_title")}
              </h2>
              <Link href="/projects" className="text-sm text-muted transition-colors hover:text-accent">
                {t(lang, "nav_projects")} →
              </Link>
            </div>
          </Reveal>

          {featured.length === 0 ? (
            <p className="rounded-xl border border-dashed border-line py-16 text-center text-muted">
              {data.ok ? t(lang, "projects_empty") : t(lang, "error")}
            </p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {featured.map((p, i) => (
                <Reveal key={p.id} delay={i * 60}>
                  <ProjectCard project={p} />
                </Reveal>
              ))}
            </div>
          )}
        </section>
      </main>
      <Footer email={profile?.email} />
    </>
  );
}
