import ProjectCard from "@/components/ProjectCard";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-neutral-50 w-full rounded-2xl">
      <div className="max-w-7xl mx-auto px-8 md:px-20">
        <p className="fade-up text-neutral-600 text-lg max-w-2xl mx-auto mb-16 text-center">
          Beberapa project yang gue kerjain — mulai dari UMKM, sistem informasi,
          sampai aplikasi modern.
        </p>

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
