import Navigation from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="grow container mx-auto p-4 pt-20 bg-linear-to-b from-slate-900 to-slate-800">
        <section className="text-center py-20">
          <h1 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">
            About Me
          </h1>
          <p className="text-lg mb-8 text-slate-600 dark:text-slate-300">
            I am a passionate software engineer with experience in various
            technologies. I love building web applications and solving complex
            problems.
          </p>
          <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">
            Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <div className="bg-slate-700 p-6 rounded-2xl hover:bg-slate-600 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105 border border-slate-600">
              <div className="text-3xl mb-2">🟨</div>
              <h3 className="font-semibold text-slate-900 dark:text-white">
                JavaScript
              </h3>
            </div>
            <div className="bg-slate-700 p-6 rounded-2xl hover:bg-slate-600 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105 border border-slate-600">
              <div className="text-3xl mb-2">⚛️</div>
              <h3 className="font-semibold text-white">React</h3>
            </div>
            <div className="bg-slate-700 p-6 rounded-2xl hover:bg-slate-600 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105 border border-slate-600">
              <div className="text-3xl mb-2">▲</div>
              <h3 className="font-semibold text-white">Next.js</h3>
            </div>
            <div className="bg-slate-700 p-6 rounded-2xl hover:bg-slate-600 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105 border border-slate-600">
              <div className="text-3xl mb-2">🔷</div>
              <h3 className="font-semibold text-white">TypeScript</h3>
            </div>
            <div className="bg-slate-700 p-6 rounded-2xl hover:bg-slate-600 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105 border border-slate-600">
              <div className="text-3xl mb-2">🟢</div>
              <h3 className="font-semibold text-white">Node.js</h3>
            </div>
            <div className="bg-slate-700 p-6 rounded-2xl hover:bg-slate-600 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105 border border-slate-600">
              <div className="text-3xl mb-2">🎨</div>
              <h3 className="font-semibold text-white">Tailwind CSS</h3>
            </div>
            <div className="bg-slate-700 p-6 rounded-2xl hover:bg-slate-600 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105 border border-slate-600">
              <div className="text-3xl mb-2">🐍</div>
              <h3 className="font-semibold text-white">Python</h3>
            </div>
            <div className="bg-slate-700 p-6 rounded-2xl hover:bg-slate-600 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105 border border-slate-600">
              <div className="text-3xl mb-2">📚</div>
              <h3 className="font-semibold text-white">Git</h3>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
