"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import EventDetailClient from "@/components/EventDetailClient";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MouseFollower from "@/components/MouseFollower";
import RadarBackground from "@/components/RadarBackground";

function EventDetailLoader() {
  const searchParams = useSearchParams();
  const slug = searchParams.get("slug");

  if (!slug) {
    return (
      <div className="min-h-screen bg-[#0A0A0F] flex items-center justify-center text-white">
        Proje Belirlenmedi.
      </div>
    );
  }

  return <EventDetailClient eventSlug={slug} />;
}

export default function EventDetailPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#0A0A0F] flex items-center justify-center text-white">
        Yükleniyor...
      </div>
    }>
      <EventDetailLoader />
    </Suspense>
  );
}
