import { ShieldCheck, Heart, Sparkles, Leaf, Droplets, Zap } from "lucide-react";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Safe for Family",
    description: "Protect your loved ones from harmful toxins found in everyday products.",
  },
  {
    icon: Heart,
    title: "Better Digestion",
    description: "Natural foods and products improve gut health and reduce digestive issues.",
  },
  {
    icon: Sparkles,
    title: "Hormonal Balance",
    description: "Eliminate endocrine disruptors that cause hormonal imbalances.",
  },
  {
    icon: Leaf,
    title: "Skin & Hair Improvement",
    description: "Natural products enhance your skin's glow and strengthen hair health.",
  },
  {
    icon: Droplets,
    title: "Reduced Toxic Load",
    description: "Lower the burden of accumulated toxins in your body organs.",
  },
  {
    icon: Zap,
    title: "Stronger Immunity",
    description: "Build natural defenses with chemical-free nutrition and lifestyle.",
  },
];

export function BenefitsSection() {
  return (
    <section className="py-24 nature-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full">
            Benefits
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Benefits of Chemical-Free Living
          </h2>
          <p className="text-lg text-muted-foreground">
            Experience the transformative benefits of eliminating harmful chemicals from your daily life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="glass-card p-8 hover-lift group text-center"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <benefit.icon className="h-10 w-10 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
