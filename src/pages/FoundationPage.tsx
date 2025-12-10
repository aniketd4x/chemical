import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { FoundationSection } from "@/components/sections/FoundationSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { ImpactSection } from "@/components/sections/ImpactSection";

const FoundationPage = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-24">
        <FoundationSection />
        <WhyChooseUsSection />
        <ImpactSection />
      </div>
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default FoundationPage;
