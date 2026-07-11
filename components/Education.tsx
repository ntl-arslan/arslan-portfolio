import { GraduationCap, Calendar, MapPin, BookOpen } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Education
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Academic Background
          </h2>
          <hr className="section-divider" />
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="card-hover rounded-2xl bg-[#0d1225] border border-slate-800 hover:border-blue-700/50 p-8">
            <div className="flex flex-col sm:flex-row sm:items-start gap-6">
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-blue-600/20 border border-blue-700/30 flex items-center justify-center flex-shrink-0">
                <GraduationCap size={32} className="text-blue-400" />
              </div>

              {/* Info */}
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-1">
                  BS Computer Science
                </h3>
                <p className="text-blue-400 font-semibold text-lg mb-4">
                  Air University, Islamabad
                </p>

                <div className="flex flex-wrap gap-4 text-sm text-slate-400 mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar size={14} />
                    <span>2018 – 2022</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={14} />
                    <span>Islamabad, Pakistan</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-blue-900/10 border border-blue-800/20">
                  <div className="flex items-center gap-2 mb-2">
                    <BookOpen size={14} className="text-blue-400" />
                    <span className="text-blue-400 text-sm font-medium">Program Focus</span>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Software Engineering, Data Structures &amp; Algorithms, Database Systems,
                    Computer Networks, Operating Systems, and Object-Oriented Programming —
                    providing the theoretical foundation for building production-grade software systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
