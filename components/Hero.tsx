"use client";

import { Mail, MapPin, Phone, ArrowDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export default function Hero() {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(59,130,246,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.5) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/30 border border-blue-700/40 text-blue-400 text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Available for opportunities
        </div>

        {/* Name */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight">
          Arslan <span className="gradient-text">Ali</span>
        </h1>

        {/* Title */}
        <p className="text-xl sm:text-2xl text-slate-400 font-medium mb-6">
          Senior Software Engineer
          <span className="mx-3 text-blue-600">|</span>
          Backend &amp; Full-Stack Lead
        </p>

        {/* Summary */}
        <p className="max-w-2xl mx-auto text-slate-400 text-base sm:text-lg leading-relaxed mb-8">
          3+ years building production software end-to-end — scalable APIs, customer-facing
          products, AI-powered automation platforms, and full-stack applications using{" "}
          <span className="text-blue-400">TypeScript</span>,{" "}
          <span className="text-blue-400">NestJS</span>,{" "}
          <span className="text-blue-400">Next.js</span>, and{" "}
          <span className="text-blue-400">PostgreSQL</span>.
        </p>

        {/* Location */}
        <div className="flex items-center justify-center gap-2 text-slate-500 text-sm mb-10">
          <MapPin size={14} />
          <span>Islamabad, Pakistan</span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <a
            href="#projects"
            onClick={(e) => { e.preventDefault(); document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" }); }}
            className="px-7 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all hover:shadow-lg hover:shadow-blue-600/30"
          >
            View Projects
          </a>
          <a
            href="mailto:arslanalidev23@gmail.com"
            className="px-7 py-3 rounded-xl border border-blue-700/50 hover:border-blue-500 text-slate-300 hover:text-white font-semibold transition-all hover:bg-blue-900/20"
          >
            Get In Touch
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-5">
          <a
            href="https://github.com/arslanneni"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg border border-slate-700/50 hover:border-blue-500/50 text-slate-400 hover:text-blue-400 transition-all hover:bg-blue-900/20"
            aria-label="GitHub"
          >
            <GithubIcon size={20} />
          </a>
          <a
            href="https://linkedin.com/in/arslan-ali-25a606226"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg border border-slate-700/50 hover:border-blue-500/50 text-slate-400 hover:text-blue-400 transition-all hover:bg-blue-900/20"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={20} />
          </a>
          <a
            href="mailto:arslanalidev23@gmail.com"
            className="p-3 rounded-lg border border-slate-700/50 hover:border-blue-500/50 text-slate-400 hover:text-blue-400 transition-all hover:bg-blue-900/20"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
          <a
            href="tel:+923030901255"
            className="p-3 rounded-lg border border-slate-700/50 hover:border-blue-500/50 text-slate-400 hover:text-blue-400 transition-all hover:bg-blue-900/20"
            aria-label="Phone"
          >
            <Phone size={20} />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 hover:text-blue-400 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={22} />
      </button>
    </section>
  );
}
