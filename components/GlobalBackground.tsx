"use client";

import { useMotionValue, useSpring, useTransform, motion } from "framer-motion";
import { useEffect } from "react";

export default function GlobalBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Center the mouse position
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none bg-[#0A0A0F]">
      {/* Animated Aurora Blobs */}
      <motion.div 
        style={{ 
          x: useTransform(springX, (v) => v * 0.12), 
          y: useTransform(springY, (v) => v * 0.12) 
        }}
        className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-purple-600/15 rounded-full blur-[140px] animate-aurora-1" 
      />
      <motion.div 
        style={{ 
          x: useTransform(springX, (v) => -v * 0.15), 
          y: useTransform(springY, (v) => -v * 0.15) 
        }}
        className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-600/10 rounded-full blur-[120px] animate-aurora-2" 
      />
      <motion.div 
        style={{ 
          x: useTransform(springX, (v) => v * 0.2), 
          y: useTransform(springY, (v) => -v * 0.2) 
        }}
        className="absolute top-[20%] right-[15%] w-[50%] h-[50%] bg-indigo-600/15 rounded-full blur-[130px] animate-aurora-3" 
      />
      
      {/* Subtle Grain / Noise Overlay for texture */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
}
