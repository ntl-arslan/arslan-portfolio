import { Rocket, Users, Zap, Shield } from "lucide-react";

const highlights = [
  {
    icon: Rocket,
    title: "End-to-End Ownership",
    description:
      "From database schema to user interface — I own features completely, shipping production-ready software across the full stack.",
  },
  {
    icon: Zap,
    title: "High-Volume Systems",
    description:
      "Optimized queries, eliminated N+1 patterns, and reduced API response times across enterprise CRM and billing platforms.",
  },
  {
    icon: Users,
    title: "Cross-Functional Leadership",
    description:
      "Drive technical decisions and represent engineering in sprint planning with Product, QA, CRM, and Billing stakeholders.",
  },
  {
    icon: Shield,
    title: "Security-First Engineering",
    description:
      "Led HashiCorp Vault migration, secure payment integrations, and patched legacy security vulnerabilities at scale.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">
            About Me
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Building Software That Scales
          </h2>
          <hr className="section-divider" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Bio */}
          <div className="space-y-5">
            <p className="text-slate-300 text-lg leading-relaxed">
              I&apos;m a{" "}
              <span className="text-blue-400 font-semibold">
                Senior Software Engineer
              </span>{" "}
              with 3+ years of experience building and owning production software
              end-to-end — from database design through backend APIs to polished
              user interfaces.
            </p>
            <p className="text-slate-400 leading-relaxed">
              At{" "}
              <span className="text-white font-medium">Nayatel</span>, I&apos;ve
              architected customer-facing self-service platforms, led an AI-powered
              content automation product (Jarayid), driven secure payment gateway
              integrations, and modernized legacy PHP codebases — all while
              maintaining strong engineering practices and code quality.
            </p>
            <p className="text-slate-400 leading-relaxed">
              I&apos;m passionate about leveraging AI-assisted development tools to
              accelerate implementation and debugging, while keeping architectural
              standards high. I thrive in fast-paced environments where I can
              collaborate with Product, Design, and QA teams to ship
              customer-focused solutions.
            </p>

            <div className="pt-4 flex flex-wrap gap-3">
              {["TypeScript", "NestJS", "Next.js", "React", "PostgreSQL", "PHP", "Node.js"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg bg-blue-900/30 border border-blue-700/30 text-blue-300 text-sm font-medium"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Right: Highlight Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="card-hover p-5 rounded-xl bg-[#0d1225] border border-slate-800 hover:border-blue-700/50"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-600/20 flex items-center justify-center mb-4">
                  <Icon size={20} className="text-blue-400" />
                </div>
                <h3 className="text-white font-semibold mb-2 text-sm">{title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
