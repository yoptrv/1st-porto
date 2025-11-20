import GlassNavbar from "@/components/GlassNavbar";
import HeroSection from "./PageLayouts/HeroSection";
import SkillsSection from "./PageLayouts/SkillsSection";
import ProjectsSection from "./PageLayouts/ProjectsSection";
import ContactSection from "./PageLayouts/ContactSection";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import { useEffect, useState } from "react";
import TextPressure from "@/components/TextPressure/TextPressure";
// import Dither from "@/background/Dither/Dither";
import AboutMe from "./PageLayouts/AboutMe";
import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiFirebase,
  SiTensorflow,
  SiPostgresql,
} from "react-icons/si";
import LogoLoop from "@/components/LogoLoop/LogoLoop";
import LightRays from "@/background/LightRays/LightRays";

export default function MainLayout() {
  useScrollAnimation();

  useEffect(() => {
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 50);
  }, []);

  // === LOGO LOOP DATA ===
  const techLogos = [
    { node: <FaReact size={80} color="#61DAFB" /> },
    // { node: <SiNextdotjs size={80} color="#ffffff" /> },
    { node: <SiTailwindcss size={80} color="#38BDF8" /> },
    { node: <SiTypescript size={80} color="#3178C6" /> },
    { node: <SiJavascript size={80} color="#F7DF1E" /> },
    { node: <FaNodeJs size={80} color="#3C873A" /> },
    { node: <SiFirebase size={80} color="#F5820D" /> },
    { node: <FaPython size={80} color="#3776AB" /> },
    { node: <SiTensorflow size={80} color="#FF6F00" /> },
    { node: <SiPostgresql size={80} color="#336791" /> },
  ];

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* DITHER BACKGROUND */}

      <div className="fixed inset-0 w-full h-full -z-10 pointer-events-none bg-black">
        <LightRays
          raysOrigin="top-center"
          raysColor="#f1f1f1ff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.02}
          className="custom-rays"
        />
      </div>

      {/* LEFT + RIGHT GLOW */}
      <div className="pointer-events-none fixed top-[-200px] left-[-200px] w-[500px] h-[500px] bg-blue-400/20 blur-[200px] rounded-full z-0" />
      <div className="pointer-events-none fixed bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-purple-500/20 blur-[220px] rounded-full z-0" />

      <GlassNavbar />
      <div className="relative z-10 space-y-12">
        {/* HERO */}
        <SectionWrapper id="profile">
          <HeroSection />
        </SectionWrapper>

        <SectionWrapper id="about">
          <AboutMe />
        </SectionWrapper>

        {/* SKILLS */}
        <SectionWrapper id="skills" title="education">
          <SkillsSection />

          {/* =====================
                🚀 LOGO LOOP DI SINI
              ===================== */}
          <div className="mt-16 text-white">
            <LogoLoop
              logos={techLogos}
              speed={120}
              direction="left"
              logoHeight={90}
              gap={40}
              hoverSpeed={0}
              scaleOnHover
              fadeOut
              fadeOutColor="none"
              ariaLabel="Technology logos"
            />
          </div>
        </SectionWrapper>

        {/* PROJECTS */}
        <SectionWrapper id="projects" title="Projects">
          <ProjectsSection />
        </SectionWrapper>

        {/* CONTACT */}
        <SectionWrapper id="contact" title="Contact">
          <ContactSection />
        </SectionWrapper>
      </div>
    </div>
  );
}

function SectionWrapper({ id, title, children }) {
  const isContact = id === "contact";
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () =>
      setIsMobile(typeof window !== "undefined" && window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id={id}
      className={`
        ${!isContact ? "opacity-0 animate-section-reveal translate-y-10" : ""}
        w-full pt-0 pb-4 md:pt-4 md:pb-8
        ${isContact ? "bg-white text-slate-900" : ""}
      `}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {title && (
          <div
            className={`
              relative w-full mb-6 overflow-visible
              ${!isContact ? "fade-up" : ""}
              ${isMobile ? "min-h-[60px]" : "min-h-[140px]"}
            `}
          >
            <TextPressure
              text={title}
              flex={false}
              width={false}
              weight={true}
              italic={false}
              alpha={false}
              stroke={false}
              scale={!isMobile}
              minFontSize={isMobile ? 22 : 120}
              textColor={isContact ? "#0f172a" : "#cacacaff"}
            />
          </div>
        )}

        <div className={`${!isContact ? "fade-up" : ""} overflow-visible`}>
          {children}
        </div>
      </div>
    </section>
  );
}
