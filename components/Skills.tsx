"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import { skills, type Skill } from "@/data/skills";

function SkillItem({ name, levelVI, levelEN, value }: Skill) {
  return (
    <div className="py-2.5">
      <div className="flex items-end justify-between gap-3">
        <div className="min-w-0">
          <div className="truncate text-sm font-medium text-[color:var(--text)]">{name}</div>
          <div className="mt-0.5 text-xs">
            <span className="text-[color:var(--muted)]">{levelVI}</span>{" "}
            <span className="text-[color:var(--en)]/90">{levelEN}</span>
          </div>
        </div>
        <div className="text-xs tabular-nums text-[color:var(--en)]">{value}%</div>
      </div>

      <div className="mt-2 h-[3px] w-full rounded-full bg-white/10 overflow-hidden">
        <motion.div
          className="h-full"
          style={{ background: "var(--accent)", transformOrigin: "left", willChange: "transform" }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: value / 100 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const mid = Math.ceil(skills.length / 2);
  const left = skills.slice(0, mid);
  const right = skills.slice(mid);

  return (
    <div className="mt-6">
      <Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14">
          <div className="space-y-2">
            {left.map((s) => (
              <SkillItem key={s.name} {...s} />
            ))}
          </div>
          <div className="space-y-2">
            {right.map((s) => (
              <SkillItem key={s.name} {...s} />
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  );
}
