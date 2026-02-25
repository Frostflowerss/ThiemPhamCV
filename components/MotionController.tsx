"use client";

import { useEffect } from "react";

export function MotionController() {
  useEffect(() => {
    const progress = document.getElementById("progress");
    const glow = document.getElementById("cursorGlow");

    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      const p = h > 0 ? (window.scrollY / h) * 100 : 0;
      if (progress) progress.style.width = `${p}%`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const onMove = (e: MouseEvent) => {
      if (!glow) return;
      glow.style.left = `${e.clientX}px`;
      glow.style.top = `${e.clientY}px`;
    };
    window.addEventListener("mousemove", onMove, { passive: true });

    // Divider draw trigger
    const divs = Array.from(document.querySelectorAll(".divider")) as HTMLElement[];
    const io = new IntersectionObserver((entries) => {
      for (const en of entries) {
        if (en.isIntersecting) {
          (en.target as HTMLElement).classList.add("in");
          io.unobserve(en.target);
        }
      }
    }, { threshold: 0.2, rootMargin: "0px 0px -10% 0px" });
    divs.forEach(d => io.observe(d));

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMove);
      io.disconnect();
    };
  }, []);

  return null;
}
