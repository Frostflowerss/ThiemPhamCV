"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import { skills } from "@/data/skills";

type Skill = {
  name: string;
  levelLabel: string;
  value: number;
  group: string;
};

function SkillBar({ name, levelLabel, value }: Skill) {
  return (
    <div className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--card)] p-4">
      <div className="flex items-center justify-between gap-3">
        <div className="min-w-0">
          <div className="truncate text-sm font-medium">{name}</div>
          <div className="mt-1 text-xs text-[color:var(--muted)]">
            {levelLabel}
          </div>
        </div>
        <div className="text-xs text-[color:var(--muted)] tabular-nums">
          {value}%
        </div>
      </div>

      <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-white/10">
        <motion.div
          className="h-full w-full"
          style={{
            background: "var(--accent)",
            transformOrigin: "left",
            willChange: "transform",
          }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: value / 100 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
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
  ];

  return (
    <div className="mt-6 space-y-10">
      {groups.map((group) => {
        const groupItems = skills.filter(
          (s: Skill) => s.group === group.key
        );

        if (groupItems.length === 0) return null;

        return (
          <div key={group.key}>
            <Reveal>
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold tracking-tight">
                  {group.title}
                </div>
                <div className="mx-4 h-px flex-1 bg-[color:var(--line)]/60" />
                <div className="text-xs text-[color:var(--muted)]">
                  {groupItems.length} skills
                </div>
              </div>
            </Reveal>

            <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
              {groupItems.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-120px" }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.05,
                    ease: "easeOut",
                  }}
                  style={{ willChange: "transform, opacity" }}
                >
                  <SkillBar {...skill} />
                </motion.div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
