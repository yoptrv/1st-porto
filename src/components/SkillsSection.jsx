export default function SkillsSection() {
  const topRow = [
    "/icons/js.png",
    "/icons/next.png",
    "/icons/mysql.png",
    "/icons/fireb.png",
    "/icons/java.png",
    "/icons/premiere-pro.png",
    "/icons/capcut.png",
  ];

  const bottomRow = [
    "/icons/python.png",
    "/icons/sql.png",
    "/icons/css-3.png",
    "/icons/html.png",
    "/icons/python.png",
    "/icons/sql.png",
    "/icons/css-3.png",
    "/icons/html.png",
  ];

  return (
    <section
      id="skills"
      className="py-20 w-full bg-gradient-to-b from-sky-50 via-white to-white rounded-2xl"
    >
      <div className="max-w-7xl mx-auto px-8 md:px-20 text-center">
        <p className="fade-up text-neutral-600 text-lg max-w-3xl mx-auto mb-16">
          Teknologi yang saya pilih untuk mengembangkan solusi digital yang
          efisien dan berkelanjutan, mulai dari front-end yang interaktif,
          backend yang stabil, hingga integrasi AI untuk pengalaman yang lebih
          cerdas.
        </p>

        <div className="space-y-10">
          {/* ROW ATAS – GERAK KE KANAN */}
          <div className="relative overflow-hidden">
            <div className="marquee-track marquee-right">
              <div className="marquee-row">
                {topRow.map((icon, i) => (
                  <SkillIcon key={`top-1-${i}`} icon={icon} />
                ))}
              </div>
              <div className="marquee-row">
                {topRow.map((icon, i) => (
                  <SkillIcon key={`top-2-${i}`} icon={icon} />
                ))}
              </div>
            </div>
          </div>

          {/* ROW BAWAH – GERAK KE KIRI */}
          <div className="relative overflow-hidden">
            <div className="marquee-track marquee-left">
              <div className="marquee-row">
                {bottomRow.map((icon, i) => (
                  <SkillIcon key={`bottom-1-${i}`} icon={icon} />
                ))}
              </div>
              <div className="marquee-row">
                {bottomRow.map((icon, i) => (
                  <SkillIcon key={`bottom-2-${i}`} icon={icon} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillIcon({ icon }) {
  return (
    <div className="marquee-item hover:scale-[1.08] transition-transform duration-200">
      <img src={icon} className="w-16 h-16 opacity-90" />
    </div>
  );
}
