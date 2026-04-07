"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import ProjectDetailClient from "@/components/ProjectDetailClient";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MouseFollower from "@/components/MouseFollower";

function ProjectDetailLoader() {
  const searchParams = useSearchParams();
  const slug = searchParams.get("slug");

  if (!slug) {
    return (
      <div className="min-h-screen bg-[#0A0A0F] flex items-center justify-center text-white text-xl font-bold">
        Lütfen bir proje seçin...
      </div>
    );
  }

  return <ProjectDetailClient projectSlug={slug} />;
}

export default function ProjectDetailPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#0A0A0F] flex items-center justify-center text-white">
        Yükleniyor...
      </div>
    }>
      <ProjectDetailLoader />
    </Suspense>
  );
}
