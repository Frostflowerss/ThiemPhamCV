"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

const ease = [0.22, 1, 0.36, 1] as const;
const PASSWORD = "270298";

type ThemeVars = {
  bg: string;
  text: string;
  muted: string;
  line: string;
};

const presets: { name: string; vars: ThemeVars }[] = [
  {
    name: "Noir",
    vars: { bg: "#0a0a0a", text: "#e8e8e8", muted: "#a3a3a3", line: "rgba(255,255,255,0.14)" },
  },
  {
    name: "Slate",
    vars: { bg: "#0b0f14", text: "#e6e9ee", muted: "#a1a7b3", line: "rgba(230,233,238,0.16)" },
  },
  {
    name: "Ivory",
    vars: { bg: "#f6f6f4", text: "#111111", muted: "#515151", line: "rgba(0,0,0,0.14)" },
  },
];

function applyVars(v: ThemeVars) {
  const r = document.documentElement;
  r.style.setProperty("--bg", v.bg);
  r.style.setProperty("--text", v.text);
  r.style.setProperty("--muted", v.muted);
  r.style.setProperty("--line", v.line);
}

export default function ToneControl() {
  const [open, setOpen] = useState(false);
  const [unlocked, setUnlocked] = useState(false);
  const [pwd, setPwd] = useState("");
  const [shake, setShake] = useState(false);

  useEffect(() => {
    // restore last preset if any
    const saved = localStorage.getItem("cv_theme_preset");
    const found = presets.find((p) => p.name === saved);
    if (found) applyVars(found.vars);
  }, []);

  const ringClass =
    "h-10 w-10 rounded-full border border-[color:var(--line)] bg-transparent hover:bg-[color:var(--card)] transition grid place-items-center";

  const icon = useMemo(() => {
    // minimalist "dial" icon
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

  return (
    <div className="relative">
      <button className={ringClass} onClick={() => setOpen((v) => !v)} aria-label="Tone control">
        {icon}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="absolute right-0 mt-3 w-[280px] rounded-2xl border border-[color:var(--line)] bg-[color:var(--card2)] shadow-2xl shadow-black/40 overflow-hidden"
            initial={{ opacity: 0, y: 10, scale: 0.98, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: 10, scale: 0.98, filter: "blur(6px)" }}
            transition={{ duration: 0.28, ease }}
          >
            <div className="px-4 py-3 border-b border-[color:var(--line)] flex items-center justify-between">
              <div className="text-xs text-[color:var(--muted)]">Tone</div>
              <button
                onClick={() => setOpen(false)}
                className="text-xs text-[color:var(--muted)] hover:text-[color:var(--text)] transition"
              >
                Close
              </button>
            </div>

            {!unlocked ? (
              <div className="p-4">
                <div className="text-sm font-medium">Unlock to edit</div>
                <div className="mt-1 text-xs text-[color:var(--muted)]">
                  Nhập mật khẩu để bật chỉnh tone toàn trang.
                </div>

                <motion.div
                  animate={shake ? { x: [-5, 5, -3, 3, 0] } : {}}
                  transition={{ duration: 0.3 }}
                  className="mt-3"
                >
                  <input
                    value={pwd}
                    onChange={(e) => setPwd(e.target.value)}
                    placeholder="Password"
                    type="password"
                    className="w-full rounded-xl border border-[color:var(--line)] bg-transparent px-3 py-2 text-sm outline-none focus:border-[color:var(--text)]/40"
                  />
                </motion.div>

                <button
                  onClick={() => {
                    if (pwd === PASSWORD) {
                      setUnlocked(true);
                      setPwd("");
                    } else {
                      setShake(true);
                      setTimeout(() => setShake(false), 350);
                    }
                  }}
                  className="mt-3 w-full rounded-xl border border-[color:var(--line)] bg-white text-black px-3 py-2 text-sm font-medium hover:opacity-90 transition"
                >
                  Unlock
                </button>
              </div>
            ) : (
              <div className="p-4">
                <div className="text-sm font-medium">Presets</div>
                <div className="mt-1 text-xs text-[color:var(--muted)]">
                  Đổi nền/chữ/nét bằng preset. Lưu local.
                </div>

                <div className="mt-3 grid grid-cols-3 gap-2">
                  {presets.map((p) => (
                    <button
                      key={p.name}
                      onClick={() => {
                        applyVars(p.vars);
                        localStorage.setItem("cv_theme_preset", p.name);
                      }}
                      className="rounded-xl border border-[color:var(--line)] bg-transparent hover:bg-black/15 transition px-2 py-2 text-xs"
                    >
                      <div className="mx-auto h-6 w-6 rounded-full border border-[color:var(--line)]" style={{ background: p.vars.bg }} />
                      <div className="mt-2">{p.name}</div>
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => setUnlocked(false)}
                  className="mt-4 w-full rounded-xl border border-[color:var(--line)] bg-transparent px-3 py-2 text-sm hover:bg-black/15 transition"
                >
                  Lock
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
