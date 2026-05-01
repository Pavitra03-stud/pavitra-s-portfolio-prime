import { motion } from "framer-motion";
import { Github, ExternalLink, Star } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const projects = [
  {
    title: "Website Builder — Client-Side CMS",
    description:
      "A no-code CMS that lets users compose pages with dynamic UI rendering, nested menus, drag-and-drop blocks, and real-time preview.",
    tech: ["React","CSS","CMS-tool","JavaScript","Vite"],
    github: "https://github.com/Pavitra03-stud/cms-portfolio.git",
    demo: "#",
    featured: true,
    highlights: ["Dynamic UI rendering", "Nested menu system", "Live preview"],
  },
{
  title: "Frontend Clone — Modern UI Replication",
  description:
    "A pixel-perfect clone of a modern website built to practice responsive design, layout structuring, and UI accuracy using React and Tailwind CSS.",
  tech: ["React", "Tailwind CSS"],
  github: "https://github.com/Pavitra03-stud/accredian-clone", // add your real link
  demo: "#",
},
{
  title: "Catering Website — Business Platform",
  description:
    "A responsive catering service website showcasing menus, services, and contact features. Designed with a clean UI to enhance user experience and business visibility.",
  tech: ["HTML", "CSS", "Node.js", "MongoDB", "Express"],
  github: "https://github.com/SadanasreeCM/RoobaCatering",
  demo: "#",
},
{
  title: "Dyslexia Aid — Learning Support Tool",
  description:
    "An assistive web application designed to help users with dyslexia through improved readability, text customization, and user-friendly UI features.",
  tech: ["React", "JavaScript", "CSS"],
  github: "https://github.com/Pavitra03-stud/CurioKids",
  demo: "#",
},
];

export function Projects() {
  return (
    <section id="projects" className="relative py-28 px-4">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Projects"
          title="Selected recent work"
          subtitle="A peek into things I've built — products, tools and experiments."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`gradient-border p-6 sm:p-8 group relative overflow-hidden hover:-translate-y-1 transition-transform ${
                p.featured ? "md:col-span-2" : ""
              }`}
            >
              {p.featured && (
                <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 blur-3xl" />
              )}
              <div className="relative">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    {p.featured && (
                      <div className="inline-flex items-center gap-1.5 rounded-full bg-primary/15 text-primary px-3 py-1 text-xs mb-3">
                        <Star className="h-3 w-3" /> Featured Project
                      </div>
                    )}
                    <h3 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight">
                      {p.title}
                    </h3>
                  </div>
                  <div className="flex gap-2 shrink-0">
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub"
                      className="h-10 w-10 rounded-full glass flex items-center justify-center hover:glow transition"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                    
                  </div>
                </div>

                <p className="mt-4 text-muted-foreground leading-relaxed">
                  {p.description}
                </p>

                {p.highlights && (
                  <ul className="mt-4 grid sm:grid-cols-3 gap-2">
                    {p.highlights.map((h) => (
                      <li
                        key={h}
                        className="rounded-xl bg-white/[0.03] border border-border px-3 py-2 text-xs text-foreground/80"
                      >
                        ✦ {h}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-white/[0.04] border border-border px-3 py-1 text-xs text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
