import GlassNavbar from "@/components/GlassNavbar";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import { useEffect } from "react";

export default function MainLayout() {
  useScrollAnimation();

    useEffect(() => {
      window.history.scrollRestoration = "manual";
      window.scrollTo(0, 0);
    }, []);

  return (
    <div className="relative w-full">
      {/* Glow kiri */}
      <div
        className="pointer-events-none fixed top-[-200px] left-[-200px] w-[500px] h-[500px]
        bg-blue-400/20 blur-[200px] rounded-full z-0"
      />

      {/* Glow kanan */}
      <div
        className="pointer-events-none fixed bottom-[-200px] right-[-200px] w-[500px] h-[500px]
        bg-purple-500/20 blur-[220px] rounded-full z-0"
      />

      {/* Navbar */}
      <GlassNavbar />

      {/* Container utama */}
      <div className="relative z-10 space-y-28 pt-28">
        {/* HERO (tanpa title) */}
        <SectionWrapper id="home">
          <HeroSection />
        </SectionWrapper>

        <SectionWrapper id="skills" title="Skills">
          <SkillsSection />
        </SectionWrapper>

        <SectionWrapper id="projects" title="Projects">
          <ProjectsSection />
        </SectionWrapper>

        <SectionWrapper id="contact" title="Contact">
          <ContactSection />
        </SectionWrapper>
      </div>
    </div>
  );
}

function SectionWrapper({ id, title, children }) {
  return (
    <section
      id={id}
      className="opacity-0 animate-section-reveal translate-y-10 w-full py-4"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {title && (
          <h2 className="text-3xl md:text-5xl font-bold mb-6 fade-up">
            {title}
          </h2>
        )}
        <div className="fade-up">{children}</div>
      </div>
    </section>
  );
}

