import Navigation from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description:
        "A full-stack e-commerce website built with Next.js, featuring user authentication, payment integration, and admin dashboard.",
      image: "/next.svg",
      link: "#",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A React-based task management application with drag-and-drop functionality, real-time updates, and team collaboration features.",
      image: "/vercel.svg",
      link: "#",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "A responsive weather dashboard that displays current weather and forecasts using a third-party API, built with Vue.js.",
      image: "/globe.svg",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="grow container mx-auto p-4 pt-20 bg-slate-900">
        <section className="text-center py-20">
          <h1 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">
            My Projects
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white dark:bg-slate-700 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 border border-slate-300 dark:border-slate-600"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={150}
                  height={150}
                  className="mx-auto mb-4"
                />
                <h2 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">
                  {project.title}
                </h2>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  {project.description}
                </p>
                <Link
                  href={project.link}
                  className="bg-blue-600 dark:bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-500 dark:hover:bg-blue-600 transition duration-300 inline-block"
                >
                  View Project
                </Link>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
