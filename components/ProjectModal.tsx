"use client";

import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

const ease = [0.22, 1, 0.36, 1] as const;

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Backdrop */}
      <motion.button
        aria-label="Close modal"
        className="absolute inset-0 bg-black/55 backdrop-blur-[12px]"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
      />

      {/* Panel */}
      <motion.div
        role="dialog"
        aria-modal="true"
        className="relative w-full max-w-4xl rounded-2xl border border-[color:var(--line)] bg-[color:var(--card2)] shadow-2xl shadow-black/40 overflow-hidden"
        initial={{ opacity: 0, y: 18, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 18, scale: 0.98 }}
        transition={{ duration: 0.35, ease }}
      >
        {/* Title bar */}
        <div className="flex items-center justify-between gap-3 border-b border-[color:var(--line)] px-5 py-4">
          <div className="text-sm font-medium">{project.title}</div>
          <button
            onClick={onClose}
            className="h-9 w-9 rounded-full border border-[color:var(--line)] bg-transparent hover:bg-black/20 transition grid place-items-center"
            aria-label="Close"
          >
            <motion.span
              initial={false}
              whileHover={{ rotate: 90 }}
              transition={{ duration: 0.25 }}
              className="text-lg leading-none"
            >
              ×
            </motion.span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr]">
          {/* Image */}
          <div className="relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <motion.img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover"
              initial={{ filter: "grayscale(100%)", scale: 1.04, opacity: 0.9 }}
              animate={{ filter: "grayscale(10%)", scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease }}
            />
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-black/25 via-transparent to-transparent" />
          </div>

          {/* Info */}
          <div className="modal-scroll max-h-[70vh] overflow-auto p-5 md:p-6">
            <div className="text-xs text-[color:var(--muted)]">{project.subtitle}</div>

            <div className="mt-4 space-y-2">
              <div className="text-sm font-medium">{project.title}</div>
              <div className="text-xs text-[color:var(--muted)]">{project.dateText}</div>
              <div className="text-xs text-[color:var(--muted)]">{project.locationLine}</div>
            </div>

            {project.priceText ? (
              <div className="mt-4 text-sm">{project.priceText}</div>
            ) : null}

            <p className="mt-4 text-sm leading-relaxed text-[color:var(--text)]/90">
              {project.description}
            </p>

            <div className="mt-6">
              <a
                href={project.ctaHref}
                target="_blank"
                rel="noreferrer"
                className="btn-sheen inline-flex w-full items-center justify-center rounded-xl border border-[color:var(--line)] bg-white text-black px-4 py-3 text-sm font-medium hover:opacity-95 transition"
              >
                {project.ctaLabel}
              </a>
            </div>

            <div className="mt-5 text-[11px] text-[color:var(--muted)]">
              Images auto grayscale in carousel. Replace in <code>public/projects</code>.
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
