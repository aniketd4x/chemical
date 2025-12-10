import { Target, Eye, Rocket, Heart, CheckCircle } from "lucide-react";
import happyFamily from "@/assets/happy-family.jpg";

const missions = [
  "Spread awareness on lifestyle chemicals",
  "Promote natural healing & herbal alternatives",
  "Conduct awareness seminars & camps",
  "Provide free lifestyle guidance",
  "Protect kids, women & elderly",
];

const values = [
  { title: "Health First", icon: Heart },
  { title: "Transparency", icon: Eye },
  { title: "Nature-Based Living", icon: Target },
  { title: "Community Support", icon: CheckCircle },
];

export function FoundationSection() {
  return (
    <section id="foundation" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full">
            About Us
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            About Chemical Azadi Foundation
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-2xl" />
            <img
              src={happyFamily}
              alt="Happy Indian family living chemical-free lifestyle"
              className="relative rounded-3xl shadow-elevated w-full object-cover aspect-[4/3]"
            />
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="glass-card p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Target className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold">Our Motive</h3>
              </div>
              <p className="text-muted-foreground">
                To create awareness of harmful chemical exposure and promote natural alternatives for every Indian family.
              </p>
            </div>

            <div className="glass-card p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Eye className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold">Our Vision</h3>
              </div>
              <p className="text-muted-foreground">
                A healthier, chemical-free India through education, awareness, and natural living for future generations.
              </p>
            </div>

            <div className="glass-card p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Rocket className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold">Our Mission</h3>
              </div>
              <ul className="space-y-2">
                {missions.map((mission) => (
                  <li key={mission} className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" />
                    <span>{mission}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="glass-card p-8">
          <h3 className="font-display text-2xl font-semibold text-center mb-8">Our Core Values</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <p className="font-medium text-foreground">{value.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why We Started */}
        <div className="mt-16 text-center max-w-4xl mx-auto">
          <h3 className="font-display text-2xl font-semibold mb-6">Why We Started</h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The alarming rise in lifestyle diseases, hormonal imbalances, and chronic health issues made us realize that our daily exposure to harmful chemicals is a silent epidemic. From the food we eat to the products we use, chemicals have infiltrated every aspect of our lives. Chemical Azadi Foundation was born from the urgent need to educate, empower, and guide families toward a toxin-free, natural way of living.
          </p>
        </div>
      </div>
    </section>
  );
}
