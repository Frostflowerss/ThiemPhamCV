"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import type { Project } from "@/data/projects";

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  const images = project.images ?? [];
  const activeImage = images[activeIndex] ?? images[0];

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <button
        className="absolute inset-0 bg-black/70"
        onClick={onClose}
        aria-label="Close modal"
      />

      <motion.div
        className="relative w-full max-w-5xl overflow-hidden rounded-2xl border border-[color:var(--line)] bg-[color:var(--bg)]"
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.98 }}
        transition={{ duration: 0.28 }}
        role="dialog"
        aria-modal="true"
      >
        {/* HEADER */}
        <div className="flex justify-between items-start border-b border-[color:var(--line)] px-6 py-4">
          <div className="min-w-0">
            <div className="text-white font-semibold truncate">
              {project.titleVI}
            </div>
            <div className="text-[color:var(--accent)] text-sm truncate">
              {project.titleEN}
            </div>

            <div className="mt-2 text-xs text-white/60">
              {project.roleVI}{" "}
              <span className="text-[color:var(--accent)]">
                ({project.roleEN})
              </span>
              {" • "}
              {project.periodVI}{" "}
              <span className="text-[color:var(--accent)]">
                ({project.periodEN})
              </span>
              {" • "}
              {project.locationVI}{" "}
              <span className="text-[color:var(--accent)]">
                ({project.locationEN})
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="h-9 w-9 rounded-full border border-[color:var(--line)] text-white hover:bg-white/10 transition"
          >
            ✕
          </button>
        </div>

        {/* MAIN IMAGE */}
        <div className="aspect-[16/9] bg-black">
          <img
            src={activeImage}
            alt={project.titleEN}
            className="h-full w-full object-cover"
            draggable={false}
          />
        </div>

        {/* THUMBNAILS (if multiple images) */}
        {images.length > 1 && (
          <div className="flex gap-2 p-4 overflow-x-auto border-t border-[color:var(--line)]">
            {images.map((img, i) => (
              <button
                key={img + i}
                onClick={() => setActiveIndex(i)}
                className={`h-16 w-24 shrink-0 overflow-hidden rounded-lg border ${
                  i === activeIndex
                    ? "border-[color:var(--accent)]"
                    : "border-[color:var(--line)]"
                }`}
              >
                <img
                  src={img}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
        )}

        {/* FOOTER */}
        <div className="px-6 py-4 text-xs text-white/40">
          Bấm ra ngoài để đóng{" "}
          <span className="text-[color:var(--accent)]">
            Click outside to close
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}
