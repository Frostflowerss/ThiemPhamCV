"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { AnimatePresence } from "framer-motion";
import ProjectModal from "@/components/ProjectModal";
import { projects } from "@/data/projects";

export default function ProjectCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    loop: true,
    skipSnaps: false,
  });

  const [selected, setSelected] = useState(0);
  const [openId, setOpenId] = useState<string | null>(null);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const prev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const next = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const openProject = (id: string) => setOpenId(id);

  const activeProject = useMemo(
    () => projects.find((p) => p.id === openId) || null,
    [openId]
  );

  return (
    <div className="relative">
      {/* Controls */}
      <div className="absolute -top-12 right-0 flex items-center gap-2">
        <button
          onClick={prev}
          aria-label="Previous"
          className="h-9 w-9 rounded-full border border-[color:var(--line)] bg-black/20 text-white hover:bg-white/5 transition"
        >
          ‹
        </button>
        <button
          onClick={next}
          aria-label="Next"
          className="h-9 w-9 rounded-full border border-[color:var(--line)] bg-black/20 text-white hover:bg-white/5 transition"
        >
          ›
        </button>
      </div>

      {/* Carousel */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {projects.map((p, i) => {
            const isSelected = i === selected;
            return (
              <div
                key={p.id}
                className={[
                  "embla__slide",
                  isSelected ? "is-selected" : "",
                  "px-3",
                  "flex-[0_0_78%]",
                  "sm:flex-[0_0_52%]",
                  "lg:flex-[0_0_25%]",
                ].join(" ")}
              >
                <button
                  onClick={() => openProject(p.id)}
                  className="group w-full text-left"
                >
                  <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-[color:var(--line)] bg-[color:var(--card)]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.images?.[0] || ""}
                      alt={p.titleEN}
                      className="h-full w-full object-cover opacity-90 transition duration-500 group-hover:opacity-100"
                      style={{ willChange: "transform, opacity" }}
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/0" />

                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="text-[11px] text-white/70">{p.period}</div>
                      <div className="mt-1 text-sm font-semibold text-white line-clamp-1">
                        {p.titleVI}
                      </div>
                      <div className="mt-0.5 text-xs text-[color:var(--accent)] line-clamp-1">
                        {p.titleEN}
                      </div>
                      <div className="mt-2 text-xs text-white/75 line-clamp-1">
                        {p.roleVI}
                      </div>
                      <div className="mt-0.5 text-[11px] text-[color:var(--accent)]/90 line-clamp-1">
                        {p.roleEN}
                      </div>

                      <div className="mt-3 flex items-center justify-between">
                        <div className="text-[11px] text-white/60">
                          {p.locationVI}
                        </div>
                        <div className="text-[11px] text-[color:var(--accent)]">
                          Chi tiết • Details →
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {activeProject && (
          <ProjectModal project={activeProject} onClose={() => setOpenId(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}
