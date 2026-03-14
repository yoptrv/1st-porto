"use client";

import { useState } from "react";
import emailjs from "emailjs-com";
import { MdEmail, MdSend, MdCheckCircle } from "react-icons/md";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail, HiOutlineArrowRight } from "react-icons/hi";

export default function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_7l1zfmn",
        "template_zwkypy8",
        e.target,
        "ChHdkA5pwdsMI3bVl",
      )
      .then(
        () => {
          setLoading(false);
          setSent(true);
          e.target.reset();
          setTimeout(() => setSent(false), 5000);
        },
        () => {
          setLoading(false);
          alert("Failed to send message. Please try again.");
        },
      );
  };

  const socials = [
    {
      icon: MdEmail,
      label: "Email",
      value: "dioaputra01@gmail.com",
      href: "mailto:dioaputra01@gmail.com",
      color: "text-primary-400",
      bg: "bg-primary-500/10",
      border: "border-primary-500/20",
    },
    {
      icon: FaGithub,
      label: "GitHub",
      value: "@yoptrv",
      href: "https://github.com/yoptrv",
      color: "text-white/60",
      bg: "bg-white/[0.04]",
      border: "border-white/[0.08]",
    },
    {
      icon: FaInstagram,
      label: "Instagram",
      value: "@dioptrv",
      href: "https://instagram.com/dioptrv",
      color: "text-pink-400",
      bg: "bg-pink-500/10",
      border: "border-pink-500/20",
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      value: "Dio Adeliya Putra",
      href: "https://www.linkedin.com/in/dio-adeliya-putra-457188249",
      color: "text-sky-400",
      bg: "bg-sky-500/10",
      border: "border-sky-500/20",
    },
  ];

  return (
    <section
      id="contact"
      className="relative w-full py-8 md:py-20 overflow-visible"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <div className="section-label mb-4">
            <HiOutlineMail className="w-3.5 h-3.5" />
            Get in Touch
          </div>
          <h2 className="section-title text-3xl md:text-5xl lg:text-6xl text-white mb-4">
            Let&apos;s work together<span className="text-primary-400">.</span>
          </h2>
          <p className="section-description">
            Have a project in mind or just want to say hello? I&apos;d love to
            hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8">
          {/* Contact Form */}
          <div className="glass-card rounded-2xl p-8 md:p-10">
            <h3 className="text-white/80 font-semibold text-lg mb-6">
              Send a message
            </h3>

            <form onSubmit={sendEmail} className="space-y-5">
              <div className="relative">
                <label className="block text-xs text-white/30 uppercase tracking-wider mb-2 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  onFocus={() => setFocused("name")}
                  onBlur={() => setFocused("")}
                  className={`w-full px-4 py-3.5 rounded-xl bg-white/[0.03] text-white/90 placeholder-white/20 outline-none transition-all duration-300 text-sm border ${
                    focused === "name"
                      ? "border-primary-500/40 shadow-[0_0_20px_rgba(99,102,241,0.1)]"
                      : "border-white/[0.06] hover:border-white/[0.1]"
                  }`}
                  placeholder="Your name"
                />
              </div>

              <div className="relative">
                <label className="block text-xs text-white/30 uppercase tracking-wider mb-2 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  onFocus={() => setFocused("email")}
                  onBlur={() => setFocused("")}
                  className={`w-full px-4 py-3.5 rounded-xl bg-white/[0.03] text-white/90 placeholder-white/20 outline-none transition-all duration-300 text-sm border ${
                    focused === "email"
                      ? "border-primary-500/40 shadow-[0_0_20px_rgba(99,102,241,0.1)]"
                      : "border-white/[0.06] hover:border-white/[0.1]"
                  }`}
                  placeholder="your@email.com"
                />
              </div>

              <div className="relative">
                <label className="block text-xs text-white/30 uppercase tracking-wider mb-2 font-medium">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused("")}
                  className={`w-full px-4 py-3.5 rounded-xl bg-white/[0.03] text-white/90 placeholder-white/20 outline-none transition-all duration-300 resize-none text-sm border ${
                    focused === "message"
                      ? "border-primary-500/40 shadow-[0_0_20px_rgba(99,102,241,0.1)]"
                      : "border-white/[0.06] hover:border-white/[0.1]"
                  }`}
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`
                  w-full py-4 rounded-xl font-semibold text-sm
                  flex items-center justify-center gap-2
                  transition-all duration-300
                  ${
                    sent
                      ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                      : "bg-gradient-to-r from-primary-600 to-primary-500 text-white hover:shadow-[0_8px_30px_rgba(99,102,241,0.3)] hover:-translate-y-0.5"
                  }
                  disabled:opacity-50 disabled:cursor-not-allowed
                `}
              >
                {sent ? (
                  <>
                    <MdCheckCircle className="text-lg" />
                    Message Sent Successfully!
                  </>
                ) : loading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <MdSend className="text-base" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Social Links */}
          <div className="space-y-6">
            {/* Social Cards */}
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-white/80 font-semibold text-lg mb-6">
                Connect with me
              </h3>
              <div className="space-y-3">
                {socials.map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.05] hover:border-white/[0.1] transition-all duration-300"
                  >
                    <div
                      className={`flex items-center justify-center w-10 h-10 rounded-xl ${social.bg} border ${social.border}`}
                    >
                      <social.icon className={`text-lg ${social.color}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs text-white/30 mb-0.5">
                        {social.label}
                      </div>
                      <div className="text-sm text-white/70 font-medium truncate">
                        {social.value}
                      </div>
                    </div>
                    <HiOutlineArrowRight className="w-4 h-4 text-white/20 group-hover:text-white/50 group-hover:translate-x-1 transition-all duration-300" />
                  </a>
                ))}
              </div>
            </div>

            {/* CTA Card */}
            <div className="relative overflow-hidden rounded-2xl p-8 bg-gradient-to-br from-primary-600/20 to-purple-600/20 border border-primary-500/20">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/10 blur-[60px] rounded-full" />
              <div className="relative">
                <h3 className="text-white/90 font-semibold text-lg mb-2">
                  Let&apos;s build something amazing
                </h3>
                <p className="text-white/40 text-sm leading-relaxed mb-4">
                  I&apos;m always open to discussing new projects, creative
                  ideas, or opportunities to be part of your vision.
                </p>
                <a
                  href="mailto:dioaputra01@gmail.com"
                  className="inline-flex items-center gap-2 text-primary-300 text-sm font-medium hover:text-primary-200 transition-colors"
                >
                  dioaputra01@gmail.com
                  <HiOutlineArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-white/[0.04]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-white/70 font-display font-bold text-sm tracking-tight">
                Yo
              </span>
              <span className="text-white/20 text-xs">•</span>
              <span className="text-white/30 text-xs">Portfolio 2025</span>
            </div>
            <p className="text-white/20 text-xs">
              Designed & Built using NextJS
            </p>
            <div className="flex items-center gap-4">
              {socials.slice(1).map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/20 hover:text-white/50 transition-colors"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
