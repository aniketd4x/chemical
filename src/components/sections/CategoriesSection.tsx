import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Leaf, Sparkles, Apple, Flower2, Baby } from "lucide-react";
import organicProducts from "@/assets/organic-products.jpg";

const categories = [
  { icon: Heart, title: "Digestive Health", url: "/solution/digestion-health" },
  { icon: Leaf, title: "Natural Wellness", url: "/solution/body-detox" },
  { icon: Sparkles, title: "Skin & Beauty", url: "/solution/skin-health" },
  { icon: Apple, title: "Weight Management", url: "/solution/weight-management" },
  { icon: Flower2, title: "Women's Health", url: "/solution/women-health" },
  { icon: Baby, title: "Kids Health", url: "/solution/kids-health" },
];

export function CategoriesSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Categories Grid */}
          <div>
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full">
              Categories
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Explore Natural Solutions
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Browse through our curated categories of chemical-free products and natural health solutions.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {categories.map((category) => (
                <Link
                  key={category.title}
                  to={category.url}
                  className="glass-card p-6 hover-lift group flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  <span className="font-medium text-foreground">{category.title}</span>
                </Link>
              ))}
            </div>

            <Link to="/shop">
              <Button variant="cta" size="xl" className="w-full sm:w-auto">
                Shop Now – Explore Chemical-Free Solutions
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-2xl" />
            <img
              src={organicProducts}
              alt="Organic chemical-free wellness products"
              className="relative rounded-3xl shadow-elevated w-full object-cover aspect-square"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
