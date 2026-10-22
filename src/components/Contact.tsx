"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Copy,
  Clock,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const email = "janukaruna2003@gmail.com";
  const phone = "+94 741434247";

  const handleCopy = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const mailtoSubject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      window.location.href = `mailto:${email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    }, 600);
  };

  return (
    <section id="contact" className="section-wrapper bg-[#F4EFFA] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Lavender-tinted Banner Call To Action matching Design Spec */}
        <div className="lavender-card p-8 sm:p-14 text-center relative overflow-hidden mb-16 border-2 border-[#A78BCB]/40">
          <div className="absolute top-6 left-8 text-[#A78BCB] text-2xl select-none pointer-events-none">
            ✦
          </div>
          <div className="absolute bottom-6 right-8 text-[#A78BCB] text-3xl select-none pointer-events-none">
            ✦
          </div>

          <div className="max-w-2xl mx-auto relative z-10">
            <div className="badge-lavender mb-4 bg-white/80">
              <Sparkles className="w-3.5 h-3.5 text-[#5F3C83]" />
              Internship Opportunities
            </div>

            <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-[#171522] uppercase tracking-tight leading-none mb-4">
              LET&apos;S CREATE SOMETHING <span className="text-[#5F3C83]">EXCEPTIONAL</span>
            </h2>

            <p className="text-[#77727F] text-sm sm:text-base leading-relaxed mb-8">
              I am currently seeking a <span className="font-semibold text-[#171522]">Software Engineering Intern / Full Stack Developer</span> role.
              Have an open position or want to discuss a project? Let&apos;s connect!
            </p>

            <a
              href={`mailto:${email}`}
              className="btn-pill-primary !bg-[#5F3C83] !text-white hover:!bg-[#432860] text-xs sm:text-sm py-3.5 px-8 inline-flex items-center gap-2 rounded-full font-bold shadow-md shadow-[#5F3C83]/30"
            >
              <span>SEND AN EMAIL</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </a>
          </div>
        </div>

        {/* Contact Information & Interactive Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Contact Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white rounded-3xl p-6 border border-[#E5DAEE] shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#ECE5F5] flex items-center justify-center text-[#5F3C83] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#77727F] block">
                    Email Address
                  </span>
                  <a
                    href={`mailto:${email}`}
                    className="text-xs sm:text-sm font-bold text-[#171522] hover:text-[#5F3C83] transition-colors break-all"
                  >
                    {email}
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy(email, "email")}
                className="p-2.5 rounded-full bg-[#F8F5FC] hover:bg-[#ECE5F5] text-[#5F3C83] border border-[#E5DAEE] transition-all cursor-pointer ml-2"
                title="Copy email"
              >
                {copiedEmail ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-[#E5DAEE] shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#ECE5F5] flex items-center justify-center text-[#5F3C83] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#77727F] block">
                    Phone &amp; WhatsApp
                  </span>
                  <a
                    href={`tel:${phone.replace(/\s+/g, "")}`}
                    className="text-xs sm:text-sm font-bold text-[#171522] hover:text-[#5F3C83] transition-colors"
                  >
                    {phone}
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy(phone, "phone")}
                className="p-2.5 rounded-full bg-[#F8F5FC] hover:bg-[#ECE5F5] text-[#5F3C83] border border-[#E5DAEE] transition-all cursor-pointer ml-2"
                title="Copy phone"
              >
                {copiedPhone ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-[#E5DAEE] shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#ECE5F5] flex items-center justify-center text-[#5F3C83] shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#77727F] block">
                  Location
                </span>
                <span className="text-xs sm:text-sm font-bold text-[#171522] block">
                  Moratuwa, Sri Lanka
                </span>
                <span className="text-xs text-[#77727F]">
                  University of Moratuwa
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-[#77727F] px-2 pt-2">
              <Clock className="w-4 h-4 text-[#A78BCB]" />
              <span>Response turnaround: Within 12 - 24 hours</span>
            </div>
          </div>

          {/* Right: Clean Message Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-7 sm:p-10 border border-[#E5DAEE] shadow-sm">
              <h3 className="font-display font-bold text-2xl text-[#171522] uppercase tracking-wide mb-1">
                SEND A MESSAGE
              </h3>
              <p className="text-xs text-[#77727F] mb-6">
                Fill out the details below to open directly in your mail client.
              </p>

              {isSubmitted && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>
                    Thank you! Your mail client has opened with your drafted message.
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#171522] mb-1.5 font-display">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl border border-[#E5DAEE] bg-[#FAF7FD] text-sm text-[#171522] focus:bg-white focus:border-[#5F3C83] outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#171522] mb-1.5 font-display">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. john@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl border border-[#E5DAEE] bg-[#FAF7FD] text-sm text-[#171522] focus:bg-white focus:border-[#5F3C83] outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#171522] mb-1.5 font-display">
                    Subject
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Software Engineering Internship Inquiry"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl border border-[#E5DAEE] bg-[#FAF7FD] text-sm text-[#171522] focus:bg-white focus:border-[#5F3C83] outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#171522] mb-1.5 font-display">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me about your team or internship opportunity..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl border border-[#E5DAEE] bg-[#FAF7FD] text-sm text-[#171522] focus:bg-white focus:border-[#5F3C83] outline-none transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-pill-primary !bg-[#5F3C83] !text-white hover:!bg-[#432860] w-full justify-center text-xs py-3.5 mt-2 rounded-full font-bold shadow-md shadow-[#5F3C83]/30 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Opening Mail Client...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-white" />
                      <span>SEND MESSAGE</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
