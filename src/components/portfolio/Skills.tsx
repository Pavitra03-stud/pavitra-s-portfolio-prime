import { motion } from "framer-motion";
import {
  SiJavascript, SiTypescript, SiPython, SiCplusplus,
  SiReact, SiNextdotjs, SiTailwindcss, SiHtml5, SiCss3, SiRedux,
  SiNodedotjs, SiExpress, SiMongodb, SiMysql, SiFirebase,
  SiGit, SiGithub, SiDocker, SiPostman, SiVercel,
} from "react-icons/si";

const groups = [
  {
    title: "Languages",
    items: [
      { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
      { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
      { icon: SiPython, name: "Python", color: "#3776AB" },
      { icon: SiCplusplus, name: "C++", color: "#00599C" },
    ],
  },
  {
    title: "Frontend",
    items: [
      { icon: SiReact, name: "React", color: "#61DAFB" },
      { icon: SiNextdotjs, name: "Next.js", color: "#ffffff" },
      { icon: SiTailwindcss, name: "Tailwind", color: "#38BDF8" },
      { icon: SiRedux, name: "Redux", color: "#764ABC" },
      { icon: SiHtml5, name: "HTML5", color: "#E34F26" },
      { icon: SiCss3, name: "CSS3", color: "#1572B6" },
    ],
  },
  {
    title: "Backend",
    items: [
      { icon: SiNodedotjs, name: "Node.js", color: "#339933" },
      { icon: SiExpress, name: "Express", color: "#ffffff" },
      { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
      { icon: SiMysql, name: "MySQL", color: "#4479A1" },
      { icon: SiFirebase, name: "Firebase", color: "#FFCA28" },
    ],
  },
  {
    title: "Tools",
    items: [
      { icon: SiGit, name: "Git", color: "#F05032" },
      { icon: SiGithub, name: "GitHub", color: "#ffffff" },
      { icon: SiDocker, name: "Docker", color: "#2496ED" },
      { icon: SiPostman, name: "Postman", color: "#FF6C37" },
      { icon: SiVercel, name: "Vercel", color: "#ffffff" },
    ],
  },
];

import { SectionHeading } from "./SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="relative py-28 px-4">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Skills"
          title="My technical toolkit"
          subtitle="The technologies I use day-to-day to design, build, and deploy."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {groups.map((g, gi) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
              className="glass rounded-3xl p-6 sm:p-8 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-primary/10 blur-3xl group-hover:bg-primary/20 transition" />
              <div className="relative">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-display text-xl font-semibold">{g.title}</h3>
                  <span className="text-xs text-muted-foreground">
                    {g.items.length} skills
                  </span>
                </div>

                <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                  {g.items.map((s, i) => (
                    <motion.div
                      key={s.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      whileHover={{ y: -4 }}
                      className="group/card flex flex-col items-center gap-2 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-border p-3 transition-all"
                    >
                      <s.icon
                        className="h-7 w-7 transition-transform group-hover/card:scale-110"
                        style={{ color: s.color }}
                      />
                      <span className="text-[11px] text-muted-foreground text-center">
                        {s.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
