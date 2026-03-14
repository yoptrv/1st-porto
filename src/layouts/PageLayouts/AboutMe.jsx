"use client";

import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";
import GitHubActivity from "@/components/GitHubActivity";
import {
  HiOutlineSparkles,
  HiOutlineLocationMarker,
  HiOutlineCalendar,
} from "react-icons/hi";

export default function AboutMe() {
  return (
    <section id="about" className="w-full py-8 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <div className="section-label mb-4">
            <HiOutlineSparkles className="w-3.5 h-3.5" />
            About Me
          </div>
          <h2 className="section-title text-3xl md:text-5xl lg:text-6xl text-white mb-4">
            Get to know me<span className="text-primary-400">.</span>
          </h2>
          <p className="section-description">
            A brief overview of who I am, what I do, and what drives me.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 md:gap-12">
          {/* Left: Bio Card */}
          <div className="glass-card rounded-2xl p-8 md:p-10">
            <div className="space-y-6">
              {/* Bio Text */}
              <div className="text-white/70 text-base md:text-lg leading-relaxed">
                <ScrollReveal
                  baseOpacity={0.15}
                  enableBlur={false}
                  baseRotation={0}
                  blurStrength={0}
                >
                  A.K.A YO
                </ScrollReveal>
              </div>

              {/* Info Chips */}
              <div className="flex flex-wrap gap-3 pt-2">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06] text-sm text-white/50">
                  <HiOutlineLocationMarker className="w-3.5 h-3.5 text-primary-400" />
                  Jakarta, Indonesia
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06] text-sm text-white/50">
                  <HiOutlineCalendar className="w-3.5 h-3.5 text-primary-400" />
                  Computer Science 
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-sm text-emerald-300/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Undergraduate
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-sm text-emerald-300/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Open to work
                </div>
              </div>

              {/* Divider */}
              <div className="section-divider" />

              {/* Quick Facts */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                  <div className="text-xs text-white/30 uppercase tracking-wider mb-1">
                    Focus
                  </div>
                  <div className="text-sm text-white/70 font-medium">
                    FE & Data Science
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                  <div className="text-xs text-white/30 uppercase tracking-wider mb-1">
                    Interest
                  </div>
                  <div className="text-sm text-white/70 font-medium">
                    AI & Data Science
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                  <div className="text-xs text-white/30 uppercase tracking-wider mb-1">
                    Education
                  </div>
                  <div className="text-sm text-white/70 font-medium">
                    Gunadarma Univ
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                  <div className="text-xs text-white/30 uppercase tracking-wider mb-1">
                    Stack
                  </div>
                  <div className="text-sm text-white/70 font-medium">
                    React & Python
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: GitHub Activity */}
          <div className="space-y-6">
            <div className="glass-card rounded-2xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/[0.06]">
                  <svg
                    className="w-4 h-4 text-white/60"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white/80 font-semibold text-sm">
                    GitHub Activity
                  </h3>
                  <p className="text-white/30 text-xs">
                    @yoptrv • contribution graph
                  </p>
                </div>
              </div>
              <GitHubActivity />
            </div>

            {/* What I Do Card */}
            <div className="glass-card rounded-2xl p-6 md:p-8">
              <h3 className="text-white/80 font-semibold text-sm mb-4">
                What I Do
              </h3>
              <div className="space-y-3">
                {[
                  {
                    label: "Web Development",
                    desc: "React with Next.js",
                  },
                  {
                    label: "AI & Machine Learning",
                    desc: "Python, TensorFlow",
                  },
                  {
                    label: "Data Science",
                    desc: "Analysis & Visualization",
                  },
                  {
                    label: "Design",
                    desc: "UI/UX Design, Figma",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.04] hover:border-white/[0.08] transition-all duration-300"
                  >
                    <span className="text-lg">{item.emoji}</span>
                    <div>
                      <div className="text-sm text-white/70 font-medium">
                        {item.label}
                      </div>
                      <div className="text-xs text-white/30">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
