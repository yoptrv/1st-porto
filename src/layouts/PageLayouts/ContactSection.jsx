"use client";

import { useState } from "react";
import emailjs from "emailjs-com";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import Lanyard from "@/components/Lanyard/Lanyard";
import GradientText from "@/components/GradientText/GradientText";

export default function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_7l1zfmn",
        "template_zwkypy8",
        e.target,
        "ChHdkA5pwdsMI3bVl"
      )
      .then(
        () => {
          setLoading(false);
          setSent(true);
          e.target.reset();
        },
        () => {
          setLoading(false);
          alert("Gagal mengirim pesan. Coba lagi ya.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative overflow-visible flex items-center justify-center px-4 md:px-5 md:pt-10 pb-20"
    >
      <div
        className="
    absolute
    right-[-900px]   
    md:right-[-410px]
    top-[-123px]
    md:top-[-180px]
    z-[30]
    pointer-events-none
    overflow-visible

    w-[280px]        /* mobile */
    md:w-[340px]     /* tablet / small desktop */
    lg:w-[950px]     /* big desktop */
  "
      >
        <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
      </div>
      {/* Soft white glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-24 w-[420px] h-[420px] bg-gradient-to-br from-white via-blue-100/60 to-purple-100/60 blur-3xl" />
        <div className="absolute -bottom-40 -right-24 w-[420px] h-[420px] bg-gradient-to-tl from-white via-sky-100/70 to-indigo-100/60 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 md:px-12 text-center z-[10]">
        <div className="grid md:grid-cols-2 gap-10">
          {/* FORM KIRI */}
          <form
            onSubmit={sendEmail}
            className="p-8 rounded-2xl bg-white/80 backdrop-blur-xl border border-white shadow-[0_18px_60px_rgba(15,23,42,0.08)] text-left"
          >
            <h3 className="text-2xl font-semibold text-neutral-900 mb-6">
              <GradientText
                colors={[
                  "#e7e3e3ff",
                  "#002374ff",
                  "#ffffffff",
                  "#05076eff",
                  "#5b759cff",
                ]}
                animationSpeed={9}
                showBorder={false}
                className="custom-class"
              >
                Get in Touch!
              </GradientText>
            </h3>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full mb-4 px-4 py-3 rounded-xl bg-slate-50 text-neutral-900 border border-slate-200"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full mb-4 px-4 py-3 rounded-xl bg-slate-50 text-neutral-900 border border-slate-200"
            />

            <textarea
              name="message"
              rows={5}
              placeholder="Your Message"
              required
              className="w-full mb-6 px-4 py-3 rounded-xl bg-slate-50 text-neutral-900 border border-slate-200"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-900 to-indigo-950"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {sent && (
              <p className="text-emerald-500 mt-4 text-sm">
                Pesan berhasil dikirim!
              </p>
            )}
          </form>

          {/* SOSMED */}
          <div className="p-8 rounded-2xl bg-white/70 backdrop-blur-xl border border-white shadow-[0_18px_60px_rgba(15,23,42,0.06)] text-left">
            <h3 className="text-2xl font-semibold mb-4 text-neutral-900">
              <GradientText
                colors={[
                  "#e0e0e0ff",
                  "#002374ff",
                  "#ffffffff",
                  "#05076eff",
                  "#5b759cff",
                ]}
                animationSpeed={9}
                showBorder={false}
                className="custom-class"
              >
                Let's Connect!
              </GradientText>
            </h3>

            <div className="space-y-4">
              {/* Email */}
              <a className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl">
                <div className="p-2 rounded-full bg-blue-100">
                  <MdEmail className="text-xl text-blue-600" />
                </div>
                <div>
                  <span className="text-xs text-neutral-500">Email</span>
                  <p className="text-neutral-800 text-sm">
                    dioaputra01@gmail.com
                  </p>
                </div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/yoptrv"
                target="_blank"
                className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl"
              >
                <div className="p-2 rounded-full bg-neutral-100">
                  <FaGithub className="text-xl text-neutral-900" />
                </div>
                <div>
                  <span className="text-xs text-neutral-500">GitHub</span>
                  <p className="text-neutral-800 text-sm">yoptrv</p>
                </div>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/dioptrv"
                target="_blank"
                className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl"
              >
                <div className="p-2 rounded-full bg-pink-100">
                  <FaInstagram className="text-xl text-pink-500" />
                </div>
                <div>
                  <span className="text-xs text-neutral-500">Instagram</span>
                  <p className="text-neutral-800 text-sm">@dioptrv</p>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/dio-adeliya-putra-457188249"
                target="_blank"
                className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl"
              >
                <div className="p-2 rounded-full bg-sky-100">
                  <FaLinkedin className="text-xl text-sky-600" />
                </div>
                <div>
                  <span className="text-xs text-neutral-500">LinkedIn</span>
                  <p className="text-neutral-800 text-sm">Dio Adeliya Putra</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
