"use client";

import { useEffect, useState } from "react";

export default function TypingBadge({
  phrases = ["Student", "Software Engineer", "AI Enthusiast"],
  typingSpeed = 80, // kecepatan ngetik
  deletingSpeed = 50, // kecepatan hapus
  pauseBetweenWords = 1000, // jeda saat kata full
}) {
  const [index, setIndex] = useState(0); // index phrase
  const [subIndex, setSubIndex] = useState(0); // index karakter
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[index];

    // kalau belum mulai atau lagi ngetik / hapus
    let timeout;

    // selesai ngetik → pause dulu
    if (!isDeleting && subIndex === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), pauseBetweenWords);
    }
    // selesai hapus → next phrase
    else if (isDeleting && subIndex === 0) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % phrases.length);
    }
    // proses ngetik / hapus
    else {
      timeout = setTimeout(
        () => {
          setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
        },
        isDeleting ? deletingSpeed : typingSpeed
      );
    }

    return () => clearTimeout(timeout);
  }, [
    subIndex,
    isDeleting,
    index,
    phrases,
    typingSpeed,
    deletingSpeed,
    pauseBetweenWords,
  ]);

  const currentText = phrases[index].slice(0, subIndex);

  return (
    <div
      className="relative z-10 inline-flex items-center gap-2 px-5 py-1
                 bg-blue-500/10 text-blue-600 rounded-full backdrop-blur-md
                 border border-blue-500/20 text-sm mb-5 font-medium"
    >
      <span>{currentText || "\u00A0"}</span>
      {/* cursor */}
      <span className="inline-block w-[2px] h-4 bg-blue-600 animate-pulse" />
    </div>
  );
}
