"use client";
import { useEffect, useState } from "react";
import useScrollNavbar from "@/hooks/useScrollNavbar";

export default function GlassNavbar() {
  const visible = useScrollNavbar();
  const [active, setActive] = useState("home");

  const scrollToSection = (id) => (e) => {
    e.preventDefault();

    const section = document.querySelector(id);
    if (!section) return;

    const offset = -100;
    const top = section.getBoundingClientRect().top + window.scrollY + offset;

    window.scrollTo({
      top,
      behavior: "smooth",
    });

    setActive(id.replace("#", ""));
  };

 useEffect(() => {
   setActive("home");

   const sections = ["home", "skills", "projects", "contact"];

   const detect = () => {
     let current = "home";
     sections.forEach((s) => {
       const sec = document.getElementById(s);
       if (sec && window.scrollY >= sec.offsetTop - 200) {
         current = s;
       }
     });
     setActive(current);
   };

   setTimeout(() => {
     detect();
   }, 200);

   window.addEventListener("scroll", detect);
   return () => window.removeEventListener("scroll", detect);
 }, []);


  return (
    <nav
      className={`
        fixed top-6 left-1/2 -translate-x-1/2 
        z-50 backdrop-blur-xl bg-white/10 
        border border-white/20 shadow-lg
        px-6 py-3 rounded-full flex gap-6
        transition-all duration-300
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"}
      `}
    >
      {["home", "skills", "projects", "contact"].map((item) => (
        <a
          key={item}
          href={`#${item}`}
          onClick={scrollToSection(`#${item}`)}
          className={`nav-link ${active === item ? "nav-active" : ""}`}
        >
          {item.charAt(0).toUpperCase() + item.slice(1)}
        </a>
      ))}
    </nav>
  );
}
