import { Leaf, HeartHandshake, Lightbulb, Users } from "lucide-react";

const reasons = [
  {
    icon: Leaf,
    title: "Natural Approach",
    description: "We believe in the power of nature. All our recommendations are based on time-tested natural remedies and organic solutions.",
  },
  {
    icon: HeartHandshake,
    title: "Non-Profit Mission",
    description: "We're not here for profit. Our sole purpose is to create awareness and help families live healthier lives.",
  },
  {
    icon: Lightbulb,
    title: "Lifestyle-Based Healing",
    description: "We focus on holistic lifestyle changes, not just products. True health comes from changing how you live.",
  },
  {
    icon: Users,
    title: "Awareness Programs",
    description: "Regular seminars, workshops, and camps across India to educate communities about chemical-free living.",
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="py-24 nature-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full">
            Why Us
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Why Choose Chemical Azadi Foundation
          </h2>
          <p className="text-lg text-muted-foreground">
            What sets us apart in the mission for chemical-free India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="glass-card p-8 hover-lift group flex gap-6"
            >
              <div className="w-16 h-16 flex-shrink-0 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <reason.icon className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
