"use client";

import Link from "next/link";
import type { Project } from "@/lib/types";
import { useApp } from "./providers";
import { pick, t } from "@/lib/i18n";

export function ProjectCard({ project }: { project: Project }) {
  const { lang } = useApp();
  const title = pick(project, "title", lang);
  const summary = pick(project, "summary", lang);

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-xl border border-line bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-lg hover:shadow-black/5"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-line/40">
        {project.cover_url ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.cover_url}
            alt={title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="blueprint-grid absolute inset-0" />
        )}
        {project.year && (
          <span className="absolute right-3 top-3 rounded-md border border-line bg-bg/80 px-2 py-0.5 font-mono text-xs backdrop-blur">
            {project.year}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="font-display text-xl font-semibold leading-snug">{title}</h3>
        {summary && <p className="line-clamp-2 text-sm text-muted">{summary}</p>}
        {project.tags?.length > 0 && (
          <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
            {project.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="rounded border border-line px-2 py-0.5 font-mono text-[11px] text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
