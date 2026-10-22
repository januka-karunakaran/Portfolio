"use client";

import React, { useState } from "react";
import {
  Trophy,
  Award,
  Users,
  CheckCircle2,
  Sparkles,
  Medal,
  Briefcase,
  Star,
} from "lucide-react";

interface HackathonItem {
  competition: string;
  rank: string;
  organizer: string;
  description: string;
  highlight: string;
}

interface CertificationItem {
  title: string;
  issuer: string;
  badge: string;
  skills: string[];
}

interface LeadershipItem {
  role: string;
  organization: string;
  period: string;
  points: string[];
}

const hackathons: HackathonItem[] = [
  {
    competition: "CryptX 2.0",
    rank: "Top 20 Islandwide",
    organizer: "National Cryptography & Security Hackathon",
    description:
      "Competed against top university engineering teams solving advanced cryptographic puzzles, ciphers, and algorithmic challenges.",
    highlight: "Top 20 Finalist",
  },
  {
    competition: "PROJECT NOVA",
    rank: "Top 8 Finalist",
    organizer: "University Software Innovation Hackathon",
    description:
      "Conceptualized and pitched a working tech prototype addressing real-world operational bottlenecks with scalable software.",
    highlight: "Top 8 Nationwide",
  },
  {
    competition: "CodeRally 7.0",
    rank: "Finalist",
    organizer: "Annual Competitive Coding Championship",
    description:
      "Tackled complex algorithmic logic and data structure challenges under strict time-restricted competition constraints.",
    highlight: "Official Finalist",
  },
  {
    competition: "J'Pura Xtreme 3.0",
    rank: "Finalist",
    organizer: "Inter-University Algorithmic Hackathon",
    description:
      "Collaborative competitive programming marathon evaluating algorithmic efficiency, memory optimization, and speed.",
    highlight: "Official Finalist",
  },
];

const certifications: CertificationItem[] = [
  {
    title: "Postman API Fundamentals Student Expert",
    issuer: "Postman",
    badge: "API Expert",
    skills: ["REST APIs", "API Testing", "Collections", "Postman Scripting"],
  },
  {
    title: "Java (Basic)",
    issuer: "HackerRank",
    badge: "Verified Skill",
    skills: ["OOP", "Data Structures", "Exception Handling", "Collections"],
  },
  {
    title: "Python (Basic)",
    issuer: "HackerRank",
    badge: "Verified Skill",
    skills: ["Control Flow", "Functions", "Data Structures", "Strings"],
  },
  {
    title: "CSS (Basic)",
    issuer: "HackerRank",
    badge: "Verified Skill",
    skills: ["Flexbox", "Grid", "Responsive Layouts", "Selectors"],
  },
  {
    title: "REST API (Intermediate)",
    issuer: "HackerRank",
    badge: "Verified Skill",
    skills: ["HTTP Methods", "Status Codes", "Pagination", "Payload Parsing"],
  },
];

const leadership: LeadershipItem[] = [
  {
    role: "Batch Representative (2nd Year)",
    organization: "Department of Information Technology, University of Moratuwa",
    period: "2024 – Present",
    points: [
      "Elected by peers to liaise between undergraduate student body and academic faculty members.",
      "Championed student academic inquiries, schedule optimizations, and course module feedback loops.",
      "Spearheaded collaborative study resources and coordinated departmental academic workshops.",
    ],
  },
  {
    role: "Company Coordinator",
    organization: "FIT Career Fair 2025",
    period: "2024 – 2025",
    points: [
      "Directly liaised with leading enterprise tech firms and software agencies for campus recruitment.",
      "Facilitated on-site and remote interview schedules, corporate onboarding, and technical presentations.",
      "Ensured seamless communication between undergraduate applicants and recruiting HR teams.",
    ],
  },
  {
    role: "Organizing Committee Member",
    organization: "Departmental Tech & Cultural Initiatives",
    period: "2023 – Present",
    points: [
      "Actively contributed to organizing university technical competitions, hackathons, and symposiums.",
      "Collaborated cross-functionally across technical logistics, registration platforms, and media coordination.",
    ],
  },
];

export default function Achievements() {
  const [activeTab, setActiveTab] = useState<"all" | "hackathons" | "certifications" | "leadership">("all");

  return (
    <section id="achievements" className="section-wrapper bg-[#F4EFFA] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="badge-lavender mb-3">
              <Trophy className="w-3.5 h-3.5 text-[#5F3C83]" />
              Milestones &amp; Recognition
            </div>
            <h2 className="section-headline">ACHIEVEMENTS &amp; SERVICE</h2>
          </div>
          <p className="text-[#77727F] text-sm sm:text-base max-w-md">
            Verified competitive programming distinctions, industry certifications, and leadership roles at the University of Moratuwa.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === "all"
                ? "bg-[#5F3C83] text-white shadow-sm"
                : "bg-white text-[#77727F] border border-[#E5DAEE] hover:text-[#171522]"
            }`}
          >
            All Milestones
          </button>
          <button
            onClick={() => setActiveTab("hackathons")}
            className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === "hackathons"
                ? "bg-[#5F3C83] text-white shadow-sm"
                : "bg-white text-[#77727F] border border-[#E5DAEE] hover:text-[#171522]"
            }`}
          >
            Hackathons (4)
          </button>
          <button
            onClick={() => setActiveTab("certifications")}
            className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === "certifications"
                ? "bg-[#5F3C83] text-white shadow-sm"
                : "bg-white text-[#77727F] border border-[#E5DAEE] hover:text-[#171522]"
            }`}
          >
            Certifications (5)
          </button>
          <button
            onClick={() => setActiveTab("leadership")}
            className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === "leadership"
                ? "bg-[#5F3C83] text-white shadow-sm"
                : "bg-white text-[#77727F] border border-[#E5DAEE] hover:text-[#171522]"
            }`}
          >
            Leadership (3)
          </button>
        </div>

        {/* Content Grids */}
        <div className="space-y-12">
          {/* Hackathons Subsection */}
          {(activeTab === "all" || activeTab === "hackathons") && (
            <div>
              <h3 className="font-display font-bold text-lg text-[#171522] uppercase tracking-wider mb-5 flex items-center gap-2">
                <Medal className="w-4 h-4 text-[#A78BCB]" />
                Competitive Hackathon Distinctions
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {hackathons.map((h, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-3xl p-6 border border-[#E5DAEE] shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="badge-lavender text-[10px]">
                          {h.highlight}
                        </span>
                        <Trophy className="w-4 h-4 text-[#A78BCB]" />
                      </div>
                      <h4 className="font-display font-bold text-lg text-[#171522] uppercase tracking-wide mb-1">
                        {h.competition}
                      </h4>
                      <p className="text-xs font-bold text-[#5F3C83] mb-2 font-mono">
                        {h.rank}
                      </p>
                      <p className="text-xs text-[#77727F] leading-relaxed mb-4">
                        {h.description}
                      </p>
                    </div>
                    <div className="text-[11px] text-[#A78BCB] font-semibold pt-3 border-t border-[#E5DAEE]">
                      {h.organizer}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Certifications Subsection */}
          {(activeTab === "all" || activeTab === "certifications") && (
            <div>
              <h3 className="font-display font-bold text-lg text-[#171522] uppercase tracking-wider mb-5 flex items-center gap-2">
                <Award className="w-4 h-4 text-[#A78BCB]" />
                Industry Certifications &amp; Assessments
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {certifications.map((c, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-3xl p-5 border border-[#E5DAEE] shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] font-mono font-semibold text-[#77727F] uppercase">
                          {c.issuer}
                        </span>
                        <span className="badge-lavender text-[9px] px-2 py-0.5">
                          {c.badge}
                        </span>
                      </div>
                      <h4 className="font-display font-bold text-sm text-[#171522] uppercase tracking-wide mb-3">
                        {c.title}
                      </h4>
                      <div className="flex flex-wrap gap-1 mb-4">
                        {c.skills.map((s) => (
                          <span
                            key={s}
                            className="text-[10px] font-mono text-[#5F3C83] bg-[#F8F5FC] px-2 py-0.5 rounded-full border border-[#E5DAEE]"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-emerald-700 font-medium pt-3 border-t border-[#E5DAEE]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Verified</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Leadership Subsection */}
          {(activeTab === "all" || activeTab === "leadership") && (
            <div>
              <h3 className="font-display font-bold text-lg text-[#171522] uppercase tracking-wider mb-5 flex items-center gap-2">
                <Users className="w-4 h-4 text-[#A78BCB]" />
                University Leadership &amp; Community
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {leadership.map((item, i) => (
                  <div
                    key={i}
                    className="lavender-card p-6 sm:p-7 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-mono font-bold text-[#5F3C83]">
                          {item.period}
                        </span>
                        <Briefcase className="w-4 h-4 text-[#A78BCB]" />
                      </div>
                      <h4 className="font-display font-bold text-lg text-[#171522] uppercase tracking-wide mb-1">
                        {item.role}
                      </h4>
                      <p className="text-xs text-[#77727F] font-semibold mb-4">
                        {item.organization}
                      </p>

                      <ul className="space-y-2 mb-4">
                        {item.points.map((pt, idx) => (
                          <li
                            key={idx}
                            className="text-xs text-[#77727F] flex items-start gap-2"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#A78BCB] shrink-0 mt-1.5" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-3 border-t border-[#E5DAEE] text-xs font-semibold text-[#5F3C83] flex items-center gap-1.5">
                      <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                      <span>Elected Student Role</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
