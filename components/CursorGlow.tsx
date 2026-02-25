"use client";

import { useEffect, useRef } from "react";

/**
 * Subtle ambient glow that follows cursor.
 * Intentionally low intensity for a "luxury digital" feel.
 */
export default function CursorGlow() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    let x = 0;
    let y = 0;
    let tx = 0;
    let ty = 0;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      if (!raf) raf = requestAnimationFrame(tick);
    };

    const tick = () => {
      // light inertia
      x += (tx - x) * 0.18;
      y += (ty - y) * 0.18;
      el.style.transform = `translate3d(${x - 160}px, ${y - 160}px, 0)`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-10 h-[320px] w-[320px] rounded-full opacity-[0.20] mix-blend-screen"
      style={{
        background:
          "radial-gradient(circle at 50% 50%, rgba(199,178,106,0.32), rgba(255,255,255,0.02) 52%, transparent 72%)",
        filter: "blur(14px)",
      }}
    />
  );
}
