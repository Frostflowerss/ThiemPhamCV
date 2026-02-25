"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
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
  // Lock background scroll so the modal remains centered
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  const [activeIdx, setActiveIdx] = useState(0);
  const hasGallery = (project.images?.length ?? 0) > 1;

  const activeImage = useMemo(() => {
    const arr = project.images || [];
    return arr[activeIdx] || arr[0] || "";
  }, [project.images, activeIdx]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Backdrop (no heavy blur for 60fps) */}
      <button
        aria-label="Close modal"
        className="absolute inset-0 bg-black/70"
        onClick={onClose}
      />

      {/* Panel */}
      <motion.div
        role="dialog"
        aria-modal="true"
        className="relative w-full max-w-5xl max-h-[86vh] overflow-hidden rounded-2xl border border-[color:var(--line)] bg-[#0b0b0b]"
        initial={{ opacity: 0, y: 14, scale: 0.985 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 14, scale: 0.985 }}
        transition={{ duration: 0.28, ease: "easeOut" }}
        style={{ willChange: "transform, opacity" }}
      >
        {/* Top bar */}
        <div className="flex items-start justify-between gap-4 border-b border-[color:var(--line)] px-5 py-4">
          <div className="min-w-0">
            <div className="text-sm font-semibold text-white truncate">
              {project.titleVI}
            </div>
            <div className="mt-0.5 text-xs text-[color:var(--accent)] truncate">
              {project.titleEN}
            </div>

            <div className="mt-2 text-xs text-white/65">
              <span className="text-white/70">{project.roleVI}</span>{" "}
              <span className="text-[color:var(--accent)]/90">({project.roleEN})</span>
              {" • "}
              <span className="text-white/70">{project.period}</span>
              {" • "}
              <span className="text-white/70">{project.locationVI}</span>
              {project.classVI ? (
                <>
                  {" • "}
                  <span className="text-white/70">{project.classVI}</span>{" "}
                  {project.classEN ? (
                    <span className="text-[color:var(--accent)]/90">
                      ({project.classEN})
                    </span>
                  ) : null}
                </>
              ) : null}
            </div>
          </div>

          <button
            onClick={onClose}
            className="h-9 w-9 rounded-full border border-[color:var(--line)] bg-black/30 text-white hover:bg-white/5 transition"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
          {/* Image */}
          <div className="lg:col-span-3 border-b lg:border-b-0 lg:border-r border-[color:var(--line)]">
            <div className="relative aspect-[3/2] bg-black">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={activeImage}
                alt={project.titleEN}
                className="h-full w-full object-cover"
              />
            </div>

            {hasGallery ? (
              <div className="flex gap-2 p-4 overflow-x-auto">
                {project.images.map((img, i) => (
                  <button
                    key={img + i}
                    onClick={() => setActiveIdx(i)}
                    className={[
                      "relative h-14 w-20 shrink-0 overflow-hidden rounded-lg border",
                      i === activeIdx
                        ? "border-[color:var(--accent)]"
                        : "border-[color:var(--line)]",
                    ].join(" ")}
                    aria-label={`Image ${i + 1}`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={img} alt="" className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            ) : null}
          </div>

          {/* Content */}
          <div className="lg:col-span-2 max-h-[86vh] overflow-y-auto modal-scroll p-5">
            <div className="text-sm text-white leading-relaxed">
              {project.descriptionVI}
            </div>
            <div className="mt-3 text-sm text-[color:var(--accent)]/90 leading-relaxed">
              {project.descriptionEN}
            </div>

            {(project.highlightsVI?.length || project.highlightsEN?.length) ? (
              <div className="mt-5">
                <div className="text-xs font-semibold text-white">
                  Điểm nhấn{" "}
                  <span className="text-[color:var(--accent)]">Highlights</span>
                </div>

                <ul className="mt-3 space-y-2">
                  {(project.highlightsVI || []).map((h, idx) => (
                    <li key={h + idx} className="text-sm">
                      <div className="flex gap-2">
                        <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]" />
                        <div>
                          <div className="text-white/85">{h}</div>
                          {(project.highlightsEN || [])[idx] ? (
                            <div className="text-[color:var(--accent)]/85">
                              {(project.highlightsEN || [])[idx]}
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
