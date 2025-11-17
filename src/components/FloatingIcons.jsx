export default function FloatingIcons() {
  return (
    <>
      {/* Instagram */}
      <a
        href="https://www.instagram.com/dioptrv"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute right-10 top-20 animate-bounce-slow cursor-pointer"
        aria-label="Instagram"
      >
        <img src="/icons/instagram.png" className="w-10" />
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute right-28 top-52 animate-float cursor-pointer"
        aria-label="WhatsApp"
      >
        <img src="/icons/whatsapp.png" className="w-10" />
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/yoptrv"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute right-12 top-80 animate-bounce-slower cursor-pointer"
        aria-label="GitHub"
      >
        <img src="/icons/github.png" className="w-10" />
      </a>
    </>
  );
}
