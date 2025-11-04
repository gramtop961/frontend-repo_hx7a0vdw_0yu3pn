import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative pt-28 pb-20 sm:pt-32 sm:pb-28 overflow-hidden">
      {/* Decorative gradients */}
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-gradient-to-br from-indigo-500/20 to-fuchsia-500/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-gradient-to-tr from-rose-500/20 to-amber-500/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <span className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full border border-neutral-200/70 dark:border-neutral-800 bg-white dark:bg-neutral-900/70">
              <Sparkles className="h-4 w-4 text-yellow-500" />
              Available for freelance work
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
              Elevating ideas into elegant digital experiences
            </h1>
            <p className="mt-5 text-neutral-600 dark:text-neutral-400 text-base sm:text-lg">
              I’m a designer-developer crafting aesthetic, performant interfaces with a focus on detail and delightful motion.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#projects" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:opacity-90 transition">
                View Projects
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition">
                Get in touch
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="relative aspect-square rounded-3xl border border-neutral-200/80 dark:border-neutral-800 overflow-hidden bg-gradient-to-br from-neutral-100 to-neutral-50 dark:from-neutral-900 dark:to-neutral-950">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.15),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(236,72,153,0.15),transparent_35%),radial-gradient(circle_at_20%_80%,rgba(244,63,94,0.15),transparent_40%)]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative p-8">
                  <div className="absolute inset-0 blur-2xl bg-gradient-to-tr from-indigo-500/30 via-fuchsia-500/30 to-rose-500/30 rounded-full" />
                  <img
                    src="https://images.unsplash.com/photo-1520975922533-5d95a3c5d9bf?q=80&w=1080&auto=format&fit=crop"
                    alt="Profile aesthetic"
                    className="relative z-10 h-64 w-64 rounded-2xl object-cover shadow-2xl shadow-indigo-500/20"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
