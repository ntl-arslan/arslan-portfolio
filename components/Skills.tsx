import { Code2, Server, Database, CreditCard, Bot, Shield, Layout, Users, Wrench } from "lucide-react";

const skillCategories = [
  {
    icon: Code2,
    label: "Languages",
    color: "blue",
    skills: ["PHP", "JavaScript", "TypeScript"],
  },
  {
    icon: Server,
    label: "Frameworks & Runtime",
    color: "violet",
    skills: ["NestJS", "Next.js", "React", "Node.js", "Express.js"],
  },
  {
    icon: Server,
    label: "Backend & Architecture",
    color: "blue",
    skills: [
      "RESTful APIs",
      "Microservices",
      "System Design",
      "Authentication & Authorization",
      "Third-Party API Integration",
    ],
  },
  {
    icon: Database,
    label: "Databases",
    color: "emerald",
    skills: ["PostgreSQL", "MySQL", "Oracle Database", "SQL Query Optimization"],
  },
  {
    icon: CreditCard,
    label: "Payments & Billing",
    color: "amber",
    skills: [
      "Payment Gateway Integration",
      "Billing System Automation",
      "Subscription Management",
    ],
  },
  {
    icon: Bot,
    label: "AI & Automation",
    color: "violet",
    skills: [
      "HeyGen API",
      "Meta APIs",
      "Cron-Based Scheduling",
      "Social Media Automation",
      "AI-Augmented Development",
      "GitHub Copilot",
      "ChatGPT",
      "Claude",
    ],
  },
  {
    icon: Shield,
    label: "Security",
    color: "red",
    skills: ["HashiCorp Vault", "JWT", "Vault API", "Secure Credential Management"],
  },
  {
    icon: Layout,
    label: "Frontend",
    color: "cyan",
    skills: ["React", "Next.js", "HTML5", "CSS3", "Bootstrap", "Tailwind CSS"],
  },
  {
    icon: Users,
    label: "Leadership & Practice",
    color: "blue",
    skills: [
      "End-to-End Feature Ownership",
      "Technical Leadership",
      "Code Reviews",
      "Cross-Functional Collaboration",
      "Mentoring",
    ],
  },
  {
    icon: Wrench,
    label: "Tools & DevOps",
    color: "slate",
    skills: ["Git", "GitHub", "Postman", "Swagger", "VS Code"],
  },
];

const colorStyles: Record<string, { icon: string; tag: string; border: string }> = {
  blue: {
    icon: "bg-blue-600/20 text-blue-400",
    tag: "bg-blue-900/20 border-blue-800/30 text-blue-300",
    border: "border-blue-700/30",
  },
  violet: {
    icon: "bg-violet-600/20 text-violet-400",
    tag: "bg-violet-900/20 border-violet-800/30 text-violet-300",
    border: "border-violet-700/30",
  },
  emerald: {
    icon: "bg-emerald-600/20 text-emerald-400",
    tag: "bg-emerald-900/20 border-emerald-800/30 text-emerald-300",
    border: "border-emerald-700/30",
  },
  amber: {
    icon: "bg-amber-600/20 text-amber-400",
    tag: "bg-amber-900/20 border-amber-800/30 text-amber-300",
    border: "border-amber-700/30",
  },
  red: {
    icon: "bg-red-600/20 text-red-400",
    tag: "bg-red-900/20 border-red-800/30 text-red-300",
    border: "border-red-700/30",
  },
  cyan: {
    icon: "bg-cyan-600/20 text-cyan-400",
    tag: "bg-cyan-900/20 border-cyan-800/30 text-cyan-300",
    border: "border-cyan-700/30",
  },
  slate: {
    icon: "bg-slate-600/20 text-slate-400",
    tag: "bg-slate-800/30 border-slate-700/30 text-slate-300",
    border: "border-slate-700/30",
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 bg-[#080c18]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Expertise
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Technical Skills
          </h2>
          <hr className="section-divider" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map(({ icon: Icon, label, color, skills }) => {
            const styles = colorStyles[color];
            return (
              <div
                key={label}
                className={`card-hover p-5 rounded-xl bg-[#0d1225] border border-slate-800 hover:${styles.border}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-9 h-9 rounded-lg ${styles.icon} flex items-center justify-center flex-shrink-0`}>
                    <Icon size={18} />
                  </div>
                  <h3 className="text-white font-semibold text-sm">{label}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-2.5 py-1 rounded-md border text-xs font-medium ${styles.tag}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
