"use client";

import { useState } from "react";
import { AnimatedNumber } from "./AnimatedNumber";

export function SkillBar({
  name,
  level,
  value,
}: {
  name: string;
  level: string;
  value: number; // 0..1
}) {
  const [go, setGo] = useState(false);
  const pct = Math.round(Math.max(0, Math.min(1, value)) * 100);

  return (
    <div
      className="grid grid-cols-12 items-center gap-3"
      data-skill
      data-pct={pct}
      data-onenter="1"
      onMouseEnter={() => setGo(true)}
    >
      <div className="col-span-6 min-w-0">
        <div className="text-sm text-paper-100 truncate">{name}</div>
        <div className="text-[12px] muted2">{level}</div>
      </div>
      <div className="col-span-6">
        <div className="flex items-center justify-between mb-2">
          <div className="text-[12px] muted2">Proficiency</div>
          <div className="text-[12px] text-accent-500">
            <AnimatedNumber value={pct} start={go} />
          </div>
        </div>
        <div className="bar">
          <i style={{ width: go ? `${pct}%` : "0%" }} />
        </div>
      </div>
    </div>
  );
}
