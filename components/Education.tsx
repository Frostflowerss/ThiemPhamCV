"use client";

import Reveal from "@/components/Reveal";
import { courses, education } from "@/data/education";

export default function Education() {
  return (
    <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--card)] p-6">
        <Reveal>
          <div className="text-sm font-semibold tracking-tight text-[color:var(--text)]">
            Học vấn <span className="text-[color:var(--en)]">Education</span>
          </div>
        </Reveal>

        <div className="mt-4 space-y-4">
          {education.map((e) => (
            <div key={e.school}>
              <div className="text-xs text-[color:var(--muted)]">
                {e.period} • {e.location}
              </div>
              <div className="mt-1 text-sm font-medium text-[color:var(--text)]">{e.school}</div>
              <div className="mt-1 text-sm text-[color:var(--muted)]">{e.degree}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--card)] p-6">
        <Reveal>
          <div className="text-sm font-semibold tracking-tight text-[color:var(--text)]">
            Khoá học <span className="text-[color:var(--en)]">Courses</span>
          </div>
        </Reveal>

        <div className="mt-4 space-y-4">
          {courses.map((c) => (
            <div key={c.title + c.year}>
              <div className="text-xs text-[color:var(--muted)]">
                {c.year} • {c.location}
              </div>
              <div className="mt-1 text-sm font-medium text-[color:var(--text)]">{c.title}</div>
              <div className="mt-1 text-sm text-[color:var(--muted)]">{c.provider}</div>
              <div className="mt-1 text-xs text-[color:var(--muted)]">{c.note}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
