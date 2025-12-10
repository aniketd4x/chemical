import { useEffect, useState, useRef } from "react";
import { Users, Calendar, Beaker, Store } from "lucide-react";

const stats = [
  { icon: Users, value: 10000, suffix: "+", label: "Families Guided" },
  { icon: Calendar, value: 500, suffix: "+", label: "Awareness Sessions" },
  { icon: Beaker, value: 1, suffix: "M+", label: "Chemicals Avoided" },
  { icon: Store, value: 100, suffix: "+", label: "Natural Brands Supported" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="font-display text-4xl md:text-5xl font-bold text-primary-foreground">
      {count.toLocaleString()}{suffix}
    </div>
  );
}

export function ImpactSection() {
  return (
    <section className="py-24 bg-forest">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-leaf-light bg-leaf-light/10 rounded-full">
            Our Impact
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Making a Difference, One Family at a Time
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-8 rounded-2xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-leaf-light/20 flex items-center justify-center">
                <stat.icon className="h-7 w-7 text-leaf-light" />
              </div>
              <Counter target={stat.value} suffix={stat.suffix} />
              <p className="mt-2 text-primary-foreground/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
