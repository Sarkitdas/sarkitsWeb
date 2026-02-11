"use client";

import { GraduationCap, MapPin, Book, Code, Brain, Laptop } from "lucide-react";
import { motion } from "framer-motion";

const educationData = [
  {
    degree: "Bachelor of Computer Science and Engineering",
    institution: "Bangladesh University of Business and Technology (BUBT)",
    duration: "2020 - 2024",
    location: "Dhaka, Bangladesh",
    description: "Specialized in Software Engineering and Artificial Intelligence. Graduated with honors.",
    skills: ["Data Structures", "Web Systems", "AI", "Software Design", "Database Management"]
  },
  {
    degree: "Mastering on React and Next.js",
    institution: "Tech Academy",
    duration: "2022 - 2023",
    location: "Ostad, Online",
    description: "Focused on modern JavaScript frameworks and cloud architecture.",
    skills: ["React", "Node.js", "Next.js", "TailwindCSS", "Figma", "MongoDB"]
  }
];

export default function EducationPage() {
  return (
    <section className="relative min-h-screen w-full bg-transparent text-white py-24 px-6 overflow-hidden">
      
      {/* --- JUMPING ICON LAYER (No Blobs) --- */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        
        {/* Top Section Icons */}
        <div className="absolute top-[10%] left-[8%] text-yellow-400/20 animate-icon-jump blur-[1px]">
          <Book size={70} strokeWidth={1} />
        </div>
        <div className="absolute top-[25%] right-[12%] text-purple-500/20 animate-icon-jump blur-[1px]" style={{ animationDelay: '-1.5s' }}>
          <Code size={80} strokeWidth={1} />
        </div>
        
        {/* Middle Section Icons */}
        <div className="absolute top-[45%] left-[15%] text-blue-400/20 animate-icon-jump blur-[1px]" style={{ animationDelay: '-3s' }}>
          <Brain size={90} strokeWidth={1} />
        </div>
        <div className="absolute top-[55%] right-[8%] text-cyan-400/20 animate-icon-jump blur-[1px]" style={{ animationDelay: '-4.5s' }}>
          <Laptop size={75} strokeWidth={1} />
        </div>

        {/* Bottom Section Icons */}
        <div className="absolute bottom-[15%] left-[10%] text-yellow-500/15 animate-icon-jump blur-[1.5px]" style={{ animationDelay: '-2.5s' }}>
          <GraduationCap size={130} strokeWidth={0.5} />
        </div>
        <div className="absolute bottom-[5%] right-[20%] text-white/10 animate-icon-jump blur-[1px]" style={{ animationDelay: '-6s' }}>
          <Code size={60} strokeWidth={1} />
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-30">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-24"
        >
          <div className="p-3 bg-white/5 border border-white/10 rounded-2xl mb-4 backdrop-blur-md">
             <GraduationCap className="text-yellow-400" size={32} />
          </div>
          <h2 className="text-yellow-400 font-medium tracking-[0.4em] uppercase text-xs mb-3">My Academic Path</h2>
          <h1 className="text-white text-4xl md:text-6xl font-bold tracking-tighter">Education</h1>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent z-0" />

          {educationData.map((item, index) => (
            <div key={index} className="relative flex items-center justify-between mb-24 w-full group">
              <div className="hidden md:block w-[45%]" />

              {/* Timeline Dot */}
              <div className="absolute left-[16px] md:left-1/2 md:-translate-x-1/2 top-1/2 -translate-y-1/2 z-0">
                <div className="w-4 h-4 bg-black border-2 border-yellow-400 rounded-full shadow-[0_0_15px_rgba(250,204,21,0.6)]" />
              </div>

              <motion.div 
                initial={{ opacity: 0, y: -60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.2 }}
                className={`w-full md:w-[45%] pl-12 md:pl-0 relative z-10 ${index % 2 === 0 ? 'md:order-1' : 'md:order-3'}`}
              >
                {/* Opaque card background ensures text is readable against jumping icons */}
                <div className="p-8 bg-[#0a0a0a]/90 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] hover:border-yellow-400/40 transition-all duration-300 shadow-2xl">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-2 text-yellow-400 font-mono text-xs tracking-widest uppercase">
                      {item.duration}
                    </div>
                    <div className="flex items-center gap-1 text-white/40 text-[10px] uppercase tracking-widest">
                      <MapPin size={12} /> {item.location}
                    </div>
                  </div>

                  <h3 className="text-white text-2xl md:text-3xl font-semibold mb-2 leading-tight">{item.degree}</h3>
                  <p className="text-gray-400 text-sm font-medium mb-4 italic">{item.institution}</p>
                  <p className="text-gray-400/70 text-base leading-relaxed mb-6 font-light">{item.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill, i) => (
                      <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[9px] text-white/70 uppercase tracking-tighter">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              <div className={`hidden md:block w-[45%] ${index % 2 === 0 ? 'order-3' : 'order-1'}`} />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes icon-jump {
          0%, 100% { 
            transform: translateY(0) rotate(0deg) scale(1); 
          }
          50% { 
            transform: translateY(-50px) rotate(10deg) scale(1.05); 
          }
        }
        .animate-icon-jump { 
          animation: icon-jump 6s infinite cubic-bezier(0.4, 0, 0.2, 1); 
        }
      `}</style>
    </section>
  );
}