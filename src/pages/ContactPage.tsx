import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { ContactSection } from "@/components/sections/ContactSection";

const ContactPage = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-24">
        <ContactSection />
      </div>
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default ContactPage;
