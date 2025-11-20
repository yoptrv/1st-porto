"use client";
import InfiniteMenu from "@/components/InfiniteMenu/InfiniteMenu";

export default function ProjectsSection() {
  const items = [
    {
      image: "/Toko.png",
      link: "https://toko-dahlan.vercel.app/",
      title: "Toko Kelontong Dahlan",
      description: "E-commerce UMKM: Next.js + Tailwind + Firebase + Midtrans.",
    },
    {
      image: "/cs.png",
      link: "https://google.com/",
      title: "Bank Sampah Kalisari",
      description: "Sistem informasi bank sampah: setoran, warga, laporan.",
    },
    {
      image: "/po.png",
      link: "https://plan-out.vercel.app/",
      title: "Planout",
      description: "Aplikasi planning dan produktivitas modern.",
    },
    {
      image: "/panitia.png",
      link: "https://panitia-rt-10.vercel.app/",
      title: "Panitia RT App",
      description: "Pengelolaan data warga dan event lomba RT.",
    },
  ];

  return (
    <section id="projects" className="w-full py-2 md:py-20">
      {/* FULLSCREEN WRAPPER */}
      <div className="relative w-full h-[650px] text-white bg-transparentmd:h-[800px]">
        <InfiniteMenu items={items} />
      </div>
    </section>
  );
}
