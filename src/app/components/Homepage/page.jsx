"use client";

import { useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Home() {
  const [error, setError] = useState(null);

  return (
    <>
      <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 px-4 sm:px-6 lg:px-12">
        {/* Background blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[28rem] h-[28rem] bg-blue-300 rounded-full blur-3xl opacity-20 animate-blob" />
          <div className="absolute -bottom-32 -left-32 w-[28rem] h-[28rem] bg-purple-300 rounded-full blur-3xl opacity-20 animate-blob animation-delay-2000" />
        </div>

        <div className="relative z-10 min-h-screen grid grid-cols-1 md:grid-cols-2 md:items-center max-w-7xl w-full mx-auto">
          {/* IMAGE — FIRST on mobile */}
          <div className="relative flex items-center justify-center md:mx-28 order-1 md:order-2">
            {/* Lottie */}
            <div className="absolute inset-0 flex items-center justify-center opacity-40 pointer-events-none">
              <DotLottieReact
                src="/animations/loading.lottie"
                loop
                autoplay
                className="scale-[1.6] sm:scale-[2] md:scale-[3] lg:scale-[4]"
              />
            </div>

            {/* Image */}
            <div className="relative z-10 p-2 mt-12 md:mt-0 sm:mt-12 rounded-3xl bg-white/40 backdrop-blur-xl shadow-2xl hover:scale-105 transition-all duration-300">
              <img
                src="/image/portfoliyo.png"
                alt="Portfolio"
                className="w-[120px] sm:w-[180px] md:w-[220px] lg:w-[260px] object-contain rounded-2xl"
              />
            </div>
          </div>

          {/* TEXT — SECOND on mobile */}
          <div className="flex flex-col gap-6 text-center md:text-left px-4 order-2 md:order-1 items-center md:items-start">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight bg-gradient-to-r from-gray-800 via-blue-800 to-purple-800 bg-clip-text text-transparent">
              Hi, I’m{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Sarkit
              </span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 max-w-xl mx-auto md:mx-0 leading-relaxed">
              A passionate{" "}
              <span className="font-semibold text-blue-600">Web Developer</span>{" "}
              crafting modern, responsive websites with clean code and beautiful
              UI.
            </p>

            <div className="flex flex-row sm:flex-row gap-4 justify-center md:justify-start text-xs">
              <button className="px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg hover:scale-105 transition-all">
                View Projects
              </button>
              <button className="px-6 py-3 rounded-2xl border border-blue-600 text-blue-600 bg-white/60 backdrop-blur-md hover:scale-105 transition-all">
                Contact Me
              </button>
            </div>

            {/* Education - Mobile Only */}
            <div className="block md:hidden mt-4">
              <div
                className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-2xl shadow-lg flex items-start gap-4
                  transform transition-all duration-700 ease-out hover:scale-105 hover:shadow-2xl
                  animate-fade-in"
              >
                {/* Text */}
                <div className="flex flex-col">
                  <span>
                    🎓
                  </span>
                  <span className="font-semibold text-gray-800 text-lg animate-slide-in-left">
                    Education:
                  </span>
                  <span className="text-gray-600 text-sm mt-1 animate-slide-in-left delay-150">
                    B.Sc. in Computer Science and Engineering
                  </span>
                  <span className="text-gray-600 text-sm mt-1 animate-slide-in-left delay-300">
                    Bangladesh University of Business and Technology
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
