import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";

export function FreeGuidanceSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-secondary to-moss p-12 md:p-16 lg:p-20">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-primary-foreground blur-3xl" />
            <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-primary-foreground blur-3xl" />
          </div>

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Get Free Chemical-Free Lifestyle Guidance
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 leading-relaxed">
              Our experts are ready to help you transition to a healthier, toxin-free lifestyle. Connect with us via WhatsApp or phone for personalized guidance at no cost.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="https://wa.me/919550385880" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="heroOutline"
                  size="xl"
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20"
                >
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp Us
                </Button>
              </a>
              <a href="tel:+919550385880">
                <Button
                  variant="heroOutline"
                  size="xl"
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20"
                >
                  <Phone className="h-5 w-5" />
                  Call: +91 95503 85880
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
