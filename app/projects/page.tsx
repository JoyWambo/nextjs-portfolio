"use client";

import Image from "next/image";
import Link from "next/link";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  tech?: string[];
};

const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "Full-stack e-commerce with authentication, payments, and an admin dashboard.",
    image: "/next.svg",
    link: "#",
    tech: ["Next.js", "Stripe", "Postgres"],
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "Real-time task board with drag-and-drop and team collaboration features.",
    image: "/vercel.svg",
    link: "#",
    tech: ["React", "Socket.io", "DND"],
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description:
      "Responsive weather UI with forecasts and location search using a public API.",
    image: "/globe.svg",
    link: "#",
    tech: ["Vue.js", "REST API", "Responsive"],
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen  mx-4 my-8 rounded-2xl p-8   bg-black/50  backdrop-blur-md  py-12">
      <div className="container mx-auto px-4">
        <header className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">
            My Projects
          </h1>
          <p className="mt-2 text-slate-300 max-w-2xl mx-auto">
            Selected projects showcasing architecture, UX, and production-ready
            code.
          </p>
        </header>

        <section
          aria-labelledby="projects-grid"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <article
              key={project.id}
              className="
                group relative flex flex-col h-full
                rounded-2xl p-6
                bg-black/50
                backdrop-blur-md
                border border-white/10 dark:border-white/20
                shadow-lg
                transition-transform duration-300
                hover:-translate-y-2 hover:shadow-2xl
                focus-within:-translate-y-2
              "
              role="article"
              aria-labelledby={`project-${project.id}-title`}
            >
              <div className="flex items-center justify-center mb-4">
                <div className="w-28 h-28 relative rounded-full overflow-hidden bg-white/6 dark:bg-white/6 flex-shrink-0 ring-1 ring-white/6">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="112px"
                    className="object-contain p-4"
                    priority={project.id === 1}
                  />
                </div>
              </div>

              <h2
                id={`project-${project.id}-title`}
                className="text-lg font-semibold text-white mb-2 text-center"
              >
                {project.title}
              </h2>

              <p className="text-sm text-slate-300 mb-4 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {(project.tech ?? []).map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 rounded-full bg-white/6 dark:bg-white/6 text-slate-200"
                    aria-hidden="true"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex items-center justify-between gap-4">
                <Link
                  href={project.link}
                  className="
                    inline-flex items-center gap-2
                    bg-gradient-to-r from-blue-700 to-blue-600 text-white
                    px-4 py-2 rounded-2xl
                    text-sm font-medium
                    shadow-md hover:shadow-xl
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400
                    transition
                  "
                  aria-label={`View ${project.title}`}
                >
                  View Project
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M5 12h14M13 5l7 7-7 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>

                <span className="text-xs text-slate-400">
                  Case study coming soon
                </span>
              </div>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
}
