import { Mail, Send, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">Let’s build something beautiful</h2>
            <p className="mt-3 text-neutral-600 dark:text-neutral-400">
              Have a project in mind or just want to say hi? I’d love to hear from you.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5" />
                <a className="hover:underline" href="mailto:hello@example.com">hello@example.com</a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5" />
                <a className="hover:underline" href="tel:+621234567890">+62 123 4567 890</a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5" />
                <span>Jakarta, Indonesia</span>
              </div>
            </div>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            action="mailto:hello@example.com"
            method="post"
            encType="text/plain"
            className="rounded-2xl border border-neutral-200/80 dark:border-neutral-800 p-6 sm:p-8 bg-white dark:bg-neutral-900"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full rounded-lg border border-neutral-300 dark:border-neutral-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full rounded-lg border border-neutral-300 dark:border-neutral-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
                />
              </div>
            </div>
            <div className="space-y-2 mt-4">
              <label className="text-sm">Message</label>
              <textarea
                name="message"
                rows={5}
                required
                className="w-full rounded-lg border border-neutral-300 dark:border-neutral-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
              />
            </div>
            <button type="submit" className="mt-6 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:opacity-90 transition">
              Send message
              <Send className="h-4 w-4" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
