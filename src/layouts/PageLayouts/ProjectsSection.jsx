"use client";

import { HiOutlineFolder, HiOutlineExternalLink } from "react-icons/hi";
import InfiniteMenu from "@/components/InfiniteMenu/InfiniteMenu";

export default function ProjectsSection() {
  const items = [
    {
      image: "/Toko.png",
      link: "https://toko-dahlan.vercel.app/",
      title: "Toko Kelontong Dahlan",
      description: "E-commerce UMKM (Toko Kelontong).",
    },
    {
      image: "/banksampah.png",
      link: "https://urai-pi.vercel.app/",
      title: "Bank Sampah Pekayon",
      description: "Sistem informasi bank sampah: setoran, warga, laporan.",
    },
    {
      image: "/po.png",
      link: "https://plan-out.vercel.app/",
      title: "Planout",
      description: "Aplikasi planning dan produktivitas modern.",
    },
    {
      image: "/panitia.png",
      link: "https://panitia-rt-10.vercel.app/",
      title: "Panitia RT App",
      description: "Pengelolaan data warga dan event lomba RT.",
    },
  ];

  return (
    <section id="projects" className="w-full py-8 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <div className="section-label mb-4">
            <HiOutlineFolder className="w-3.5 h-3.5" />
            Featured Work
          </div>
          <h2 className="section-title text-3xl md:text-5xl lg:text-6xl text-white mb-4">
            Projects<span className="text-primary-400">.</span>
          </h2>
          <p className="section-description">
            A selection of projects that showcase my skills and passion for
            building.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {items.map((item, i) => (
            <a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card group cursor-pointer"
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-110"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-surface-950 via-surface-950/40 to-transparent z-[1]" />

                {/* External link icon */}
                <div className="absolute top-4 right-4 z-[2] flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <HiOutlineExternalLink className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="relative z-[2] p-6 -mt-16">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary-300 bg-primary-500/15 rounded-md">
                    Web App
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-1.5 group-hover:text-primary-200 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-sm text-white/40 leading-relaxed">
                  {item.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {getTechTags(i).map((tag, j) => (
                    <span
                      key={j}
                      className="px-2 py-1 text-[10px] font-medium text-white/30 bg-white/[0.04] border border-white/[0.06] rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* 3D Infinite Menu */}
        <div className="glass-card rounded-2xl overflow-hidden">
          <div className="p-4 md:p-6 border-b border-white/[0.06]">
            <h3 className="text-white/60 text-sm font-medium">
              Interactive Showcase
            </h3>
            <p className="text-white/30 text-xs mt-1">
              Drag to explore projects in 3D
            </p>
          </div>
          <div className="relative w-full h-[500px] md:h-[600px]">
            <InfiniteMenu items={items} />
          </div>
        </div>
      </div>
    </section>
  );
}

function getTechTags(projectIndex) {
  const tags = [
    ["Next.js", "Tailwind", "Firebase", "Midtrans"],
    ["Next.js", "Tailwind", "Firebase", "CRUD"],
    ["React", "Tailwind", "Productivity"],
    ["Next.js", "Data Management", "Events"],
  ];
  return tags[projectIndex] || [];
}
