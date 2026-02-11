"use client";
import { User, Code2, Rocket } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutMe() {
  const highlights = [
    {
      icon: <Code2 className="text-yellow-400" size={24} />,
      title: "Clean Code",
      text: "I believe in writing code that is as beautiful as the UI it powers."
    },
    {
      icon: <Rocket className="text-yellow-400" size={24} />,
      title: "Performance",
      text: "Optimizing every pixel for the fastest user experience possible."
    }
  ];

  // Slide-in animation variants
  const slideInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="relative min-h-screen w-full bg-black py-24 px-6 overflow-hidden">
      {/* Top Gradient */}
      <div className="absolute top-0 left-0 w-full h-[30vh] bg-gradient-to-b from-black via-black/80 to-transparent z-10 pointer-events-none" />

      {/* Glow Effects */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-yellow-400/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-20">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-28">
          <div className="p-3 bg-white/5 border border-white/10 rounded-2xl mb-4">
            <User className="text-yellow-400" size={32} />
          </div>
          <h2 className="text-yellow-400 font-medium tracking-[0.4em] uppercase text-xs mb-3">Get To Know Me</h2>
          <h1 className="text-white text-5xl md:text-7xl font-bold tracking-tighter">About Sarkit</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-stretch">
          {/* Left Column */}
          <motion.div
            className="flex-1 p-8 md:p-12 bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-[2.5rem] shadow-2xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3 }}
            variants={slideInLeft}
          >
            <h3 className="text-white text-3xl font-semibold mb-6">
              A Developer with a <span className="text-yellow-400">Vision</span>
            </h3>
            <div className="space-y-6 text-gray-400 leading-relaxed font-light text-lg">
              <p>Specializing in modern, high-performance web applications.</p>
              <p>I focus on full-stack web development, turning ideas into scalable digital products. From frontend interfaces to backend logic, I build reliable and performance-driven solutions.</p>
            </div>
          </motion.div>

          {/* Right Column */}
          <div className="w-full lg:w-[35%] flex flex-col gap-6">
            {highlights.map((h, idx) => (
              <motion.div
                key={idx}
                className="p-6 bg-white/[0.02] border border-white/5 rounded-3xl group transition-all hover:bg-white/[0.05]"
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.3 }} // triggers repeatedly as you scroll in/out
                variants={idx % 2 === 0 ? slideInRight : slideInLeft}
              >
                <div className="mb-4">{h.icon}</div>
                <h4 className="text-white font-bold text-xl mb-2">{h.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{h.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
