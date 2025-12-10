import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { CategoriesSection } from "@/components/sections/CategoriesSection";
import { Link } from "react-router-dom";
import { solutionLinks, solutionCategories } from "@/data/solutionLinks";

const CategoriesPage = () => {
  const groupedSolutions = solutionCategories.map((category) => ({
    category,
    links: solutionLinks.filter((link) => link.category === category),
  }));

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full">
            Categories
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Browse All Solutions
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our comprehensive range of chemical-free solutions for every health concern.
          </p>
        </div>
      </section>

      {/* All Categories */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {groupedSolutions.map((group) => (
              <div key={group.category} className="glass-card p-8">
                <h3 className="font-display text-xl font-semibold text-primary mb-4">
                  {group.category}
                </h3>
                <ul className="space-y-2">
                  {group.links.map((link) => (
                    <li key={link.url}>
                      <Link
                        to={link.url}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CategoriesSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default CategoriesPage;
