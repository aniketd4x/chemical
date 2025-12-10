import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { VideosSection } from "@/components/sections/VideosSection";

const VideosPage = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-24">
        <VideosSection />
      </div>
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default VideosPage;
