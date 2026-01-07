// app/components/Header.tsx
"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      if (saved) return saved;
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      return prefersDark ? "dark" : "light";
    }
    return "light";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";

    setTheme(newTheme);

    document.documentElement.classList.toggle("dark", newTheme === "dark");

    localStorage.setItem("theme", newTheme);
  };

  return (
    <nav className="sticky top-4 z-50 mx-4">
      <div
        className="
          container mx-auto flex items-center justify-between
          rounded-xl p-4
          bg-white/10 dark:bg-black/40
          backdrop-blur-md
          border border-white/10 dark:border-white/20
          shadow-lg
          transition-colors duration-300
        "
        role="navigation"
        aria-label="Main navigation"
      >
        <Link href="/" className="flex items-center gap-3">
          <span
            className="
              text-lg font-bold
              text-white dark:text-slate-100
              hover:text-blue-400 dark:hover:text-blue-300
              transition-colors duration-300
            "
          >
            My Portfolio
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6">
          <li>
            <Link
              href="/"
              className="text-white dark:text-slate-100 hover:text-blue-400 dark:hover:text-blue-300 transition-colors duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-white dark:text-slate-100 hover:text-blue-400 dark:hover:text-blue-300 transition-colors duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className="text-white dark:text-slate-100 hover:text-blue-400 dark:hover:text-blue-300 transition-colors duration-300"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-white dark:text-slate-100 hover:text-blue-400 dark:hover:text-blue-300 transition-colors duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>

        <button
          onClick={toggleTheme}
          className="p-2 rounded-md text-white dark:text-slate-100 hover:bg-white/10 dark:hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          aria-label="Toggle theme"
        >
          {theme === "light" ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              ></path>
            </svg>
          )}
        </button>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setOpen((s) => !s)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="
              p-2 rounded-md
              text-white dark:text-slate-100
              hover:bg-white/10 dark:hover:bg-white/5
              focus:outline-none focus:ring-2 focus:ring-blue-400
              transition
            "
          >
            <span className="sr-only">Toggle menu</span>
            {open ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div
        id="mobile-menu"
        className={`
          md:hidden mt-2 mx-4 rounded-xl overflow-hidden
          bg-white/8 dark:bg-black/30 backdrop-blur-md
          border border-white/10 dark:border-white/20
          shadow-lg transition-all duration-200
          ${
            open
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0 pointer-events-none"
          }
        `}
        aria-hidden={!open}
      >
        <ul className="flex flex-col gap-1 p-3">
          <li>
            <Link
              href="/"
              className="block w-full px-3 py-2 rounded-md text-white dark:text-slate-100 hover:bg-white/5 dark:hover:bg-white/5 transition"
              onClick={() => setOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="block w-full px-3 py-2 rounded-md text-white dark:text-slate-100 hover:bg-white/5 dark:hover:bg-white/5 transition"
              onClick={() => setOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className="block w-full px-3 py-2 rounded-md text-white dark:text-slate-100 hover:bg-white/5 dark:hover:bg-white/5 transition"
              onClick={() => setOpen(false)}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="block w-full px-3 py-2 rounded-md text-white dark:text-slate-100 hover:bg-white/5 dark:hover:bg-white/5 transition"
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
