"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Phone,
  ExternalLink,
  Copy,
  Check,
} from "lucide-react";

/* ============================= */
/* GOOGLE MAPS URLS (IMPORTANT) */
/* ============================= */

// 1️⃣ Embed URL (ONLY for iframe)
const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3642.1807048085966!2d91.29071207480251!3d24.095139875455317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDA1JzQyLjUiTiA5McKwMTcnMzUuOCJF!5e0!3m2!1sen!2sbd!4v1770824998211!5m2!1sen!2sbd";

// 2️⃣ Normal link (for open in new tab button)
const MAP_OPEN_URL =
  "https://maps.app.goo.gl/gaomQ6HK6EMQgLRn6";

export default function ContactPage() {
  const [copiedText, setCopiedText] = useState("");

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(""), 2000);
  };

  const contactInfo = [
    {
      icon: <Mail size={20} />,
      label: "Email",
      value: "piudassaikat@gmail.com",
      action: () =>
        handleCopy("piudassaikat@gmail.com", "Email"),
    },
    {
      icon: <Phone size={20} />,
      label: "Phone",
      value: "+880 1753-154061",
      action: () =>
        handleCopy("+8801753154061", "Phone"),
    },
    {
      icon: <MapPin size={20} />,
      label: "Location",
      value: "Madhabpur, Habiganj",
      href: MAP_OPEN_URL,
    },
  ];

  const socialLinks = [
    {
      icon: <Github size={22} />,
      href: "https://github.com/Sarkitdas",
      label: "GitHub",
    },
    {
      icon: <Linkedin size={22} />,
      href: "https://www.linkedin.com/in/saikat-das-sarkit/",
      label: "LinkedIn",
    },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white py-24 px-6 relative overflow-hidden font-sans">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ================= LEFT SIDE ================= */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 leading-none">
              Find <br />
              <span className="text-blue-500 font-extrabold italic">
                Me
              </span>{" "}
              Here.
            </h1>

            <p className="text-gray-400 text-lg font-light mb-12 max-w-sm leading-relaxed">
              Whether you want to start a project or just grab a coffee, my inbox is always open.
            </p>

            <div className="space-y-6 mb-12">
              {contactInfo.map((info, i) => (
                <div key={i} className="relative w-fit">
                  <motion.div
                    whileHover={{ x: 10 }}
                    onClick={
                      info.action
                        ? info.action
                        : () => window.open(info.href, "_blank")
                    }
                    className="flex items-center gap-5 group cursor-pointer"
                  >
                    <div className="p-4 bg-white/5 border border-white/10 rounded-2xl group-hover:bg-blue-600 group-hover:border-blue-500 transition-all duration-300 shadow-xl group-hover:shadow-blue-500/20">
                      {info.icon}
                    </div>

                    <div className="flex flex-col">
                      <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-black flex items-center gap-2">
                        {info.label}
                        {info.action && (
                          <Copy
                            size={12}
                            className="opacity-0 group-hover:opacity-100 transition-opacity text-blue-400"
                          />
                        )}
                      </p>

                      <p className="text-xl md:text-2xl text-gray-200 group-hover:text-blue-400 transition-colors font-medium">
                        {info.value}
                      </p>
                    </div>

                    <AnimatePresence>
                      {copiedText === info.label && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.5, x: 20 }}
                          animate={{ opacity: 1, scale: 1, x: 0 }}
                          exit={{ opacity: 0, scale: 0.5, x: 20 }}
                          className="ml-4 bg-green-500/10 border border-green-500/20 text-green-400 text-[10px] px-3 py-1 rounded-full font-bold flex items-center gap-1 backdrop-blur-md"
                        >
                          <Check size={10} /> COPIED
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>
              ))}
            </div>

            {/* Social Icons */}
            <div className="flex gap-4">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-4 bg-white/5 border border-white/10 rounded-full hover:text-blue-400 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* ================= RIGHT SIDE (MAP) ================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-white/5 p-3 backdrop-blur-2xl shadow-2xl">

              {/* Status Badge */}
              <div className="absolute top-8 left-8 z-20 bg-black/70 backdrop-blur-xl border border-white/10 px-5 py-2.5 rounded-full flex items-center gap-3">
                <div className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-blue-100">
                  Habiganj, SYL (GMT+6)
                </span>
              </div>

              {/* IFRAME (Correct Usage) */}
              <iframe
                src={MAP_EMBED_URL}
                className="w-full h-[550px] md:h-[650px] rounded-[2.5rem] opacity-60 grayscale contrast-125 invert-[0.92] hover:grayscale-0 hover:opacity-100 hover:invert-0 transition-all duration-1000 ease-in-out"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Open in Google Maps Button */}
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href={MAP_OPEN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-10 right-10 bg-blue-600 text-white p-5 rounded-2xl shadow-2xl shadow-blue-500/40 z-20 hover:bg-blue-500 transition-colors"
              >
                <ExternalLink size={24} />
              </motion.a>
            </div>

            <div className="absolute -z-10 -bottom-10 -right-10 w-72 h-72 bg-blue-500/10 blur-[100px] rounded-full" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
