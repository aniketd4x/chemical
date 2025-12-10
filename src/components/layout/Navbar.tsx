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
    setShowMobileSolutions(false);
    setShowMobileMore(false);
  }, [location]);

  const groupedSolutions = solutionCategories.map((category) => ({
    category,
    links: solutionLinks.filter((l) => l.category === category),
  }));

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b">
      <nav className="container mx-auto px-4">
        {/* Top */}
        <div className="flex items-center justify-between py-3">
          <Link to="/" className="flex items-center gap-2 font-bold text-primary">
            <Leaf className="h-6 w-6" />
            Chemical Azadi
          </Link>

          <button
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>

          {/* Desktop */}
          <div className="hidden lg:flex gap-2">
            {mainLinks.map((l) => (
              <Link key={l.url} to={l.url} className="px-3 py-2">
                {l.title}
              </Link>
            ))}

            {/* Solutions desktop */}
            <div
              onMouseEnter={() => setShowMegaMenu(true)}
              onMouseLeave={() => setShowMegaMenu(false)}
              className="relative"
            >
              <button className="flex items-center gap-1 px-3 py-2">
                Solutions <ChevronDown />
              </button>

              {showMegaMenu && (
                <div className="absolute top-full bg-white shadow-lg p-4 grid grid-cols-5 gap-4">
                  {groupedSolutions.map((g) => (
                    <div key={g.category}>
                      <p className="font-semibold text-sm">{g.category}</p>
                      {g.links.map((l) => (
                        <Link key={l.url} to={l.url} className="block text-sm">
                          {l.title}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* More desktop */}
            <div
              onMouseEnter={() => setShowMoreMenu(true)}
              onMouseLeave={() => setShowMoreMenu(false)}
              className="relative"
            >
              <button className="flex items-center gap-1 px-3 py-2">
                More <ChevronDown />
              </button>

              {showMoreMenu && (
                <div className="absolute top-full bg-white shadow-md">
                  {moreLinks.map((l) => (
                    <Link key={l.url} to={l.url} className="block px-4 py-2">
                      {l.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Button size="sm">Shop</Button>
          </div>
        </div>

        {/* ✅ MOBILE MENU – DESKTOP STYLE */}
        {isOpen && (
          <div className="lg:hidden pb-4 space-y-2">
            {mainLinks.map((l) => (
              <Link key={l.url} to={l.url} className="block px-4 py-3">
                {l.title}
              </Link>
            ))}

            {/* Solutions mobile (same as desktop) */}
            <button
              onClick={() => setShowMobileSolutions(!showMobileSolutions)}
              className="flex justify-between w-full px-4 py-3"
            >
              Solutions <ChevronDown className={showMobileSolutions ? "rotate-180" : ""} />
            </button>

            {showMobileSolutions && (
              <div className="pl-6 space-y-3">
                {groupedSolutions.map((g) => (
                  <div key={g.category}>
                    <p className="font-semibold text-sm">{g.category}</p>
                    {g.links.map((l) => (
                      <Link key={l.url} to={l.url} className="block py-1 text-sm">
                        {l.title}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            )}

            {/* More mobile (same as desktop) */}
            <button
              onClick={() => setShowMobileMore(!showMobileMore)}
              className="flex justify-between w-full px-4 py-3"
            >
              More <ChevronDown className={showMobileMore ? "rotate-180" : ""} />
            </button>

            {showMobileMore && (
              <div className="pl-6">
                {moreLinks.map((l) => (
                  <Link key={l.url} to={l.url} className="block py-2 text-sm">
                    {l.title}
                  </Link>
                ))}
              </div>
            )}

            <Link to="/shop" className="block px-4 py-3 font-semibold">
              Shop Now
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
