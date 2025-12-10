import { Link } from "react-router-dom";
import { Leaf, Facebook, Instagram, Youtube, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const quickLinks = [
  { title: "Home", url: "/" },
  { title: "About Foundation", url: "/foundation" },
  { title: "Awareness", url: "/awareness" },
  { title: "Benefits", url: "/benefits" },
  { title: "Shop", url: "/shop" },
  { title: "Contact", url: "/contact" },
];

const solutionLinks = [
  { title: "Digestive Health", url: "/solution/digestion-health" },
  { title: "Heart Health", url: "/solution/heart-health" },
  { title: "Women Health", url: "/solution/women-health" },
  { title: "Skin & Hair", url: "/solution/skin-health" },
  { title: "Weight Management", url: "/solution/weight-management" },
  { title: "View All Solutions", url: "/categories" },
];

const socialLinks = [
  { icon: Facebook, url: "https://facebook.com/chemicalazadi", label: "Facebook" },
  { icon: Instagram, url: "https://instagram.com/chemicalazadi", label: "Instagram" },
  { icon: Youtube, url: "https://youtube.com/chemicalazadi", label: "YouTube" },
  { icon: Twitter, url: "https://twitter.com/chemicalazadi", label: "Twitter" },
  { icon: Linkedin, url: "https://linkedin.com/company/chemicalazadi", label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="bg-forest text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Leaf className="h-8 w-8 text-leaf-light" />
              <span className="font-display text-xl font-bold">
                Chemical Azadi Foundation
              </span>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              India's mission to reduce harmful chemical exposure and promote natural health solutions for every family.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-primary-foreground/10 hover:bg-leaf-light hover:text-forest transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.url}>
                  <Link
                    to={link.url}
                    className="text-primary-foreground/70 hover:text-leaf-light transition-colors text-sm"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Popular Solutions</h4>
            <ul className="space-y-2">
              {solutionLinks.map((link) => (
                <li key={link.url}>
                  <Link
                    to={link.url}
                    className="text-primary-foreground/70 hover:text-leaf-light transition-colors text-sm"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-leaf-light flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/70 text-sm">
                  Mehdipatnam, Hyderabad – 500028, Telangana, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-leaf-light flex-shrink-0" />
                <a
                  href="tel:+919550385880"
                  className="text-primary-foreground/70 hover:text-leaf-light transition-colors text-sm"
                >
                  +91 95503 85880
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-leaf-light flex-shrink-0" />
                <a
                  href="mailto:chemicalazadi@gmail.com"
                  className="text-primary-foreground/70 hover:text-leaf-light transition-colors text-sm"
                >
                  chemicalazadi@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
            <p>© {new Date().getFullYear()} Chemical Azadi Foundation. All rights reserved.</p>
            <p>
              Developed by{" "}
              <a
                href="https://kilaweb.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-leaf-light hover:underline font-medium"
              >
                KILAWEB TECHNOLOGY
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
