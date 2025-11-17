export default function PhotoCard() {
  return (
    <div className="relative w-full md:w-[45%] flex justify-center">
      <div className="relative w-72 md:w-96">
        <div
          className="absolute inset-0 rounded-3xl 
                        bg-gradient-to-br from-blue-500/30 
                        via-purple-500/20 to-pink-500/30 
                        blur-2xl opacity-70"
        />

        <div
          className="relative rounded-3xl overflow-hidden border border-black/5 
                        backdrop-blur-xl shadow-[0_24px_80px_rgba(0,0,0,0.35)]"
        >
          <img src="/yo.png" className="w-full object-cover" />
        </div>
      </div>
    </div>
  );
}
