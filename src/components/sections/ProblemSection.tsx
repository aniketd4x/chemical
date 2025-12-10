import { AlertTriangle, Beaker, Baby, Clock } from "lucide-react";

const problems = [
  {
    icon: Beaker,
    title: "100+ Chemicals Daily",
    description: "An average Indian is exposed to over 100 harmful chemicals daily through food, personal care, and household products.",
  },
  {
    icon: AlertTriangle,
    title: "Rising Health Issues",
    description: "Digestion problems, acidity, liver issues, and hormonal imbalances are increasing rapidly due to chemical exposure.",
  },
  {
    icon: Baby,
    title: "Kids & Women Most Affected",
    description: "Children and women are most vulnerable to chemical toxicity, affecting their growth, hormones, and overall health.",
  },
  {
    icon: Clock,
    title: "Long-term Toxicity",
    description: "Continuous chemical exposure leads to organ damage, chronic diseases, and reduced quality of life over time.",
  },
];

export function ProblemSection() {
  return (
    <section id="problem" className="py-24 nature-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full">
            Why It Matters
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Why Chemical-Free Living Matters
          </h2>
          <p className="text-lg text-muted-foreground">
            Understanding the hidden dangers in our daily lives is the first step toward a healthier future for our families.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <div
              key={problem.title}
              className="glass-card p-8 hover-lift group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <problem.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {problem.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
