"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

/**
 * Performance-first reveal:
 * - Only animates transform + opacity (GPU-friendly)
 * - Avoids CSS filter blur which is expensive on many devices
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
      transition={{ duration: 0.55, delay, ease }}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
}
