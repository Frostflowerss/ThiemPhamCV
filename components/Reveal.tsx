"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Performance-first reveal:
 * - Only animates transform + opacity (GPU-friendly)
 * - Avoids blur/filter (expensive)
 */
export default function Reveal({
  children,
  delay = 0,
}: {
  children: ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-90px" }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
}
