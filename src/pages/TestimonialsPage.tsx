import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

const TestimonialsPage = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-24">
        <TestimonialsSection />
      </div>
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default TestimonialsPage;
