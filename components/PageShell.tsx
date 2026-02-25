"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import ProjectCarousel from "@/components/ProjectCarousel";
import ToneControl from "@/components/ToneControl";
import ScrollProgress from "@/components/ScrollProgress";
import CursorGlow from "@/components/CursorGlow";
import Reveal from "@/components/Reveal";
import DividerDraw from "@/components/DividerDraw";
import Timeline from "@/components/Timeline";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import { profile } from "@/data/profile";

const ease = [0.22, 1, 0.36, 1] as const;

function SectionHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <Reveal>
      <div className="flex items-end justify-between gap-4">
        <div>
          <div className="text-lg md:text-xl font-semibold tracking-tight">{title}</div>
          {subtitle ? (
            <div className="mt-1 text-xs text-[color:var(--muted)]">{subtitle}</div>
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
      transition={{ duration: 0.35, ease }}
      className="min-h-screen"
    >
      <ScrollProgress />
      <CursorGlow />
      <div className="fixed inset-0 -z-10 bg-grid opacity-[0.22]" />

      <div className="mx-auto max-w-6xl px-5 py-10">
        {/* Header */}
        <header className="rounded-3xl border border-[color:var(--line)] bg-[color:var(--card)] p-6 md:p-8">
          <div className="flex items-start justify-between gap-6">
            <div className="flex items-start gap-5">
              <div className="relative h-16 w-16 md:h-20 md:w-20 overflow-hidden rounded-2xl border border-[color:var(--line)] bg-black/20">
                <Image
                  src={profile.avatarSrc}
                  alt="Avatar"
                  fill
                  className="object-cover"
                  sizes="80px"
                  priority
                />
              </div>

              <div className="min-w-0">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <div className="text-xl md:text-2xl font-semibold tracking-tight">
                    {profile.name}
                  </div>
                  <div className="text-sm md:text-base text-[color:var(--accent)] font-semibold tracking-wide">
                    {profile.title}
                  </div>
                </div>

                {profile.subtitle ? (
                  <div className="mt-1 text-xs text-[color:var(--muted)]">{profile.subtitle}</div>
                ) : null}

                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[color:var(--muted)]">
                  {profile.contacts.map((c) => (
                    <div key={c.label} className="flex gap-2">
                      <span className="text-[color:var(--text)]/90">{c.label}:</span>
                      {c.href ? (
                        <a className="hover:underline" href={c.href}>
                          {c.value}
                        </a>
                      ) : (
                        <span className="truncate">{c.value}</span>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  <a
                    href={profile.downloadCvHref}
                    className="btn-sheen inline-flex items-center gap-2 rounded-xl border border-[color:var(--line)] bg-black/10 px-4 py-2 text-sm hover:bg-white/5 transition"
                  >
                    Download PDF
                  </a>
                  <a
                    href="mailto:pnt.architect.work@gmail.com"
                    className="btn-sheen inline-flex items-center gap-2 rounded-xl border border-[color:var(--line)] bg-black/10 px-4 py-2 text-sm hover:bg-white/5 transition"
                  >
                    Contact
                  </a>
                  <a
                    href="/admin"
                    className="inline-flex items-center gap-2 rounded-xl border border-[color:var(--line)] px-4 py-2 text-sm hover:bg-white/5 transition"
                  >
                    Admin upload
                  </a>
                </div>
              </div>
            </div>

            <ToneControl />
          </div>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-[color:var(--line)] bg-black/10 p-5">
              <div className="text-sm font-semibold tracking-tight">Tóm tắt chuyên môn</div>
              <div className="mt-2 text-sm text-[color:var(--muted)] leading-relaxed">
                {profile.summaryVN}
              </div>
            </div>

            <div className="rounded-2xl border border-[color:var(--line)] bg-black/10 p-5">
              <div className="text-sm font-semibold tracking-tight">Professional summary</div>
              <div className="mt-2 text-sm text-[color:var(--muted)] leading-relaxed">
                {profile.summaryEN}
              </div>
            </div>
          </div>
        </header>

        {/* Featured projects */}
        <section className="mt-10">
          <SectionHeader
            title="Dự án tiêu biểu"
            subtitle="Card nhỏ gọn • Popup cố định giữa màn hình • Gallery ảnh"
          />
          <div className="mt-6">
            <ProjectCarousel />
          </div>
        </section>

        <DividerDraw />

        {/* Employment */}
        <section className="mt-2">
          <SectionHeader
            title="Lịch sử công việc"
            subtitle="Timeline tối ưu animation (opacity + transform)"
          />
          <Timeline />
        </section>

        <DividerDraw />

        {/* Education & courses */}
        <section className="mt-2">
          <SectionHeader title="Học vấn & khoá học" />
          <Education />
        </section>

        <DividerDraw />

        {/* Skills */}
        <section className="mt-2">
          <SectionHeader title="Kỹ năng phần mềm" subtitle="Data-driven • Thêm skill bằng 1 dòng dữ liệu" />
          <Skills />
        </section>

        <footer className="mt-14 border-t border-[color:var(--line)] pt-6 text-xs text-[color:var(--muted)]">
          Data files: <span className="text-[color:var(--text)]">/data</span> • Assets:{" "}
          <span className="text-[color:var(--text)]">/public/projects</span>,{" "}
          <span className="text-[color:var(--text)]">/public/uploads</span>
        </footer>
      </div>
    </motion.main>
  );
}
