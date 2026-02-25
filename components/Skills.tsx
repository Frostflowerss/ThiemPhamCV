"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

type Skill = { name: string; value: number };

function Counter({ target }: { target: number }) {
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { stiffness: 160, damping: 26, mass: 0.4 });
  const [v, setV] = useState(0);

  useEffect(() => {
    const unsub = spring.on("change", (latest) => setV(Math.round(latest)));
    return () => unsub();
  }, [spring]);

  return (
    <motion.span
      onViewportEnter={() => mv.set(target)}
      viewport={{ once: true, margin: "-120px" }}
      className="tabular-nums"
    >
      {v}%
    </motion.span>
  );
}

export default function Skills() {
  const skills: Skill[] = useMemo(
    () => [
      { name: "BIM / Coordination", value: 92 },
      { name: "Data / Automation", value: 88 },
      { name: "Reporting / Insight", value: 84 },
      { name: "UI / Motion", value: 76 },
    ],
    []
  );

  return (
    <div className="mt-8 grid gap-4">
      {skills.map((s, i) => (
        <motion.div
          key={s.name}
          initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.45, delay: i * 0.06, ease }}
          className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--card)] p-4"
        >
          <div className="flex items-center justify-between">
            <div className="text-sm font-medium">{s.name}</div>
            <div className="text-xs text-[color:var(--muted)]">
              <Counter target={s.value} />
            </div>
          </div>

          <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, rgba(199,178,106,0.75), rgba(255,255,255,0.22))",
              }}
              initial={{ width: "0%" }}
              whileInView={{ width: `${s.value}%` }}
              viewport={{ once: true, margin: "-140px" }}
              transition={{ duration: 0.9, ease }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
