"use client";

import Link from "next/link";
import type { Project, GalleryImage } from "@/lib/types";
import { useApp } from "./providers";
import { pick, t } from "@/lib/i18n";
import { Reveal } from "./reveal";
import { Header } from "./header";
import { Footer } from "./footer";

export function ProjectDetail({
  project,
  gallery,
  email,
}: {
  project: Project;
  gallery: GalleryImage[];
  email?: string | null;
}) {
  const { lang } = useApp();
  const title = pick(project, "title", lang);
  const summary = pick(project, "summary", lang);
  const body = pick(project, "body", lang);
  const role = pick(project, "role", lang);

  return (
    <>
      <Header />
      <main className="mx-auto max-w-content px-5 py-12">
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-accent"
        >
          ← {t(lang, "back")}
        </Link>

        <Reveal>
          <header className="mt-6 border-b border-line pb-8">
            <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
              {title}
            </h1>
            {summary && <p className="mt-4 max-w-2xl text-lg text-muted">{summary}</p>}
            <dl className="mt-6 flex flex-wrap gap-x-10 gap-y-3 font-mono text-sm">
              {role && (
                <div>
                  <dt className="text-muted">{t(lang, "role")}</dt>
                  <dd className="mt-0.5">{role}</dd>
                </div>
              )}
              {project.year && (
                <div>
                  <dt className="text-muted">{t(lang, "year")}</dt>
                  <dd className="mt-0.5">{project.year}</dd>
                </div>
              )}
              {project.tags?.length > 0 && (
                <div>
                  <dt className="text-muted">Tags</dt>
                  <dd className="mt-0.5">{project.tags.join(" · ")}</dd>
                </div>
              )}
            </dl>
          </header>
        </Reveal>

        {project.cover_url && (
          <Reveal delay={80}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.cover_url}
              alt={title}
              className="mt-8 w-full rounded-xl border border-line object-cover"
            />
          </Reveal>
        )}

        {body && (
          <Reveal delay={120}>
            <div className="mt-10 max-w-2xl whitespace-pre-line text-lg leading-relaxed text-ink/90">
              {body}
            </div>
          </Reveal>
        )}

        {gallery.length > 0 && (
          <section className="mt-12 grid gap-4 sm:grid-cols-2">
            {gallery.map((img, i) => (
              <Reveal key={img.id} delay={i * 50}>
                <figure className="overflow-hidden rounded-xl border border-line">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={img.image_url}
                    alt={pick(img, "caption", lang) || title}
                    loading="lazy"
                    className="w-full object-cover"
                  />
                  {pick(img, "caption", lang) && (
                    <figcaption className="px-4 py-2 font-mono text-xs text-muted">
                      {pick(img, "caption", lang)}
                    </figcaption>
                  )}
                </figure>
              </Reveal>
            ))}
          </section>
        )}
      </main>
      <Footer email={email} />
    </>
  );
}
