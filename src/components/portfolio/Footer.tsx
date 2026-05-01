// export function Footer() {
//   return (
//     <footer className="border-t border-border py-10 px-4">
//       <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
//         <div>
//           © {new Date().getFullYear()} Pavitra G V. Crafted with care.
//         </div>
//         <div className="flex items-center gap-2">
//           <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
//           Available for opportunities
//         </div>
//       </div>
//     </footer>
//   );
// }




import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border py-10 px-4">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-muted-foreground">

        {/* Left */}
        <div className="text-center sm:text-left">
          © {new Date().getFullYear()} Pavitra G V. Crafted with care.
        </div>

        {/* Center - Social Links */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Pavitra03-stud"
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground transition"
          >
            <Github className="h-5 w-5" />
          </a>

          <a
            href="https://www.linkedin.com/in/pavitra-g-v-873572332"
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground transition"
          >
            <Linkedin className="h-5 w-5" />
          </a>

          <a
            href="mailto:gvpavitraganesh@gmail.com"
            className="hover:text-foreground transition"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>

        {/* Right */}
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          Available for opportunities
        </div>

      </div>
    </footer>
  );
}