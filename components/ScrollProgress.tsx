"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 220, damping: 40, mass: 0.3 });

  return (
    <motion.div
      aria-hidden
      className="fixed left-0 top-0 z-50 h-[2px] w-full origin-left bg-[color:var(--accent)]/80"
      style={{ scaleX }}
    />
  );
}
