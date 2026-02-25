"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export default function DividerDraw() {
  return (
    <div className="my-10">
      <div className="h-px w-full bg-[color:var(--line)]/70" />
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.7, ease }}
        className="mt-[-1px] h-[2px] w-full origin-left"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(199,178,106,0.8), transparent)",
          filter: "blur(0.2px)",
        }}
      />
    </div>
  );
}
