"use client";

import React from "react";
import {
  Code2,
  Server,
  Database,
  BrainCircuit,
  ArrowUpRight,
  Layers,
  Sparkles,
} from "lucide-react";

interface ServiceCard {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
  technologies: string[];
  isHighlighted?: boolean;
}

const services: ServiceCard[] = [
  {
    id: "full-stack",
    title: "FULL STACK WEB DEVELOPMENT",
    subtitle: "Modern Reactive Web Applications",
    description:
      "Crafting end-to-end digital web applications with modern component architectures, type-safe workflows, and pixel-perfect responsive layouts.",
    icon: Code2,
    technologies: ["React.js", "Next.js", "Spring Boot", "Tailwind CSS"],
    isHighlighted: true,
  },
  {
    id: "backend-api",
    title: "API DESIGN & MICROSERVICES",
    subtitle: "Secure & Scalable Endpoints",
    description:
      "Designing robust RESTful API contracts, JWT session security, role-based access control (RBAC), and high-throughput microservices.",
    icon: Server,
    technologies: ["Java Spring Boot", "FastAPI", "Express.js", "Postman"],
  },
  {
    id: "database-cloud",
    title: "DATABASE & CLOUD DEPLOYMENT",
    subtitle: "High-Availability Data Modeling",
    description:
      "Structuring optimized MongoDB collections, cloud cluster indexing on Atlas, and managing CI/CD deployments on Vercel and Render.",
    icon: Database,
    technologies: ["MongoDB", "MongoDB Atlas", "Vercel", "Render"],
  },
  {
    id: "ai-data-science",
    title: "AI & DATA SCIENCE ALGORITHMS",
    subtitle: "Predictive Analytics & Intelligence",
    description:
      "Implementing predictive models like the LifeFlow burnout risk simulator, automated data processing, and hypothesis testing.",
    icon: BrainCircuit,
    technologies: ["Python", "FastAPI", "Pandas", "Scikit-Learn"],
    isHighlighted: true,
  },
];

export default function Expertise() {
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
    <section id="expertise" className="section-wrapper bg-[#F4EFFA] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <div className="badge-lavender mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#5F3C83]" />
              Core Competencies
            </div>
            <h2 className="section-headline">MY EXPERTISE</h2>
          </div>
          <p className="text-[#77727F] text-sm sm:text-base max-w-md">
            Specialized engineering domains tailored to deliver scalable enterprise solutions and user-centric software.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className={`p-7 rounded-3xl flex flex-col justify-between transition-all duration-300 border ${
                  service.isHighlighted
                    ? "bg-gradient-to-b from-[#ECE5F5] to-white border-[#A78BCB]/40 shadow-md shadow-[#5F3C83]/5"
                    : "bg-white border-[#E5DAEE] shadow-sm hover:shadow-md"
                } hover:-translate-y-2`}
              >
                <div>
                  {/* Top Icon & Subtitle */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-[#E5DAEE] flex items-center justify-center text-[#5F3C83] shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#77727F] bg-[#ECE5F5]/60 px-2.5 py-1 rounded-full">
                      Domain
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-xl text-[#171522] tracking-wide mb-2 uppercase leading-tight">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#77727F] text-xs leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div>
                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {service.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-semibold text-[#5F3C83] bg-white border border-[#E5DAEE] px-2.5 py-0.5 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Circular Action Button */}
                  <div className="pt-4 border-t border-[#E5DAEE] flex items-center justify-between">
                    <span className="text-xs font-semibold text-[#5F3C83] uppercase tracking-wider">
                      Explore Projects
                    </span>
                    <button
                      onClick={() => scrollTo("#projects")}
                      className="btn-circle-action cursor-pointer"
                      title={`View ${service.title} projects`}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
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
