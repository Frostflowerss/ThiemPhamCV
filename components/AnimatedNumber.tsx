"use client";

import { useEffect, useState } from "react";

export function AnimatedNumber({
  value,
  durationMs = 900,
  suffix = "%",
  start = false,
}: {
  value: number; // 0..100
  durationMs?: number;
  suffix?: string;
  start?: boolean;
}) {
  const [v, setV] = useState(0);

  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const from = 0;
    const to = Math.max(0, Math.min(100, value));
    const t0 = performance.now();

    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / durationMs);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - p, 3);
      setV(Math.round(from + (to - from) * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [value, durationMs, start]);

  return <span className="tabular-nums">{v}{suffix}</span>;
}
