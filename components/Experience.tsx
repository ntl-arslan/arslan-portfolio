import { Briefcase, Calendar, MapPin } from "lucide-react";

const achievements = [
  "Owned end-to-end delivery of customer onboarding, provisioning, billing, and payment features from database schema through backend APIs and frontend implementation.",
  "Architected and shipped customer-facing self-service features using NestJS, PostgreSQL, React, and Next.js — enabling customers to independently manage plans and services.",
  "Drove design and delivery of secure payment gateway integrations and automated billing workflows to improve transaction reliability and the payment experience.",
  "Conceived and led end-to-end build of Jarayid — an AI-powered content automation platform with fully automated news video generation and social media publishing via HeyGen API and Meta APIs.",
  "Led the BL1 migration project — modernizing a legacy PHP codebase by upgrading PHP version, refactoring modules, patching security vulnerabilities, and improving performance.",
  "Owned the Vault Credential Migration end-to-end, architecting the move of application secrets from hardcoded values to a centralized HashiCorp Vault system.",
  "Led integration of third-party EXITLAG gaming APIs, coordinating directly with the external team on API contracts and automated subscription provisioning.",
  "Improved application performance by optimizing database queries, eliminating N+1 patterns, and reducing API response times across high-traffic services.",
  "Guided teammates through code reviews, pairing, and design discussions across CRM, Billing, and Customer Portal work.",
  "Represented the team in sprint planning and cross-functional reviews with Product, QA, CRM, and Billing stakeholders.",
];

const techStack = [
  "PHP", "JavaScript", "TypeScript", "NestJS", "Next.js", "React", "Node.js", "Express.js",
  "PostgreSQL", "MySQL", "Oracle", "HashiCorp Vault", "HeyGen API", "Meta APIs", "Tailwind CSS",
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 bg-[#080c18]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Experience
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Professional Journey
          </h2>
          <hr className="section-divider" />
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-blue-600 via-blue-600/50 to-transparent ml-[1.5rem] hidden sm:block" />

          <div className="sm:pl-16">
            {/* Job Card */}
            <div className="card-hover rounded-2xl bg-[#0d1225] border border-slate-800 hover:border-blue-700/50 p-6 sm:p-8">
              {/* Timeline dot */}
              <div className="hidden sm:flex absolute left-0 w-12 h-12 rounded-full bg-blue-600/20 border-2 border-blue-500 items-center justify-center -translate-x-1/2 ml-[1.5rem] mt-1">
                <Briefcase size={18} className="text-blue-400" />
              </div>

              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    Senior Software Engineer
                  </h3>
                  <p className="text-blue-400 font-semibold text-lg">Nayatel</p>
                </div>
                <div className="flex flex-col gap-2 text-sm text-slate-400 sm:text-right">
                  <div className="flex items-center gap-2 sm:justify-end">
                    <Calendar size={14} />
                    <span>Apr 2023 – Present</span>
                  </div>
                  <div className="flex items-center gap-2 sm:justify-end">
                    <MapPin size={14} />
                    <span>Islamabad, Pakistan (Onsite)</span>
                  </div>
                  <span className="inline-flex items-center gap-1 sm:justify-end">
                    <span className="w-2 h-2 rounded-full bg-green-400 inline-block animate-pulse" />
                    <span className="text-green-400 font-medium">Current</span>
                  </span>
                </div>
              </div>

              {/* Achievements */}
              <ul className="space-y-3 mb-8">
                {achievements.map((item, i) => (
                  <li key={i} className="flex gap-3 text-slate-400 text-sm leading-relaxed">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Tech Stack */}
              <div>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">
                  Tools &amp; Technologies
                </p>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-blue-900/20 border border-blue-800/30 text-blue-300 text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
