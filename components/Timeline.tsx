"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

const ease = [0.22, 1, 0.36, 1] as const;

const items = [
  {
    time: "2026",
    title: "Insight Report / Delivery",
    desc: "Chuẩn hoá pipeline, đối soát số liệu, bàn giao sản phẩm theo hợp đồng.",
  },
  {
    time: "2025",
    title: "BIM / Portfolio System",
    desc: "Thiết kế hệ template báo cáo, quản trị phiên bản, chuẩn hoá quy trình phối hợp.",
  },
  {
    time: "2024",
    title: "Data Automation",
    desc: "Tự động hoá ETL/ELT, kiểm soát chất lượng dữ liệu, logging & monitoring.",
  },
];

export default function Timeline() {
  return (
    <div className="relative mt-6 rounded-2xl border border-[color:var(--line)] bg-[color:var(--card)] p-6">
      <div className="absolute left-7 top-6 bottom-6 w-px bg-white/10" />
      <motion.div
        className="absolute left-7 top-6 w-[2px] origin-top"
        style={{
          background:
            "linear-gradient(180deg, rgba(199,178,106,0.75), transparent)",
          filter: "blur(0.1px)",
        }}
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.9, ease }}
      />

      <div className="space-y-6">
        {items.map((it, idx) => (
          <Reveal key={it.title} delay={idx * 0.06}>
            <div className="relative pl-10">
              <div className="absolute left-[18px] top-[6px] h-3 w-3 rounded-full border border-[color:var(--line)] bg-[color:var(--bg)]" />
              <div className="text-xs text-[color:var(--muted)]">{it.time}</div>
              <div className="mt-1 text-sm font-medium">{it.title}</div>
              <div className="mt-1 text-xs text-[color:var(--muted)] leading-relaxed">{it.desc}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
