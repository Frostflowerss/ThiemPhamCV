"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { Lang } from "@/lib/types";

type Theme = "light" | "dark";

interface AppCtx {
  theme: Theme;
  toggleTheme: () => void;
  lang: Lang;
  setLang: (l: Lang) => void;
}

const Ctx = createContext<AppCtx | null>(null);

export function Providers({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [lang, setLangState] = useState<Lang>("vi");

  // Hydrate from storage (client-only preference).
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    const savedLang = localStorage.getItem("lang") as Lang | null;
    if (savedTheme) setTheme(savedTheme);
    if (savedLang) setLangState(savedLang);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = lang;
    localStorage.setItem("lang", lang);
  }, [lang]);

  const toggleTheme = () =>
    setTheme((t) => (t === "dark" ? "light" : "dark"));
  const setLang = (l: Lang) => setLangState(l);

  return (
    <Ctx.Provider value={{ theme, toggleTheme, lang, setLang }}>
      {children}
    </Ctx.Provider>
  );
}

export function useApp() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useApp must be used within Providers");
  return ctx;
}
