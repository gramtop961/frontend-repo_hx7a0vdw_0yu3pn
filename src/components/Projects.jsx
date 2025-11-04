import { ExternalLink, Code2 } from "lucide-react";
import { motion } from "framer-motion";

const PROJECTS = [
  {
    title: "Aurora UI Kit",
    description:
      "A component library built with accessibility-first mindset and fluid motion.",
    tags: ["React", "Tailwind", "Framer Motion"],
    link: "#",
    color: "from-indigo-500/15 to-fuchsia-500/15",
  },
  {
    title: "Nebula Portfolio",
    description:
      "A dynamic portfolio template featuring glassmorphism and gradient orbits.",
    tags: ["Vite", "Design", "Animation"],
    link: "#",
    color: "from-emerald-500/15 to-cyan-500/15",
  },
  {
    title: "Monolith → Microservices",
    description:
      "Refactor story: breaking a legacy app into a modern, scalable architecture.",
    tags: ["FastAPI", "MongoDB", "DevOps"],
    link: "#",
    color: "from-amber-500/15 to-rose-500/15",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">Featured Projects</h2>
            <p className="mt-2 text-neutral-600 dark:text-neutral-400">
              A selection of work focused on craft, clarity, and performance.
            </p>
          </div>
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition"
          >
            Let’s collaborate
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p, idx) => (
            <motion.a
              key={p.title}
              href={p.link}
              target={p.link === "#" ? undefined : "_blank"}
              rel="noreferrer"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="group relative rounded-2xl border border-neutral-200/80 dark:border-neutral-800 overflow-hidden bg-white dark:bg-neutral-900"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${p.color}`} />
              <div className="relative p-5 sm:p-6 h-full flex flex-col">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 text-xs font-medium px-2.5 py-1 rounded-full border border-neutral-200/70 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70">
                    <Code2 className="h-4 w-4" />
                    Case Study
                  </span>
                  <ExternalLink className="h-4 w-4 opacity-60 group-hover:opacity-100 transition" />
                </div>
                <h3 className="mt-4 text-lg sm:text-xl font-semibold leading-tight">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                  {p.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-[11px] px-2 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-auto pt-6">
                  <div className="h-36 rounded-xl bg-[linear-gradient(120deg,rgba(255,255,255,0.7),rgba(255,255,255,0))] dark:bg-[linear-gradient(120deg,rgba(0,0,0,0.4),rgba(0,0,0,0))] backdrop-blur border border-white/40 dark:border-white/10" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
