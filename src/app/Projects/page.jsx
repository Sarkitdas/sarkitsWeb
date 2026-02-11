// src/app/Projects/page.jsx
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ExternalLink, Github, Sparkles, ArrowUpRight } from "lucide-react";
import { useRef } from "react";

const projects = [
  {
    title: "Shortened URLs",
    category: "Web Development",
    description: "Quickly generate short, easy-to-share links for your websites and blogs.",
    tags: ["React", "Next-js", "Tailwind", "Mongodb"],
    link: "https://url-shorten-hazel.vercel.app/",
    github: "https://github.com/Sarkitdas/url-shorten",
    size: "large",
    image: "/Projects/shortenurl.png",
    accent: "shadow-blue-500/20"
  },
  {
    title: "Train-ticket-BD",
    category: "App-Development",
    description: "Platform for booking train tickets in Bangladesh with secure payments.",
    tags: ["Java", "Javafx", "Mysql"],
    link: "#",
    github: "https://github.com/Sarkitdas/Train_ticket-javafx-project",
    size: "small",
    image: "/Projects/train-ticketBD.jpeg",
    accent: "shadow-purple-500/20"
  },
  {
    title: "Doctor-Appointment",
    category: "Web Development",
    description: "User-friendly platform for booking doctor appointments in real-time.",
    tags: ["Html", "Java", "Mysql"],
    link: "#",
    github: "https://github.com/Sarkitdas/Doctor_Appointment",
    size: "small",
    image: "/Projects/doctor.jpg",
    accent: "shadow-cyan-500/20"
  },
  {
    title: "E-Market",
    category: "E-commerce",
    description: "Sleek store with real-time inventory and AI-driven recommendations.",
    tags: ["Next.js", "Tailwind", "Mongodb"],
    link: "https://e-commerce-next-js-project.vercel.app/",
    github: "https://github.com/Sarkitdas/e-commerce-next.js-project",
    size: "medium",
    image: "/Projects/E-market.png",
    accent: "shadow-emerald-500/20"
  }
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 12 }
  }
};

export default function ProjectsPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={containerRef} className="relative min-h-screen w-full bg-[#050505] text-white py-20 px-6 overflow-hidden">
      
      {/* Animated Background Mesh */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/10 blur-[150px] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(#ffffff05_1px,transparent_1px)] bg-[size:30px_30px]" />
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="flex items-center gap-2 text-blue-400 font-mono text-xs tracking-[0.3em] uppercase mb-4"
            >
              <Sparkles size={14} className="fill-blue-400/20" /> Selected Works
            </motion.div>
            <h1 className="text-4xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
              Portfolio
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-gray-400 max-w-[320px] text-sm md:text-base font-light leading-relaxed border-l border-white/10 pl-6"
          >
            A collection of digital artifacts where technical precision meets high-fidelity design.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[240px]"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 0.98 }}
              className={`group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0a0a0a] transition-all duration-500 hover:border-white/20 hover:shadow-2xl ${project.accent}
                ${project.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''}
                ${project.size === 'medium' ? 'md:col-span-2 md:row-span-1' : ''}
                ${project.size === 'small' ? 'md:col-span-1 md:row-span-1' : ''}
              `}
            >
              {/* Image Overlay with Parallax-like movement */}
              <div className="absolute inset-0 z-0">
                <motion.img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover opacity-30 grayscale group-hover:grayscale-0 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
              </div>

              {/* Floating External Link Icon */}
              <div className="absolute top-6 right-6 z-20 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <div className="p-3 bg-white text-black rounded-full shadow-xl">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <ArrowUpRight size={20} />
                  </a>
                </div>
              </div>

              {/* Content Area */}
              <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                <div className="mb-4">
                  <span className="px-3 py-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-blue-400 group-hover:text-white group-hover:bg-blue-600 transition-colors">
                    {project.category}
                  </span>
                </div>
                
                <h3 className={`font-bold mb-2 leading-tight transition-transform duration-500 group-hover:-translate-y-1 ${project.size === 'large' ? 'text-3xl' : 'text-xl'}`}>
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-6 line-clamp-2 font-light opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                  {project.description}
                </p>

                <div className="flex items-center justify-between border-t border-white/5 pt-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-150">
                  <div className="flex gap-3">
                    {project.tags.slice(0, 3).map((tag, i) => (
                      <span key={i} className="text-[10px] text-white/40 font-mono hover:text-blue-400 transition-colors cursor-default">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white/40 hover:text-white transition-colors p-1"
                    >
                      <Github size={18} />
                    </a>
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white/40 hover:text-white transition-colors p-1"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}