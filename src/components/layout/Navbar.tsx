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
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [showMoreMenu, setShowMoreMenu] = useState(false);
  const [showMobileSolutions, setShowMobileSolutions] = useState(false);
  const [showMobileMore, setShowMobileMore] = useState(false);

  useEffect(() => {
    setIsOpen(false);
    setShowMegaMenu(false);
    setShowMoreMenu(false);
    setShowMobileSolutions(false);
    setShowMobileMore(false);
  }, [location]);

  const groupedSolutions = solutionCategories.map((category) => ({
    category,
    links: solutionLinks.filter((l) => l.category === category),
  }));

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border overflow-x-hidden">
      <nav className="container mx-auto px-4">
        {/* TOP BAR */}
        <div className="flex items-center justify-between py-3">
          {/* LOGO */}
          <Link
            to="/"
            className="flex items-center gap-2 text-lg font-bold text-primary"
          >
            <Leaf className="h-6 w-6" />
            Chemical Azadi
          </Link>

          {/* MOBILE TOGGLE */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* ================= DESKTOP MENU ================= */}
          <div className="hidden lg:flex items-center gap-1 overflow-visible">
            {mainLinks.map((link) => (
              <Link
                key={link.url}
                to={link.url}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all",
                  location.pathname === link.url
                    ? "text-primary bg-primary/10"
                    : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                )}
              >
                {link.title}
              </Link>
            ))}

            {/* SOLUTIONS MEGA MENU */}
            <div
              className="relative"
              onMouseEnter={() => setShowMegaMenu(true)}
              onMouseLeave={() => setShowMegaMenu(false)}
            >
              <button className="flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium text-foreground/80 hover:text-primary hover:bg-primary/5">
                Solutions
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition-transform",
                    showMegaMenu && "rotate-180"
                  )}
                />
              </button>

              {showMegaMenu && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[900px]">
                  <div className="bg-background border border-border rounded-2xl shadow-xl p-6 grid grid-cols-5 gap-6">
                    {groupedSolutions.map((group) => (
                      <div key={group.category}>
                        <h4 className="mb-3 text-xs font-semibold uppercase tracking-wide text-primary">
                          {group.category}
                        </h4>
                        <ul className="space-y-1">
                          {group.links.map((link) => (
                            <li key={link.url}>
                              <Link
                                to={link.url}
                                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                              >
                                {link.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* MORE MENU */}
            <div
              className="relative"
              onMouseEnter={() => setShowMoreMenu(true)}
              onMouseLeave={() => setShowMoreMenu(false)}
            >
              <button className="flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium text-foreground/80 hover:text-primary hover:bg-primary/5">
                More
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition-transform",
                    showMoreMenu && "rotate-180"
                  )}
                />
              </button>

              {showMoreMenu && (
                <div className="absolute top-full right-0 pt-3 w-52">
                  <div className="bg-background border border-border rounded-xl shadow-lg py-2">
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
        </div>

        {/* ================= MOBILE MENU ================= */}
        {isOpen && (
          <div className="lg:hidden pb-4 space-y-2 w-full overflow-x-hidden">
            {mainLinks.map((link) => (
              <Link
                key={link.url}
                to={link.url}
                className="block px-4 py-3 rounded-lg font-medium text-foreground/80 hover:bg-primary/5"
              >
                {link.title}
              </Link>
            ))}

            {/* Mobile Solutions */}
            <button
              onClick={() => setShowMobileSolutions(!showMobileSolutions)}
              className="flex items-center justify-between w-full px-4 py-3 rounded-lg font-medium text-foreground/80 hover:bg-primary/5"
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
              <div className="pl-6 space-y-3">
                {groupedSolutions.map((group) => (
                  <div key={group.category}>
                    <p className="text-xs font-semibold uppercase text-primary">
                      {group.category}
                    </p>
                    {group.links.map((link) => (
                      <Link
                        key={link.url}
                        to={link.url}
                        className="block py-1 text-sm text-muted-foreground hover:text-primary"
                      >
                        {link.title}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            )}

            {/* Mobile More */}
            <button
              onClick={() => setShowMobileMore(!showMobileMore)}
              className="flex items-center justify-between w-full px-4 py-3 rounded-lg font-medium text-foreground/80 hover:bg-primary/5"
            >
              More
              <ChevronDown
                className={cn(
                  "h-4 w-4 transition-transform",
                  showMobileMore && "rotate-180"
                )}
              />
            </button>

            {showMobileMore && (
              <div className="pl-6">
                {moreLinks.map((link) => (
                  <Link
                    key={link.url}
                    to={link.url}
                    className="block py-2 text-sm text-muted-foreground hover:text-primary"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            )}

            <Link
              to="/shop"
              className="block px-4 py-3 rounded-lg font-semibold text-primary bg-primary/10"
            >
              Shop Now
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
