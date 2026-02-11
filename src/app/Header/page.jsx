// Header.js
"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Targets match the IDs we just added to layout.js
  const navLinks = [
    { name: "Home", target: "home" },
    { name: "About me", target: "aboutme" },
    { name: "Skills", target: "skills" },
    { name: "Projects", target: "projects" },
    { name: "Contact", target: "contact" },
  ];

  const handleScroll = (id) => {
    setIsOpen(false); // Close mobile menu
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Background Dimmer for Mobile Menu visibility */}
      <div 
        className={`fixed inset-0 z-[90] bg-black/60 backdrop-blur-xl transition-opacity duration-500 md:hidden
          ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setIsOpen(false)}
      />

      <div className="fixed top-8 left-1/2 -translate-x-1/2 z-[100] w-full max-w-[90%] md:max-w-max">
        <nav
          className={`
            relative flex items-center justify-between
            transition-all duration-500 ease-in-out
            h-[64px] px-6 md:px-10
            bg-white/5 backdrop-blur-2xl
            rounded-full border border-white/20
            ring-1 ring-inset ring-white/10
            shadow-[0_20px_50px_rgba(0,0,0,0.3)]
            w-full md:min-w-[800px]
          `}
        >
          {/* Logo - Scrolls to Home */}
          <div className="flex-shrink-0 z-20 cursor-pointer" onClick={() => handleScroll('home')}>
            <img
              className="h-8 w-auto object-contain"
              src="/Logo/logo.png"
              alt="logo"
            />
          </div>

          {/* Desktop Links - Now uses handleScroll */}
          <div className="hidden md:flex items-center gap-10 z-20">
            {navLinks.map((link, i) => (
              <button
                key={i}
                onClick={() => handleScroll(link.target)}
                className="text-white/70 text-sm font-medium cursor-pointer hover:text-yellow-400 transition-all outline-none"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden z-30 text-white p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Mobile Menu Overlay */}
          <div
            className={`
              absolute top-20 left-0 w-full 
              flex flex-col items-center gap-6 p-8
              bg-white/10 backdrop-blur-3xl 
              rounded-[2.5rem] border border-white/20
              shadow-[0_20px_50px_rgba(0,0,0,0.4)]
              transition-all duration-500 origin-top
              ${isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}
              md:hidden
            `}
          >
            {navLinks.map((link, i) => (
              <button
                key={i}
                onClick={() => handleScroll(link.target)}
                className="text-white text-xl font-semibold hover:text-yellow-400 transition-colors cursor-pointer outline-none"
              >
                {link.name}
              </button>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
}