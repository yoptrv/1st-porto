"use client";
import { useEffect, useState } from "react";
import useScrollNavbar from "@/hooks/useScrollNavbar";
import {
  HiOutlineUser,
  HiOutlineAcademicCap,
  HiOutlineFolder,
  HiOutlineMail,
} from "react-icons/hi";

const navItems = [
  { id: "profile", label: "Home", icon: HiOutlineUser },
  { id: "skills", label: "Skills", icon: HiOutlineAcademicCap },
  { id: "projects", label: "Projects", icon: HiOutlineFolder },
  { id: "contact", label: "Contact", icon: HiOutlineMail },
];

export default function GlassNavbar() {
  const visible = useScrollNavbar();
  const [active, setActive] = useState("profile");
  const [scrolled, setScrolled] = useState(false);

  const scrollToSection = (id) => (e) => {
    e.preventDefault();
    const sec = document.querySelector(`#${id}`);
    if (!sec) return;

    const offset = -100;
    const top = sec.getBoundingClientRect().top + window.scrollY + offset;
    window.scrollTo({ top, behavior: "smooth" });
    setActive(id);
  };

  // Detect active section
  useEffect(() => {
    const detect = () => {
      let current = "profile";
      navItems.forEach(({ id }) => {
        const sec = document.getElementById(id);
        if (sec && window.scrollY >= sec.offsetTop - 200) current = id;
      });
      setActive(current);
      setScrolled(window.scrollY > 50);
    };
    detect();
    window.addEventListener("scroll", detect);
    return () => window.removeEventListener("scroll", detect);
  }, []);

  return (
    <nav
      className={`
        fixed top-4 left-1/2 -translate-x-1/2 z-50
        transition-all duration-500 ease-out-expo
        ${
          visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-6 pointer-events-none"
        }
      `}
    >
      <div
        className={`
          relative flex items-center gap-1
          px-2 py-2 rounded-2xl
          backdrop-blur-2xl
          border transition-all duration-300
          ${
            scrolled
              ? "bg-surface-950/80 border-white/[0.06] shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
              : "bg-surface-950/50 border-white/[0.04] shadow-[0_4px_16px_rgba(0,0,0,0.2)]"
          }
        `}
      >
        {navItems.map(({ id, label, icon: Icon }) => {
          const isActive = active === id;

          return (
            <button
              key={id}
              onClick={scrollToSection(id)}
              className={`
                relative flex items-center gap-2
                px-4 py-2.5 rounded-xl
                text-sm font-medium
                transition-all duration-300 ease-out-expo
                ${isActive ? "text-white" : "text-white/40 hover:text-white/70"}
              `}
            >
              {/* Active background indicator */}
              {isActive && (
                <span
                  className="absolute inset-0 rounded-xl bg-white/[0.08] border border-white/[0.06]"
                  style={{
                    transition: "all 0.3s cubic-bezier(0.19, 1, 0.22, 1)",
                  }}
                />
              )}

              <Icon className="relative z-10 w-4 h-4" />
              <span className="relative z-10 hidden md:inline">{label}</span>

              {/* Active glow dot */}
              {isActive && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary-400 shadow-[0_0_8px_rgba(99,102,241,0.6)]" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
