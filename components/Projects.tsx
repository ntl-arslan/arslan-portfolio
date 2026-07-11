import { ExternalLink, Database, Bot, Shield, Globe, Code, Gamepad2 } from "lucide-react";

const projects = [
  {
    icon: Database,
    title: "Nayatel CRM (NCRM)",
    subtitle: "Enterprise CRM Platform",
    stack: ["NestJS", "Next.js", "Oracle", "PostgreSQL"],
    color: "blue",
    description:
      "Led full-stack development of CRM modules covering the complete customer lifecycle: onboarding, service provisioning, billing, payment workflows, and account management.",
    highlights: [
      "Designed dynamic dashboards enabling CRM agents to manage records and process billing in real time.",
      "Architected and optimized complex Oracle and PostgreSQL queries for high-volume operations.",
      "Built scalable service architecture supporting enterprise CRM and customer management platforms.",
    ],
  },
  {
    icon: Bot,
    title: "Jarayid Automation Platform",
    subtitle: "AI-Powered Content Automation",
    stack: ["NestJS", "HeyGen API", "Meta APIs", "TypeScript"],
    color: "violet",
    description:
      "Owned end-to-end delivery of an AI-powered platform that automatically generates news videos using HeyGen's AI avatar API, then schedules and publishes them across social media platforms.",
    highlights: [
      "Implemented cron-based scheduling, content queuing, and publishing analytics.",
      "Architected webhook-driven event pipelines for async video generation callbacks.",
      "Fully eliminated manual content creation and distribution workflows.",
    ],
  },
  {
    icon: Shield,
    title: "Vault Credential Migration",
    subtitle: "Security Infrastructure",
    stack: ["PHP", "HashiCorp Vault API", "DevOps"],
    color: "emerald",
    description:
      "Led company-wide migration of application secrets from hardcoded values to a centralized HashiCorp Vault system — strengthening security posture and credential lifecycle management.",
    highlights: [
      "Audited entire codebase to identify all hardcoded credentials across configuration files.",
      "Integrated HashiCorp Vault APIs enabling dynamic secret rotation and access control.",
      "Improved security posture across development, staging, and production environments.",
    ],
  },
  {
    icon: Globe,
    title: "Customer Portal APIs",
    subtitle: "Self-Service Platform",
    stack: ["NestJS", "PostgreSQL", "React"],
    color: "blue",
    description:
      "Led design and development of RESTful APIs for customer self-service capabilities — enabling customers to independently manage plan assignments, service relocation, and account changes.",
    highlights: [
      "Drove a reduction in support ticket volume through self-service capabilities.",
      "Owned input validation, error handling, and response-contract design.",
      "Ensured consistent API behavior across web and mobile clients.",
    ],
  },
  {
    icon: Code,
    title: "BL1 Migration",
    subtitle: "Legacy Modernization",
    stack: ["PHP", "Refactoring", "Security"],
    color: "amber",
    description:
      "Led the assessment and refactor of a legacy PHP monolith, upgrading from an outdated PHP version to the latest stable release while resolving deprecated function usage and security vulnerabilities.",
    highlights: [
      "Upgraded PHP version and resolved all deprecated function usage.",
      "Drove modular code restructuring that improved maintainability.",
      "Reduced technical debt, making future feature development significantly faster.",
    ],
  },
  {
    icon: Gamepad2,
    title: "EXITLAG Integration",
    subtitle: "Gaming API Integration",
    stack: ["PHP", "REST APIs", "Oracle"],
    color: "violet",
    description:
      "Led integration of third-party EXITLAG APIs to enable Mobile and PC gaming plan purchases, automated subscription provisioning, and account lifecycle management.",
    highlights: [
      "Coordinated directly with EXITLAG engineering team on API contracts and auth flows.",
      "Enabled gaming plan purchases and automated subscription provisioning.",
      "Aligned on feature rollout timelines with external engineering team.",
    ],
  },
];

const colorMap: Record<string, string> = {
  blue: "bg-blue-600/20 text-blue-400 border-blue-700/30",
  violet: "bg-violet-600/20 text-violet-400 border-violet-700/30",
  emerald: "bg-emerald-600/20 text-emerald-400 border-emerald-700/30",
  amber: "bg-amber-600/20 text-amber-400 border-amber-700/30",
};

const iconBgMap: Record<string, string> = {
  blue: "bg-blue-600/20",
  violet: "bg-violet-600/20",
  emerald: "bg-emerald-600/20",
  amber: "bg-amber-600/20",
};

const iconColorMap: Record<string, string> = {
  blue: "text-blue-400",
  violet: "text-violet-400",
  emerald: "text-emerald-400",
  amber: "text-amber-400",
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Portfolio
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Key Projects
          </h2>
          <hr className="section-divider" />
          <p className="mt-6 text-slate-400 max-w-xl mx-auto">
            Production systems built and owned at Nayatel — from AI automation
            platforms to enterprise CRM and security infrastructure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(({ icon: Icon, title, subtitle, stack, color, description, highlights }) => (
            <div
              key={title}
              className="card-hover flex flex-col rounded-2xl bg-[#0d1225] border border-slate-800 hover:border-blue-700/40 overflow-hidden"
            >
              {/* Card Header */}
              <div className="p-6 pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-11 h-11 rounded-xl ${iconBgMap[color]} flex items-center justify-center`}
                  >
                    <Icon size={22} className={iconColorMap[color]} />
                  </div>
                  <ExternalLink size={16} className="text-slate-600" />
                </div>
                <h3 className="text-white font-bold text-lg mb-1">{title}</h3>
                <p className="text-slate-500 text-xs font-medium uppercase tracking-wide mb-3">
                  {subtitle}
                </p>
                <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
              </div>

              {/* Highlights */}
              <div className="px-6 pb-4 flex-1">
                <ul className="space-y-2">
                  {highlights.map((h, i) => (
                    <li key={i} className="flex gap-2 text-slate-400 text-xs leading-relaxed">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-blue-500 flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stack Tags */}
              <div className="px-6 pb-6 pt-2 border-t border-slate-800 mt-2">
                <div className="flex flex-wrap gap-2 pt-4">
                  {stack.map((tech) => (
                    <span
                      key={tech}
                      className={`px-2 py-1 rounded-md border text-xs font-medium ${colorMap[color]}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
