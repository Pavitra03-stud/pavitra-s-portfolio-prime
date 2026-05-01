import { motion } from "framer-motion";
import { Trophy, Briefcase, GraduationCap } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const items = [
  {
    icon: Trophy,
    title: "LeetCode Progress",
    text: "Consistently solving problems across DSA topics — sharpening problem-solving every day.",
    badge: "70+ solved",
  },
  {
    icon: Briefcase,
    title: "Internship Selection — iStudio",
    text: "Earned selection certificate for internship opportunity at iStudio through technical assessment.",
    badge: "Certified",
  },
  {
    icon: GraduationCap,
    title: "DevOps Workshop",
    text: "Completed a hands-on DevOps workshop covering CI/CD, Docker and deployment workflows.",
    badge: "Certified",
  },
];

export function Achievements() {
  return (
    <section id="achievements" className="relative py-28 px-4">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Achievements"
          title="Milestones & recognition"
          subtitle="A few highlights from my journey so far."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-3xl p-7 relative overflow-hidden group"
            >
              <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-accent/20 blur-3xl group-hover:bg-accent/30 transition" />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground shadow-[var(--shadow-glow)]">
                    <it.icon className="h-5 w-5" />
                  </div>
                  <span className="rounded-full bg-primary/15 text-primary px-3 py-1 text-[11px] font-medium">
                    {it.badge}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold">{it.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
