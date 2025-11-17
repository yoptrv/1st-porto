"use client";

import { useState } from "react";
import emailjs from "emailjs-com";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID", // ganti
        "YOUR_TEMPLATE_ID", // ganti
        e.target,
        "YOUR_PUBLIC_KEY" // ganti
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
      className="py-28 relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100 rounded-2xl"
    >
      {/* Soft white gradient / glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-24 w-[420px] h-[420px] bg-gradient-to-br from-white via-blue-100/60 to-purple-100/60 blur-3xl" />
        <div className="absolute -bottom-40 -right-24 w-[420px] h-[420px] bg-gradient-to-tl from-white via-sky-100/70 to-indigo-100/60 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 md:px-12 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-neutral-900 mb-4">
          Any questions?
        </h2>
        <p className="text-neutral-600 mb-12 max-w-2xl mx-auto">
          Punya pertanyaan atau mau kerja bareng? Kirim pesan, dan gue bakal
          respon secepat mungkin.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* FORM KIRI */}
          <form
            onSubmit={sendEmail}
            className="p-8 rounded-2xl bg-white/80 backdrop-blur-xl border border-white shadow-[0_18px_60px_rgba(15,23,42,0.08)] text-left"
          >
            <h3 className="text-2xl font-semibold text-neutral-900 mb-6">
              Get in Touch
            </h3>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full mb-4 px-4 py-3 rounded-xl bg-slate-50 text-neutral-900 border border-slate-200 placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:bg-white transition"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full mb-4 px-4 py-3 rounded-xl bg-slate-50 text-neutral-900 border border-slate-200 placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:bg-white transition"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows={5}
              className="w-full mb-6 px-4 py-3 rounded-xl bg-slate-50 text-neutral-900 border border-slate-200 placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:bg-white transition"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-500 to-indigo-500 shadow-md hover:shadow-lg hover:brightness-105 transition disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {sent && (
              <p className="text-emerald-500 mt-4 text-sm">
                Pesan berhasil dikirim. Thank you! 🙌
              </p>
            )}
          </form>

          {/* KARTU KANAN – ICON SOSMED */}
          <div className="p-8 rounded-2xl bg-white/70 backdrop-blur-xl border border-white shadow-[0_18px_60px_rgba(15,23,42,0.06)] text-left">
            <h3 className="text-2xl font-semibold mb-4 text-neutral-900">
              Let’s Connect
            </h3>
            <p className="text-neutral-600 mb-6">
              Selain via form, lu juga bisa reach out lewat email atau sosial
              media di bawah ini.
            </p>

            <div className="space-y-4">
              {/* Email */}
              <a
                href="mailto:dioaputra01@gmail.com"
                className="flex items-center gap-3 bg-slate-50 px-4 py-3 rounded-xl hover:bg-white transition border border-slate-200"
              >
                <div className="p-2 rounded-full bg-blue-100">
                  <MdEmail className="text-xl text-blue-600" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-neutral-500">Email</span>
                  <span className="text-sm md:text-base text-neutral-800">
                    dioaputra01@gmail.com
                  </span>
                </div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/yoptrv"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-slate-50 px-4 py-3 rounded-xl hover:bg-white transition border border-slate-200"
              >
                <div className="p-2 rounded-full bg-neutral-900/5">
                  <FaGithub className="text-xl text-neutral-900" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-neutral-500">GitHub</span>
                  <span className="text-sm md:text-base text-neutral-800">
                    yoptrv
                  </span>
                </div>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/dioptrv"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-slate-50 px-4 py-3 rounded-xl hover:bg-white transition border border-slate-200"
              >
                <div className="p-2 rounded-full bg-pink-100">
                  <FaInstagram className="text-xl text-pink-500" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-neutral-500">Instagram</span>
                  <span className="text-sm md:text-base text-neutral-800">
                    @dioptrv
                  </span>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/dio-adeliya-putra-457188249"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-slate-50 px-4 py-3 rounded-xl hover:bg-white transition border border-slate-200"
              >
                <div className="p-2 rounded-full bg-sky-100">
                  <FaLinkedin className="text-xl text-sky-600" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-neutral-500">LinkedIn</span>
                  <span className="text-sm md:text-base text-neutral-800">
                    Dio Adeliya Putra
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
