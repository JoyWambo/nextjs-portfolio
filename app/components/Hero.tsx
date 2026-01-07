"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <main className="grow container mx-auto p-4 pt-20 w-full">
      <section
        aria-labelledby="hero-title"
        className="
          text-center py-20 px-4 sm:px-6
          rounded-2xl
          bg-white/10 dark:bg-black/40
          backdrop-blur-md
          border border-white/10 dark:border-white/20
          shadow-2xl
          transition-colors duration-300
        "
      >
        <h1
          id="hero-title"
          className="text-5xl md:text-6xl font-extrabold mb-6 text-white dark:text-slate-100"
        >
          Welcome to My Portfolio
        </h1>

        <p className="text-lg md:text-xl mb-8 text-slate-200 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
          I’m a skilled software engineer with expertise in modern web
          technologies. I build performant, accessible, and delightful web
          applications using cutting-edge tools and frameworks.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          <Link
            href="/about"
            className="
              inline-flex items-center justify-center
              bg-blue-600 dark:bg-blue-600/95 text-white
              px-4 py-2 sm:px-6 sm:py-3 rounded-2xl
              shadow-lg hover:shadow-xl
              transition transform duration-300
              hover:-translate-y-1 hover:scale-105
              focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400
            "
            aria-label="Learn more about me"
          >
            Learn More About Me
          </Link>

          <Link
            href="/projects"
            className="
              inline-flex items-center justify-center
              bg-transparent border border-white/20 dark:border-white/10 text-white
              px-6 py-3 rounded-2xl
              shadow-sm hover:shadow-md
              transition transform duration-300
              hover:-translate-y-1 hover:scale-102
              focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400
            "
            aria-label="View my projects"
          >
            View My Projects
          </Link>

          <Link
            href="/contact"
            className="
              inline-flex items-center justify-center
              bg-gradient-to-r from-blue-700 to-blue-800 text-white
              px-6 py-3 rounded-2xl
              shadow-lg hover:shadow-xl
              transition transform duration-300
              hover:-translate-y-1 hover:scale-105
              focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400
            "
            aria-label="Get in touch"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </main>
  );
}
