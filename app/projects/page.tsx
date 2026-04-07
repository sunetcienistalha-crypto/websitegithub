"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MouseFollower from "@/components/MouseFollower";
import { useSiteData } from "@/lib/siteData";

const CATEGORY_COLORS: Record<string, string> = {
  Zirve: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  Etkinlik: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  Yarışma: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  Diplomasi: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  Gönüllülük: "bg-pink-500/10 text-pink-400 border-pink-500/20",
  Medya: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
};

export default function ProjectsPage() {
  const { data, loaded } = useSiteData();

  if (!loaded) return (
    <div className="min-h-screen bg-[#0A0A0F] flex items-center justify-center text-white">
      Yükleniyor...
    </div>
  );

  const PROJECTS = data.projects;
  return (
    <main className="relative min-h-screen" style={{ background: "#0A0A0F" }}>
      <MouseFollower />

      {/* Grid */}
      <div className="fixed inset-0 grid-bg pointer-events-none z-0 opacity-50" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-[#7C3AED]/8 blur-[120px] pointer-events-none z-0" />

      <Navbar />

      <div className="relative z-10 pt-28 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-14"
          >
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-[#9090A8] hover:text-white mb-6 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Ana Sayfa
            </Link>
            <h1
              className="text-4xl lg:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              Tüm <span className="gradient-text">Projelerim</span>
            </h1>
            <p className="text-lg text-[#9090A8] max-w-2xl">
              Havacılık, savunma, yapay zeka, gönüllülük ve medya alanlarında yürüttüğüm projelerin detaylı anlatımları.
            </p>
          </motion.div>

          {/* Projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((project, i) => {
              const catStyle = CATEGORY_COLORS[project.category] ?? "bg-slate-500/10 text-slate-400 border-slate-500/20";
              return (
                <motion.div
                  key={project.slug}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.5 }}
                >
                  <Link
                    href={`/projects/detay?slug=${project.slug}`}
                    className="block photo-card group rounded-2xl overflow-hidden bg-[#111118] border border-[#1E1E2A] hover:border-[#7C3AED]/40 h-full"
                  >
                    {/* Cover */}
                    <div className="relative h-52 overflow-hidden">
                      <Image
                        src={project.coverPhoto}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#111118] via-[#111118]/20 to-transparent" />
                      <span className={`absolute top-3 right-3 text-[11px] font-medium px-2.5 py-1 rounded-full border ${catStyle}`}>
                        {project.category}
                      </span>
                      <span className="absolute top-3 left-3 text-[11px] text-white/40 font-medium bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-full">
                        {project.period}
                      </span>
                      <div className="absolute bottom-3 right-3 w-8 h-8 bg-[#7C3AED]/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <h3 className="font-semibold text-white text-base mb-1 group-hover:text-[#A78BFA] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs font-medium text-[#7C3AED] mb-2">{project.subtitle}</p>
                      <p className="text-xs text-[#9090A8] leading-relaxed line-clamp-2">
                        {project.description[0]}
                      </p>
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {project.technologies.slice(0, 3).map((t) => (
                          <span key={t} className="text-[10px] px-2 py-0.5 rounded-full border border-[#1E1E2A] bg-[#111118] text-[#9090A8]">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
