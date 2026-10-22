"use client";

import React, { useState } from "react";
import {
  ExternalLink,
  FolderGit2,
  Sparkles,
  Layers,
  Activity,
  CalendarCheck,
  CheckCircle,
} from "lucide-react";
import { GitHubIcon } from "@/components/SocialIcons";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  filterCat: string;
  tagline: string;
  description: string;
  features: string[];
  technologies: string[];
  badgeText: string;
  githubUrl: string;
  liveUrl?: string;
  icon: React.ElementType;
}

const projects: Project[] = [
  {
    id: "crm-system",
    title: "CRMS — Change Request Management System",
    subtitle: "Enterprise Software Workflow & PRD Platform",
    category: "Full Stack / Enterprise",
    filterCat: "Enterprise",
    tagline: "Streamlining client change requests, automated PRDs, and task execution workflows",
    description:
      "An end-to-end enterprise platform engineered to manage software change requests from client proposal through automated Product Requirement Document (PRD) drafting to Kanban-based delivery tracking.",
    features: [
      "Structured client change proposal submission and lifecycle monitoring",
      "Automated PRD generation, milestone partitioning, and sprint planning",
      "Interactive Kanban boards with dynamic task assignment & status transitions",
      "Robust JWT-authenticated role-based access for Admins, Project Leads, & Developers",
    ],
    technologies: [
      "Next.js",
      "Java Spring Boot",
      "MongoDB Atlas",
      "JWT Auth",
      "RESTful APIs",
      "Tailwind CSS",
    ],
    badgeText: "Enterprise System",
    githubUrl: "https://github.com/januka-karunakaran",
    liveUrl: "https://github.com/januka-karunakaran",
    icon: Layers,
  },
  {
    id: "hospital-management",
    title: "Hospital Management System",
    subtitle: "Healthcare Administration & Patient Records",
    category: "Full Stack / Healthcare",
    filterCat: "Healthcare",
    tagline: "Modernizing medical staff management, appointments, and diagnostic records",
    description:
      "A reliable healthcare portal designed to centralize hospital operations, simplifying patient registration, doctor schedule coordination, appointment slots, and secure diagnostic histories.",
    features: [
      "Patient profile management with complete clinical and consultation history",
      "Doctor roster management, specialty categorization, and live appointment booking",
      "Encrypted digital medical report records and prescription history logs",
      "Dual responsive dashboards customized for administrators and healthcare providers",
    ],
    technologies: [
      "Next.js",
      "Java Spring Boot",
      "MongoDB",
      "RESTful APIs",
      "Responsive UI",
      "Tailwind CSS",
    ],
    badgeText: "Healthcare Web App",
    githubUrl: "https://github.com/januka-karunakaran",
    liveUrl: "https://github.com/januka-karunakaran",
    icon: Activity,
  },
  {
    id: "lifeflow",
    title: "LifeFlow — Productivity & Lifestyle Tracker",
    subtitle: "AI-Powered Wellness & Burnout Prediction",
    category: "AI / Microservices",
    filterCat: "AI / ML",
    tagline: "Intelligent habit intelligence with an AI-driven 'What-If' burnout simulator",
    description:
      "A full-stack wellness and productivity ecosystem featuring an intelligent 'What-If' simulator that calculates burnout risk based on routine metrics, sleep logs, and work allocations.",
    features: [
      "AI-driven 'What-If Simulator' predicting burnout risk with tailored recovery insights",
      "Daily habit tracking, productivity scoring, and routine visual analytics",
      "Google OAuth 2.0 single sign-on with tokenized session management",
      "Hybrid microservices: Node.js/Express core backend + FastAPI ML engine deployed on Render & Vercel",
    ],
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "Python FastAPI",
      "MongoDB",
      "Google OAuth2",
      "Vercel",
      "Render",
    ],
    badgeText: "AI Microservice App",
    githubUrl: "https://github.com/januka-karunakaran",
    liveUrl: "https://github.com/januka-karunakaran",
    icon: CalendarCheck,
  },
];

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");

  const filterOptions = ["All", "Enterprise", "Healthcare", "AI / ML"];

  const filteredProjects =
    selectedFilter === "All"
      ? projects
      : projects.filter((p) => p.filterCat === selectedFilter);

  return (
    <section id="projects" className="section-wrapper bg-[#F4EFFA] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="badge-lavender mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#5F3C83]" />
              Featured Engineering
            </div>
            <h2 className="section-headline">NOTABLE PROJECTS</h2>
          </div>
          <p className="text-[#77727F] text-sm sm:text-base max-w-md">
            Production-grade systems demonstrating reactive interfaces, resilient backends, and practical AI implementations.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {filterOptions.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                selectedFilter === filter
                  ? "bg-[#5F3C83] text-white shadow-sm"
                  : "bg-white text-[#77727F] border border-[#E5DAEE] hover:text-[#171522]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects List */}
        <div className="space-y-10">
          {filteredProjects.map((project) => {
            const Icon = project.icon;

            return (
              <div
                key={project.id}
                className="bg-white rounded-3xl p-7 sm:p-10 border border-[#E5DAEE] shadow-sm hover:shadow-lg transition-all"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  {/* Left Column: Project Overview */}
                  <div className="lg:col-span-7">
                    {/* Header Badges */}
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <span className="badge-lavender text-[11px]">
                        {project.badgeText}
                      </span>
                      <span className="text-[11px] font-semibold text-[#77727F] bg-[#F8F5FC] border border-[#E5DAEE] px-3 py-1 rounded-full uppercase tracking-wider">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#171522] uppercase tracking-wide mb-1 flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-[#ECE5F5] flex items-center justify-center text-[#5F3C83] shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span>{project.title}</span>
                    </h3>

                    <p className="text-xs font-semibold text-[#5F3C83] uppercase tracking-wider mb-4">
                      {project.subtitle}
                    </p>

                    <p className="text-[#77727F] text-xs sm:text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Key Features */}
                    <div className="mb-6 space-y-2">
                      <span className="text-[11px] uppercase tracking-wider text-[#171522] font-bold block mb-2 font-display">
                        Key Architectural Features:
                      </span>
                      {project.features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-[#77727F]">
                          <CheckCircle className="w-4 h-4 text-[#A78BCB] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-8">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="tech-pill text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap items-center gap-3">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-pill-primary !bg-[#5F3C83] !text-white hover:!bg-[#432860] text-xs py-2.5 px-5 rounded-full font-bold shadow-md shadow-[#5F3C83]/20"
                      >
                        <GitHubIcon className="w-4 h-4 fill-white" />
                        <span>Source Code</span>
                      </a>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-pill-secondary !bg-white !text-[#5F3C83] hover:!bg-[#FAF7FD] text-xs py-2.5 px-5 rounded-full font-bold border border-[#E5DAEE]"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Right Column: Code/Architecture Mockup */}
                  <div className="lg:col-span-5">
                    <div className="rounded-2xl border border-[#E5DAEE] bg-[#FAF7FD] shadow-inner overflow-hidden">
                      {/* Window titlebar */}
                      <div className="flex items-center justify-between px-4 py-3 bg-white border-b border-[#E5DAEE]">
                        <div className="flex items-center gap-1.5">
                          <div className="w-3 h-3 rounded-full bg-[#E5DAEE]" />
                          <div className="w-3 h-3 rounded-full bg-[#A78BCB]/40" />
                          <div className="w-3 h-3 rounded-full bg-[#5F3C83]/30" />
                        </div>
                        <span className="text-xs font-mono text-[#77727F] flex items-center gap-1.5">
                          <FolderGit2 className="w-3.5 h-3.5 text-[#5F3C83]" />
                          {project.id}.config.ts
                        </span>
                        <div className="w-8" />
                      </div>

                      {/* Mockup code view */}
                      <div className="p-5 font-mono text-xs text-[#171522] space-y-2 leading-relaxed bg-[#FAF7FD]">
                        <div className="text-[#A78BCB]">// Architectural Specifications</div>
                        <div>
                          <span className="text-[#5F3C83] font-bold">export const</span>{" "}
                          <span className="text-[#171522]">projectSpec</span> = {"{"}
                        </div>
                        <div className="pl-4">
                          <span className="text-[#77727F]">name:</span>{" "}
                          <span className="text-[#5F3C83]">&quot;{project.title.split("—")[0].trim()}&quot;</span>,
                        </div>
                        <div className="pl-4">
                          <span className="text-[#77727F]">engineer:</span>{" "}
                          <span className="text-[#5F3C83]">&quot;Januka Karunakaran&quot;</span>,
                        </div>
                        <div className="pl-4">
                          <span className="text-[#77727F]">stack:</span> [
                          <div className="pl-4 text-[#A78BCB]">
                            {project.technologies.slice(0, 4).map((t, idx) => (
                              <div key={idx}>&quot;{t}&quot;,</div>
                            ))}
                          </div>
                          ],
                        </div>
                        <div className="pl-4">
                          <span className="text-[#77727F]">status:</span>{" "}
                          <span className="text-emerald-600 font-medium">&quot;Production Ready&quot;</span>,
                        </div>
                        <div className="pl-4">
                          <span className="text-[#77727F]">security:</span>{" "}
                          <span className="text-[#5F3C83]">&quot;Strict RBAC &amp; JWT&quot;</span>
                        </div>
                        <div>{"};"}</div>
                        <div className="pt-3 flex items-center gap-2 text-xs text-emerald-700 border-t border-[#E5DAEE] mt-3">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Integration tests passed</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
