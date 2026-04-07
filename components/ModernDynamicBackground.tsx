"use client";

import { motion } from "framer-motion";

export default function ModernDynamicBackground() {
  // Optimized Liquid Background - Lower GPU overhead, no external SVG
  return (
    <div className="fixed inset-0 -z-20 overflow-hidden bg-[#0A0A0F]">
      {/* Liquid Mesh Gradients - Simplified for Performance */}
      <motion.div
        animate={{
          x: [0, 60, -20, 0],
          y: [0, -30, 40, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] left-[-15%] w-[70vw] h-[70vh] rounded-full blur-[140px] opacity-[0.1] bg-purple-600"
      />

      <motion.div
        animate={{
          x: [40, -40, 0],
          y: [-50, 50, 0],
          scale: [1, 1.05, 0.95, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-15%] right-[-10%] w-[65vw] h-[65vh] rounded-full blur-[130px] opacity-[0.08] bg-blue-600"
      />

      {/* Grid Overlay - Pure CSS Pattern for Zero Network/GPU overhead */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* CSS-only Grain - Lightweight Alternative to noise.svg */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ filter: 'contrast(150%) brightness(120%)' }}>
        <div className="absolute inset-0 bg-[#ffffff] mix-blend-overlay opacity-[0.02] [mask-image:radial-gradient(ellipse_at_center,black,transparent)]" />
      </div>
      
      {/* Vignette Shadow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0F] via-transparent to-[#0A0A0F]/60 pointer-events-none" />
    </div>
  );
}
