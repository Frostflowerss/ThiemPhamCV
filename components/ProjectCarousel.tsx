"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { projects } from "@/data/projects";
import ProjectModal from "@/components/ProjectModal";
import TiltCard from "@/components/TiltCard";

const ease = [0.22, 1, 0.36, 1] as const;

export default function ProjectCarousel() {
  const [idx, setIdx] = useState(0);
  const [openId, setOpenId] = useState<string | null>(null);

  const current = useMemo(() => projects[idx], [idx]);

  const prev = () => setIdx((v) => (v - 1 + projects.length) % projects.length);
  const next = () => setIdx((v) => (v + 1) % projects.length);

  return (
    <div className="relative">
      {/* navigation */}
      <div className="absolute -top-12 right-0 flex items-center gap-2">
        <button
          onClick={prev}
          aria-label="Previous"
          className="h-9 w-9 rounded-full border border-[color:var(--line)] bg-transparent text-[color:var(--text)] hover:bg-[color:var(--card)] transition"
        >
          ‹
        </button>
        <button
          onClick={next}
          aria-label="Next"
          className="h-9 w-9 rounded-full border border-[color:var(--line)] bg-transparent text-[color:var(--text)] hover:bg-[color:var(--card)] transition"
        >
          ›
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {projects.map((p, i) => {
          const isActive = i === idx;
          return (
            <TiltCard key={p.id}>
              <motion.button
                onClick={() => setOpenId(p.id)}
                className="card group text-left rounded-2xl border border-[color:var(--line)] bg-[color:var(--card)] overflow-hidden w-full"
                initial={false}
                animate={{
                  opacity: isActive ? 1 : 0.72,
                  scale: isActive ? 1 : 0.94,
                }}
                transition={{ duration: 0.45, ease }}
              >
                <div className="relative aspect-[3/5] md:aspect-[2/3] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.image} alt={p.title} className="img-bw h-full w-full object-cover" />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-black/0 opacity-80" />
                </div>

                <div className="p-4">
                  <div className="text-xs text-[color:var(--muted)]">{p.dateText}</div>
                  <div className="mt-2 font-medium leading-snug">{p.title}</div>
                  <div className="mt-1 text-sm text-[color:var(--muted)]">{p.subtitle}</div>
                </div>
              </motion.button>
            </TiltCard>
          );
        })}
      </div>

      <AnimatePresence>
        {openId && (
          <ProjectModal
            project={projects.find((p) => p.id === openId)!}
            onClose={() => setOpenId(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
