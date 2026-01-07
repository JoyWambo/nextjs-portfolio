"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      className="
        mt-12
        mx-4
        rounded-xl
        bg-black/50
        backdrop-blur-md
        border border-white/10 dark:border-white/20
        shadow-lg
        transition-colors duration-300
      "
    >
      <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <p className="text-sm text-slate-200 dark:text-slate-300">
            &copy; {year} <span className="font-semibold">My Portfolio</span>.
            All rights reserved.
          </p>
          <p className="text-xs text-slate-400 mt-1 max-w-xl">
            Built with accessibility and performance in mind — responsive,
            theme-aware, and keyboard friendly.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn (opens in a new tab)"
            className="p-2 rounded-md text-black dark:text-white hover:bg-white/5 dark:hover:bg-white/5 transition"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8.98h4.96V24H0V8.98zM8.98 8.98h4.76v2.06h.07c.66-1.25 2.28-2.56 4.7-2.56 5.03 0 5.96 3.31 5.96 7.61V24h-4.96v-7.02c0-1.67-.03-3.82-2.33-3.82-2.33 0-2.69 1.82-2.69 3.69V24H8.98V8.98z" />
            </svg>
          </a>

          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub (opens in a new tab)"
            className="p-2 rounded-md text-white dark:text-slate-100 hover:bg-white/5 dark:hover:bg-white/5 transition"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.95 3.2 9.15 7.64 10.63.56.1.76-.24.76-.53 0-.26-.01-1.12-.02-2.03-3.11.68-3.77-1.5-3.77-1.5-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 .17 1.57-.75 1.57-.75.98-1.68 2.57-1.2 3.2-.92.1-.72.39-1.2.71-1.48-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.16-3-.12-.28-.5-1.4.11-2.92 0 0 .95-.3 3.12 1.15a10.8 10.8 0 012.84-.38c.96 0 1.93.13 2.84.38 2.17-1.45 3.12-1.15 3.12-1.15.61 1.52.23 2.64.11 2.92.72.78 1.16 1.78 1.16 3 0 4.29-2.62 5.24-5.11 5.52.4.35.76 1.03.76 2.08 0 1.5-.01 2.71-.01 3.08 0 .29.2.64.77.53C20.05 21 23.25 16.7 23.25 11.75 23.25 5.48 18.27.5 12 .5z" />
            </svg>
          </a>

          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter (opens in a new tab)"
            className="p-2 rounded-md text-white dark:text-slate-100 hover:bg-white/5 dark:hover:bg-white/5 transition"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M23.95 4.57a8.3 8.3 0 01-2.36.65 4.12 4.12 0 001.8-2.27 8.22 8.22 0 01-2.6.99 4.11 4.11 0 00-7 3.75A11.65 11.65 0 013 3.16a4.11 4.11 0 001.27 5.48 4.07 4.07 0 01-1.86-.51v.05a4.11 4.11 0 003.29 4.03 4.1 4.1 0 01-1.85.07 4.11 4.11 0 003.83 2.85A8.25 8.25 0 012 19.54a11.64 11.64 0 006.29 1.84c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.35-.02-.53a8.36 8.36 0 002.05-2.12z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
