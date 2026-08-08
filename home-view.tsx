/** Inline script to set theme before paint — avoids flash. */
export function ThemeScript() {
  const code = `(function(){try{var t=localStorage.getItem('theme');if(!t){t=window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';}if(t==='dark')document.documentElement.classList.add('dark');var l=localStorage.getItem('lang');if(l)document.documentElement.lang=l;}catch(e){document.documentElement.classList.add('dark');}})();`;
  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}
