import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send, MapPin } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3500);
    (e.currentTarget as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="relative py-28 px-4">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something great"
          subtitle="Have a project, role, or just want to say hi? I'd love to hear from you."
        />

        <div className="grid lg:grid-cols-5 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 glass rounded-3xl p-7 relative overflow-hidden"
          >
            <div className="absolute -top-20 -left-20 h-48 w-48 rounded-full bg-primary/30 blur-3xl" />
            <div className="relative space-y-5">
              <h3 className="font-display text-2xl font-semibold">Reach out</h3>
              <p className="text-sm text-muted-foreground">
                Open to internships, freelance, and collaboration.
              </p>

              <a
                href="mailto:pavitra@example.com"
                className="flex items-center gap-3 rounded-2xl bg-white/[0.04] border border-border px-4 py-3 hover:bg-white/[0.08] transition"
              >
                <span className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground">
                  <Mail className="h-4 w-4" />
                </span>
                <div>
                  <div className="text-xs text-muted-foreground">Email</div>
                  <div className="text-sm">pavitra@example.com</div>
                </div>
              </a>

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-2xl bg-white/[0.04] border border-border px-4 py-3 hover:bg-white/[0.08] transition"
              >
                <span className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground">
                  <Github className="h-4 w-4" />
                </span>
                <div>
                  <div className="text-xs text-muted-foreground">GitHub</div>
                  <div className="text-sm">@pavitragv</div>
                </div>
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-2xl bg-white/[0.04] border border-border px-4 py-3 hover:bg-white/[0.08] transition"
              >
                <span className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground">
                  <Linkedin className="h-4 w-4" />
                </span>
                <div>
                  <div className="text-xs text-muted-foreground">LinkedIn</div>
                  <div className="text-sm">in/pavitragv</div>
                </div>
              </a>

              <div className="flex items-center gap-2 pt-2 text-xs text-muted-foreground">
                <MapPin className="h-3.5 w-3.5" /> Based in India · Open to remote
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            onSubmit={onSubmit}
            className="lg:col-span-3 gradient-border p-7 space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-muted-foreground">Name</label>
                <input
                  required
                  type="text"
                  className="mt-1 w-full rounded-xl bg-white/[0.04] border border-border px-4 py-3 text-sm outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-xs text-muted-foreground">Email</label>
                <input
                  required
                  type="email"
                  className="mt-1 w-full rounded-xl bg-white/[0.04] border border-border px-4 py-3 text-sm outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div>
              <label className="text-xs text-muted-foreground">Subject</label>
              <input
                type="text"
                className="mt-1 w-full rounded-xl bg-white/[0.04] border border-border px-4 py-3 text-sm outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition"
                placeholder="Project, role, or idea"
              />
            </div>
            <div>
              <label className="text-xs text-muted-foreground">Message</label>
              <textarea
                required
                rows={5}
                className="mt-1 w-full rounded-xl bg-white/[0.04] border border-border px-4 py-3 text-sm outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition resize-none"
                placeholder="Tell me a bit about what you're working on…"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] hover:scale-[1.02] transition"
            >
              {sent ? "Message sent ✓" : (<>Send message <Send className="h-4 w-4" /></>)}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
