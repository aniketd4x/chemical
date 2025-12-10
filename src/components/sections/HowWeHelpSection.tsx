import { Search, MessageSquare, ListChecks, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Identify Your Issue",
    description: "Share your health concerns with our team. We understand your lifestyle, habits, and current challenges.",
  },
  {
    icon: MessageSquare,
    step: "02",
    title: "Get Natural Guidance",
    description: "Receive personalized, chemical-free recommendations tailored to your specific health needs.",
  },
  {
    icon: ListChecks,
    step: "03",
    title: "Follow Chemical-Free Plan",
    description: "Implement our natural lifestyle changes, herbal solutions, and toxin-free product recommendations.",
  },
  {
    icon: TrendingUp,
    step: "04",
    title: "Track Improvement",
    description: "Monitor your progress as you experience the benefits of chemical-free living.",
  },
];

export function HowWeHelpSection() {
  return (
    <section className="py-24 nature-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full">
            Our Process
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            How We Help You
          </h2>
          <p className="text-lg text-muted-foreground">
            Our simple 4-step process guides you from identifying health issues to achieving a chemical-free lifestyle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative glass-card p-8 hover-lift group"
            >
              {/* Step Number */}
              <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center text-lg shadow-card">
                {step.step}
              </div>

              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <step.icon className="h-8 w-8 text-primary" />
              </div>

              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
