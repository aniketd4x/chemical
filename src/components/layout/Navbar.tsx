import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { solutionLinks, solutionCategories } from "@/data/solutionLinks";
import { cn } from "@/lib/utils";

const mainLinks = [
  { title: "Home", url: "/" },
  { title: "Foundation", url: "/foundation" },
  { title: "Awareness", url: "/awareness" },
];

const moreLinks = [
  { title: "Benefits", url: "/benefits" },
  { title: "Categories", url: "/categories" },
  { title: "Gallery", url: "/gallery" },
  { title: "Videos", url: "/videos" },
  { title: "Blogs", url: "/blogs" },
  { title: "Events", url: "/events" },
  { title: "Testimonials", url: "/testimonials" },
  { title: "Contact", url: "/contact" },
];

export function Navbar() {
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [showMoreMenu, setShowMoreMenu] = useState(false);
  const [showMobileSolutions, setShowMobileSolutions] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setShowMegaMenu(false);
    setShowMoreMenu(false);
    setShowMobileSolutions(false);
  }, [location]);

  const groupedSolutions = solutionCategories.map((category) => ({
    category,
    links: solutionLinks.filter((l) => l.category === category),
  }));

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/95 border-b border-border/50 transition-all duration-300",
        isScrolled ? "py-2 shadow-sm" : "py-3"
      )}
    >
      <nav className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between">
          {/* ✅ LOGO (FULL NAME EVERYWHERE) */}
          <Link
            to="/"
            className="flex items-center gap-2 text-lg font-bold text-primary"
          >
            <Leaf className="h-6 w-6" />
            <span className="text-base sm:text-lg">
              Chemical Azadi
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            {mainLinks.map((link) => (
              <Link
                key={link.url}
                to={link.url}
                className={cn(
                  "px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                  location.pathname === link.url
                    ? "text-primary bg-primary/10"
                    : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                )}
              >
                {link.title}
              </Link>
            ))}

            {/* Solutions Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => setShowMegaMenu(true)}
              onMouseLeave={() => setShowMegaMenu(false)}
            >
              <button className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium text-foreground/80 hover:text-primary hover:bg-primary/5">
                Solutions
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition-transform",
                    showMegaMenu && "rotate-180"
                  )}
                />
              </button>

              {showMegaMenu && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[720px]">
                  <div className="bg-background border border-border rounded-xl shadow-lg p-5 grid grid-cols-5 gap-4 animate-fade-up">
                    {groupedSolutions.map((group) => (
                      <div key={group.category}>
                        <h4 className="text-xs font-semibold text-primary uppercase mb-2">
                          {group.category}
                        </h4>
                        {group.links.map((link) => (
                          <Link
                            key={link.url}
                            to={link.url}
                            className="block text-xs text-muted-foreground hover:text-primary py-0.5"
                          >
                            {link.title}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* More Menu */}
            <div
              className="relative"
              onMouseEnter={() => setShowMoreMenu(true)}
              onMouseLeave={() => setShowMoreMenu(false)}
            >
              <button className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium text-foreground/80 hover:text-primary hover:bg-primary/5">
                More
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition-transform",
                    showMoreMenu && "rotate-180"
                  )}
                />
              </button>

              {showMoreMenu && (
                <div className="absolute top-full right-0 pt-2 w-48">
                  <div className="bg-background border border-border rounded-xl shadow-lg py-2 animate-fade-up">
                    {moreLinks.map((link) => (
                      <Link
                        key={link.url}
                        to={link.url}
                        className={cn(
                          "block px-4 py-2 text-sm transition-colors",
                          location.pathname === link.url
                            ? "text-primary bg-primary/10"
                            : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                        )}
                      >
                        {link.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link to="/shop">
              <Button variant="cta" size="sm" className="ml-2">
                Shop Now
              </Button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 animate-fade-up">
            <div className="flex flex-col gap-1">
              {mainLinks.map((link) => (
                <Link
                  key={link.url}
                  to={link.url}
                  className="px-4 py-3 rounded-lg font-medium text-foreground/80 hover:bg-primary/5"
                >
                  {link.title}
                </Link>
              ))}

              {/* Mobile Solutions */}
              <button
                onClick={() => setShowMobileSolutions(!showMobileSolutions)}
                className="flex items-center justify-between px-4 py-3 rounded-lg font-medium text-foreground/80 hover:bg-primary/5"
              >
                Solutions
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition-transform",
                    showMobileSolutions && "rotate-180"
                  )}
                />
              </button>

              {showMobileSolutions && (
                <div className="ml-4 border-l border-border pl-3">
                  {groupedSolutions.map((group) => (
                    <div key={group.category} className="mb-2">
                      <p className="text-xs uppercase font-semibold text-primary mt-2">
                        {group.category}
                      </p>
                      {group.links.map((link) => (
                        <Link
                          key={link.url}
                          to={link.url}
                          className="block py-2 text-sm text-muted-foreground hover:text-primary"
                        >
                          {link.title}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}

              {moreLinks.map((link) => (
                <Link
                  key={link.url}
                  to={link.url}
                  className="px-4 py-3 rounded-lg font-medium text-foreground/80 hover:bg-primary/5"
                >
                  {link.title}
                </Link>
              ))}

              <Link
                to="/shop"
                className="px-4 py-3 rounded-lg font-medium text-primary bg-primary/10"
              >
                Shop Now
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
