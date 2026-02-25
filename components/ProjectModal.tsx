"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

type Project = {
  id: string;
  image: string;
  periodVI: string;
  periodEN: string;
  titleVI: string;
  titleEN: string;
  roleVI: string;
  roleEN: string;
  locationVI: string;
  locationEN: string;
};

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  // Lock scroll
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Backdrop */}
      <button
        className="absolute inset-0 bg-black/70"
        onClick={onClose}
        aria-label="Close modal"
      />

      {/* Panel */}
      <motion.div
        className="relative w-full max-w-4xl rounded-2xl border border-[color:var(--line)] bg-[#0b0b0b]"
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.98 }}
        transition={{ duration: 0.28, ease: "easeOut" }}
        style={{ willChange: "transform, opacity" }}
      >
        {/* Header */}
        <div className="flex justify-between items-start border-b border-[color:var(--line)] px-6 py-4">
          <div>
            <div className="text-white font-semibold">
              {project.titleVI}
            </div>
            <div className="text-[color:var(--accent)] text-sm">
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

        {/* Image */}
        <div className="aspect-[16/9] bg-black">
          <img
            src={project.image}
            alt={project.titleEN}
            className="h-full w-full object-cover"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
