"use client";

import React from "react";
import { ArrowUp, Mail, Heart } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/SocialIcons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Expertise", href: "#expertise" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Blogs", href: "#blogs" },
    { name: "Milestones", href: "#achievements" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-[#ECE5F5] border-t border-[#E5DAEE] pt-14 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pb-10 border-b border-[#E5DAEE]">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#5F3C83] flex items-center justify-center text-white font-bold text-xs tracking-wider">
                JK
              </div>
              <span className="font-display font-bold text-lg tracking-wider text-[#171522] uppercase">
                Januka Karunakaran
              </span>
            </div>

            <p className="text-[#77727F] text-xs sm:text-sm leading-relaxed max-w-sm">
              Undergraduate in Information Technology at the University of Moratuwa.
              Passionate about building scalable full-stack applications, robust APIs, and user-centric systems.
            </p>

            <div className="text-xs text-[#5F3C83] font-mono">
              CGPA: 3.62 / 4.00 · Moratuwa, Sri Lanka
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#171522] mb-3 font-display">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[#77727F] hover:text-[#5F3C83] transition-colors py-0.5 font-medium"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links & Back to Top */}
          <div className="md:col-span-3 flex flex-col md:items-end space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#171522] mb-1 font-display">
              Connect
            </h4>
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/januka-karunakaran"
                target="_blank"
                rel="noopener noreferrer"
                className="social-pill"
                title="GitHub"
              >
                <GitHubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/januka-karunakaran-114088301/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-pill"
                title="LinkedIn"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>
              <a
                href="https://medium.com/@janukaruna2003"
                target="_blank"
                rel="noopener noreferrer"
                className="social-pill font-serif font-black text-sm"
                title="Medium"
              >
                M
              </a>
              <a
                href="mailto:janukaruna2003@gmail.com"
                className="social-pill"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs text-[#77727F] hover:text-[#171522] px-3.5 py-1.5 rounded-full bg-white border border-[#E5DAEE] hover:border-[#A78BCB] transition-all cursor-pointer mt-2"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#5F3C83]" />
            </button>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#77727F]">
          <p>© 2025 Januka Karunakaran. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Designed &amp; Built with{" "}
            <Heart className="w-3.5 h-3.5 text-[#A78BCB] inline fill-[#A78BCB]" />{" "}
            using Next.js &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
