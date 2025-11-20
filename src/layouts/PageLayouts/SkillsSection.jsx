"use client";

import { useState, useEffect } from "react";
import ChromaGrid from "@/components/ChromaGrid/ChromaGrid";

export default function EducationSection() {
  // DETECT MOBILE
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const items = [
    {
      image: "/sertif/1.jpg", // tetap jadi preview
      title: "Frontend Developer Certificate",
      subtitle: "Unity Hub — 2024",
      handle: "Klik untuk download",
      borderColor: "#3B82F6",
      gradient: "linear-gradient(145deg, #3B82F6, #000)",
      url: "/sertif/1.jpg", 
    },
    {
      image: "/sertif/2.png",
      title: "Strategi Keuangan dan Legalitas untuk Bisnis Berkelanjutan",
      subtitle: "P2MW — 2025",
      handle: "Klik untuk download",
      borderColor: "#10B981",
      gradient: "linear-gradient(180deg, #10B981, #000)",
      url: "/sertif/2.pdf",
    },
    {
      image: "/sertif/3.png",
      title: "Fundamentals of Web Programming",
      subtitle: "Lepkom Gunadarma — 2023",
      handle: "Klik untuk download",
      borderColor: "#ae00ffff",
      gradient: "linear-gradient(180deg, #6710b9ff, #050505ff)",
      url: "/sertif/3.pdf",
    },
    {
      image: "/sertif/4.png",
      title: "Fundamentals of DBMS",
      subtitle: "Lepkom Gunadarma — 2023",
      handle: "Klik untuk download",
      borderColor: "#ae00ffff",
      gradient: "linear-gradient(180deg, #6710b9ff, #000)",
      url: "/sertif/4.pdf",
    },
  ];

  // AUTO DOWNLOAD
 const handleDownload = (url) => {
   if (!url) return; 
   const a = document.createElement("a");
   a.href = url;
   a.download = url.split("/").pop();
   a.click();
 };
 

  return (
    <section id="skills" className="w-full pt-1 md:pt-20 pb-1 md:pb-1">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        {/* === MOBILE MODE === */}
        {isMobile ? (
          <div className="grid grid-cols-1 gap-6">
            {items.map((item, i) => (
              <div
                key={i}
                onClick={() => handleDownload(item.url)}
                className="bg-white/10 border border-white/10 rounded-2xl p-4 z
                           backdrop-blur-xl active:scale-[0.97] transition cursor-pointer"
              >
                <img
                  src={item.image}
                  className="w-full rounded-xl mb-3"
                  alt={item.title}
                />
                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-neutral-300 text-sm">{item.subtitle}</p>
                <span className="text-sm text-cyan-300">{item.handle}</span>
              </div>
            ))}
          </div>
        ) : (
          /* === DESKTOP MODE === */
          <div className="relative py-1">
            <ChromaGrid
              items={items.map((item) => ({
                ...item,
                onClick: () => handleDownload(item.url),
              }))}
              radius={300}
              damping={0.45}
              fadeOut={0.1}
              ease="power3.out"
            />
          </div>
        )}
      </div>
    </section>
  );
}