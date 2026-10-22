"use client";

import React from "react";
import {
  BookOpen,
  ArrowUpRight,
  Clock,
  Sparkles,
  ExternalLink,
} from "lucide-react";

interface Blog {
  id: string;
  title: string;
  description: string;
  tag: string;
  readTime: string;
  url: string;
  highlights: string[];
}

const blogs: Blog[] = [
  {
    id: "analytical-thinking",
    title: "Why Analytical Thinking Matters in Data Science",
    description:
      "A deep dive into why mathematical algorithms only succeed when paired with structured problem-decomposition, hypothesis validation, and analytical intuition.",
    tag: "Data Science",
    readTime: "4 min read",
    url: "https://medium.com/@janukaruna2003/why-analytical-thinking-matters-in-data-science-49a90d07b411",
    highlights: ["Problem Solving", "Hypothesis Testing", "Data Mindset"],
  },
  {
    id: "think-like-data-scientist",
    title: "How to Think Like a Data Scientist: A Step-by-Step Guide for Beginners",
    description:
      "A practical blueprint and actionable mental models for approaching messy real-world datasets, asking the right questions, and extracting actionable signals.",
    tag: "Guide",
    readTime: "5 min read",
    url: "https://medium.com/@janukaruna2003/how-to-think-like-a-data-scientist-a-step-by-step-guide-for-beginners-2d7e0f6546e5",
    highlights: ["EDA Frameworks", "Statistical Thinking", "Translating Insights"],
  },
  {
    id: "ai-companions",
    title: "From Virtual Assistants to AI-Powered Digital Companions: The Future of Intelligent Interaction",
    description:
      "Exploring the generational shift from rigid voice assistants toward proactive, context-aware conversational agents capable of meaningful multimodal collaboration.",
    tag: "AI & Innovation",
    readTime: "6 min read",
    url: "https://medium.com/@janukaruna2003/from-virtual-assistants-to-ai-powered-digital-companions-the-future-of-intelligent-interaction-b97f82d654d7",
    highlights: ["Conversational UX", "Multimodal LLMs", "Future Tech"],
  },
];

export default function Blogs() {
  return (
    <section id="blogs" className="section-wrapper bg-[#F4EFFA] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <div className="badge-lavender mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#5F3C83]" />
              Publications &amp; Articles
            </div>
            <h2 className="section-headline">WRITING &amp; INSIGHTS</h2>
          </div>
          <p className="text-[#77727F] text-sm sm:text-base max-w-md">
            Sharing analytical mental models, data science methodology, and the evolving frontier of artificial intelligence on Medium.
          </p>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="bg-white rounded-3xl p-7 border border-[#E5DAEE] shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group hover:-translate-y-1.5"
            >
              <div>
                {/* Meta Header */}
                <div className="flex items-center justify-between mb-4">
                  <span className="badge-lavender text-[10px]">
                    {blog.tag}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-[#77727F] font-mono">
                    <Clock className="w-3.5 h-3.5 text-[#A78BCB]" />
                    <span>{blog.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-xl text-[#171522] tracking-wide mb-3 group-hover:text-[#5F3C83] transition-colors leading-snug">
                  <a
                    href={blog.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus:outline-none"
                  >
                    {blog.title}
                  </a>
                </h3>

                {/* Excerpt */}
                <p className="text-[#77727F] text-xs leading-relaxed mb-6">
                  {blog.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {blog.highlights.map((hl) => (
                    <span
                      key={hl}
                      className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-[#ECE5F5]/60 text-[#5F3C83]"
                    >
                      #{hl}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Action */}
              <div className="pt-4 border-t border-[#E5DAEE] flex items-center justify-between">
                <span className="text-xs font-semibold text-[#77727F]">
                  Medium Publication
                </span>
                <a
                  href={blog.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-circle-action"
                  title="Read on Medium"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Medium Profile Banner */}
        <div className="mt-12">
          <div className="lavender-card p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-[#171522] font-serif font-black text-2xl shadow-sm shrink-0">
                M
              </div>
              <div>
                <h4 className="font-display font-bold text-lg text-[#171522] uppercase tracking-wide">
                  Read More On Medium
                </h4>
                <p className="text-xs text-[#77727F]">
                  Follow @janukaruna2003 for ongoing engineering articles and case studies
                </p>
              </div>
            </div>
            <a
              href="https://medium.com/@janukaruna2003"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill-primary text-xs py-3 px-6 shrink-0"
            >
              <span>Visit Medium Profile</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
