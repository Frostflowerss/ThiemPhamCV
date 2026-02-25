"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import ProjectCarousel from "@/components/ProjectCarousel";
import ToneControl from "@/components/ToneControl";
import ScrollProgress from "@/components/ScrollProgress";
import Reveal from "@/components/Reveal";
import DividerDraw from "@/components/DividerDraw";
import Timeline from "@/components/Timeline";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import { profile } from "@/data/profile";

function SectionHeader({
  vi,
  en,
  subtitleVI,
  subtitleEN,
}: {
  vi: string;
  en: string;
  subtitleVI?: string;
  subtitleEN?: string;
}) {
  return (
    <Reveal>
      <div className="flex items-end justify-between gap-4">
        <div>
          <div className="text-lg md:text-xl font-semibold tracking-tight">
            <span className="text-white">{vi}</span>{" "}
            <span className="text-[color:var(--accent)]">{en}</span>
          </div>
          {(subtitleVI || subtitleEN) ? (
            <div className="mt-1 text-xs leading-relaxed">
              {subtitleVI ? <span className="text-white/55">{subtitleVI}</span> : null}
              {subtitleEN ? <span className="text-[color:var(--accent)]/70"> {subtitleEN}</span> : null}
            </div>
          ) : null}
        </div>
        <div className="hidden md:block h-px flex-1 bg-[color:var(--line)]/60" />
      </div>
    </Reveal>
  );
}

export default function PageShell() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="min-h-screen"
    >
      <ScrollProgress />

      <div className="mx-auto max-w-6xl px-5 py-10">
        {/* HERO */}
        <header className="relative overflow-hidden rounded-3xl border border-[color:var(--line)] bg-[#0b0b0b] p-6 md:p-10">
          {/* subtle accents */}
          <div className="pointer-events-none absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-[color:var(--accent)]/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-44 -left-44 h-[520px] w-[520px] rounded-full bg-white/5 blur-3xl" />

          <div className="relative flex flex-col gap-8">
            <div className="flex items-start justify-between gap-6">
              <div className="flex items-start gap-6">
                <div className="relative">
                  <div className="absolute inset-0 rounded-3xl bg-[color:var(--accent)]/15 blur-xl" />
                  <div className="relative h-20 w-20 md:h-24 md:w-24 overflow-hidden rounded-3xl border border-[color:var(--accent)]/70 bg-black/30">
                    <Image
                      src={profile.avatarSrc}
                      alt="Avatar"
                      fill
                      className="object-cover"
                      sizes="96px"
                      priority
                    />
                  </div>
                </div>

                <div className="min-w-0">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <div className="text-2xl md:text-3xl font-semibold tracking-tight text-white">
                      {profile.name}
                    </div>
                    <div className="text-sm md:text-base text-[color:var(--accent)] font-semibold tracking-wide">
                      {profile.title}
                    </div>
                  </div>

                  {profile.subtitle ? (
                    <div className="mt-1 text-xs text-white/55">{profile.subtitle}</div>
                  ) : null}

                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {profile.contacts.map((c) => (
                      <div key={c.label} className="flex gap-2">
                        <span className="text-white/70">{c.label}:</span>
                        {c.href ? (
                          <a className="text-white/75 hover:underline" href={c.href}>
                            {c.value}
                          </a>
                        ) : (
                          <span className="text-white/75 truncate">{c.value}</span>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    <a
                      href={profile.downloadCvHref}
                      className="btn-sheen inline-flex items-center gap-2 rounded-xl border border-[color:var(--line)] bg-black/20 px-4 py-2 text-sm text-white hover:bg-white/5 transition"
                    >
                      Tải PDF <span className="text-[color:var(--accent)]">Download</span>
                    </a>
                    <a
                      href="mailto:pnt.architect.work@gmail.com"
                      className="inline-flex items-center gap-2 rounded-xl border border-[color:var(--line)] bg-black/20 px-4 py-2 text-sm text-white hover:bg-white/5 transition"
                    >
                      Liên hệ <span className="text-[color:var(--accent)]">Contact</span>
                    </a>
                  </div>
                </div>
              </div>

              <ToneControl />
            </div>

            {/* Summary (VI white / EN gold) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <div className="rounded-2xl border border-[color:var(--line)] bg-white/[0.03] p-5">
                <div className="text-sm font-semibold tracking-tight text-white">
                  Tóm tắt chuyên môn{" "}
                  <span className="text-[color:var(--accent)]">Professional Summary</span>
                </div>
                <div className="mt-3 text-sm leading-relaxed text-white/80">
                  {profile.summaryVN}
                </div>
                <div className="mt-3 text-sm leading-relaxed text-[color:var(--accent)]/85">
                  {profile.summaryEN}
                </div>
              </div>

              <div className="rounded-2xl border border-[color:var(--line)] bg-white/[0.03] p-5">
                <div className="text-sm font-semibold tracking-tight text-white">
                  Ghi chú{" "}
                  <span className="text-[color:var(--accent)]">Notes</span>
                </div>
                <div className="mt-3 text-sm leading-relaxed text-white/75">
                  VI hiển thị <span className="text-white">màu trắng</span>, EN hiển thị{" "}
                  <span className="text-[color:var(--accent)]">màu vàng</span>. Giao diện tối ưu
                  animation (opacity/transform) để giữ 60fps.
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Featured projects */}
        <section className="mt-12">
          <SectionHeader
            vi="Dự án tiêu biểu"
            en="Featured Projects"
            subtitleVI="Kéo ngang (mobile) • Tối đa 4 dự án hiển thị"
            subtitleEN="Swipe (mobile) • Max 4 visible"
          />
          <div className="mt-6">
            <ProjectCarousel />
          </div>
        </section>

        <DividerDraw />

        {/* Employment */}
        <section className="mt-2">
          <SectionHeader
            vi="Lịch sử công việc"
            en="Employment History"
            subtitleVI="Timeline tối ưu GPU"
            subtitleEN="GPU-friendly timeline"
          />
          <Timeline />
        </section>

        <DividerDraw />

        {/* Education & courses */}
        <section className="mt-2">
          <SectionHeader vi="Học vấn & khoá học" en="Education & Courses" />
          <Education />
        </section>

        <DividerDraw />

        {/* Skills */}
        <section className="mt-2">
          <SectionHeader vi="Kỹ năng phần mềm" en="Software Skills" />
          <Skills />
        </section>

        <footer className="mt-14 border-t border-[color:var(--line)] pt-6 text-xs text-white/55">
          Data: <span className="text-white/70">/data</span> • Assets:{" "}
          <span className="text-white/70">/public/projects</span>,{" "}
          <span className="text-white/70">/public/uploads</span>
        </footer>
      </div>
    </motion.main>
  );
}
