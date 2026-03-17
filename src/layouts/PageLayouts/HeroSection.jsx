"use client";

import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import {
  HiArrowDown,
  HiCode,
  HiLightningBolt,
  HiSparkles,
} from "react-icons/hi";
import {
  SiPython,
  SiJavascript,
  SiNextdotjs,
  SiTypescript,
} from "react-icons/si";
import RotatingText from "@/components/RotatingText/RotatingText";
import TiltedCard from "@/components/TiltedCard/TiltedCard";
import Shuffle from "@/components/Shuffle/Shuffle";
import Lanyard from "@/components/Lanyard/Lanyard";

/* Floating tech badge component */
function FloatingBadge({ icon: Icon, label, className, delay = "0s" }) {
  return (
    <div
      className={`absolute flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.04] backdrop-blur-xl border border-white/[0.08] shadow-lg shadow-black/20 pointer-events-none ${className}`}
      style={{
        animation: `float 6s ease-in-out ${delay} infinite`,
      }}
    >
      <Icon className="w-3.5 h-3.5 text-primary-400" />
      <span className="text-[11px] font-medium text-white/60 whitespace-nowrap">
        {label}
      </span>
    </div>
  );
}

/* Orbiting dot component */
function OrbitDot({
  size = 4,
  color = "bg-primary-400",
  offset = 0,
  duration = "20s",
  radius = 170,
}) {
  return (
    <div
      className="absolute left-1/2 top-1/2 pointer-events-none"
      style={{
        width: `${radius * 2}px`,
        height: `${radius * 2}px`,
        marginLeft: `-${radius}px`,
        marginTop: `-${radius}px`,
        animation: `orbit ${duration} linear infinite`,
        animationDelay: `-${offset}s`,
      }}
    >
      <div
        className={`absolute rounded-full ${color}`}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          top: 0,
          left: "50%",
          marginLeft: `-${size / 2}px`,
          boxShadow: color.includes("primary")
            ? "0 0 8px rgba(99,102,241,0.6)"
            : "0 0 8px rgba(139,92,246,0.6)",
        }}
      />
    </div>
  );
}

export default function HeroSection() {
  const scrollToAbout = () => {
    const el = document.getElementById("about");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="profile"
      className="relative w-full min-h-screen flex items-center justify-center px-4 md:px-8 pt-20 pb-10"
    >
      {/* Lanyard 3D di atas landing page */}
      <div className="pointer-events-none absolute top-[-180px] right-[-320px] z-20 hidden lg:block w-[920px]">
        <Lanyard position={[0, 0, 20]} gravity={[0, -20, 0]} />
      </div>

      <div className="w-full max-w-7xl mx-auto">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-center">
          {/* Left: Text Content */}
          <div className="relative space-y-8 text-center lg:text-left">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20">
              <span className="glow-dot" />
              <span className="text-primary-300 text-sm font-medium tracking-wide">
                Available for opportunities
              </span>
            </div>

            {/* Role Subtitle */}
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <span className="text-white/40 text-lg font-light">
                I&apos;m a
              </span>
              <RotatingText
                texts={[
                  "Software Engineer",
                  "AI Enthusiast",
                  "CS Student",
                  "Data Scientist",
                ]}
                mainClassName="px-3 py-1.5 rounded-lg font-semibold text-primary-200 bg-primary-500/15 border border-primary-400/20 backdrop-blur-sm text-sm"
                staggerFrom="last"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2500}
              />
            </div>

            {/* Main Name */}
            <div>
              <h1 className="section-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white">
                <Shuffle
                  text="DIO ADELIYA"
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
                  shuffleDirection="right"
                  duration={0.35}
                  animationMode="evenodd"
                  shuffleTimes={1}
                  ease="power3.out"
                  stagger={0.03}
                  threshold={0.1}
                  triggerOnce={true}
                  triggerOnHover={true}
                  respectReducedMotion={true}
                  textAlign="inherit"
                />
              </h1>
              <h1 className="section-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white mt-1">
                <Shuffle
                  text="PUTRA"
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
                  shuffleDirection="right"
                  duration={0.35}
                  animationMode="evenodd"
                  shuffleTimes={1}
                  ease="power3.out"
                  stagger={0.03}
                  threshold={0.1}
                  triggerOnce={true}
                  triggerOnHover={true}
                  respectReducedMotion={true}
                  textAlign="inherit"
                />
              </h1>
            </div>

            {/* Description */}
            <p className="text-white/40 text-base md:text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed text-justify">
              Crafting digital experiences through code, design, and innovation.
              Passionate about building scalable solutions with modern
              technologies. Undergraduate CS student in Gunadarma University
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                href="/CV-Dio.pdf"
                download="Dio-Adeliya-Putra-CV.pdf"
                className="btn-primary"
              >
                <FaDownload className="text-sm" />
                Download CV
              </a>

              <a
                href="https://github.com/yoptrv"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                <FaGithub className="text-base" />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/dio-adeliya-putra-457188249"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-12 h-12 rounded-xl border border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-300"
              >
                <FaLinkedin className="text-white/50 group-hover:text-white/80 transition-colors" />
              </a>
            </div>

            {/* Stats Row */}
            <div className="flex items-center justify-center lg:justify-start gap-8 pt-4">
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-white">4+</div>
                <div className="text-xs text-white/30 mt-0.5">Projects</div>
              </div>
              <div className="w-px h-10 bg-white/[0.08]" />
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-white">5+</div>
                <div className="text-xs text-white/30 mt-0.5">
                  Certifications
                </div>
              </div>
              <div className="w-px h-10 bg-white/[0.08]" />
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-white">10+</div>
                <div className="text-xs text-white/30 mt-0.5">Technologies</div>
              </div>
            </div>
          </div>

          {/* Right: Enhanced Photo Card with Decorative Elements */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-[360px] h-[440px] flex items-center justify-center">
              {/* === Layer 1: Background Glows (deepest) === */}
             

              {/* === Layer 5: Floating Tech Badges === */}
              <div className="hidden md:block">
                <FloatingBadge
                  icon={SiNextdotjs}
                  label="Next.js"
                  className="top-2 -left-8 z-10"
                  delay="0s"
                />
                <FloatingBadge
                  icon={SiPython}
                  label="Python"
                  className="top-16 -right-10 z-10"
                  delay="1s"
                />
                <FloatingBadge
                  icon={SiTypescript}
                  label="TypeScript"
                  className="bottom-20 -left-12 z-10"
                  delay="2s"
                />
                <FloatingBadge
                  icon={SiJavascript}
                  label="JavaScript"
                  className="bottom-8 -right-6 z-10"
                  delay="0.5s"
                />
              </div>

              {/* === Layer 6: Corner Accents === */}
              <div className="absolute top-4 left-4 pointer-events-none">
                <div className="w-8 h-[1px] bg-gradient-to-r from-primary-400/40 to-transparent" />
                <div className="w-[1px] h-8 bg-gradient-to-b from-primary-400/40 to-transparent" />
              </div>
              <div className="absolute top-4 right-4 pointer-events-none">
                <div className="w-8 h-[1px] bg-gradient-to-l from-primary-400/40 to-transparent ml-auto" />
                <div className="w-[1px] h-8 bg-gradient-to-b from-primary-400/40 to-transparent ml-auto" />
              </div>
              <div className="absolute bottom-4 left-4 pointer-events-none">
                <div className="w-[1px] h-8 bg-gradient-to-t from-primary-400/40 to-transparent" />
                <div className="w-8 h-[1px] bg-gradient-to-r from-primary-400/40 to-transparent" />
              </div>
              <div className="absolute bottom-4 right-4 pointer-events-none">
                <div className="w-[1px] h-8 bg-gradient-to-t from-primary-400/40 to-transparent ml-auto" />
                <div className="w-8 h-[1px] bg-gradient-to-l from-primary-400/40 to-transparent ml-auto" />
              </div>

              {/* === Layer 7: Hexagonal / Geometric Accents === */}
              <div className="absolute top-12 right-10 w-3 h-3 border border-primary-400/20 rotate-45 pointer-events-none animate-pulse" />
              <div className="absolute bottom-16 left-8 w-2 h-2 bg-violet-400/30 rounded-full pointer-events-none animate-float" />
              <div
                className="absolute top-[40%] -left-2 w-1.5 h-1.5 bg-primary-400/40 rounded-full pointer-events-none"
                style={{ animation: "float 5s ease-in-out 1s infinite" }}
              />
              <div className="absolute top-[25%] right-2 w-2 h-2 border border-white/10 rounded-full pointer-events-none animate-float-delayed" />

              {/* === Layer 8: THE PHOTO CARD (center) === */}
              <div className="relative z-[5]">
                {/* Gradient border effect behind the card */}
                <div
                  className="absolute -inset-[2px] rounded-2xl opacity-60 blur-[1px] pointer-events-none"
                  style={{
                    background:
                      "conic-gradient(from 0deg, #6366f1, #8b5cf6, #06b6d4, #6366f1)",
                    animation: "orbit 4s linear infinite",
                  }}
                />
                <div className="absolute -inset-[1px] rounded-2xl bg-surface-950 pointer-events-none" />

                <TiltedCard
                  imageSrc="./yp.png"
                  altText="Dio Adeliya Putra"
                  captionText="Dio Adeliya Putra"
                  containerHeight="340px"
                  containerWidth="260px"
                  imageHeight="340px"
                  imageWidth="260px"
                  rotateAmplitude={10}
                  scaleOnHover={1.05}
                  showMobileWarning={false}
                  showTooltip={false}
                  displayOverlayContent={false}
                />
              </div>

              {/* === Layer 9: Info Badge Overlays === */}
              {/* Top-right: Experience badge */}
              <div className="absolute -top-3 -right-3 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary-500/20 backdrop-blur-xl border border-primary-400/30 shadow-lg shadow-primary-500/10">
                <HiSparkles className="w-3 h-3 text-primary-300" />
                <span className="text-[10px] font-semibold text-primary-200 uppercase tracking-wider">
                  CS Student
                </span>
              </div>

              {/* Bottom-left: Code activity indicator */}
              <div className="absolute -bottom-2 -left-2 z-10 flex items-center gap-2 px-3 py-2 rounded-xl bg-white/[0.04] backdrop-blur-xl border border-white/[0.08] shadow-lg shadow-black/20">
                <div className="flex items-center gap-1">
                  <HiCode className="w-3.5 h-3.5 text-emerald-400" />
                  <span
                    className="glow-dot"
                    style={{ width: "5px", height: "5px" }}
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-medium text-white/70 leading-tight">
                    Coding
                  </span>
                  <span className="text-[9px] text-white/30 leading-tight">
                    with passion
                  </span>
                </div>
              </div>

              {/* Bottom-right: Lightning quick badge */}
              <div
                className="absolute bottom-10 -right-6 z-10 flex items-center gap-1 px-2 py-1 rounded-lg bg-amber-500/10 backdrop-blur-xl border border-amber-400/20 pointer-events-none"
                style={{ animation: "float 5s ease-in-out 2s infinite" }}
              >
                <HiLightningBolt className="w-3 h-3 text-amber-400" />
                <span className="text-[9px] font-medium text-amber-300/70">
                  Fast Learner
                </span>
              </div>

              {/* === Layer 10: Decorative Lines (connecting elements) === */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none z-[1] opacity-20 hidden lg:block"
                viewBox="0 0 360 440"
              >
                {/* Subtle connecting lines */}
                <line
                  x1="30"
                  y1="50"
                  x2="80"
                  y2="90"
                  stroke="url(#line-grad)"
                  strokeWidth="0.5"
                  strokeDasharray="4 4"
                />
                <line
                  x1="280"
                  y1="70"
                  x2="330"
                  y2="30"
                  stroke="url(#line-grad)"
                  strokeWidth="0.5"
                  strokeDasharray="4 4"
                />
                <line
                  x1="40"
                  y1="350"
                  x2="80"
                  y2="380"
                  stroke="url(#line-grad)"
                  strokeWidth="0.5"
                  strokeDasharray="4 4"
                />
                <line
                  x1="310"
                  y1="370"
                  x2="340"
                  y2="400"
                  stroke="url(#line-grad)"
                  strokeWidth="0.5"
                  strokeDasharray="4 4"
                />
                <defs>
                  <linearGradient
                    id="line-grad"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#6366f1" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-16 md:mt-24">
          <button
            onClick={scrollToAbout}
            className="group flex flex-col items-center gap-2 text-white/20 hover:text-white/40 transition-colors"
          >
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <HiArrowDown className="w-4 h-4 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
}
