import GlassNavbar from "@/components/GlassNavbar";
import HeroSection from "./PageLayouts/HeroSection";
import SkillsSection from "./PageLayouts/SkillsSection";
import ProjectsSection from "./PageLayouts/ProjectsSection";
import ContactSection from "./PageLayouts/ContactSection";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import { useEffect } from "react";
import TextPressure from "@/components/TextPressure/TextPressure";
import Dither from "@/background/Dither/Dither";

import LogoLoop from "@/components/LogoLoop/LogoLoop";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";

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
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    {
      node: <SiTypescript />,
      title: "TypeScript",
      href: "https://www.typescriptlang.org",
    },
    {
      node: <SiTailwindcss />,
      title: "Tailwind CSS",
      href: "https://tailwindcss.com",
    },
  ];

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* DITHER BACKGROUND */}
      <div className="fixed inset-0 w-full h-full -z-10 pointer-events-none">
        <Dither
          waveColor={[0.5, 0.5, 0.5]}
          disableAnimation={false}
          enableMouseInteraction={true}
          mouseRadius={0.3}
          colorNum={4}
          waveAmplitude={0.3}
          waveFrequency={3}
          waveSpeed={0.05}
        />
      </div>

      {/* LEFT + RIGHT GLOW */}
      <div className="pointer-events-none fixed top-[-200px] left-[-200px] w-[500px] h-[500px] bg-blue-400/20 blur-[200px] rounded-full z-0" />
      <div className="pointer-events-none fixed bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-purple-500/20 blur-[220px] rounded-full z-0" />

      <GlassNavbar />

      <div className="relative z-10 space-y-12">
        {/* HERO */}
        <SectionWrapper id="home">
          <HeroSection />
        </SectionWrapper>

        {/* SKILLS */}
        <SectionWrapper id="skills" title="Skills">
          <SkillsSection />

          {/* =====================
                🚀 LOGO LOOP DI SINI
              ===================== */}
          <div className="mt-16 text-white">
            <LogoLoop
              logos={techLogos}
              speed={120}
              direction="left"
              logoHeight={48}
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

  return (
    <section
      id={id}
      className={`
        opacity-0 animate-section-reveal translate-y-10 w-full py-4
        ${isContact ? "bg-white text-slate-900" : ""}
      `}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {title && (
          <div className="relative w-full min-h-[120px] mb-6 fade-up overflow-visible">
            <TextPressure
              text={title}
              flex={false}
              width={false}
              weight={true}
              italic={false}
              alpha={false}
              stroke={false}
              scale={true}
              minFontSize={70}
              textColor={isContact ? "#0f172a" : "#cacacaff"}
            />
          </div>
        )}

        <div className="fade-up">{children}</div>
      </div>
    </section>
  );
}
