"use client";

import ScrollVelocity from "@/components/ScrollVelocity/ScrollVelocity";
import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";
import GitHubActivity from "@/components/GitHubActivity";

export default function AboutMe() {
  return (
    <section id="about" className="w-full py-1">
      <div className="w-full flex flex-col items-center">
        {/* === SCROLL TEXT (DI LUAR CARD) === */}
        <div className="relative w-full max-w-5xl h-[80px] sm:h-[100px] md:h-[140px] overflow-visible mb-4 md:mb-8">
          <ScrollVelocity
            texts={["PORTOFOLIO", "ABOUT ME"]}
            velocity={22}
            className="text-white/70 text-4xl md:text-6xl font-bold tracking-[0.25em]"
          />
        </div>

        {/* === CARD ABOUT === */}
        <div
          className="
            w-full max-w-[1350px] mx-auto
            rounded-3xl 
            bg-white/30 
            border border-white/10 
            backdrop-blur-xl 
            px-6 py-8 md:px-10 md:py-10 
            shadow-[0_18px_60px_rgba(0,0,0,0.65)]
          "
        >
          {/* DESKRIPSI */}
          <div className="space-y-4 text-start text-white/90 text-base md:text-lg leading-relaxed">
            <ScrollReveal
              baseOpacity={0.2}
              enableBlur={false}
              baseRotation={0}
              blurStrength={0}
            >
              Im a Computer Science student who studies everything related to
              technology, from software engineering and web development to
              artificial intelligence and data science. Enjoys collaborating on
              various innovative projects, both on campus and in the community,
              and is actively building web applications with modern stacks such
              as Next.js.
            </ScrollReveal>
            <GitHubActivity />
          </div>
        </div>
      </div>
    </section>
  );
}
