"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useSiteData } from "@/lib/siteData";

export default function SkillsSection() {
  const { data: d } = useSiteData();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  if (!d) return null;

  return (
    <section id="skills" className="relative py-24 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-sm font-medium text-[#7C3AED] mb-3"
        >
          Yetenekler
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="text-3xl lg:text-4xl font-bold text-white mb-14"
          style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
        >
          Ne biliyorum?
        </motion.h2>

        {/* Skill bars - 3 groups side by side on large, stacked on mobile */}
        <div className="grid md:grid-cols-3 gap-10 mb-14">
          {d.skills.groups.map((group, gi) => (
            <motion.div
              key={group.group}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * gi + 0.2 }}
            >
              <div className="p-6 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 group-hover:border-[#7C3AED]/30 transition-all duration-500">
                <p className="text-[10px] font-black text-[#7C3AED] uppercase tracking-[0.2em] mb-6">
                  {group.group}
                </p>
                <div className="space-y-6">
                  {group.skills.map((skill, si) => (
                    <div key={skill.name} className="group/item">
                      <div className="flex justify-between mb-2.5">
                        <span className="text-sm font-bold text-white group-hover/item:text-[#A78BFA] transition-colors">{skill.name}</span>
                        <span className="text-xs font-black text-[#7C3AED] uppercase tracking-widest">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-[#7C3AED] to-[#A78BFA] shadow-[0_0_15px_rgba(124,58,237,0.5)]"
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1.5, delay: 0.1 * si + 0.3, ease: [0.33, 1, 0.68, 1] }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="divider mb-10" />

        {/* Languages */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mb-10"
        >
          <p className="text-[10px] font-black text-[#4A4A60] uppercase tracking-[0.3em] mb-6">Diller</p>
          <div className="grid md:grid-cols-3 gap-6">
            {d.skills.languages.map((lang, idx) => (
              <div key={lang.name} className="p-6 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 group hover:border-[#7C3AED]/30 transition-all duration-500">
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <div className="text-sm font-black text-white mb-0.5 uppercase tracking-wider">{lang.name}</div>
                      <div className="text-[10px] text-[#7C3AED] font-black uppercase tracking-widest">{lang.label}</div>
                    </div>
                    <div className="text-xs font-black text-[#4A4A60]">{lang.level}%</div>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-[#7C3AED]/60 to-[#A78BFA]/60"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${lang.level}%` } : {}}
                      transition={{ duration: 1.5, delay: 0.5 + idx * 0.1, ease: "easeOut" }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Tool tags */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.65 }}
        >
          <p className="text-xs font-semibold text-[#4A4A60] uppercase tracking-widest mb-5">İlgi Alanları & Uzmanlıklar</p>
          <div className="flex flex-wrap gap-2">
            {d.skills.tools.map((tag, i) => (
              <motion.span
                key={tag}
                className="tag cursor-default"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.7 + i * 0.03 }}
                whileHover={{ scale: 1.08, y: -2 }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
