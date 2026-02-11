"use client";

import { motion } from "framer-motion";
import { 
  SiNextdotjs, SiTailwindcss, SiNodedotjs, SiReact, 
  SiMongodb, SiMysql, SiCplusplus, SiPython, SiOpenai 
} from "react-icons/si";
import { FaJava, FaBrain } from "react-icons/fa";

const skills = [
  { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
  { name: "React", icon: <SiReact className="text-blue-400" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
  { name: "C++", icon: <SiCplusplus className="text-blue-600" /> },
  { name: "Python", icon: <SiPython className="text-yellow-400" /> },
  { name: "Java", icon: <FaJava className="text-red-500" /> },
  { name: "AI", icon: <SiOpenai className="text-purple-400" /> },
  { name: "ML", icon: <FaBrain className="text-pink-400" /> },
];

const duplicatedSkills = [...skills, ...skills];

export default function SkillsPage() {
  return (
    <section className="relative min-h-screen w-full bg-[#050505] flex flex-col items-center justify-center py-16 md:py-24 px-4 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-blue-500/10 blur-[120px] md:blur-[180px] rounded-full pointer-events-none" />

      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center mb-12 md:mb-20 relative z-10"
      >
        <h2 className="text-blue-400 font-mono text-[10px] md:text-sm tracking-[0.3em] uppercase mb-2 md:mb-4">Tech Stack</h2>
        <h1 className="text-white text-3xl md:text-6xl font-bold tracking-tighter">
          My Expertise
        </h1>
      </motion.div>

      {/* --- THE GLASS SLIDER BOX --- */}
      <div className="relative w-full max-w-7xl">
        {/* Masking Gradients - Thinner on mobile */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#050505] to-transparent z-20" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#050505] to-transparent z-20" />

        <div className="overflow-hidden py-6 md:py-10">
          <motion.div 
            className="flex gap-4 md:gap-8 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              duration: 20, // Faster loop for a more energetic feel
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            {duplicatedSkills.map((skill, index) => (
              <div 
                key={index}
                className="relative group w-28 h-28 md:w-40 md:h-40" // Smaller on mobile
              >
                {/* Glass Container */}
                <div className="w-full h-full flex flex-col items-center justify-center gap-2 md:gap-4 
                  bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-[2rem] 
                  hover:bg-white/10 hover:border-white/20 transition-all duration-500
                  shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]"
                >
                  <div className="text-2xl md:text-4xl group-hover:scale-110 transition-transform duration-500">
                    {skill.icon}
                  </div>
                  <span className="text-white/60 text-[10px] md:text-xs font-medium tracking-wider group-hover:text-white transition-colors">
                    {skill.name}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Skills Description Area */}
      <div className="mt-12 md:mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl w-full relative z-10">
        {[
          { title: "Frontend", desc: "Crafting pixel-perfect UI with React, Next.js, and Tailwind." },
          { title: "Backend", desc: "Robust APIs and database management with Node, Mongo, and MySQL." },
          { title: "Future Tech", desc: "Exploring AI/ML and advanced Algorithms with Python and C++." }
        ].map((box, i) => (
          <div key={i} className="p-5 md:p-6 bg-white/5 border border-white/5 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-colors">
            <h3 className="text-white text-sm md:text-base font-semibold mb-2">{box.title}</h3>
            <p className="text-gray-400 text-xs md:text-sm leading-relaxed">{box.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}