"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

type RevealMode = "fade-up" | "slide-left" | "slide-right" | "zoom-in" | "blur-in" | "rotate-in";

const VARIANTS: Record<RevealMode, { hidden: object; visible: object }> = {
  "fade-up": {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  },
  "slide-left": {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 },
  },
  "slide-right": {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 },
  },
  "zoom-in": {
    hidden: { opacity: 0, scale: 0.85 },
    visible: { opacity: 1, scale: 1 },
  },
  "blur-in": {
    hidden: { opacity: 0, filter: "blur(12px)" },
    visible: { opacity: 1, filter: "blur(0px)" },
  },
  "rotate-in": {
    hidden: { opacity: 0, rotate: -5, y: 30 },
    visible: { opacity: 1, rotate: 0, y: 0 },
  },
};

export default function ScrollReveal({
  children,
  mode = "fade-up",
  delay = 0,
  duration = 0.7,
  className = "",
}: {
  children: React.ReactNode;
  mode?: RevealMode;
  delay?: number;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const variant = VARIANTS[mode];

  return (
    <motion.div
      ref={ref}
      initial={variant.hidden as any}
      animate={isInView ? (variant.visible as any) : (variant.hidden as any)}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
