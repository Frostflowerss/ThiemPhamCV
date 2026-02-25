"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import { skills } from "@/data/skills";

const ease = [0.22, 1, 0.36, 1] as const;

function SkillBar({
  name,
  levelLabel,
  value,
}: {
  name: string;
  levelLabel: string;
  value: number;
}) {
  return (
    <div className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--card)] p-4">
      <div className="flex items-center justify-between gap-3">
        <div className="min-w-0">
          <div className="truncate text-sm font-medium">{name}</div>
          <div className="mt-1 text-xs text-[color:var(--muted)]">{levelLabel}</div>
        </div>
        <div className="text-xs text-[color:var(--muted)] tabular-nums">{value}%</div>
      </div>

      <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-white/10">
        <motion.div
  className="..."
  style={{
    background: 'var(--accent)',
    willChange: 'transform',
    transformOrigin: 'left'
  }}
  initial={{ scaleX: 0 }}
  whileInView={{ scaleX: level / 100 }}
  viewport={{ once: true, margin: "-120px" }}
  transition={{ duration: 0.7, ease }}
/>
      </div>
    </div>
  );
}

export default function Skills() {
  const groups = [
    { key: "BIM", title: "BIM" },
    { key: "Design", title: "Design" },
    { key: "Office", title: "Office" },
  ] as const;

  return (
    <div className="mt-6 space-y-8">
      {groups.map((g) => {
        const groupItems = skills.filter((s) => s.group === g.key);
        if (!groupItems.length) return null;
        return (
          <div key={g.key}>
            <Reveal>
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold tracking-tight">{g.title}</div>
                <div className="h-px flex-1 mx-4 bg-[color:var(--line)]/60" />
                <div className="text-xs text-[color:var(--muted)]">{groupItems.length} skills</div>
              </div>
            </Reveal>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              {groupItems.map((s, i) => (
                <motion.div
                  key={s.name}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-120px" }}
                  transition={{ duration: 0.45, delay: i * 0.04, ease }}
                  style={{ willChange: "transform, opacity" }}
                >
                  <SkillBar {...s} />
                </motion.div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
