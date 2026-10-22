"use client";

import React from "react";
import {
  Code,
  Sparkles,
  Layers,
  Cpu,
  Search,
  Compass,
  Hammer,
  Rocket,
  CheckCircle2,
} from "lucide-react";

interface ToolItem {
  name: string;
  category: string;
  iconText: string;
  color: string;
}

const tools: ToolItem[] = [
  { name: "Java", category: "Backend", iconText: "☕", color: "#F89820" },
  { name: "JavaScript", category: "Language", iconText: "JS", color: "#F7DF1E" },
  { name: "Python", category: "Language/AI", iconText: "🐍", color: "#3776AB" },
  { name: "React.js", category: "Frontend", iconText: "⚛️", color: "#61DAFB" },
  { name: "Next.js", category: "Full Stack", iconText: "▲", color: "#000000" },
  { name: "Spring Boot", category: "Backend", iconText: "🍃", color: "#6DB33F" },
  { name: "Node.js", category: "Runtime", iconText: "🟩", color: "#339933" },
  { name: "FastAPI", category: "Python API", iconText: "⚡", color: "#009688" },
  { name: "MongoDB", category: "Database", iconText: "🍃", color: "#47A248" },
  { name: "Tailwind CSS", category: "Styling", iconText: "🎨", color: "#06B6D4" },
  { name: "Postman", category: "API Testing", iconText: "🚀", color: "#FF6C37" },
  { name: "Git & GitHub", category: "DevOps", iconText: "🐙", color: "#F05032" },
];

const processSteps = [
  {
    step: "01",
    title: "DISCOVER & DECOMPOSE",
    description: "Analyze core business requirements, formulate client PRDs, and identify technical constraints.",
    icon: Search,
  },
  {
    step: "02",
    title: "PLAN & ARCHITECT",
    description: "Structure database schemas (MongoDB), define RESTful API contracts, and design secure JWT auth flows.",
    icon: Compass,
  },
  {
    step: "03",
    title: "DEVELOP & INTEGRATE",
    description: "Build clean, reusable UI components with Next.js and integrate performant Java Spring Boot microservices.",
    icon: Hammer,
  },
  {
    step: "04",
    title: "TEST & DELIVER",
    description: "Execute rigorous API validation in Postman, ensure cross-browser responsiveness, and deploy on Render/Vercel.",
    icon: Rocket,
  },
];

export default function ToolsAndProcess() {
  return (
    <section id="skills" className="section-wrapper bg-[#F4EFFA] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Tools & Technologies Panel */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl p-7 sm:p-9 border border-[#E5DAEE] shadow-sm">
              <div className="badge-lavender mb-3">
                <Cpu className="w-3.5 h-3.5 text-[#5F3C83]" />
                Technical Stack
              </div>
              <h3 className="section-headline text-2xl sm:text-3xl mb-3">
                TOOLS &amp; TECHNOLOGIES
              </h3>
              <p className="text-[#77727F] text-xs sm:text-sm mb-8 leading-relaxed">
                Technologies and developer frameworks I leverage to engineer robust production systems.
              </p>

              {/* Grid of tool cards */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {tools.map((t) => (
                  <div
                    key={t.name}
                    className="p-3.5 rounded-2xl bg-[#F8F5FC] border border-[#E5DAEE] hover:border-[#A78BCB] hover:bg-white hover:shadow-md transition-all flex items-center gap-3 group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-white border border-[#E5DAEE] flex items-center justify-center text-sm font-bold shadow-xs shrink-0 group-hover:scale-105 transition-transform">
                      {t.iconText}
                    </div>
                    <div className="leading-tight overflow-hidden">
                      <span className="text-xs font-bold text-[#171522] block truncate">
                        {t.name}
                      </span>
                      <span className="text-[10px] text-[#77727F] font-mono block truncate">
                        {t.category}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom verification badge */}
              <div className="mt-6 pt-5 border-t border-[#E5DAEE] flex items-center justify-between text-xs text-[#5F3C83]">
                <span className="font-semibold flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#5F3C83]" />
                  Verified via HackerRank &amp; Postman Expert
                </span>
                <span className="font-mono text-[11px] text-[#77727F]">
                  12+ Core Tools
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: My Process Timeline */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl p-7 sm:p-9 border border-[#E5DAEE] shadow-sm">
              <div className="badge-lavender mb-3">
                <Layers className="w-3.5 h-3.5 text-[#5F3C83]" />
                Workflow Methodology
              </div>
              <h3 className="section-headline text-2xl sm:text-3xl mb-3">
                MY PROCESS
              </h3>
              <p className="text-[#77727F] text-xs sm:text-sm mb-8 leading-relaxed">
                A disciplined software engineering lifecycle ensuring high code quality and on-time delivery.
              </p>

              {/* Numbered Sequence Timeline */}
              <div className="space-y-6 relative before:absolute before:left-5 before:top-3 before:bottom-3 before:w-0.5 before:bg-[#E5DAEE]">
                {processSteps.map((step) => {
                  const Icon = step.icon;
                  return (
                    <div
                      key={step.step}
                      className="relative flex items-start gap-4 pl-1"
                    >
                      {/* Step Circle Marker */}
                      <div className="relative z-10 w-9 h-9 rounded-full bg-[#ECE5F5] border-2 border-white flex items-center justify-center text-[#5F3C83] shrink-0 shadow-sm">
                        <Icon className="w-4 h-4" />
                      </div>

                      {/* Step Content */}
                      <div className="flex-1 pb-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[11px] font-mono font-bold text-[#A78BCB]">
                            {step.step}
                          </span>
                          <h4 className="font-display font-bold text-sm tracking-wide text-[#171522] uppercase">
                            {step.title}
                          </h4>
                        </div>
                        <p className="text-xs text-[#77727F] leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
