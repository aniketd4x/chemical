import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-nature.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-forest/70 via-forest/50 to-forest/80" />
      </div>

      {/* Floating Leaves Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-16 h-16 opacity-20 animate-float">
          <svg viewBox="0 0 100 100" fill="currentColor" className="text-leaf-light">
            <path d="M50 5C25 25 10 50 10 75c0 15 15 20 40 20s40-5 40-20C90 50 75 25 50 5z" />
          </svg>
        </div>
        <div className="absolute top-1/3 right-20 w-12 h-12 opacity-15 animate-float animation-delay-200">
          <svg viewBox="0 0 100 100" fill="currentColor" className="text-leaf-light">
            <path d="M50 5C25 25 10 50 10 75c0 15 15 20 40 20s40-5 40-20C90 50 75 25 50 5z" />
          </svg>
        </div>
        <div className="absolute bottom-1/3 left-1/4 w-10 h-10 opacity-10 animate-float animation-delay-400">
          <svg viewBox="0 0 100 100" fill="currentColor" className="text-leaf-light">
            <path d="M50 5C25 25 10 50 10 75c0 15 15 20 40 20s40-5 40-20C90 50 75 25 50 5z" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
        <div className="max-w-4xl mx-auto animate-fade-up">
          {/* Location Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 text-sm">
            <MapPin className="h-4 w-4" />
            <span>Based in Mehdipatnam, Hyderabad – Serving Families Across India</span>
          </div>

          {/* H1 Title */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
            Choose a{" "}
            <span className="text-leaf-light">Chemical-Free</span> Life.
            <br />
            Choose a{" "}
            <span className="text-leaf-light">Healthier India</span>.
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl text-primary-foreground/80 max-w-3xl mx-auto mb-10 leading-relaxed">
            Chemical Azadi Foundation spreads awareness about chemical-free living, natural healing, and toxin-free lifestyle guidance across India.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/shop">
              <Button variant="hero" size="xl">
                Shop Now
              </Button>
            </Link>
            <a href="#foundation">
              <Button variant="heroOutline" size="xl">
                Join the Movement
              </Button>
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#problem" className="flex flex-col items-center gap-2 text-primary-foreground/60 hover:text-primary-foreground transition-colors">
            <span className="text-sm">Scroll to explore</span>
            <ArrowDown className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
