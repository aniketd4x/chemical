import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingBag, ArrowRight } from "lucide-react";

const categories = [
  {
    title: "Digestive Health",
    description: "Natural solutions for acidity, gas, constipation, and digestive wellness.",
    products: ["Gas Relief", "Digestion Support", "Liver Cleanse", "Gut Health"],
  },
  {
    title: "Heart & Blood",
    description: "Chemical-free support for heart health, blood pressure, and cholesterol.",
    products: ["Heart Support", "BP Balance", "Cholesterol Care", "Circulation Boost"],
  },
  {
    title: "Women's Health",
    description: "Natural care for hormonal balance, PCOS, and overall women's wellness.",
    products: ["Hormonal Balance", "PCOS Support", "Period Care", "Fertility Support"],
  },
  {
    title: "Skin & Hair",
    description: "Toxin-free products for glowing skin and healthy hair naturally.",
    products: ["Skin Glow", "Hair Growth", "Acne Care", "Anti-Aging"],
  },
  {
    title: "Immunity & Detox",
    description: "Boost your immunity and cleanse your body with natural solutions.",
    products: ["Immunity Booster", "Body Detox", "Antioxidant Support", "Energy Boost"],
  },
  {
    title: "Kids & Family",
    description: "Safe, chemical-free health products for the whole family.",
    products: ["Kids Health", "Family Wellness", "Brain Health", "Growth Support"],
  },
];

const ShopPage = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full">
            Shop
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Chemical-Free Solutions
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Explore our curated collection of natural, toxin-free products for your health and wellness journey.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <div key={category.title} className="glass-card p-8 hover-lift">
                <h3 className="font-display text-2xl font-semibold text-foreground mb-3">
                  {category.title}
                </h3>
                <p className="text-muted-foreground mb-6">{category.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {category.products.map((product) => (
                    <span
                      key={product}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                    >
                      {product}
                    </span>
                  ))}
                </div>
                <Button variant="outline" className="w-full">
                  Explore <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-bold text-primary-foreground mb-6">
            Need Help Choosing?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Our experts can guide you to the right chemical-free products for your specific needs.
          </p>
          <a href="https://wa.me/919550385880" target="_blank" rel="noopener noreferrer">
            <Button variant="heroOutline" size="xl">
              <ShoppingBag className="h-5 w-5" />
              Get Product Recommendations
            </Button>
          </a>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default ShopPage;
