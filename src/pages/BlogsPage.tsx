import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { BlogsSection } from "@/components/sections/BlogsSection";

const BlogsPage = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-24">
        <BlogsSection />
      </div>
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default BlogsPage;
