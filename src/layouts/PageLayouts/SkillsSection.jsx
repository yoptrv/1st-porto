"use client";

import { useMemo, useState } from "react";
import {
  HiOutlineAcademicCap,
  HiOutlineCalendar,
  HiOutlineDownload,
  HiOutlineExternalLink,
  HiOutlineOfficeBuilding,
  HiOutlineSearch,
} from "react-icons/hi";

const CERTIFICATES = [
  {
    id: 1,
    image: "/sertif/1.jpg",
    title: "Building Connections and Strategic Thinking for Future Leaders",
    issuer: "Unity Hub",
    year: 2024,
    category: "Leadership",
    tags: ["Leadership", "Communication"],
    url: "/sertif/1.jpg",
  },
  {
    id: 2,
    image: "/sertif/2.png",
    title: "Strategi Keuangan dan Legalitas untuk Bisnis Berkelanjutan",
    issuer: "P2MW",
    year: 2025,
    category: "Business",
    tags: ["Business", "Finance"],
    url: "/sertif/2.pdf",
  },
  {
    id: 3,
    image: "/sertif/3.png",
    title: "Fundamentals of Web Programming",
    issuer: "Lepkom Gunadarma",
    year: 2023,
    category: "Web Dev",
    tags: ["HTML", "CSS", "JavaScript"],
    url: "/sertif/3.pdf",
  },
  {
    id: 4,
    image: "/sertif/4.png",
    title: "Fundamentals of DBMS",
    issuer: "Lepkom Gunadarma",
    year: 2023,
    category: "Database",
    tags: ["DBMS", "SQL"],
    url: "/sertif/4.pdf",
  },
  {
    id: 5,
    image: "/sertif/vins.jpg",
    title: "Internship as a Mobile Developer",
    issuer: "Victoria Insurance",
    year: 2024,
    category: "Experience",
    tags: ["Internship", "Mobile Development"],
    url: "/sertif/pdf_vins.pdf",
  },
  {
    id: 6,
    image: "/sertif/dasar-ds.png",
    title: "Fundamentals of Data Science",
    issuer: "Dicoding Indonesia",
    year: 2026,
    category: "Data Science",
    tags: ["Data Science", "Python"],
    url: "/sertif/dasar-ds.pdf",
  },
  {
    id: 7,
    image: "/sertif/dasar-py.png",
    title: "Python Fundamental",
    issuer: "Dicoding Indonesia",
    year: 2026,
    category: "Programming",
    tags: ["Python", "Programming"],
    url: "/sertif/dasar-py.pdf",
  },
  {
    id: 8,
    image: "/sertif/gen-ai.png",
    title: "Generative AI for Everyone",
    issuer: "IBM Skills",
    year: 2026,
    category: "AI",
    tags: ["AI", "Machine Learning"],
    url: "/sertif/gen-ai.pdf",
  },
  {
    id: 9,
    image: "/sertif/sql-inter.png",
    title: "SQL Intermediate",
    issuer: "Universitas Gunadarma",
    year: 2025,
    category: "Database",
    tags: ["SQL", "Database"],
    url: "/sertif/sql-inter.pdf",
  },
  {
    id: 10,
    image: "/sertif/fund-ml.png",
    title: "Fundamentals of Machine Learning",
    issuer: "Dicoding Indonesia",
    year: 2026,
    category: "AI",
    tags: ["AI", "Machine Learning"],
    url: "/sertif/fund-ml.pdf",
  },
];

const INITIAL_VISIBLE = 6;

export default function EducationSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);

  const categories = useMemo(
    () => ["All", ...new Set(CERTIFICATES.map((item) => item.category))],
    [],
  );

  const filteredCertificates = useMemo(() => {
    const q = search.trim().toLowerCase();

    return CERTIFICATES.filter((item) => {
      const matchesCategory =
        activeCategory === "All" || item.category === activeCategory;

      const matchesSearch =
        q.length === 0 ||
        item.title.toLowerCase().includes(q) ||
        item.issuer.toLowerCase().includes(q) ||
        item.tags.some((tag) => tag.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    }).sort((a, b) => b.year - a.year);
  }, [activeCategory, search]);

  const visibleCertificates = filteredCertificates.slice(0, visibleCount);

  const stats = useMemo(() => {
    const issuers = new Set(CERTIFICATES.map((item) => item.issuer));
    const latestYear = Math.max(...CERTIFICATES.map((item) => item.year));

    return {
      total: CERTIFICATES.length,
      issuers: issuers.size,
      latestYear,
    };
  }, []);

  const handleOpenCertificate = (url) => {
    if (!url) return;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleDownload = (url) => {
    if (!url) return;
    const a = document.createElement("a");
    a.href = url;
    a.download = url.split("/").pop();
    a.click();
  };

  return (
    <section id="skills" className="w-full py-8 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="mb-8 md:mb-10">
          <div className="section-label mb-4">
            <HiOutlineAcademicCap className="w-3.5 h-3.5" />
            Education & Certifications
          </div>
          <h2 className="section-title text-3xl md:text-5xl lg:text-6xl text-white mb-4">
            Experience & Skills<span className="text-primary-400">.</span>
          </h2>
          <p className="section-description max-w-3xl">
            A scalable certification showcase built for long-term growth. Add as
            many certificates as needed while keeping layout clean, searchable,
            and professional.
          </p>
        </div>

        {/* Top Summary */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6 md:mb-8">
          <div className="glass-card rounded-2xl p-4">
            <p className="text-white/35 text-xs uppercase tracking-wider mb-1">
              Total Certificates
            </p>
            <p className="text-2xl font-semibold text-white">{stats.total}</p>
          </div>
          <div className="glass-card rounded-2xl p-4">
            <p className="text-white/35 text-xs uppercase tracking-wider mb-1">
              Learning Partners
            </p>
            <p className="text-2xl font-semibold text-white">{stats.issuers}</p>
          </div>
          <div className="glass-card rounded-2xl p-4">
            <p className="text-white/35 text-xs uppercase tracking-wider mb-1">
              Latest Achievement
            </p>
            <p className="text-2xl font-semibold text-white">
              {stats.latestYear}
            </p>
          </div>
        </div>

        {/* Controls */}
        <div className="glass-card rounded-2xl p-3 md:p-4 mb-6 md:mb-8">
          <div className="flex flex-col gap-3">
            <div className="relative">
              <HiOutlineSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30 w-4 h-4" />
              <input
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setVisibleCount(INITIAL_VISIBLE);
                }}
                placeholder="Search by title, issuer, or tags..."
                className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl py-2.5 pl-10 pr-3 text-sm text-white placeholder:text-white/30 outline-none focus:border-primary-400/50 focus:bg-white/[0.05] transition-all"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => {
                const isActive = activeCategory === category;
                return (
                  <button
                    key={category}
                    onClick={() => {
                      setActiveCategory(category);
                      setVisibleCount(INITIAL_VISIBLE);
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all duration-300 ${
                      isActive
                        ? "bg-primary-500/20 text-primary-200 border-primary-400/35"
                        : "bg-white/[0.02] text-white/50 border-white/[0.08] hover:bg-white/[0.05] hover:text-white/75"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Certificate Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {visibleCertificates.map((item) => (
            <article
              key={item.id}
              className="group glass-card rounded-2xl overflow-hidden border border-white/[0.08] hover:border-primary-400/30 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="relative overflow-hidden aspect-[16/10] bg-surface-900">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2 py-1 rounded-lg bg-black/50 backdrop-blur-md border border-white/10 text-[11px] text-white/75">
                  <HiOutlineCalendar className="w-3.5 h-3.5" />
                  {item.year}
                </div>

                <div className="absolute top-3 right-3 px-2 py-1 rounded-lg bg-primary-500/20 backdrop-blur-md border border-primary-400/30 text-[11px] text-primary-200 font-medium">
                  {item.category}
                </div>
              </div>

              <div className="p-4">
                <h3 className="text-white text-base font-semibold leading-snug line-clamp-2 min-h-[2.75rem]">
                  {item.title}
                </h3>

                <div className="flex items-center gap-1.5 text-white/45 text-xs mt-2">
                  <HiOutlineOfficeBuilding className="w-3.5 h-3.5" />
                  <span>{item.issuer}</span>
                </div>

                <div className="flex flex-wrap gap-1.5 mt-3">
                  {item.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md text-[10px] bg-white/[0.04] border border-white/[0.08] text-white/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 mt-4">
                  <button
                    onClick={() => handleOpenCertificate(item.url)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-primary-500/15 hover:bg-primary-500/25 border border-primary-400/25 text-primary-200 text-xs font-medium transition-all"
                  >
                    <HiOutlineExternalLink className="w-3.5 h-3.5" />
                    View
                  </button>
                  <button
                    onClick={() => handleDownload(item.url)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] text-white/75 text-xs font-medium transition-all"
                  >
                    <HiOutlineDownload className="w-3.5 h-3.5" />
                    Download
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Empty State */}
        {filteredCertificates.length === 0 && (
          <div className="glass-card rounded-2xl p-8 text-center mt-4">
            <p className="text-white/70 font-medium mb-1">
              No certificates found
            </p>
            <p className="text-white/40 text-sm">
              Try changing keyword or filter category.
            </p>
          </div>
        )}

        {/* Load More */}
        {visibleCount < filteredCertificates.length && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setVisibleCount((prev) => prev + 6)}
              className="btn-outline"
            >
              Show More Certificates
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
