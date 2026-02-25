"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { ReactNode } from "react";

export default function TiltCard({ children }: { children: ReactNode }) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 240, damping: 26, mass: 0.2 });
  const sy = useSpring(my, { stiffness: 240, damping: 26, mass: 0.2 });

  const rotateY = useTransform(sx, [-0.5, 0.5], [-4, 4]);
  const rotateX = useTransform(sy, [-0.5, 0.5], [4, -4]);

  return (
    <motion.div
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={(e) => {
        const r = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        mx.set(px);
        my.set(py);
      }}
      onMouseLeave={() => {
        mx.set(0);
        my.set(0);
      }}
      className="[perspective:1000px]"
    >
      <div style={{ transform: "translateZ(0px)" }}>{children}</div>
    </motion.div>
  );
}
