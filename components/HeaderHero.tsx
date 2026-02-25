"use client";

import Image from "next/image";
import { Reveal } from "./Reveal";
import { TiltCard } from "./TiltCard";

export function HeaderHero({
  name,
  title,
  tagline,
  contacts,
}: {
  name: string;
  title: string;
  tagline?: string;
  contacts: Array<{ label: string; value: string; href?: string }>;
}) {
  return (
    <header className="pt-10 pb-8 relative z-10">
      <TiltCard className="rounded-3xl border hairline bg-ink-900/60 shadow-soft overflow-hidden">
        <div className="p-8 md:p-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
            <div className="min-w-0">
              <Reveal as="div" delay={0}>
                <div className="flex flex-wrap items-baseline gap-x-3">
                  <h1 className="text-3xl md:text-4xl font-semibold tracking-wide">
                    {name}
                  </h1>
                  <div className="text-3xl md:text-4xl font-semibold tracking-wide text-accent-500">
                    | {title}
                  </div>
                </div>
              </Reveal>

              {tagline ? (
                <Reveal as="p" delay={0.35} className="mt-2 text-sm muted">
                  {tagline}
                </Reveal>
              ) : null}

              <div className="mt-6 space-y-1 text-sm muted2">
                {contacts.map((c, idx) => (
                  <Reveal key={idx} as="div" delay={0.55 + idx * 0.25} className="flex gap-2">
                    <span className="w-16 shrink-0">{c.label}</span>
                    {c.href ? (
                      <a className="hover:text-paper-100" href={c.href}>
                        {c.value}
                      </a>
                    ) : (
                      <span>{c.value}</span>
                    )}
                  </Reveal>
                ))}
              </div>
            </div>

            <Reveal as="div" delay={0.4} className="relative h-28 w-28 md:h-32 md:w-32 shrink-0 rounded-2xl overflow-hidden border hairline bg-ink-850">
              <Image src="/avatar.jpg" alt="Avatar" fill className="object-cover" priority />
            </Reveal>
          </div>
        </div>

        <div className="px-8 md:px-10 py-4 border-t hairline bg-ink-900/70 flex flex-wrap items-center gap-3">
          <a
            href="#contact"
            className="btn px-4 py-2 rounded-xl bg-accent-500/90 text-ink-950 text-sm font-semibold hover:bg-accent-500"
          >
            Contact
          </a>
          <a
            href="/cv.pdf"
            className="btn px-4 py-2 rounded-xl border hairline text-sm muted hover:text-paper-100 hover:border-white/20"
          >
            Download PDF
          </a>
        </div>
      </TiltCard>
    </header>
  );
}
