"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import { experience } from "@/data/experience";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Timeline() {
  return (
    <div className="relative mt-6 rounded-2xl border border-[color:var(--line)] bg-[color:var(--card)] p-6">
      {/* track */}
      <div className="absolute left-7 top-6 bottom-6 w-px bg-white/10" />
      <motion.div
        className="absolute left-7 top-6 w-[2px] origin-top"
        style={{
          background: "linear-gradient(180deg, rgba(199,178,106,0.85), transparent)",
        }}
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.9, ease }}
      />

      <div className="space-y-7">
        {experience.map((it, idx) => (
          <Reveal key={it.period + it.company} delay={idx * 0.05}>
            <div className="relative pl-10">
              <div className="absolute left-[18px] top-[6px] h-3 w-3 rounded-full border border-[color:var(--line)] bg-[color:var(--bg)]" />
              <div className="text-xs text-[color:var(--muted)]">{it.period} • {it.location}</div>
              <div className="mt-1 text-sm font-semibold tracking-tight">{it.role}</div>
              <div className="mt-1 text-xs text-[color:var(--muted)]">{it.company}</div>

              <ul className="mt-3 space-y-2 text-sm text-[color:var(--muted)] leading-relaxed">
                {it.highlightsVN.map((h) => (
                  <li key={h} className="flex gap-2">
                    <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
