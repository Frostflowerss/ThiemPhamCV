"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { projects } from "@/data/projects";

type EmblaApi = ReturnType<typeof useEmblaCarousel>[1];

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

// khoảng cách vòng (loop) giữa 2 index (ví dụ 0 và cuối list)
function circularDistance(i: number, j: number, n: number) {
  const d = Math.abs(i - j);
  return Math.min(d, n - d);
}

export default function ProjectCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    loop: true,
    // để drag mượt và ít “giật”
    dragFree: false,
    containScroll: "trimSnaps",
  });

  const [selected, setSelected] = useState(0);
  const total = projects.length;

  const onSelect = useCallback((api: EmblaApi) => {
    if (!api) return;
    setSelected(api.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on("select", () => onSelect(emblaApi));
    emblaApi.on("reInit", () => onSelect(emblaApi));
  }, [emblaApi, onSelect]);

  const prev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const next = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="relative mt-10">
      {/* Header row */}
      <div className="flex items-center justify-between">
        <div>
          <div className="text-white font-semibold">
            Dự án tiêu biểu{" "}
            <span className="text-[color:var(--accent)]">Featured Projects</span>
          </div>
          <div className="mt-1 text-xs text-white/60">
            Vuốt ngang (mobile) • Max 4 visible (desktop)
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-2">
          <button
            type="button"
            onClick={prev}
            className="h-10 w-10 rounded-full border border-white/20 text-white hover:bg-white/10 transition"
            aria-label="Previous"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={next}
            className="h-10 w-10 rounded-full border border-white/20 text-white hover:bg-white/10 transition"
            aria-label="Next"
          >
            ›
          </button>
        </div>
      </div>

      {/* Carousel */}
      <div className="mt-6 overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {projects.map((p, idx) => {
            const dist = circularDistance(idx, selected, total); // 0 là slide giữa
            // mờ/nhỏ dần theo dist (0..3)
            const opacity = dist === 0 ? 1 : dist === 1 ? 0.55 : dist === 2 ? 0.35 : 0.22;
            const scale = dist === 0 ? 1 : dist === 1 ? 0.94 : dist === 2 ? 0.9 : 0.86;

            return (
              <div
                key={p.id}
                className="embla-slide flex-[0_0_78%] sm:flex-[0_0_55%] md:flex-[0_0_25%] px-3 md:px-4"
                style={{
                  opacity,
                  transform: `scale(${scale})`,
                  willChange: "transform, opacity",
                  transition: "transform 450ms cubic-bezier(0.22,1,0.36,1), opacity 450ms cubic-bezier(0.22,1,0.36,1)",
                }}
              >
                <article className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-neutral-900 border border-white/10">
                  {/* Image */}
                  <img
                    src={p.image}
                    alt={p.titleVI}
                    className="h-full w-full object-cover opacity-85 transition duration-500 group-hover:opacity-100"
                    draggable={false}
                  />

                  {/* Overlay gradient for text legibility */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/80 to-transparent" />

                  {/* Content */}
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <div className="text-xs text-white/60">{p.periodVI}</div>

                    <div className="mt-1 text-sm font-semibold text-white line-clamp-2">
                      {p.titleVI}
                    </div>
                    <div className="text-xs text-[color:var(--accent)] line-clamp-1">
                      {p.titleEN}
                    </div>

                    <div className="mt-2 text-[11px] text-white/55 line-clamp-2">
                      {p.roleVI}{" "}
                      <span className="text-[color:var(--accent)]">{p.roleEN}</span>
                    </div>

                    <div className="mt-3 flex items-center justify-between text-[11px]">
                      <span className="text-white/45">{p.locationVI}</span>
                      <span className="text-[color:var(--accent)]/90">
                        Chi tiết • Details →
                      </span>
                    </div>
                  </div>

                  {/* Hover upscale (nhẹ hơn center scale, chỉ thêm 1 chút) */}
                  <div className="absolute inset-0 transition-transform duration-300 group-hover:scale-[1.03]" />
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
