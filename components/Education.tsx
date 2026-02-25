"use client";

import Reveal from "@/components/Reveal";
import { courses, education } from "@/data/education";

export default function Education() {
  return (
    <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--card)] p-6">
        <Reveal>
          <div className="text-sm font-semibold tracking-tight text-white">
            Học vấn <span className="text-[color:var(--accent)]">Education</span>
          </div>
        </Reveal>

        <div className="mt-4 space-y-4">
          {education.map((e) => (
            <div key={e.school}>
              <div className="text-xs text-white/55">
                {e.period} • {e.location}
              </div>
              <div className="mt-1 text-sm font-medium text-white">{e.school}</div>
              <div className="mt-1 text-sm text-white/60">{e.degree}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--card)] p-6">
        <Reveal>
          <div className="text-sm font-semibold tracking-tight text-white">
            Khoá học <span className="text-[color:var(--accent)]">Courses</span>
          </div>
        </Reveal>

        <div className="mt-4 space-y-4">
          {courses.map((c) => (
            <div key={c.title + c.year}>
              <div className="text-xs text-white/55">
                {c.year} • {c.location}
              </div>
              <div className="mt-1 text-sm font-medium text-white">{c.title}</div>
              <div className="mt-1 text-sm text-white/60">{c.provider}</div>
              <div className="mt-1 text-xs text-white/55">{c.note}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
