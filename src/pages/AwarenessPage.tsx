import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { EventsSection } from "@/components/sections/EventsSection";

const AwarenessPage = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-24">
        <ProblemSection />
        <EventsSection />
      </div>
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default AwarenessPage;
