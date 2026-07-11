"use client";

import { useState, useEffect } from "react";
import { Menu, X, Code2 } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0e1a]/95 backdrop-blur-md border-b border-blue-900/30 shadow-lg shadow-blue-950/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleLinkClick("#hero"); }}
            className="flex items-center gap-2 font-bold text-blue-400 text-lg hover:text-blue-300 transition-colors"
          >
            <Code2 size={22} />
            <span>Arslan Ali</span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleLinkClick(link.href); }}
                className="text-sm text-slate-400 hover:text-blue-400 transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="mailto:arslanalidev23@gmail.com"
              className="ml-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition-colors"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-blue-400 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0d1225]/98 backdrop-blur-md border-t border-blue-900/30">
          <div className="px-4 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleLinkClick(link.href); }}
                className="text-slate-300 hover:text-blue-400 transition-colors py-2 text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="mailto:arslanalidev23@gmail.com"
              className="mt-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition-colors text-center"
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
