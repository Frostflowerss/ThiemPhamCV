"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import ProjectCarousel from "@/components/ProjectCarousel";
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
            <span className="text-[color:var(--text)]">{vi}</span>{" "}
            <span className="text-[color:var(--en)]">{en}</span>
          </div>
          {(subtitleVI || subtitleEN) ? (
            <div className="mt-1 text-xs leading-relaxed">
              {subtitleVI ? <span className="text-[color:var(--muted)]">{subtitleVI}</span> : null}
              {subtitleEN ? <span className="text-[color:var(--en)]/80"> {subtitleEN}</span> : null}
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
        <header className="relative overflow-hidden rounded-3xl border border-[color:var(--line)] bg-[color:var(--card)] p-6 md:p-10">
          {/* subtle accents */}
          <div className="pointer-events-none absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-[color:var(--accent)]/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-44 -left-44 h-[520px] w-[520px] rounded-full bg-white/5 blur-3xl" />

          <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
            {/* Left */}
            <div className="min-w-0">
              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-3xl md:text-4xl font-semibold tracking-tight"
              >
                <span className="text-[color:var(--text)]">{profile.name}</span>{" "}
                <span className="text-[color:var(--en)]">| {profile.title}</span>
              </motion.h1>

              {profile.subtitle ? (
                <div className="mt-2 text-sm text-[color:var(--muted)]">{profile.subtitle}</div>
              ) : null}

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {profile.contacts.map((c) => (
                  <div key={c.label} className="flex gap-2 min-w-0">
                    <span className="text-[color:var(--muted)] shrink-0">{c.label}:</span>
                    {c.href ? (
                      <a className="text-[color:var(--text)] hover:underline truncate" href={c.href}>
                        {c.value}
                      </a>
                    ) : (
                      <span className="text-[color:var(--text)] truncate">{c.value}</span>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                <a
                  href={profile.downloadCvHref}
                  className="btn-sheen inline-flex items-center gap-2 rounded-xl border border-[color:var(--line)] bg-black/20 px-4 py-2 text-sm text-[color:var(--text)] hover:bg-white/5 transition"
                >
                  Tải PDF <span className="text-[color:var(--en)]">Download PDF</span>
                </a>
                <a
                  href="mailto:pnt.architect.work@gmail.com"
                  className="inline-flex items-center gap-2 rounded-xl border border-[color:var(--line)] bg-black/20 px-4 py-2 text-sm text-[color:var(--text)] hover:bg-white/5 transition"
                >
                  Liên hệ <span className="text-[color:var(--en)]">Contact</span>
                </a>
              </div>
            </div>

            {/* Right avatar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="shrink-0"
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-3xl bg-[color:var(--accent)]/12 blur-xl" />
                <div className="relative h-28 w-28 md:h-36 md:w-36 overflow-hidden rounded-3xl border border-[color:var(--accent)]/70 bg-black/30">
                  <Image
                    src={profile.avatarSrc}
                    alt="Avatar"
                    fill
                    className="object-cover"
                    sizes="144px"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </header>

        {/* SUMMARY (moved out of hero) */}
        <section className="mt-12">
          <SectionHeader
            vi="Tóm tắt chuyên môn"
            en="Professional Summary"
          />
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="rounded-2xl border border-[color:var(--line)] bg-white/[0.03] p-6">
              <div className="text-sm leading-relaxed text-[color:var(--text)]">{profile.summaryVN}</div>
            </div>
            <div className="rounded-2xl border border-[color:var(--line)] bg-white/[0.03] p-6">
              <div className="text-sm leading-relaxed text-[color:var(--en)]/90">{profile.summaryEN}</div>
            </div>
          </div>
        </section>

        {/* Featured projects */}
        <section className="mt-14">
          <SectionHeader
            vi="Dự án tiêu biểu"
            en="Featured Projects"
            subtitleVI="Chỉ hiển thị 1 dự án • Bấm ảnh để xem chi tiết"
            subtitleEN="One project at a time • Click to open modal"
          />
          <ProjectCarousel />
        </section>

        <DividerDraw />

        {/* Employment */}
        <section className="mt-14">
          <SectionHeader
            vi="Lịch sử công việc"
            en="Employment History"
            subtitleVI="Timeline tối ưu GPU"
            subtitleEN="GPU-friendly timeline"
          />
          <Timeline />
        </section>

        {/* Skills */}
        <section className="mt-14">
          <SectionHeader
            vi="Kĩ năng phần mềm"
            en="Software Skills"
            subtitleVI="Thanh gọn • Dễ đọc"
            subtitleEN="Compact • Readable"
          />
          <Skills />
        </section>

        {/* Education */}
        <section className="mt-14 pb-16">
          <SectionHeader
            vi="Học vấn & Khoá học"
            en="Education & Courses"
          />
          <Education />
        </section>
      </div>
    </motion.main>
  );
}
