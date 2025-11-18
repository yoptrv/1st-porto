import { FaDownload } from "react-icons/fa";
import GradientText from "@/components/GradientText/GradientText";
import RotatingText from "@/components/RotatingText/RotatingText";
import TiltedCard from "@/components/TiltedCard/TiltedCard";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="
        relative w-full
        px-4 md:px-10
        pt-28 md:pt-32 pb-20
      "
    >
      {/* WRAPPER GLASS */}
      <div
        className="
          w-full max-w-7xl mx-auto
          bg-white/30 backdrop-blur-xl
          border border-white/40
          rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.25)]
          px-6 md:px-12 py-14
          flex flex-col md:flex-row items-center justify-between
          gap-14
        "
      >
        {/* FOTO / TILTED CARD */}
        <div className="w-full flex justify-center md:justify-start md:w-[40%]">
          <TiltedCard
            imageSrc="./yp.png"
            altText="Portfolio Photo"
            captionText="Dio Adeliya Putra"
            containerHeight="420px"
            containerWidth="320px"
            imageHeight="420px"
            imageWidth="320px"
            rotateAmplitude={12}
            scaleOnHover={1.12}
            showMobileWarning={false}
            showTooltip={false}
            displayOverlayContent={false}
          />
        </div>

        {/* TEKS */}
        <div className="relative w-full md:w-[55%] text-center md:text-left">
          <div className="absolute -top-20 -left-10 w-80 h-80 bg-blue-500/20 blur-[120px] rounded-full"></div>

          <div className="flex items-center justify-center md:justify-start gap-2">
            <h1 className="text-2xl font-bold text-white">Im a</h1>
            <RotatingText
              texts={[
                "Software Engineer",
                "AI Enthusiast",
                "Student University Gunadarma",
                "Data Scientist",
              ]}
              mainClassName="
                px-3 py-1 rounded-lg font-bold text-white
                bg-indigo-950/90 border border-white/10 backdrop-blur
              "
              staggerFrom="last"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </div>

          <div className="w-24 h-[3px] bg-indigo-500/60 rounded-full my-3"></div>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            <GradientText
              colors={["#ffffff", "#03205a", "#cfcfcf", "#1346bb", "#99a1ad"]}
              animationSpeed={10}
              showBorder={false}
            >
              DIO ADELIYA PUTRA
            </GradientText>
          </h1>

          <div className="mt-10 flex justify-center md:justify-start">
            <a
              href="/cv.pdf"
              download="Dio-Adeliya-Putra-CV.pdf"
              className="
                download-btn flex items-center gap-3
                px-8 py-3 rounded-xl font-semibold
                bg-white/90 border border-white shadow
                hover:shadow-[0_8px_30px_rgba(0,0,0,0.15)]
                transition
                text-neutral-900
              "
            >
              <FaDownload className="text-lg text-indigo-900" />
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

