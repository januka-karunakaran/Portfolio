"use client";

import React from "react";
import Image from "next/image";
import {
  ArrowRight,
  Download,
  GraduationCap,
  MapPin,
  Trophy,
  Code2,
  BookOpen,
  Sparkles,
} from "lucide-react";

export default function Hero() {
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
  };

  return (
    <section id="home" className="relative pt-32 pb-16 hero-lavender-bg dotted-pattern overflow-hidden">
      {/* Decorative Floating Sparkles */}
      <div className="absolute top-28 left-12 text-[#A78BCB] text-xl select-none pointer-events-none animate-pulse">
        ✦
      </div>
      <div className="absolute top-44 left-1/3 text-[#A78BCB]/60 text-sm select-none pointer-events-none">
        ✦
      </div>
      <div className="absolute top-24 right-1/4 text-[#A78BCB] text-2xl select-none pointer-events-none animate-pulse">
        ✦
      </div>
      <div className="absolute bottom-24 right-12 text-[#A78BCB]/70 text-lg select-none pointer-events-none">
        ✦
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top 2-Column Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[520px]">
          {/* Left Column: Headlines & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Small uppercase intro line */}
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#5F3C83] mb-4">
              <span className="w-2 h-2 rounded-full bg-[#A78BCB]" />
              Hello, I&apos;m Januka Karunakaran
            </div>

            {/* Oversized 2-line condensed headline */}
            <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl xl:text-8xl uppercase tracking-tight leading-[0.92] mb-5">
              <span className="text-[#A78BCB] block">SOFTWARE</span>
              <span className="text-[#171522] block">ENGINEER</span>
            </h1>

            {/* Short supporting copy */}
            <p className="text-[#77727F] text-base sm:text-lg max-w-xl leading-relaxed mb-8">
              Undergraduate in Information Technology at the{" "}
              <span className="text-[#5F3C83] font-semibold">University of Moratuwa</span>{" "}
              (CGPA: 3.62/4.00). I design and build modern, scalable web applications, robust RESTful APIs, and intelligent digital experiences.
            </p>

            {/* Two Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => scrollTo("#projects")}
                className="btn-pill-lavender !bg-[#A78BCB] !text-white hover:!bg-[#9576BE] text-xs sm:text-sm py-3.5 px-7 cursor-pointer shadow-lg shadow-[#A78BCB]/40"
              >
                <span>VIEW PORTFOLIO</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollTo("#contact")}
                className="btn-pill-secondary !bg-white !text-[#5F3C83] hover:!bg-[#FAF7FD] text-xs sm:text-sm py-3.5 px-6 cursor-pointer border border-[#E5DAEE]"
              >
                <Download className="w-4 h-4 text-[#5F3C83]" />
                <span>DOWNLOAD CV</span>
              </button>
            </div>
          </div>

          {/* Right Column: Large Cutout Designer Portrait with Organic Lavender Backdrop */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <div className="relative w-[300px] sm:w-[360px] lg:w-[400px]">
              {/* Organic Pale Lavender Circular Backdrop */}
              <div className="absolute inset-0 bg-[#ECE5F5] rounded-[48%_52%_60%_40%/45%_55%_45%_55%] transform -rotate-3 scale-105 shadow-inner" />
              <div className="absolute -inset-2 rounded-full border border-[#A78BCB]/30 pointer-events-none" />

              {/* Portrait Image Container */}
              <div className="relative z-10 w-full h-[380px] sm:h-[440px] rounded-[40px] overflow-hidden shadow-2xl shadow-[#5F3C83]/15 border-4 border-white bg-white">
                <Image
                  src="/januka.jpg"
                  alt="Januka Karunakaran"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  priority
                  className="object-cover object-top hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Location Badge (Matching Reference Screenshot) */}
              <div className="absolute -bottom-4 right-2 z-20 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-lg border border-[#E5DAEE] flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-[#ECE5F5] flex items-center justify-center text-[#5F3C83]">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <div className="text-left leading-none">
                  <span className="text-[10px] uppercase font-semibold text-[#77727F] block">
                    Based in
                  </span>
                  <span className="text-xs font-bold text-[#171522] uppercase tracking-wider font-display">
                    Moratuwa, LK
                  </span>
                </div>
              </div>

              {/* CGPA Badge */}
              <div className="absolute -top-3 -left-3 z-20 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-lg border border-[#E5DAEE] flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-[#A78BCB]" />
                <span className="text-xs font-bold text-[#5F3C83] font-mono">
                  CGPA: 3.62
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Strip spanning the content width */}
        <div className="mt-16 sm:mt-20">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E5DAEE] shadow-lg shadow-[#5F3C83]/5">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-[#E5DAEE]">
              {/* Stat 1 */}
              <div className="flex flex-col items-center justify-center text-center px-4 pt-2 md:pt-0">
                <div className="w-10 h-10 rounded-full bg-[#ECE5F5] flex items-center justify-center text-[#5F3C83] mb-2">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div className="font-display font-bold text-3xl sm:text-4xl text-[#171522]">
                  3.62
                </div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#77727F] mt-1">
                  CGPA / 4.00 (IT UoM)
                </div>
              </div>

              {/* Stat 2 */}
              <div className="flex flex-col items-center justify-center text-center px-4 pt-4 md:pt-0">
                <div className="w-10 h-10 rounded-full bg-[#ECE5F5] flex items-center justify-center text-[#5F3C83] mb-2">
                  <Code2 className="w-5 h-5" />
                </div>
                <div className="font-display font-bold text-3xl sm:text-4xl text-[#171522]">
                  3+
                </div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#77727F] mt-1">
                  Full-Stack Projects
                </div>
              </div>

              {/* Stat 3 */}
              <div className="flex flex-col items-center justify-center text-center px-4 pt-4 md:pt-0">
                <div className="w-10 h-10 rounded-full bg-[#ECE5F5] flex items-center justify-center text-[#5F3C83] mb-2">
                  <Trophy className="w-5 h-5" />
                </div>
                <div className="font-display font-bold text-3xl sm:text-4xl text-[#171522]">
                  Top 8
                </div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#77727F] mt-1">
                  Hackathon Finalist
                </div>
              </div>

              {/* Stat 4 */}
              <div className="flex flex-col items-center justify-center text-center px-4 pt-4 md:pt-0">
                <div className="w-10 h-10 rounded-full bg-[#ECE5F5] flex items-center justify-center text-[#5F3C83] mb-2">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div className="font-display font-bold text-3xl sm:text-4xl text-[#171522]">
                  3+
                </div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#77727F] mt-1">
                  Tech Blog Articles
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
