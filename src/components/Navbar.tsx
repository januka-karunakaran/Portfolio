"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Blogs", href: "#blogs" },
  { label: "Milestones", href: "#achievements" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = navItems.map((item) => item.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      const navOffset = 85;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#F4EFFA]/90 backdrop-blur-md border-b border-[#E5DAEE] shadow-sm py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <button
              onClick={() => scrollTo("#home")}
              className="flex items-center gap-2 group text-left cursor-pointer"
            >
              <div className="w-9 h-9 rounded-full bg-[#5F3C83] flex items-center justify-center text-white font-bold text-sm tracking-wider shadow-sm group-hover:scale-105 transition-transform">
                JK
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-extrabold text-[#171522] text-sm tracking-tight font-display uppercase">
                  Januka
                </span>
                <span className="text-[10px] text-[#77727F] font-mono tracking-wider">
                  Software Engineer
                </span>
              </div>
            </button>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-7">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.replace("#", "");
                return (
                  <button
                    key={item.href}
                    onClick={() => scrollTo(item.href)}
                    className={`text-xs font-semibold uppercase tracking-wider transition-colors duration-200 cursor-pointer ${
                      isActive
                        ? "text-[#5F3C83] border-b-2 border-[#5F3C83] pb-0.5"
                        : "text-[#77727F] hover:text-[#171522]"
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>

            {/* Right Action: Let's Talk Pill */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => scrollTo("#contact")}
                className="hidden sm:inline-flex btn-pill-primary !bg-[#5F3C83] !text-white hover:!bg-[#432860] text-xs py-2.5 px-6 rounded-full font-bold shadow-md shadow-[#5F3C83]/30 cursor-pointer"
              >
                <span>LET&apos;S TALK</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </button>

              {/* Mobile hamburger */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 rounded-full border border-[#E5DAEE] bg-white text-[#5F3C83] hover:bg-[#ECE5F5] transition-all"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-[#171522]/30 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 h-full w-72 bg-white shadow-2xl p-6 flex flex-col justify-between transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div>
            <div className="flex items-center justify-between pb-5 border-b border-[#E5DAEE]">
              <span className="font-bold text-[#171522] font-display text-lg tracking-wider">
                JANUKA.DEV
              </span>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-1 rounded-full text-[#77727F] hover:text-[#171522]"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex flex-col gap-2 mt-6">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollTo(item.href)}
                  className="text-left px-4 py-3 rounded-2xl text-sm font-semibold text-[#171522] hover:bg-[#F4EFFA] hover:text-[#5F3C83] transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => scrollTo("#contact")}
            className="btn-pill-primary w-full justify-center text-xs py-3.5"
          >
            <span>LET&apos;S TALK</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </>
  );
}
