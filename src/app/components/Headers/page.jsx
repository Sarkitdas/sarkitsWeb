"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Skills", href: "/skills" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 flex justify-center">
      <div className="relative mt-4 w-[90vw] max-w-6xl">
        {/* Glowing Border */}
        <div className="absolute -inset-[2px] rounded-2xl overflow-hidden">
          <div
            className="absolute inset-0 rounded-2xl blur-sm animate-spin-slow"
            style={{
              background:
                "conic-gradient(#60a5fa, #3b82f6, #60a5fa, #3b82f6, #60a5fa)",
            }}
          />
        </div>

        {/* Navbar */}
        <div className="relative bg-white rounded-2xl shadow-md px-6 py-3 z-10">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="text-sm md:text-2xl font-bold text-blue-600"
            >
              Sarkit's Hub
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-4 md:gap-6 text-xs md:text-lg">
              {menuItems.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  className="group relative text-gray-700 hover:text-blue-600 transition"
                >
                  {item.name}
                  <span className="absolute text-xs md:text-xl left-0 -bottom-1 h-[2px] w-0 bg-blue-600 group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </div>

            {/* Hamburger */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden flex flex-col gap-1"
            >
              <span
                className={`h-[2px] w-6 bg-gray-700 transition-transform duration-300 ${
                  open ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`h-[2px] w-6 bg-gray-700 transition-opacity duration-300 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-[2px] w-6 bg-gray-700 transition-transform duration-300 ${
                  open ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </div>

          {/* Mobile Menu (Animated) */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
              open ? "max-h-64 opacity-100 mt-4" : "max-h-0 opacity-0"
            }`}
          >
            <div className="flex flex-col gap-4 font-medium">
              {menuItems.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-gray-700 text-xs md:text-base hover:text-blue-600 transition"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Custom animation */}
      <style jsx>{`
        .animate-spin-slow {
          animation: spin 6s linear infinite;
        }
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </nav>
  );
}
