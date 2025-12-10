import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Mumbai, Maharashtra",
    issue: "Digestive Issues",
    quote: "After following the chemical-free guidance from CAF, my chronic acidity issues have completely resolved. My family now lives a toxin-free life!",
    rating: 5,
  },
  {
    name: "Rajesh Kumar",
    location: "Delhi",
    issue: "Skin Health",
    quote: "The natural alternatives suggested by Chemical Azadi Foundation transformed my skin. No more rashes and allergies from chemical products.",
    rating: 5,
  },
  {
    name: "Sunita Devi",
    location: "Hyderabad, Telangana",
    issue: "PCOS",
    quote: "The lifestyle changes and natural solutions helped me manage my PCOS symptoms naturally. Forever grateful to this foundation!",
    rating: 5,
  },
  {
    name: "Anil Reddy",
    location: "Bangalore, Karnataka",
    issue: "Fatty Liver",
    quote: "My liver health improved dramatically after switching to chemical-free products and following the diet recommendations.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 nature-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full">
            Success Stories
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Real Transformations
          </h2>
          <p className="text-lg text-muted-foreground">
            Hear from families who have transformed their health with our guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-card p-8 hover-lift relative"
            >
              <Quote className="absolute top-6 right-6 h-10 w-10 text-primary/10" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>

              <p className="text-foreground text-lg leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
                <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                  {testimonial.issue}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
