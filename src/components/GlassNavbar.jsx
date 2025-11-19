"use client";
import { useEffect, useState } from "react";
import useScrollNavbar from "@/hooks/useScrollNavbar";

export default function GlassNavbar() {
  const visible = useScrollNavbar();
  const [active, setActive] = useState("home");
  const [expanded, setExpanded] = useState(false);
  const isContactActive = active === "contact";

  const scrollToSection = (id) => (e) => {
    e.preventDefault();
    const sec = document.querySelector(id);
    if (!sec) return;

    const offset = -100;
    const top = sec.getBoundingClientRect().top + window.scrollY + offset;

    window.scrollTo({ top, behavior: "smooth" });
    setActive(id.replace("#", ""));
  };

  // detect active section
  useEffect(() => {
    const sections = ["home", "skills", "projects", "contact"];
    const detect = () => {
      let current = "home";
      sections.forEach((s) => {
        const sec = document.getElementById(s);
        if (sec && window.scrollY >= sec.offsetTop - 200) current = s;
      });
      setActive(current);
    };
    detect();
    window.addEventListener("scroll", detect);
    return () => window.removeEventListener("scroll", detect);
  }, []);

  // ==========================================================
  // CONTEXT ACTIONS BASED ON ACTIVE NAV
  // ==========================================================

  const renderActions = () => {
    switch (active) {
      case "home":
        return (
          <button
            onClick={() => window.open("/cv.pdf", "_blank")}
            className="px-4 py-1.5 text-xs rounded-full bg-white/20 hover:bg-white/30"
          >
            Download CV
          </button>
        );

      case "skills":
        return <span className="text-xs opacity-50">No quick actions</span>;

      case "projects":
        return (
          <button
            onClick={() => (window.location.href = "#projects")}
            className="px-4 py-1.5 text-xs rounded-full bg-white/20 hover:bg-white/30"
          >
            View More Projects
          </button>
        );

      case "contact":
        return (
          <div className="flex gap-2">
            <button
              onClick={() =>
                window.open(
                  "https://linkedin.com/in/dio-adeliya-putra-457188249/",
                  "_blank"
                )
              }
              className="
          px-3 py-1.5 text-xs rounded-full
          bg-gray-100 hover:bg-white/60
          text-black font-medium
          shadow-sm
        "
            >
              LinkedIn
            </button>
            <button
              onClick={() =>
                window.open("https://instagram.com/dioptrv", "_blank")
              }
              className="
          px-3 py-1.5 text-xs rounded-full
          bg-gray-100 hover:bg-white/60
          text-black font-medium
          shadow-sm
        "
            >
              Instagram
            </button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div
      className={`
        fixed top-6 left-1/2 -translate-x-1/2 z-50
        transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
        backdrop-blur-2xl bg-white/10 border border-white/20
        shadow-[0_4px_20px_rgba(0,0,0,0.25)]
        cursor-pointer

       ${
         expanded
           ? `
      w-[350px]        /* ukuran mobile  */
      rounded-[28px] 
      px-5 py-4

      md:w-[420px]    /* ukuran desktop */
      md:rounded-[32px] 
      md:px-8 md:py-5
    `
           : `
      w-[260px]       /* mobile default */
      rounded-[24px] 
      px-4 py-2.5

      md:w-[260px]    /* desktop default */
      md:rounded-[28px] 
      md:px-6 md:py-3
    `
       }
        ${
          visible
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 -translate-y-5"
        }
      `}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      {/* NAV BUTTONS */}
      <div className="flex justify-center gap-4 mb-1">
        {["home", "skills", "projects", "contact"].map((item) => {
          const label = item.charAt(0).toUpperCase() + item.slice(1);
          const isActiveItem = active === item;

          return (
            <button
              key={item}
              onClick={scrollToSection(`#${item}`)}
              className={`
          relative text-sm tracking-wide transition
          ${
            isContactActive
              ? isActiveItem
                ? "text-black font-semibold"
                : "text-black/60 hover:text-black"
              : isActiveItem
              ? "text-white font-semibold"
              : "text-white/70 hover:text-white"
          }
        `}
            >
              {label}

              {isActiveItem && (
                <span className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-1.5 h-1.5 bg-current rounded-full"></span>
              )}
            </button>
          );
        })}
      </div>

      {/* EXPANDED PANEL ACTIONS */}
      {expanded && (
        <div
          className={`
      flex justify-between mt-3
      ${isContactActive ? "text-black" : "text-white/90"}
    `}
        >
          {/* Active label */}
          <div className="flex flex-col">
            <span
              className={`
          text-xs opacity-70
          ${isContactActive ? "text-black/60" : ""}
        `}
            >
              Active
            </span>
            <span className="text-base font-semibold">
              {active.charAt(0).toUpperCase() + active.slice(1)}
            </span>
          </div>

          {/* Dynamic actions */}
          {renderActions()}
        </div>
      )}
    </div>
  );
}
