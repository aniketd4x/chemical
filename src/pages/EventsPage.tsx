import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { EventsSection } from "@/components/sections/EventsSection";

const EventsPage = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-24">
        <EventsSection />
      </div>
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default EventsPage;
