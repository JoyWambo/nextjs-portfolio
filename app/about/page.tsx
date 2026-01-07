// app/about/page.tsx
import Image from "next/image";

export default function About() {
  return (
    <div className="container mx-auto p-4">
      {/* Intro / Hero */}
      <section
        aria-labelledby="about-heading"
        className="
            mx-4 my-8 rounded-2xl p-8
           bg-black/50
            backdrop-blur-md
            border border-white/10 dark:border-white/20
            shadow-2xl
            transition-colors duration-300
            text-center
          "
      >
        <h1
          id="about-heading"
          className="text-4xl md:text-5xl font-extrabold mb-4 text-black dark:text-white"
        >
          About Me
        </h1>

        <p className="text-lg md:text-xl mb-6 text-slate-200 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
          I am a passionate software engineer who builds performant, accessible,
          and maintainable web applications. I enjoy solving complex problems
          and learning new technologies to deliver delightful user experiences.
        </p>

        <div className="mx-auto w-[160px] h-[160px] relative mb-6">
          <Image
            src="/globe.svg"
            alt="Profile"
            fill
            sizes="160px"
            className="rounded-full object-cover shadow-xl transition-transform duration-300 hover:scale-105"
            priority
          />
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/projects"
            className="inline-flex items-center justify-center bg-gradient-to-r from-blue-700 to-blue-600 text-white px-5 py-3 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
          >
            View Projects
          </a>

          <a
            href="/contact"
            className="inline-flex items-center justify-center bg-transparent border border-white/10 text-white px-5 py-3 rounded-2xl shadow-sm hover:shadow-md transition transform hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
          >
            Get In Touch
          </a>
        </div>
      </section>

      {/* Skills */}
      <section aria-labelledby="skills-heading" className="mx-4 my-8">
        <h2
          id="skills-heading"
          className="text-2xl md:text-3xl font-semibold mb-6 text-white dark:text-slate-100 text-center"
        >
          Skills
        </h2>

        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {[
            { emoji: "🟨", title: "JavaScript" },
            { emoji: "⚛️", title: "React" },
            { emoji: "▲", title: "Next.js" },
            { emoji: "🔷", title: "TypeScript" },
            { emoji: "🟢", title: "Node.js" },
            { emoji: "🎨", title: "Tailwind CSS" },
            { emoji: "🐍", title: "Python" },
            { emoji: "📚", title: "Git" },
          ].map((skill) => (
            <article
              key={skill.title}
              className="
                  flex flex-col items-start gap-3 p-6 rounded-2xl
                 bg-black/50
                  backdrop-blur-md
                 border border-white/10 dark:border-white/20
                  shadow-lg
                  hover:shadow-2xl
                  transition transform duration-500
                  hover:-translate-y-1 hover:scale-[1.02]"
              aria-label={skill.title}
            >
              <div className="text-3xl">{skill.emoji}</div>
              <h3 className="text-lg font-semibold text-white dark:text-slate-100">
                {skill.title}
              </h3>
              <p className="text-sm text-slate-300 dark:text-slate-400">
                Experienced with modern patterns and best practices.
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
