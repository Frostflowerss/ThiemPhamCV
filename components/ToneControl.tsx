"use client";

import { useEffect, useRef, useState } from "react";

type ThemeVars = {
  bg: string;
  text: string;
  muted: string;
  line: string;
  accent: string;
  card: string;
  card2: string;
};

const presets: { name: string; vars: ThemeVars }[] = [
  {
    name: "Gold Noir",
    vars: {
      bg: "#0a0a0a",
      text: "#e8e8e8",
      muted: "#a3a3a3",
      line: "rgba(255,255,255,0.14)",
      accent: "#c7b26a",
      card: "rgba(255,255,255,0.04)",
      card2: "rgba(255,255,255,0.06)",
    },
  },
  {
    name: "Gold Slate",
    vars: {
      bg: "#0b0f14",
      text: "#e6e9ee",
      muted: "#a1a7b3",
      line: "rgba(230,233,238,0.16)",
      accent: "#c7b26a",
      card: "rgba(255,255,255,0.04)",
      card2: "rgba(255,255,255,0.06)",
    },
  },
  {
    name: "Mono Noir",
    vars: {
      bg: "#0a0a0a",
      text: "#efefef",
      muted: "#b0b0b0",
      line: "rgba(255,255,255,0.12)",
      accent: "#e0e0e0",
      card: "rgba(255,255,255,0.04)",
      card2: "rgba(255,255,255,0.06)",
    },
  },
];

function applyVars(v: ThemeVars) {
  const r = document.documentElement;
  r.style.setProperty("--bg", v.bg);
  r.style.setProperty("--text", v.text);
  r.style.setProperty("--muted", v.muted);
  r.style.setProperty("--line", v.line);
  r.style.setProperty("--accent", v.accent);
  r.style.setProperty("--card", v.card);
  r.style.setProperty("--card2", v.card2);
}

export default function ToneControl() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("Gold Noir");
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("cv_theme_preset");
    const found = presets.find((p) => p.name === saved) || presets[0];
    setActive(found.name);
    applyVars(found.vars);
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!ref.current) return;
      if (!ref.current.contains(e.target as Node)) setOpen(false);
    };
    window.addEventListener("mousedown", onClick);
    return () => window.removeEventListener("mousedown", onClick);
  }, []);

  const setPreset = (name: string) => {
    const found = presets.find((p) => p.name === name);
    if (!found) return;
    setActive(found.name);
    applyVars(found.vars);
    localStorage.setItem("cv_theme_preset", found.name);
    setOpen(false);
  };

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-2 rounded-xl border border-[color:var(--line)] bg-black/20 px-3 py-2 text-xs text-white hover:bg-white/5 transition"
        aria-label="Theme"
      >
        <span className="h-2.5 w-2.5 rounded-full bg-[color:var(--accent)]" />
        <span className="hidden sm:inline">Theme</span>
      </button>

      {open ? (
        <div className="absolute right-0 mt-2 w-44 overflow-hidden rounded-xl border border-[color:var(--line)] bg-[#0b0b0b] shadow-xl shadow-black/40">
          {presets.map((p) => (
            <button
              key={p.name}
              onClick={() => setPreset(p.name)}
              className={[
                "w-full px-3 py-2 text-left text-xs transition",
                p.name === active
                  ? "bg-white/5 text-white"
                  : "text-white/80 hover:bg-white/5",
              ].join(" ")}
            >
              {p.name}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
