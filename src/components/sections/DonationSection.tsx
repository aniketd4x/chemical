import { Button } from "@/components/ui/button";
import { Heart, QrCode } from "lucide-react";

const donationTiers = [
  { amount: "₹101", label: "Supporter" },
  { amount: "₹501", label: "Patron" },
  { amount: "₹1001", label: "Champion" },
  { amount: "Custom", label: "Your Choice" },
];

export function DonationSection() {
  return (
    <section className="py-24 bg-forest">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-leaf-light bg-leaf-light/10 rounded-full">
            Support Us
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Support Our Mission
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-12 max-w-2xl mx-auto">
            Your contribution helps us spread awareness about chemical-free living and reach more families across India.
          </p>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* QR Code Placeholder */}
            <div className="glass-card bg-primary-foreground/10 p-8 backdrop-blur-sm border-primary-foreground/20">
              <div className="w-48 h-48 mx-auto bg-primary-foreground/20 rounded-2xl flex items-center justify-center mb-4">
                <QrCode className="h-24 w-24 text-primary-foreground/60" />
              </div>
              <p className="text-primary-foreground/70 text-sm">
                Scan to pay via UPI
              </p>
            </div>

            {/* Donation Tiers */}
            <div>
              <h3 className="font-display text-xl font-semibold text-primary-foreground mb-6">
                Choose Your Contribution
              </h3>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {donationTiers.map((tier) => (
                  <button
                    key={tier.amount}
                    className="p-4 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-colors text-center"
                  >
                    <p className="font-display text-2xl font-bold text-primary-foreground">
                      {tier.amount}
                    </p>
                    <p className="text-sm text-primary-foreground/70">{tier.label}</p>
                  </button>
                ))}
              </div>
              <Button variant="nature" size="lg" className="w-full">
                <Heart className="h-5 w-5" />
                Donate Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
