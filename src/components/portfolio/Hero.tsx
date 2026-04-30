import { motion } from "framer-motion";
import { ArrowRight, Mail, Sparkles, Github, Linkedin } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24"
    >
      {/* Background layers */}
      <div className="absolute inset-0 hero-bg" />
      <div className="absolute inset-0 grid-bg" />
      <div
        aria-hidden
        className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-primary/30 blur-[120px] animate-blob"
      />
      <div
        aria-hidden
        className="absolute -bottom-40 -right-20 h-[500px] w-[500px] rounded-full bg-accent/30 blur-[120px] animate-blob"
        style={{ animationDelay: "3s" }}
      />

      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-muted-foreground mb-8"
        >
          <Sparkles className="h-3.5 w-3.5 text-primary" />
          Available for new opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight leading-[1.05]"
        >
          Pavitra <span className="gradient-text">G V</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-6 text-xl sm:text-2xl text-foreground/80 font-display"
        >
          Full Stack Developer · Frontend Specialist
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-5 mx-auto max-w-2xl text-base sm:text-lg text-muted-foreground"
        >
          I craft fast, elegant web experiences — blending thoughtful design with
          robust engineering to ship products people love to use.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-10 flex flex-col sm:flex-row gap-3 items-center justify-center"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] hover:scale-[1.03] transition-transform"
          >
            View Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full glass px-7 py-3.5 text-sm font-semibold hover:bg-white/10 transition"
          >
            <Mail className="h-4 w-4" />
            Contact
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-12 flex items-center justify-center gap-4 text-muted-foreground"
        >
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-foreground transition">
            <Github className="h-5 w-5" />
          </a>
          <span className="h-1 w-1 rounded-full bg-muted-foreground/40" />
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-foreground transition">
            <Linkedin className="h-5 w-5" />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="h-10 w-6 rounded-full border border-border flex items-start justify-center p-1.5">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="h-1.5 w-1.5 rounded-full bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
}
