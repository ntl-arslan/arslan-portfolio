import { Mail, Phone, MapPin, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "arslanalidev23@gmail.com",
    href: "mailto:arslanalidev23@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+92 303 0901255",
    href: "tel:+923030901255",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Islamabad, Pakistan",
    href: null,
  },
];

const socialLinks = [
  {
    icon: GithubIcon,
    label: "GitHub",
    href: "https://github.com/arslanneni",
    username: "github.com/arslanneni",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    href: "https://linkedin.com/in/arslan-ali-25a606226",
    username: "linkedin.com/in/arslan-ali-25a606226",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 bg-[#080c18]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Contact
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <hr className="section-divider" />
          <p className="mt-6 text-slate-400 max-w-lg mx-auto">
            I&apos;m always open to discussing new opportunities, interesting projects,
            or just connecting with fellow engineers.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg mb-6">Contact Details</h3>

            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <div
                key={label}
                className="flex items-center gap-4 p-4 rounded-xl bg-[#0d1225] border border-slate-800 hover:border-blue-700/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-600/20 flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-blue-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">
                    {label}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      className="text-slate-200 hover:text-blue-400 transition-colors text-sm font-medium"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-slate-200 text-sm font-medium">{value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Social Links */}
            <div className="pt-4">
              <h4 className="text-white font-semibold text-sm mb-4">Online Profiles</h4>
              <div className="space-y-3">
                {socialLinks.map(({ icon: Icon, label, href, username }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-[#0d1225] border border-slate-800 hover:border-blue-700/40 transition-all hover:bg-blue-900/10 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-blue-600/20 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600/30 transition-colors">
                      <Icon size={18} className="text-blue-400" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">
                        {label}
                      </p>
                      <p className="text-slate-300 group-hover:text-blue-400 transition-colors text-sm font-medium">
                        {username}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Card */}
          <div className="flex flex-col justify-center">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-900/30 to-violet-900/20 border border-blue-800/30">
              <div className="w-14 h-14 rounded-2xl bg-blue-600/20 flex items-center justify-center mb-6">
                <Send size={24} className="text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Let&apos;s Work Together
              </h3>
              <p className="text-slate-400 leading-relaxed mb-8">
                Whether you have a project that needs a senior backend engineer, need
                technical leadership, or want to discuss a full-stack product — I&apos;d
                love to hear from you.
              </p>
              <div className="space-y-3">
                <a
                  href="mailto:arslanalidev23@gmail.com"
                  className="flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all hover:shadow-lg hover:shadow-blue-600/30"
                >
                  <Mail size={18} />
                  Send an Email
                </a>
                <a
                  href="https://linkedin.com/in/arslan-ali-25a606226"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-xl border border-blue-700/50 hover:border-blue-500 text-slate-300 hover:text-white font-semibold transition-all hover:bg-blue-900/20"
                >
                  <LinkedinIcon size={18} />
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
