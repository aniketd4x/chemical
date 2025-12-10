import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { GallerySection } from "@/components/sections/GallerySection";

const GalleryPage = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-24">
        <GallerySection />
      </div>
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default GalleryPage;
