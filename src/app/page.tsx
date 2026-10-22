import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Expertise from "@/components/Expertise";
import ToolsAndProcess from "@/components/ToolsAndProcess";
import Projects from "@/components/Projects";
import Blogs from "@/components/Blogs";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F4EFFA] text-[#171522] selection:bg-[#A78BCB]/30 selection:text-[#171522]">
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative flex flex-col">
        {/* Hero Section + Statistics Strip */}
        <Hero />

        {/* Soft Divider */}
        <div className="soft-divider max-w-6xl mx-auto w-full px-4" />

        {/* About Section */}
        <About />

        {/* Soft Divider */}
        <div className="soft-divider max-w-6xl mx-auto w-full px-4" />

        {/* My Expertise (4 Services Grid) */}
        <Expertise />

        {/* Soft Divider */}
        <div className="soft-divider max-w-6xl mx-auto w-full px-4" />

        {/* Tools & Technologies + My Process */}
        <ToolsAndProcess />

        {/* Soft Divider */}
        <div className="soft-divider max-w-6xl mx-auto w-full px-4" />

        {/* Notable Projects */}
        <Projects />

        {/* Soft Divider */}
        <div className="soft-divider max-w-6xl mx-auto w-full px-4" />

        {/* Writing & Insights (Medium Blogs) */}
        <Blogs />

        {/* Soft Divider */}
        <div className="soft-divider max-w-6xl mx-auto w-full px-4" />

        {/* Milestones & Leadership */}
        <Achievements />

        {/* Soft Divider */}
        <div className="soft-divider max-w-6xl mx-auto w-full px-4" />

        {/* Closing Call to Action & Contact */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
