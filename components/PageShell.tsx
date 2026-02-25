"use client";

import { motion } from "framer-motion";
import ProjectCarousel from "@/components/ProjectCarousel";
import ToneControl from "@/components/ToneControl";
import ScrollProgress from "@/components/ScrollProgress";
import CursorGlow from "@/components/CursorGlow";
import Reveal from "@/components/Reveal";
import DividerDraw from "@/components/DividerDraw";
import Timeline from "@/components/Timeline";
import Skills from "@/components/Skills";
import TiltCard from "@/components/TiltCard";

const easeOutExpo = [0.22, 1, 0.36, 1] as const;

export default function PageShell() {
  return (
    <motion.main
      initial={{ opacity: 0, filter: "blur(10px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.6, ease: easeOutExpo }}
      className="min-h-screen"
    >
      <ScrollProgress />
      <CursorGlow />
      <div className="fixed inset-0 -z-10 bg-grid opacity-[0.25]" />

      <div className="mx-auto max-w-6xl px-5 py-10">
        <header className="flex items-start justify-between gap-6 border-b border-[color:var(--line)] pb-8">
          <TiltCard>
            <div className="max-w-2xl rounded-2xl border border-[color:var(--line)] bg-[color:var(--card)] p-5">
              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: easeOutExpo }}
                className="text-3xl md:text-4xl font-semibold tracking-tight"
              >
                CV / Portfolio
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.08, ease: easeOutExpo }}
                className="mt-3 text-sm md:text-base text-[color:var(--muted)]"
              >
                Modern motion system: progress bar, reveal blur-in, divider draw, timeline grow, tilt cards, skill bars + counter, sheen hover.
              </motion.p>
            </div>
          </TiltCard>

          <ToneControl />
        </header>

        <section className="mt-10">
          <Reveal>
            <div className="flex items-end justify-between">
              <h2 className="text-lg md:text-xl font-medium">Dự án tiêu biểu</h2>
              <div className="text-xs text-[color:var(--muted)]">Use arrows • Click card for details</div>
            </div>
          </Reveal>

          <div className="mt-6">
            <ProjectCarousel />
          </div>
        </section>

        <DividerDraw />

        <section>
          <Reveal>
            <div className="flex items-end justify-between">
              <h2 className="text-lg md:text-xl font-medium">Timeline</h2>
              <div className="text-xs text-[color:var(--muted)]">Line grow + stagger items</div>
            </div>
          </Reveal>
          <Timeline />
        </section>

        <DividerDraw />

        <section>
          <Reveal>
            <div className="flex items-end justify-between">
              <h2 className="text-lg md:text-xl font-medium">Skills</h2>
              <div className="text-xs text-[color:var(--muted)]">Bars animate + % counter</div>
            </div>
          </Reveal>
          <Skills />
        </section>

        <footer className="mt-14 border-t border-[color:var(--line)] pt-6 text-xs text-[color:var(--muted)]">
          Deploy on Vercel • Edit data/projects.ts • Replace public/projects/*
        </footer>
      </div>
    </motion.main>
  );
}
