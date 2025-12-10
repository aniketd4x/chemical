import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { HowWeHelpSection } from "@/components/sections/HowWeHelpSection";

const BenefitsPage = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-24">
        <BenefitsSection />
        <HowWeHelpSection />
      </div>
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default BenefitsPage;
