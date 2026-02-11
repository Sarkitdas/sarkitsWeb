"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gamepad2, Github, Play, Trophy, Layers, Send, X, CheckCircle2, Loader2 } from "lucide-react";

const gameData = [
  {
    title: "Tac-Tac Game",
    type: "Puzzle game",
    github: "https://github.com/Sarkitdas/tac-tac-game",
    live: "https://sarkitdas.github.io/tac-tac-game/",
    tech: "Javascript, HTML, CSS",
    color: "from-cyan-500/10"
  },
  {
    title: "Raw,paper,scissors",
    type: "Prediction Game",
    github: "https://github.com/Sarkitdas/Prediction-Game",
    live: "https://sarkitdas.github.io/Prediction-Game/",
    tech: "Javascript, HTML, CSS",
    color: "from-purple-500/10"
  },
];

export default function GameSection() {
  const [isEmailMode, setIsEmailMode] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (response.ok) setStatus("success");
      else setStatus("error");
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section className="bg-[#050505] py-16 px-6 overflow-hidden relative">
      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="p-2 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm">
            <Gamepad2 className="text-yellow-400" size={20} />
          </div>
          <div>
            <h2 className="text-white text-2xl font-bold tracking-tight">Mini Games</h2>
            <p className="text-gray-400 text-xs">Experiments & logic</p>
          </div>
        </motion.div>

        {/* Game Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {gameData.map((game, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className={`relative group overflow-hidden bg-gradient-to-br ${game.color} to-transparent border border-white/10 p-5 rounded-[1.5rem] backdrop-blur-md`}
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-2 bg-black/40 rounded-lg border border-white/5">
                  <Trophy size={16} className="text-yellow-500/80" />
                </div>
                <div className="flex gap-1.5">
                  <a href={game.github} target="_blank" rel="noopener noreferrer" className="p-1.5 text-white/40 hover:text-white transition-colors">
                    <Github size={16} />
                  </a>
                  <a href={game.live} target="_blank" rel="noopener noreferrer" className="p-1.5 bg-white text-black rounded-full hover:scale-110 transition-transform">
                    <Play size={12} fill="currentColor" className="ml-0.5"/>
                  </a>
                </div>
              </div>
              <h3 className="text-white text-lg font-bold mb-0.5">{game.title}</h3>
              <p className="text-gray-500 text-[10px] font-mono mb-4 uppercase tracking-wider">{game.type}</p>
              <div className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-yellow-400 animate-pulse" />
                <span className="text-[9px] text-white/30 uppercase font-bold tracking-tighter">Built with {game.tech}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- CTA SECTION WITH NEBULA ANIMATION --- */}
        <motion.div 
          layout
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="w-full bg-blue-700/90 rounded-[2.5rem] p-8 md:p-16 flex flex-col items-center justify-center text-center group relative overflow-hidden min-h-[320px] border border-blue-400/20 shadow-2xl"
        >
          {/* Animated Background Elements */}
          <div className="absolute inset-0 z-0">
            {/* Moving Gradient Orb 1 */}
            <motion.div 
              animate={{ 
                x: [0, 100, 0], 
                y: [0, -50, 0],
                scale: [1, 1.2, 1] 
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute -top-20 -left-20 w-80 h-80 bg-blue-400/30 rounded-full blur-[100px]"
            />
            {/* Moving Gradient Orb 2 */}
            <motion.div 
              animate={{ 
                x: [0, -100, 0], 
                y: [0, 50, 0],
                scale: [1, 1.3, 1] 
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-20 -right-20 w-96 h-96 bg-indigo-500/20 rounded-full blur-[120px]"
            />
            {/* Subtle Grid Pattern */}
            <div className="absolute inset-0 opacity-10 [mask-image:radial-gradient(ellipse_at_center,white,transparent)] bg-[grid-white_1px] bg-[size:20px_20px]" />
          </div>

          <Layers className="absolute -bottom-10 -right-10 text-white/5 rotate-12 group-hover:rotate-45 transition-transform duration-1000" size={250} />
          
          <div className="relative z-10 w-full max-w-sm">
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  className="flex flex-col items-center"
                >
                  <motion.div 
                    initial={{ rotate: -180, scale: 0 }}
                    animate={{ rotate: 0, scale: 1 }}
                    transition={{ type: "spring", damping: 10 }}
                    className="p-4 bg-white shadow-[0_0_40px_rgba(255,255,255,0.3)] rounded-full mb-6"
                  >
                    <CheckCircle2 size={48} className="text-blue-600" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-blue-100/80 text-sm leading-relaxed">
                    I've received your inquiry.<br/>I will connect with you in a short period.
                  </p>
                </motion.div>
              ) : (
                <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <motion.h2 
                    layout
                    className="text-3xl md:text-5xl font-bold mb-4 tracking-tighter text-white drop-shadow-md"
                  >
                    Have a project <br/>in mind?
                  </motion.h2>
                  <p className="text-blue-100/80 mb-8 text-sm md:text-base font-light max-w-[280px] mx-auto leading-relaxed">
                    Let's build something extraordinary together.
                  </p>
                  
                  {!isEmailMode ? (
                    <motion.button
                      key="cta-btn"
                      whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setIsEmailMode(true)}
                      className="bg-white text-blue-600 px-10 py-3.5 rounded-full cursor-pointer font-bold text-base shadow-xl transition-all"
                    >
                      Get In Touch
                    </motion.button>
                  ) : (
                    <motion.form
                      key="email-input"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      onSubmit={handleEmailSubmit}
                      className="flex items-center bg-white/10 border border-white/30 backdrop-blur-xl rounded-full p-1.5 w-full shadow-2xl"
                    >
                      <input 
                        autoFocus
                        type="email" 
                        placeholder="your@email.com"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-transparent text-white px-5 py-2.5 w-full outline-none text-sm placeholder:text-blue-200/50"
                      />
                      <button 
                        disabled={status === "loading"}
                        type="submit"
                        className="bg-white text-blue-600 p-3 rounded-full cursor-pointer hover:bg-blue-50 transition-colors disabled:opacity-50 shadow-lg"
                      >
                        {status === "loading" ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
                      </button>
                      <button 
                        type="button"
                        onClick={() => setIsEmailMode(false)}
                        className="p-3 text-white/60 hover:text-white transition-colors cursor-pointer"
                      >
                        <X size={18} />
                      </button>
                    </motion.form>
                  )}
                  {status === "error" && (
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-300 text-xs mt-4 font-medium">
                      Connection failed. Please check your network.
                    </motion.p>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}