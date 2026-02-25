"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import type { Project } from "@/data/projects";

const ease = [0.22, 1, 0.36, 1] as const;

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  // Lock background scroll so the modal remains centered while user scrolls
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  const [activeIdx, setActiveIdx] = useState(0);

  const hasGallery = (project.images?.length ?? 0) > 1;
  const activeImage = useMemo(
    () => (project.images?.[activeIdx] ? project.images[activeIdx] : project.images?.[0]),
    [project.images, activeIdx]
  );

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Backdrop */}
      <motion.button
        aria-label="Close modal"
        className="absolute inset-0 bg-black/60 backdrop-blur-[10px]"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.22 }}
      />

      {/* Panel: fixed-center + internal scroll */}
      <motion.div
        role="dialog"
        aria-modal="true"
        className="relative w-full max-w-5xl max-h-[86vh] overflow-hidden rounded-2xl border border-[color:var(--line)] bg-[color:var(--card2)] shadow-2xl shadow-black/40"
        initial={{ opacity: 0, y: 14, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 14, scale: 0.985 }}
        transition={{ duration: 0.32, ease }}
        style={{ willChange: "transform, opacity" }}
      >
        {/* Title bar */}
        <div className="flex items-center justify-between gap-3 border-b border-[color:var(--line)] px-5 py-4">
          <div className="min-w-0">
            <div className="truncate text-sm font-semibold tracking-tight">
              {project.title}
            </div>
            <div className="mt-1 text-xs text-[color:var(--muted)]">
              {project.role} • {project.period} • {project.location}
              {project.classText ? ` • ${project.classText}` : ""}
            </div>
          </div>

          <button
            onClick={onClose}
            className="h-9 w-9 rounded-full border border-[color:var(--line)] bg-transparent hover:bg-white/5 transition grid place-items-center"
            aria-label="Close"
          >
            <motion.span
              initial={false}
              whileHover={{ rotate: 90 }}
              transition={{ duration: 0.22 }}
              className="text-lg leading-none"
            >
              ×
            </motion.span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_1fr]">
          {/* Media */}
          <div className="relative bg-black/20">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <motion.img
              key={activeImage}
              src={activeImage || project.images?.[0] || ""}
              alt={project.title}
              className="h-[260px] sm:h-[340px] lg:h-full w-full object-cover"
              initial={{ opacity: 0.6, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.28, ease }}
              style={{ willChange: "transform, opacity" }}
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-black/0 opacity-80" />

            {hasGallery && (
              <div className="absolute bottom-3 left-3 right-3 flex gap-2 overflow-x-auto">
                {project.images.map((img, i) => (
                  <button
                    key={img + i}
                    onClick={() => setActiveIdx(i)}
                    className={[
                      "h-12 w-16 shrink-0 overflow-hidden rounded-lg border",
                      i === activeIdx
                        ? "border-[color:var(--accent)]"
                        : "border-white/15",
                    ].join(" ")}
                    aria-label={`Open image ${i + 1}`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={img} alt="" className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Content (scrollable) */}
          <div className="max-h-[86vh] overflow-y-auto p-5">
            <div className="text-sm font-medium">Mô tả</div>
            <div className="mt-2 text-sm text-[color:var(--muted)] leading-relaxed">
              {project.description}
            </div>

            {project.highlights?.length ? (
              <>
                <div className="mt-5 text-sm font-medium">Highlights</div>
                <ul className="mt-2 space-y-2 text-sm text-[color:var(--muted)]">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex gap-2">
                      <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </>
            ) : null}

            <div className="mt-6 rounded-xl border border-[color:var(--line)] bg-black/10 p-4 text-xs text-[color:var(--muted)]">
              Tip: Thêm/sửa nội dung trong <code className="text-[color:var(--text)]">data/projects.ts</code> và ảnh trong{" "}
              <code className="text-[color:var(--text)]">public/projects/</code>.
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
