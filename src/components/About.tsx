"use client";

import React from "react";
import Image from "next/image";
import {
  GraduationCap,
  Star,
  MapPin,
  Sparkles,
  BookOpen,
  Award,
  Users,
  CheckCircle2,
} from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/SocialIcons";

export default function About() {
  return (
    <section id="about" className="section-wrapper bg-[#F4EFFA] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <div className="badge-lavender mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#5F3C83]" />
              Biography &amp; Foundations
            </div>
            <h2 className="section-headline">ABOUT ME</h2>
          </div>
          <p className="text-[#77727F] text-sm sm:text-base max-w-md">
            Undergraduate software engineer dedicated to building clean, scalable applications and sharing knowledge.
          </p>
        </div>

        {/* 2-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Personal Narrative Card */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="bg-white rounded-3xl p-7 sm:p-10 border border-[#E5DAEE] shadow-sm flex flex-col justify-between h-full">
              <div>
                {/* Header profile info */}
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-[#E5DAEE]">
                  <div className="relative w-16 h-16 rounded-2xl overflow-hidden border-2 border-[#A78BCB] shrink-0 shadow-sm">
                    <Image
                      src="/januka.jpg"
                      alt="Januka Karunakaran"
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-2xl text-[#171522] uppercase tracking-wide">
                      Januka Karunakaran
                    </h3>
                    <p className="text-xs font-semibold text-[#5F3C83] uppercase tracking-wider">
                      Software Engineer Intern • Full Stack Developer
                    </p>
                    <p className="text-xs text-[#77727F] mt-0.5 flex items-center gap-1">
                      <GraduationCap className="w-3.5 h-3.5 text-[#A78BCB]" />
                      University of Moratuwa (2nd Year, Dept of IT)
                    </p>
                  </div>
                </div>

                {/* Narrative paragraphs */}
                <div className="space-y-4 text-[#77727F] text-sm sm:text-base leading-relaxed mb-6">
                  <p>
                    I am an{" "}
                    <span className="text-[#171522] font-semibold">
                      Information Technology undergraduate
                    </span>{" "}
                    at the University of Moratuwa, Sri Lanka, maintaining an academic record of{" "}
                    <span className="text-[#5F3C83] font-bold">3.62 / 4.00 CGPA</span>.
                    My passion lies in crafting reliable full-stack applications with elegant user interfaces and robust server architectures.
                  </p>
                  <p>
                    My practical experience spans building responsive frontends with{" "}
                    <span className="text-[#171522] font-medium">React.js &amp; Next.js</span>,
                    designing secured microservices in{" "}
                    <span className="text-[#171522] font-medium">Java Spring Boot &amp; Node.js</span>,
                    and implementing document storage with MongoDB Atlas.
                  </p>
                  <p>
                    Outside of code, I actively publish technical articles on Medium and serve as an elected{" "}
                    <span className="text-[#5F3C83] font-semibold">Batch Representative</span>,
                    coordinating department initiatives, peer workshops, and corporate outreach at the FIT Career Fair 2025.
                  </p>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="tech-pill text-xs">
                    <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500 mr-1.5" />
                    CGPA 3.62 / 4.00
                  </span>
                  <span className="tech-pill text-xs">
                    <MapPin className="w-3.5 h-3.5 text-[#A78BCB] mr-1.5" />
                    Moratuwa, Sri Lanka
                  </span>
                  <span className="tech-pill text-xs">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mr-1.5" />
                    Available for Internships
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-[#E5DAEE] flex flex-wrap gap-3">
                <a
                  href="https://github.com/januka-karunakaran"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill-primary !bg-[#5F3C83] !text-white hover:!bg-[#432860] text-xs py-2.5 px-5 rounded-full font-bold shadow-md shadow-[#5F3C83]/20"
                >
                  <GitHubIcon className="w-4 h-4 fill-white" />
                  <span>GitHub Profile</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/januka-karunakaran-114088301/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill-secondary !bg-white !text-[#5F3C83] hover:!bg-[#FAF7FD] text-xs py-2.5 px-5 rounded-full font-bold border border-[#E5DAEE]"
                >
                  <LinkedInIcon className="w-4 h-4 fill-[#5F3C83]" />
                  <span>LinkedIn Profile</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Values & Pillars */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            <div className="lavender-card p-6 sm:p-7">
              <div className="w-10 h-10 rounded-2xl bg-white border border-[#E5DAEE] flex items-center justify-center text-[#5F3C83] mb-4 shadow-xs">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="font-display font-bold text-lg text-[#171522] uppercase tracking-wide mb-1">
                COMPETITIVE MINDSET
              </h4>
              <p className="text-[#77727F] text-xs sm:text-sm leading-relaxed">
                National hackathon finalist in CryptX 2.0, PROJECT NOVA, and CodeRally 7.0, testing algorithmic efficiency and problem decomposition under pressure.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E5DAEE] shadow-sm">
              <div className="w-10 h-10 rounded-2xl bg-[#ECE5F5] flex items-center justify-center text-[#5F3C83] mb-4">
                <BookOpen className="w-5 h-5" />
              </div>
              <h4 className="font-display font-bold text-lg text-[#171522] uppercase tracking-wide mb-1">
                TECHNICAL THOUGHT LEADERSHIP
              </h4>
              <p className="text-[#77727F] text-xs sm:text-sm leading-relaxed">
                Regularly authoring articles on Medium regarding analytical thinking, Data Science fundamentals, and the future of conversational AI.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E5DAEE] shadow-sm">
              <div className="w-10 h-10 rounded-2xl bg-[#ECE5F5] flex items-center justify-center text-[#5F3C83] mb-4">
                <Users className="w-5 h-5" />
              </div>
              <h4 className="font-display font-bold text-lg text-[#171522] uppercase tracking-wide mb-1">
                LEADERSHIP &amp; RESPONSIBILITY
              </h4>
              <p className="text-[#77727F] text-xs sm:text-sm leading-relaxed">
                Serving as 2nd Year Batch Representative and FIT Career Fair 2025 Company Coordinator, driving peer collaboration and corporate liaison.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
