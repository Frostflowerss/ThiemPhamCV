@tailwind base;
@tailwind components;
@tailwind utilities;

/* ============================================================
   Blueprint editorial — design tokens
   ============================================================ */
:root {
  --font-display: "Fraunces", serif;
  --font-sans: "Inter", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", monospace;
  --accent: #3b82f6;
}

/* Light mode */
:root {
  --bg: #f7f7f4;
  --surface: #ffffff;
  --line: #e2e1db;
  --ink: #16181d;
  --muted: #6a6d75;
}

/* Dark mode */
.dark {
  --bg: #0d0f14;
  --surface: #14171e;
  --line: #232833;
  --ink: #edeef0;
  --muted: #8b909b;
}

* {
  border-color: var(--line);
}

html {
  scroll-behavior: smooth;
}

body {
  background: var(--bg);
  color: var(--ink);
  font-family: var(--font-sans);
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

/* Blueprint grid backdrop — subtle */
.blueprint-grid {
  background-image:
    linear-gradient(var(--line) 1px, transparent 1px),
    linear-gradient(90deg, var(--line) 1px, transparent 1px);
  background-size: 32px 32px;
  -webkit-mask-image: radial-gradient(ellipse 80% 60% at 50% 0%, #000 40%, transparent 100%);
          mask-image: radial-gradient(ellipse 80% 60% at 50% 0%, #000 40%, transparent 100%);
  opacity: 0.5;
}

::selection {
  background: var(--accent);
  color: #fff;
}

/* Focus ring — visible for keyboard users */
:where(a, button, input, textarea, [tabindex]):focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
  border-radius: 4px;
}

/* ============================================================
   Print — CV to A4
   ============================================================ */
@media print {
  :root {
    --bg: #ffffff;
    --surface: #ffffff;
    --ink: #000000;
    --muted: #444;
    --line: #ccc;
  }
  .no-print { display: none !important; }
  body { background: #fff; }
  .blueprint-grid { display: none; }
  a { text-decoration: none; color: #000; }
}

/* ============================================================
   Reduced motion
   ============================================================ */
@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  *, *::before, *::after {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.001ms !important;
  }
}
