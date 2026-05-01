import { motion } from "framer-motion";
import { Brain, Code2, Rocket, Sparkles, TrendingUp, Users, Layers, Target,  } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const strengths = [
  { icon: Code2, title: "Clean Architecture", text: "Readable, scalable codebases that ship." },
  { icon: Rocket, title: "Performance First", text: "Optimized loads, smooth 60fps UI." },
  { icon: Sparkles, title: "Design Sensibility", text: "Pixel-precise, accessible interfaces." },
  { icon: Users, title: "Team Collaboration", text: "Clear communication and effective teamwork." },
  { icon: Brain, title: "Problem Solving", text: "Breaking complex problems into simple solutions." },
  { icon: Layers, title: "Full Stack Expertise", text: "Building seamless frontend and backend systems." },
  { icon: Target, title: "User-Centered Design", text: "Focused on usability and user satisfaction." },
  { icon: TrendingUp, title: "Continuous Learning", text: "Always exploring and improving with new tech." },
];

export function About() {
  return (
    <section id="about" className="relative py-28 px-4">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About"
          title="Engineer who loves the craft"
          subtitle="Computer Science student turning ideas into refined digital products."
        />

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 glass rounded-3xl p-8 relative overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-primary/30 blur-3xl" />
            <div className="relative">
              <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-3xl font-display font-bold text-primary-foreground shadow-[var(--shadow-glow)]">
                P
              </div>
              <h3 className="mt-6 font-display text-2xl font-semibold">Hello, I'm Pavitra </h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                I’m a passionate Full Stack Developer and UI/UX Designer who builds complete digital experiences from concept to deployment. I combine strong technical skills with a keen eye for design to create applications that are both functional and visually engaging.
                I specialize in developing scalable, high-performance web applications using modern technologies, focusing on clean, maintainable code and seamless user experiences. As a designer, I pay close attention to user behavior and interaction patterns to craft intuitive and user-friendly interfaces.
                I’m constantly learning and evolving to stay updated with the latest trends, aiming to build impactful products that solve real-world problems and deliver a smooth, delightful user journey.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["React", "TypeScript", "Node.js", "Tailwind", "MongoDB"].map((t) => (
                  <span key={t} className="rounded-full glass px-3 py-1 text-xs">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
            {strengths.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="gradient-border p-6 hover:-translate-y-1 transition-transform"
              >
                <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-primary">
                  <s.icon className="h-5 w-5" />
                </div>
                <h4 className="mt-4 font-display font-semibold">{s.title}</h4>
                <p className="mt-1 text-sm text-muted-foreground">{s.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
