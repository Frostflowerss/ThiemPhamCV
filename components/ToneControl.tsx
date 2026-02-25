"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

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
  const [textColor, setTextColor] = useState<string>("");

  useEffect(() => {
    const saved = localStorage.getItem("cv_theme_preset");
    const savedText = localStorage.getItem("cv_theme_text");
    const found = presets.find((p) => p.name === saved) || presets[0];
    setActive(found.name);
    applyVars(found.vars);

    if (savedText) {
      document.documentElement.style.setProperty("--text", savedText);
      setTextColor(savedText);
    }
  }, []);

  const icon = useMemo(() => {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 3a9 9 0 1 0 9 9"
          stroke="currentColor"
          strokeWidth="1.5"
          opacity="0.85"
        />
        <path
          d="M12 7v5l3 2"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }, []);

  const ringClass =
    "h-10 w-10 rounded-full border border-[color:var(--line)] bg-transparent hover:bg-white/5 transition grid place-items-center";

  const setPreset = (name: string) => {
    const found = presets.find((p) => p.name === name);
    if (!found) return;
    setActive(name);
    applyVars(found.vars);
    localStorage.setItem("cv_theme_preset", name);

    // keep user override text color if set
    const savedText = localStorage.getItem("cv_theme_text");
    if (savedText) document.documentElement.style.setProperty("--text", savedText);
  };

  const setText = (v: string) => {
    setTextColor(v);
    document.documentElement.style.setProperty("--text", v);
    localStorage.setItem("cv_theme_text", v);
  };

  const resetText = () => {
    localStorage.removeItem("cv_theme_text");
    const found = presets.find((p) => p.name === active) || presets[0];
    document.documentElement.style.setProperty("--text", found.vars.text);
    setTextColor("");
  };

  return (
    <div className="relative">
      <button className={ringClass} onClick={() => setOpen((v) => !v)} aria-label="Theme control">
        {icon}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="absolute right-0 mt-3 w-[290px] rounded-2xl border border-[color:var(--line)] bg-[color:var(--card2)] p-4 shadow-xl shadow-black/40"
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.22, ease }}
            style={{ willChange: "transform, opacity" }}
          >
            <div className="text-xs font-semibold tracking-wide text-[color:var(--muted)]">
              THEME
            </div>

            <div className="mt-3 grid grid-cols-3 gap-2">
              {presets.map((p) => (
                <button
                  key={p.name}
                  onClick={() => setPreset(p.name)}
                  className={[
                    "rounded-xl border px-2 py-2 text-xs transition",
                    p.name === active
                      ? "border-[color:var(--accent)] bg-black/10"
                      : "border-[color:var(--line)] hover:bg-white/5",
                  ].join(" ")}
                >
                  {p.name}
                </button>
              ))}
            </div>

            <div className="mt-4 border-t border-[color:var(--line)] pt-4">
              <div className="text-xs font-semibold tracking-wide text-[color:var(--muted)]">
                TEXT COLOR
              </div>

              <div className="mt-3 flex items-center gap-3">
                <input
                  type="color"
                  value={textColor || "#e8e8e8"}
                  onChange={(e) => setText(e.target.value)}
                  className="h-9 w-12 rounded-lg border border-[color:var(--line)] bg-transparent"
                  aria-label="Pick text color"
                />
                <div className="min-w-0">
                  <div className="text-xs text-[color:var(--muted)]">Override</div>
                  <div className="text-xs font-medium">{textColor || "—"}</div>
                </div>
                <button
                  onClick={resetText}
                  className="ml-auto rounded-lg border border-[color:var(--line)] px-2 py-2 text-xs hover:bg-white/5 transition"
                >
                  Reset
                </button>
              </div>
            </div>

            <div className="mt-4 text-[11px] text-[color:var(--muted)] leading-relaxed">
              Lưu cấu hình trong trình duyệt (localStorage).
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
