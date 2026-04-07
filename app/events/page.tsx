import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MouseFollower from "@/components/MouseFollower";
import EventsGallery from "@/components/EventsGallery";
import RadarBackground from "@/components/RadarBackground";

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0F] text-white">
      <MouseFollower />
      <RadarBackground />
      <Navbar />
      
      <div className="max-w-6xl mx-auto px-6 pt-32 pb-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
          Tüm Etkinlikler
        </h1>
        <p className="text-[#9090A8] max-w-2xl text-lg mb-12">
          Havacılık, diplomasi, teknoloji ve sosyal sorumluluk alanında katıldığım zirveler, fuarlar ve organizasyonlar.
        </p>

        <EventsGallery />
      </div>

      <Footer />
    </main>
  );
}
