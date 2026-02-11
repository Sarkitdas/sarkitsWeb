"use client";
import { useState, useEffect } from "react";
import { Download } from "lucide-react"; // Make sure to install lucide-react

export default function BackgroundSlider() {
  const images = [
    "/image/desktop1.png",
    "/image/desktop2.png",
    "/image/desktop3.png",
    "/image/desktop4.png",
  ];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* --- BACKGROUND LAYER --- */}
      <div className="absolute inset-0 z-0">
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === current ? "opacity-50" : "opacity-0"
            }`}
          >
            <img
              src={src}
              alt={`slide-${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        {/* Overlays */}
        <div 
          className="absolute inset-0 z-10 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: `url("https://grainy-gradients.vercel.app/noise.svg")` }} 
        />
        <div className="absolute inset-0 bg-black/40 z-20" />

        {/* SEAMLESS BOTTOM GRADIENT */}
        <div className="absolute bottom-0 left-0 w-full h-[40vh] bg-gradient-to-t from-black via-black/90 to-transparent z-25" />
      </div>

      {/* --- CONTENT LAYER --- */}
      <div className="relative z-30 flex items-center min-h-screen w-full px-6 md:px-12 pt-24">
        <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* LEFT SIDE: Text + CV Button */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left text-white">
            <span className="text-lg md:text-2xl font-light opacity-90">
              👋 Hey, I’m <span className="font-semibold text-yellow-400">Sarkit</span>
            </span>
            <h1 className="text-5xl md:text-8xl font-bold mt-2 tracking-tighter">Developer</h1>
            <p className="text-gray-300 mt-6 text-base md:text-lg max-w-sm">
              Creating beautiful and functional web experiences is my passion. I build responsive interfaces that delight users and perform flawlessly.
            </p>

            {/* CV DOWNLOAD BUTTON */}
            <div className="mt-10">
              <a 
                href="/CV/Piudas_Sarkit_Saikat_CV.pdf" // Change this to your actual CV path in the public folder
                download="Sarkit_CV.pdf"
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium rounded-2xl overflow-hidden transition-all hover:bg-yellow-400 hover:text-black hover:scale-105 active:scale-95 shadow-2xl"
              >
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-yellow-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <Download size={20} className="relative z-10 group-hover:animate-bounce" />
                <span className="relative z-10 text-lg">Download CV</span>
              </a>
            </div>
          </div>

          {/* RIGHT SIDE: Image */}
          <div className="relative group">
            <div className="relative p-2 bg-white/5 backdrop-blur-xl border border-white/20 rounded-[2.5rem] shadow-2xl transition-transform duration-500 group-hover:scale-105">
               <img 
                 src="/image/portfoliyo.png" 
                 alt="Portfolio" 
                 className="w-auto h-[30vh] md:h-[55vh] object-contain relative z-10" 
               />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}