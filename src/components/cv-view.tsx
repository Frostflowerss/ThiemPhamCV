"use client";

import type { SiteData } from "@/lib/data";
import { useApp } from "./providers";
import { pick, t } from "@/lib/i18n";
import { Header } from "./header";

export function CvView({ data }: { data: SiteData }) {
  const { lang } = useApp();
  const { profile, experiences, education, skills } = data;

  if (!data.ok) {
    return (
      <>
        <Header />
        <main className="mx-auto max-w-content px-5 py-24 text-center text-muted">
          {t(lang, "error")}
        </main>
      </>
    );
  }

  const fmt = (s: string | null) =>
    s === null || s === "" ? t(lang, "present") : s;

  return (
    <>
      <Header />
      <div className="no-print mx-auto max-w-3xl px-5 pt-8">
        <button
          onClick={() => window.print()}
          className="rounded-lg border border-line px-4 py-2 text-sm transition-colors hover:border-accent"
        >
          ⭳ {t(lang, "cv_print")}
        </button>
      </div>

      <main className="mx-auto max-w-3xl px-5 py-8 print:py-0">
        {/* Head */}
        <header className="border-b border-line pb-6">
          <h1 className="font-display text-4xl font-semibold tracking-tight">
            {profile?.name}
          </h1>
          {profile && (
            <p className="mt-1 text-lg text-muted">{pick(profile, "title", lang)}</p>
          )}
          <div className="mt-3 flex flex-wrap gap-x-6 gap-y-1 font-mono text-sm text-muted">
            {profile?.location && <span>{profile.location}</span>}
            {profile?.email && <span>{profile.email}</span>}
          </div>
          {profile && pick(profile, "bio", lang) && (
            <p className="mt-4 max-w-2xl leading-relaxed text-ink/90">
              {pick(profile, "bio", lang)}
            </p>
          )}
        </header>

        {/* Experience */}
        {experiences.length > 0 && (
          <Section title={t(lang, "exp")}>
            {experiences.map((e) => (
              <div key={e.id} className="grid gap-1 sm:grid-cols-[8rem_1fr]">
                <p className="font-mono text-sm text-muted">
                  {e.start_date} — {fmt(e.end_date)}
                </p>
                <div>
                  <p className="font-medium">
                    {pick(e, "role", lang)}
                    <span className="text-muted"> · {e.company}</span>
                  </p>
                  {pick(e, "desc", lang) && (
                    <p className="mt-1 text-sm leading-relaxed text-muted">
                      {pick(e, "desc", lang)}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </Section>
        )}

        {/* Education */}
        {education.length > 0 && (
          <Section title={t(lang, "edu")}>
            {education.map((e) => (
              <div key={e.id} className="grid gap-1 sm:grid-cols-[8rem_1fr]">
                <p className="font-mono text-sm text-muted">
                  {e.start_date} — {fmt(e.end_date)}
                </p>
                <div>
                  <p className="font-medium">{e.school}</p>
                  {pick(e, "field", lang) && (
                    <p className="text-sm text-muted">{pick(e, "field", lang)}</p>
                  )}
                </div>
              </div>
            ))}
          </Section>
        )}

        {/* Skills */}
        {skills.length > 0 && (
          <Section title={t(lang, "skills")}>
            <div className="flex flex-wrap gap-2">
              {skills.map((s) => (
                <span
                  key={s.id}
                  className="rounded-md border border-line px-3 py-1 font-mono text-sm"
                >
                  {s.name}
                </span>
              ))}
            </div>
          </Section>
        )}
      </main>
    </>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-b border-line py-6 last:border-0">
      <h2 className="mb-4 font-mono text-xs uppercase tracking-widest text-accent">
        {title}
      </h2>
      <div className="space-y-5">{children}</div>
    </section>
  );
}
