import ProjectCard from "@/components/ProjectCard";
import ScrambledText from "@/components/ScrambledText/ScrambledText";

export default function ProjectsSection() {
  return (
    <section id="projects" className=" w-full rounded-2xl">
      <div className="max-w-7xl mx-auto px-8 md:px-20">
        <ScrambledText
          className="scrambled-text-demo max-w-3xl mx-auto mb-10 leading-relaxed"
          radius={80}
          duration={1.0}
          speed={0.45}
          scrambleChars={"!<>-_\."}
        >
          Teknologi yang saya gunakan untuk membangun aplikasi modern, cepat,
          stabil, dan terintegrasi dengan AI.
        </ScrambledText>

        <div className="grid md:grid-cols-2 gap-10 fade-up">
          <ProjectCard
            title="Toko Kelontong Dahlan"
            desc="E-commerce UMKM: Next.js, Tailwind, Firebase, Midtrans + dashboard admin."
            image="/project1.png"
          />

          <ProjectCard
            title="Bank Sampah Kalisari"
            desc="Sistem informasi bank sampah: manajemen setor, warga, dan laporan."
            image="/project2.png"
          />
        </div>
      </div>
    </section>
  );
}
