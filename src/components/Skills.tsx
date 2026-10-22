"use client";

import React, { useState } from "react";
import {
  Code2,
  Layout,
  Server,
  Database,
  Wrench,
  BrainCircuit,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

interface SkillItem {
  name: string;
  level: string;
  proficiency: number;
}

interface SkillCategory {
  id: string;
  title: string;
  icon: React.ElementType;
  color: string;
  borderGlow: string;
  skills: SkillItem[];
}

const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    title: "Programming Languages",
    icon: Code2,
    color: "from-blue-500 to-indigo-500",
    borderGlow: "rgba(99, 102, 241, 0.4)",
    skills: [
      { name: "Java", level: "Advanced", proficiency: 90 },
      { name: "JavaScript (ES6+)", level: "Advanced", proficiency: 88 },
      { name: "Python", level: "Proficient", proficiency: 82 },
    ],
  },
  {
    id: "frontend",
    title: "Frontend Development",
    icon: Layout,
    color: "from-cyan-400 to-blue-500",
    borderGlow: "rgba(6, 182, 212, 0.4)",
    skills: [
      { name: "React.js", level: "Advanced", proficiency: 90 },
      { name: "Next.js (App Router)", level: "Proficient", proficiency: 85 },
      { name: "Tailwind CSS", level: "Advanced", proficiency: 92 },
      { name: "HTML5 & CSS3", level: "Advanced", proficiency: 95 },
    ],
  },
  {
    id: "backend",
    title: "Backend & APIs",
    icon: Server,
    color: "from-emerald-400 to-teal-600",
    borderGlow: "rgba(16, 185, 129, 0.4)",
    skills: [
      { name: "Java Spring Boot", level: "Proficient", proficiency: 88 },
      { name: "Node.js & Express.js", level: "Proficient", proficiency: 85 },
      { name: "Python FastAPI", level: "Intermediate", proficiency: 78 },
      { name: "RESTful APIs", level: "Advanced", proficiency: 92 },
      { name: "JWT Authentication", level: "Proficient", proficiency: 86 },
    ],
  },
  {
    id: "database",
    title: "Databases & Storage",
    icon: Database,
    color: "from-amber-400 to-orange-500",
    borderGlow: "rgba(245, 158, 11, 0.4)",
    skills: [
      { name: "MongoDB", level: "Proficient", proficiency: 88 },
      { name: "MongoDB Atlas", level: "Proficient", proficiency: 85 },
    ],
  },
  {
    id: "tools",
    title: "Dev Tools & DevOps",
    icon: Wrench,
    color: "from-purple-400 to-violet-600",
    borderGlow: "rgba(139, 92, 246, 0.4)",
    skills: [
      { name: "Git & GitHub", level: "Advanced", proficiency: 90 },
      { name: "Postman", level: "Advanced", proficiency: 92 },
      { name: "Vercel", level: "Proficient", proficiency: 88 },
      { name: "Render", level: "Proficient", proficiency: 84 },
    ],
  },
  {
    id: "ml",
    title: "Data Science & ML Basics",
    icon: BrainCircuit,
    color: "from-pink-400 to-rose-500",
    borderGlow: "rgba(244, 63, 94, 0.4)",
    skills: [
      { name: "Pandas", level: "Intermediate", proficiency: 78 },
      { name: "NumPy", level: "Intermediate", proficiency: 75 },
      { name: "Scikit-Learn", level: "Foundational", proficiency: 70 },
    ],
  },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredCategories =
    activeTab === "all"
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === activeTab);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            Capabilities & Stack
          </div>
          <h2 className="section-heading text-white mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            A comprehensive overview of programming languages, modern frameworks,
            backends, and deployment tools I leverage to craft reliable end-to-end
            digital products.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-2.5 mt-8 max-w-3xl mx-auto">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                activeTab === "all"
                  ? "bg-gradient-to-r from-indigo-500 to-cyan-500 text-white shadow-lg shadow-indigo-500/25 border border-indigo-400/30"
                  : "bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700"
              }`}
            >
              All Skills
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                  activeTab === cat.id
                    ? "bg-gradient-to-r from-indigo-500 to-cyan-500 text-white shadow-lg shadow-indigo-500/25 border border-indigo-400/30"
                    : "bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700"
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.id}
                className="glass-card rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800/80">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center bg-gradient-to-br ${cat.color} text-white shadow-md shadow-indigo-950`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-base">
                        {cat.title}
                      </h3>
                      <span className="text-xs text-slate-400">
                        {cat.skills.length} core competencies
                      </span>
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-4">
                    {cat.skills.map((skill) => (
                      <div key={skill.name} className="space-y-1.5">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-medium text-slate-200 flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                            {skill.name}
                          </span>
                          <span className="font-mono text-slate-400">
                            {skill.level}
                          </span>
                        </div>
                        <div className="skill-bar w-full">
                          <div
                            className="skill-bar-fill"
                            style={{ width: `${skill.proficiency}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Badges */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                  {cat.skills.map((s) => (
                    <span key={s.name} className="tech-badge">
                      {s.name}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Core Methodology Highlights */}
        <div className="mt-12 glass-card rounded-2xl p-6 sm:p-8 border border-indigo-500/20 bg-gradient-to-r from-indigo-950/20 via-slate-900/40 to-cyan-950/20">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold gradient-text font-mono">
                RESTful
              </div>
              <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-medium">
                API Architecture
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold gradient-text-cyan font-mono">
                JWT & Auth
              </div>
              <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-medium">
                Secure Workflows
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold gradient-text font-mono">
                Clean Code
              </div>
              <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-medium">
                Maintainable Standards
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold gradient-text-cyan font-mono">
                Git Flow
              </div>
              <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-medium">
                Version Control & CI/CD
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
