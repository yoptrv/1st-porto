import { FaDownload } from "react-icons/fa";
// import GradientText from "@/components/GradientText/GradientText";
import RotatingText from "@/components/RotatingText/RotatingText";
import TiltedCard from "@/components/TiltedCard/TiltedCard";
import Shuffle from "@/components/Shuffle/Shuffle";

export default function HeroSection() {
  return (
    <section
      id="profile"
      className="
    relative w-full
    px-4 md:px-10
    pt-20 md:pt-32 pb-1 md:pb-20
  "
    >
      {/* WRAPPER GLASS */}
      <div
        className="
    w-full max-w-[1350px] mx-auto
    bg-white/30 backdrop-blur-xl
    border border-white/40
    rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.25)]
    px-6 md:px-12 py-12
    grid grid-cols-1 md:grid-cols-[35%_65%]
    items-center
    gap-10
  "
      >
        {/* FOTO / TILTED CARD */}
        <div className="flex justify-center md:justify-center">
          <TiltedCard
            imageSrc="./pf.png"
            altText="Portfolio Photo"
            captionText="Dio Adeliya Putra"
            containerHeight="280px"
            containerWidth="1 80px"
            imageHeight="280px"
            imageWidth="200px"
            rotateAmplitude={12}
            scaleOnHover={1.12}
            showMobileWarning={false}
            showTooltip={false}
            displayOverlayContent={false}
          />
        </div>
        {/* TEKS */}
        <div className="relative text-left">
          <div className="absolute -top-20 -left-10 w-80 h-80 bg-blue-500/20 blur-[120px] rounded-full" />

          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold text-white/60">Im a</h1>
            <RotatingText
              texts={[
                "Software Engineer",
                "AI Enthusiast",
                "Student",
                "Data Scientist",
              ]}
              mainClassName="
          px-1 py-1 rounded-lg font-bold text-white/80
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

          <div className="w-24 h-[3px] bg-indigo-500/60 rounded-full my-3" />

          <h1
            className="
  text-black/80 font-extrabold leading-tight
  text-3xl sm:text-4xl md:text-6xl lg:text-7xl
  md:-ml-4
"
          >
            <Shuffle
              text="DIO ADELIYA PUTRA"
              className="
    text-3xl 
    sm:text-4xl 
    md:text-6xl 
    lg:text-7xl 
  "
              shuffleDirection="right"
              duration={0.35}
              animationMode="evenodd"
              shuffleTimes={1}
              ease="power3.out"
              stagger={0.03}
              threshold={0.1}
              triggerOnce={true}
              triggerOnHover={true}
              respectReducedMotion={true}
              textAlign="left"
            />
          </h1>

          <div className="mt-10 flex justify-center md:justify-start w-full">
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
