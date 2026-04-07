"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useSiteData } from "@/lib/siteData";

export default function ExperienceSection() {
  const { data: d } = useSiteData();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="relative py-24 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-sm font-medium text-[#7C3AED] mb-3"
        >
          Deneyimler
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="text-3xl lg:text-4xl font-bold text-white mb-14"
          style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
        >
          Neler yaptım?
        </motion.h2>

        {/* Timeline */}
        <div className="relative space-y-0">
          {/* Vertical line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-[#7C3AED]/40 via-[#1E1E2A] to-transparent" />

          {d.experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.08 * i + 0.2, duration: 0.5 }}
              className="relative flex gap-8 pb-10 last:pb-0 group"
            >
              {/* Timeline dot */}
              <div className="flex-shrink-0 mt-1">
                <div
                  className={`w-3.5 h-3.5 rounded-full border-2 transition-all duration-500 ${
                    exp.active
                      ? "bg-[#7C3AED] border-[#7C3AED] shadow-[0_0_12px_rgba(124,58,237,0.6)]"
                      : "bg-[#111118] border-[#1E1E2A] group-hover:border-[#7C3AED]/50 group-hover:bg-[#7C3AED]/20"
                  }`}
                />
              </div>

              {/* Content */}
              <div className="flex-1 pb-2 p-6 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 group-hover:border-[#7C3AED]/30 transition-all duration-500 overflow-hidden relative">
                {/* Subtle highlight */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#7C3AED]/10 blur-[40px] -z-10 group-hover:bg-[#7C3AED]/20 transition-colors" />

                {/* Period + type */}
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="text-xs text-[#7C3AED] font-black uppercase tracking-[0.2em]">{exp.period}</span>
                  <span className="text-[10px] px-2.5 py-1 rounded-lg border border-white/10 bg-white/5 text-[#9090A8] uppercase tracking-wider font-bold">
                    {exp.type}
                  </span>
                  {exp.active && (
                    <span className="text-[10px] px-2.5 py-1 rounded-lg bg-[#7C3AED]/20 border border-[#7C3AED]/40 text-white flex items-center gap-2 font-black uppercase tracking-wider">
                      <span className="relative flex w-1.5 h-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-60" />
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white" />
                      </span>
                      Aktif
                    </span>
                  )}
                </div>

                {/* Role + org */}
                <h3 className="text-xl font-bold text-white mb-1" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>{exp.role}</h3>
                <p className="text-sm font-bold text-[#A78BFA] mb-4 uppercase tracking-wide">{exp.org}</p>

                {/* Description */}
                <p className="text-sm text-[#9090A8] leading-relaxed mb-6 font-medium tracking-tight whitespace-pre-line">{exp.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-[9px] font-black text-[#7C3AED] uppercase tracking-widest transition-colors group-hover:text-white">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
