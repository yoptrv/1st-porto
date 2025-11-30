"use client";
import { useEffect, useState } from "react";
import useScrollNavbar from "@/hooks/useScrollNavbar";

export default function GlassNavbar() {
  const visible = useScrollNavbar();
  const [active, setActive] = useState("profile");

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
    const sections = ["profile", "skills", "projects", "contact"];
    const detect = () => {
      let current = "profile";
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

  return (
    <div
      className={`
        fixed top-6 left-1/2 -translate-x-1/2 z-50
        backdrop-blur-2xl bg-white/10 border border-white/20
        shadow-[0_4px_20px_rgba(0,0,0,0.25)]
        px-6 py-3 rounded-[28px]
        w-[260px] md:w-[320px]
        transition-all duration-500

        ${
          visible
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 -translate-y-5"
        }
      `}
    >
      {/* NAV BUTTONS */}
      <div className="flex justify-center gap-5">
        {["profile", "skills", "projects", "contact"].map((item) => {
          const label = item.charAt(0).toUpperCase() + item.slice(1);
          const isActiveItem = active === item;

          return (
            <button
              key={item}
              onClick={scrollToSection(`#${item}`)}
              className={`
                relative text-sm tracking-wide transition
                ${
                  isActiveItem
                    ? "text-white font-semibold"
                    : "text-white/70 hover:text-white"
                }
              `}
            >
              {label}

              {/* Active dot */}
              {isActiveItem && (
                <span className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-1.5 h-1.5 bg-current rounded-full"></span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
