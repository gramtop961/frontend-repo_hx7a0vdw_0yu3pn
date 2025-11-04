import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100 antialiased">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-neutral-200/80 dark:border-neutral-800">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 text-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-neutral-600 dark:text-neutral-400">© {new Date().getFullYear()} Crafted with care.</p>
          <div className="text-neutral-500 dark:text-neutral-400">
            Built with React • Tailwind • Motion
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
