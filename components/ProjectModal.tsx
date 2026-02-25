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
      <button
        className="absolute inset-0 bg-black/70"
        onClick={onClose}
        aria-label="Close modal"
      />

      <motion.div
        className="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-[color:var(--line)] bg-[color:var(--bg)]"
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.98 }}
        transition={{ duration: 0.28, ease: "easeOut" }}
        style={{ willChange: "transform, opacity" }}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex justify-between items-start border-b border-[color:var(--line)] px-6 py-4">
          <div className="min-w-0">
            <div className="text-[color:var(--text)] font-semibold truncate">{project.titleVI}</div>
            <div className="text-[color:var(--en)] text-sm truncate">{project.titleEN}</div>

            <div className="mt-2 text-xs text-[color:var(--muted)]">
              {project.roleVI}{" "}
              <span className="text-[color:var(--en)]">({project.roleEN})</span>
              {" • "}
              {project.periodVI}{" "}
              <span className="text-[color:var(--en)]">({project.periodEN})</span>
              {" • "}
              {project.locationVI}{" "}
              <span className="text-[color:var(--en)]">({project.locationEN})</span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="h-9 w-9 rounded-full border border-[color:var(--line)] text-[color:var(--text)] hover:bg-white/10 transition"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <div className="aspect-[16/9] bg-black">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.image}
            alt={project.titleEN}
            className="h-full w-full object-cover"
            draggable={false}
          />
        </div>

        <div className="px-6 py-5 text-xs text-[color:var(--muted)]">
          Bấm ra ngoài để đóng{" "}
          <span className="text-[color:var(--en)]">Click outside to close</span>
        </div>
      </motion.div>
    </motion.div>
  );
}
