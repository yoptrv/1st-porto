import FloatingIcons from "./FloatingIcons";
import PhotoCard from "./PhotoCard";
import { FaDownload } from "react-icons/fa";
import TypingBadge from "@/components/TypingBadge";


export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex flex-col md:flex-row
             items-center justify-start
             gap-16 px-8 md:px-20
             pt-28 md:pt-32 pb-20
             bg-white overflow-hidden rounded"
    >
      {/* Floating Icons*/}
      <FloatingIcons />

      {/* Kiri – Photo */}
      <PhotoCard />

      {/* Kanan – Text */}
      <div className="relative w-full md:w-1/2 text-center md:text-left">
        {/* glow text */}
        <div className="absolute -top-20 -left-10 w-80 h-80 bg-blue-500/20 blur-[120px] rounded-full"></div>

        <TypingBadge
          phrases={[
            "Student",
            "Software Engineer",
            "AI Enthusiast",
            "Fullstack Web Developer",
          ]}
        />

        <div className="w-24 h-1 bg-blue-500/60 rounded-full mb-4 relative z-10"></div>

        <h1 className="text-6xl md:text-7xl font-extrabold leading-tight relative z-10">
          Hi, I’m <span className="text-blue-600">Dio Adeliya Putra</span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-neutral-600 max-w-lg relative z-10">
          Mahasiswa Informatika yang passionate membangun solusi digital lewat
          beragam project—mulai dari web apps modern, integrasi AI, hingga
          eksplorasi data science. Menggabungkan kreativitas desain, logika
          software engineer, dan semangat belajar teknologi terbaru
        </p>

        <div className="mt-10 relative z-10">
          <a
            href="/cv.pdf"
            download="Dio-Adeliya-Putra-CV.pdf"
            className="
        download-btn relative inline-flex items-center gap-3
        px-8 py-3 rounded-xl font-semibold
        bg-white/30 backdrop-blur-xl
        border border-white/50 shadow-lg
        hover:shadow-[0_8px_30px_rgba(0,0,0,0.15)]
        transition-all duration-300
        text-neutral-800 hover:text-neutral-900
      "
          >
            {/* Shine Strip */}
            <span className="shine"></span>

            <FaDownload className="text-lg" />
            <span>Download CV</span>
          </a>
        </div>
      </div>
    </section>
  );
}
