import { Code2, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800/50 py-10 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2 text-blue-400 font-bold">
            <Code2 size={20} />
            <span>Arslan Ali</span>
          </div>

          {/* Copyright */}
          <p className="text-slate-500 text-sm text-center">
            &copy; {year} Arslan Ali. Built with{" "}
            <span className="text-blue-400">Next.js</span> &amp;{" "}
            <span className="text-blue-400">Tailwind CSS</span>.
          </p>

          {/* Socials */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/arslanneni"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-blue-400 transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href="https://linkedin.com/in/arslan-ali-25a606226"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href="mailto:arslanalidev23@gmail.com"
              className="text-slate-500 hover:text-blue-400 transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
