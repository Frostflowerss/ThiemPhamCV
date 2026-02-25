"use client";

import { useEffect, useState } from "react";

const STORAGE_KEYS = {
  mode: "cv_theme_mode",
  enColor: "cv_en_color",
} as const;

export default function ThemeToggle() {
  const [mode, setMode] = useState<"dark" | "light">("dark");
  const [enColor, setEnColor] = useState("#d4af37");

  useEffect(() => {
    // hydrate from storage
    try {
      const m = (localStorage.getItem(STORAGE_KEYS.mode) as "dark" | "light" | null) ?? "dark";
      const c = localStorage.getItem(STORAGE_KEYS.enColor) ?? "#d4af37";
      setMode(m);
      setEnColor(c);
    } catch {}
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("light", mode === "light");
    root.style.setProperty("--en", enColor);

    try {
      localStorage.setItem(STORAGE_KEYS.mode, mode);
      localStorage.setItem(STORAGE_KEYS.enColor, enColor);
    } catch {}
  }, [mode, enColor]);

  return (
    <div className="fixed right-6 top-6 z-[60] flex items-center gap-3">
      <button
        type="button"
        onClick={() => setMode(mode === "dark" ? "light" : "dark")}
        aria-label="Toggle dark/light"
        className="h-10 w-10 rounded-full border border-white/15 bg-black/30 hover:bg-white/10 transition"
      >
        <span className="sr-only">Toggle</span>
      </button>

      <label className="h-10 w-10 rounded-full overflow-hidden border border-white/15 bg-black/30 cursor-pointer">
        <span className="sr-only">English color</span>
        <input
          aria-label="English color"
          type="color"
          value={enColor}
          onChange={(e) => setEnColor(e.target.value)}
          className="h-full w-full cursor-pointer bg-transparent"
        />
      </label>
    </div>
  );
}
