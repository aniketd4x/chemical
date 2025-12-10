import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle, ShoppingBag, MessageCircle } from "lucide-react";
import { solutionLinks } from "@/data/solutionLinks";

const SolutionPage = () => {
  const { slug } = useParams();
  
  const solution = solutionLinks.find(
    (s) => s.url === `/solution/${slug}`
  );

  if (!solution) {
    return (
      <main className="min-h-screen">
        <Navbar />
        <div className="pt-32 pb-24 text-center">
          <h1 className="font-display text-4xl font-bold text-foreground mb-4">
            Solution Not Found
          </h1>
          <Link to="/">
            <Button variant="outline">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  const benefits = [
    "100% natural and chemical-free approach",
    "Personalized lifestyle guidance",
    "Safe for all age groups",
    "No side effects",
    "Long-term sustainable results",
    "Expert support available",
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full">
              {solution.category}
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Natural Solutions for {solution.title}
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Discover chemical-free, natural approaches to manage {solution.title.toLowerCase()}. 
              Our holistic guidance helps you address the root cause and achieve lasting wellness.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/shop">
                <Button variant="cta" size="lg">
                  <ShoppingBag className="h-5 w-5" />
                  Shop Natural Products
                </Button>
              </Link>
              <a href="https://wa.me/919550385880" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg">
                  <MessageCircle className="h-5 w-5" />
                  Get Free Guidance
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-foreground mb-8">
            Why Choose Our Natural Approach
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((benefit) => (
              <div key={benefit} className="glass-card p-6 flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0" />
                <p className="text-foreground">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-bold text-primary-foreground mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Contact us for personalized chemical-free guidance for {solution.title.toLowerCase()}.
          </p>
          <a href="https://wa.me/919550385880" target="_blank" rel="noopener noreferrer">
            <Button variant="heroOutline" size="xl">
              <MessageCircle className="h-5 w-5" />
              WhatsApp: +91 95503 85880
            </Button>
          </a>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default SolutionPage;
