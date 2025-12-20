import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import arenexLogo from "@/assets/arenex-logo.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Tools", href: "/tools" },
  { label: "Store", href: "/store" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "glass-card py-3" : "py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img 
            src={arenexLogo} 
            alt="Arenex TechWorks" 
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`transition-colors font-medium ${
                isActive(link.href)
                  ? "text-primary"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Button variant="glow" size="sm" asChild>
            <Link to="/pricing">Start Project</Link>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-card mt-2 mx-4 p-6 rounded-2xl animate-fade-in-up">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`py-2 font-medium ${
                  isActive(link.href)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button variant="glow" className="mt-2" asChild>
              <Link to="/pricing" onClick={() => setIsMobileMenuOpen(false)}>
                Start Project
              </Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};
