"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function SectionBlur({ children, isHero = false, isLast = false }) {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    // Detects the element from the moment it enters the bottom to when it leaves the top
    offset: ["start end", "end start"],
  });

  // Opacity Logic: 
  // [0 to 0.05] Entrance | [0.05 to 0.95] Full Alpha | [0.95 to 1] Exit
  const opacity = useTransform(
    scrollYProgress, 
    [0, 0.05, 0.95, 1], 
    [isHero ? 1 : 0, 1, 1, isLast ? 1 : 0] 
  );
  
  // Blur Logic:
  // Tightened the range so the "Mastering on React" card stays at blur(0px) longer.
  const blurValue = useTransform(
    scrollYProgress,
    [0, 0.05, 0.95, 1],
    [
      isHero ? "blur(0px)" : "blur(20px)", 
      "blur(0px)", 
      "blur(0px)", 
      isLast ? "blur(0px)" : "blur(20px)"
    ]
  );

  // Added a very subtle Y-parallax to make the transition feel "fluid"
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <motion.div
      ref={containerRef}
      style={{
        opacity,
        filter: blurValue,
        y: isHero ? 0 : y, // Hero shouldn't jump on load
      }}
      className="will-change-[filter,opacity,transform] w-full"
    >
      {children}
    </motion.div>
  );
}