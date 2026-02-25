"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects } from "@/data/projects";
import ProjectModal from "@/components/ProjectModal";

export default function ProjectCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
  });

  const [index, setIndex] = useState(0);
  const [activeId, setActiveId] = useState<string | null>(null);

  const activeProject = useMemo(
    () => projects.find((p) => p.id === activeId) ?? null,
    [activeId]
  );

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setIndex(emblaApi.selectedScrollSnap());
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

  const prev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const next = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="mt-6">
      <div className="relative overflow-hidden rounded-3xl border border-[color:var(--line)] bg-black/20">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {projects.map((p) => {
              const cover = p.images?.[0] ?? "";

              return (
                <div key={p.id} className="flex-[0_0_100%]">
                  <button
                    type="button"
                    onClick={() => setActiveId(p.id)}
                    className="relative block w-full text-left"
                    aria-label={`Open ${p.titleEN}`}
                  >
                    <div className="relative aspect-[16/9] bg-black">
                      {cover ? (
                        <img
                          src={cover}
                          alt={p.titleEN}
                          className="h-full w-full object-cover"
                          draggable={false}
                        />
                      ) : (
                        <div className="h-full w-full bg-black" />
                      )}

                      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/80 to-transparent" />

                      <div className="absolute bottom-8 left-8 right-8">
                        <div className="text-xs text-white/70">
                          {p.period}
                        </div>

                        <div className="mt-2 text-xl md:text-2xl font-semibold text-white">
                          {p.titleVI}
                        </div>

                        <div className="mt-1 text-sm text-[color:var(--en)]">
                          {p.titleEN}
                        </div>

                        <div className="mt-2 text-xs text-white/65">
                          {p.locationVI}
                          {p.locationEN ? (
                            <span className="text-[color:var(--en)]">
                              {" "}
                              ({p.locationEN})
                            </span>
                          ) : null}
                        </div>
                      </div>
                    </div>

                    {/* Arrows */}
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-4">
                      <div className="pointer-events-auto">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            prev();
                          }}
                          className="h-11 w-11 rounded-full border border-white/15 bg-black/35 text-white hover:bg-white/10 transition"
                        >
                          ‹
                        </button>
                      </div>
                      <div className="pointer-events-auto">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            next();
                          }}
                          className="h-11 w-11 rounded-full border border-white/15 bg-black/35 text-white hover:bg-white/10 transition"
                        >
                          ›
                        </button>
                      </div>
                    </div>
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Progress bars */}
        <div className="px-6 pb-5 pt-4">
          <div className="flex items-center justify-center gap-2">
            {projects.map((_, i) => (
              <div
                key={i}
                className={
                  "h-1 rounded-full transition-all duration-500 " +
                  (i === index ? "w-12 bg-white" : "w-7 bg-white/30")
                }
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {activeProject && (
          <ProjectModal
            project={activeProject}
            onClose={() => setActiveId(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
