import SpotlightCard from "@/components/SpotlightCard/SpotlightCard";
import ScrambledText from "@/components/ScrambledText/ScrambledText";

const skills = [
  {
    name: "JavaScript",
    icon: "/icons/js.png",
    desc: "Bahasa utama untuk membuat fitur interaktif.",
    spotlightColor: "rgba(247, 223, 30, 0.25)",
  },
  {
    name: "Next.js",
    icon: "/icons/next.png",
    desc: "Framework React modern untuk web cepat & scalable.",
    spotlightColor: "rgba(255, 255, 255, 0.18)",
  },
  {
    name: "Tailwind CSS",
    icon: "/icons/tailwind.png",
    desc: "Utility-first CSS untuk styling super cepat.",
    spotlightColor: "rgba(56, 189, 248, 0.25)",
  },
  {
    name: "Python",
    icon: "/icons/python.png",
    desc: "Bahasa serbaguna untuk scripting & AI.",
    spotlightColor: "rgba(11, 109, 255, 0.49)",
  },
  {
    name: "MySQL",
    icon: "/icons/mysql.png",
    desc: "Database SQL untuk data terstruktur.",
    spotlightColor: "rgba(37, 99, 235, 0.25)",
  },
  {
    name: "Java",
    icon: "/icons/java.png",
    desc: "Bahasa OOP untuk backend & materi kampus.",
    spotlightColor: "rgba(220, 38, 38, 0.25)",
  },
];
export default function SkillsSection() {
  return (
    <section id="skills" className=" w-full  rounded-2xl">
      <div className="max-w-7xl px-4 md:px-10 text-center">
        <ScrambledText
          className="scrambled-text-demo max-w-3xl mx-auto mb-10 leading-relaxed"
          radius={80}
          duration={1.0}
          speed={0.45}
          scrambleChars={"!<>-_\\/[]{}—=+*^?#________"}
        >
          Teknologi yang saya gunakan untuk membangun- aplikasi modern, cepat,
          stabil, dan terintegrasi dengan AI.
        </ScrambledText>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {skills.map((skill) => (
            <SpotlightCard
              key={skill.name}
              spotlightColor={skill.spotlightColor}
              className="
    p-6 flex flex-col items-center gap-4
    bg-gradient-to-br from-slate-900 via-slate-950 to-black
    border border-cyan-400/20
  "
            >
              <img
                src={skill.icon}
                className="w-14 h-14 opacity-90"
                alt={skill.name}
              />

              <h3 className="text-lg font-semibold text-white">{skill.name}</h3>

              <p className="text-sm text-neutral-400 max-w-[200px]">
                {skill.desc}
              </p>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
