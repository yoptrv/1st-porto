"use client";

import GlassNavbar from "@/components/GlassNavbar";
import HeroSection from "./PageLayouts/HeroSection";
import SkillsSection from "./PageLayouts/SkillsSection";
import ProjectsSection from "./PageLayouts/ProjectsSection";
import ContactSection from "./PageLayouts/ContactSection";
import AboutMe from "./PageLayouts/AboutMe";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import { useEffect } from "react";
import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiFirebase,
  SiTensorflow,
  SiPostgresql,
  SiFigma,
  SiCanva,
  SiTypescript,
  SiMysql,
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

  // Tech logos for the marquee
  const techLogos = [
    { node: <FaReact size={50} color="#61DAFB" /> },
    { node: <SiNextdotjs size={50} color="#a0a0a0" /> },
    { node: <SiTailwindcss size={50} color="#38BDF8" /> },
    { node: <SiJavascript size={50} color="#F7DF1E" /> },
    { node: <FaNodeJs size={50} color="#3C873A" /> },
    { node: <SiFirebase size={50} color="#F5820D" /> },
    { node: <FaPython size={50} color="#3776AB" /> },
    { node: <SiTensorflow size={50} color="#FF6F00" /> },
    { node: <SiTypescript size={50} color="#0ea2cf" /> },
    { node: <SiMysql size={50} color="#d5e72e" /> },
    { node: <SiFigma size={50} color="#cf750e" /> },
    { node: <SiCanva size={50} color="#0eb9cf" /> },
  ];

  return (
    <div className="relative w-full min-h-screen overflow-hidden noise-overlay">
      {/* Background Light Rays */}
      <div className="fixed inset-0 w-full h-full -z-10 pointer-events-none bg-surface-950">
        <LightRays
          raysOrigin="top-center"
          raysColor="#818cf8"
          raysSpeed={1.2}
          lightSpread={0.6}
          rayLength={0.8}
          followMouse={true}
          mouseInfluence={0.08}
          noiseAmount={0.08}
          distortion={0.015}
          className="custom-rays"
        />
      </div>

      {/* Ambient Glow Effects */}
      <div className="pointer-events-none fixed top-[-300px] left-[-200px] w-[600px] h-[600px] bg-primary-500/8 blur-[250px] rounded-full z-0" />
      <div className="pointer-events-none fixed bottom-[-300px] right-[-200px] w-[600px] h-[600px] bg-purple-500/8 blur-[250px] rounded-full z-0" />
      <div className="pointer-events-none fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-600/5 blur-[300px] rounded-full z-0" />

      {/* Navigation */}
      <GlassNavbar />

      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <HeroSection />

        {/* Divider with Logo Loop */}
        <div className="relative py-8 md:py-12">
          <div className="section-divider mb-8" />
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/[0.06]" />
              <span className="text-[10px] text-white/20 uppercase tracking-[0.3em] font-medium">
                Tech Stack
              </span>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/[0.06]" />
            </div>
          </div>
          <LogoLoop
            logos={techLogos}
            speed={100}
            direction="left"
            logoHeight={60}
            gap={50}
            hoverSpeed={0}
            scaleOnHover
            fadeOut
            fadeOutColor="none"
            ariaLabel="Technology logos"
          />
        </div>

        {/* About Me Section */}
        <SectionWrapper id="about">
          <AboutMe />
        </SectionWrapper>

        {/* Skills / Education Section */}
        <SectionWrapper id="skills">
          <SkillsSection />
        </SectionWrapper>

        {/* Projects Section */}
        <SectionWrapper id="projects">
          <ProjectsSection />
        </SectionWrapper>

        {/* Contact Section */}
        <SectionWrapper id="contact">
          <ContactSection />
        </SectionWrapper>
      </main>
    </div>
  );
}

function SectionWrapper({ id, children }) {
  return (
    <section
      id={id}
      className="opacity-0 animate-section-reveal translate-y-10 w-full"
    >
      <div className="fade-up overflow-visible">{children}</div>
    </section>
  );
}
