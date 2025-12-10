import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { FoundationSection } from "@/components/sections/FoundationSection";
import { HowWeHelpSection } from "@/components/sections/HowWeHelpSection";
import { FreeGuidanceSection } from "@/components/sections/FreeGuidanceSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { CategoriesSection } from "@/components/sections/CategoriesSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { ImpactSection } from "@/components/sections/ImpactSection";
import { VideosSection } from "@/components/sections/VideosSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { BlogsSection } from "@/components/sections/BlogsSection";
import { EventsSection } from "@/components/sections/EventsSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { DonationSection } from "@/components/sections/DonationSection";
import { ContactSection } from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <FoundationSection />
      <HowWeHelpSection />
      <FreeGuidanceSection />
      <BenefitsSection />
      <CategoriesSection />
      <WhyChooseUsSection />
      <ImpactSection />
      <VideosSection />
      <TestimonialsSection />
      <BlogsSection />
      <EventsSection />
      <GallerySection />
      <DonationSection />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default Index;
