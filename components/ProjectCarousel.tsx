"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { projects } from "@/data/projects";
import ProjectModal from "@/components/ProjectModal";

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
      <div className="absolute -top-11 right-0 flex items-center gap-2">
        <button
          onClick={prev}
          aria-label="Previous"
          className="h-9 w-9 rounded-full border border-[color:var(--line)] bg-transparent text-[color:var(--text)] hover:bg-white/5 transition"
        >
          ‹
        </button>
        <button
          onClick={next}
          aria-label="Next"
          className="h-9 w-9 rounded-full border border-[color:var(--line)] bg-transparent text-[color:var(--text)] hover:bg-white/5 transition"
        >
          ›
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((p, i) => {
          const isActive = i === idx;
          return (
            <motion.button
              key={p.id}
              onClick={() => setOpenId(p.id)}
              className="group text-left rounded-2xl border border-[color:var(--line)] bg-[color:var(--card)] overflow-hidden w-full"
              initial={false}
              animate={{
                opacity: isActive ? 1 : 0.72,
                scale: isActive ? 1 : 0.965,
              }}
              transition={{ duration: 0.35, ease }}
              whileHover={{ scale: 1.01 }}
              style={{ willChange: "transform, opacity" }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.images?.[0] || ""}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                  style={{ willChange: "transform" }}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-black/0 opacity-90" />
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="text-[11px] text-white/70">{p.period}</div>
                  <div className="mt-1 line-clamp-1 text-sm font-semibold tracking-tight">
                    {p.title}
                  </div>
                  <div className="mt-1 line-clamp-1 text-xs text-white/75">
                    {p.role}
                  </div>
                </div>
              </div>

              <div className="p-4">
                <div className="text-xs text-[color:var(--muted)] line-clamp-2">
                  {p.description}
                </div>

                <div className="mt-3 flex items-center justify-between">
                  <div className="text-[11px] text-[color:var(--muted)]">
                    {p.location}
                  </div>
                  <div className="text-[11px] text-[color:var(--accent)]">
                    View details →
                  </div>
                </div>
              </div>
            </motion.button>
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
