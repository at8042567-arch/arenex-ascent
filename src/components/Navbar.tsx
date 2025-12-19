import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "glass-card py-3" : "py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-display font-bold text-primary-foreground text-lg">
            A
          </div>
          <span className="font-display font-bold text-xl tracking-wider text-foreground group-hover:text-primary transition-colors">
            ARENEX
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollTo("services")} className="text-muted-foreground hover:text-primary transition-colors font-medium">
            Services
          </button>
          <button onClick={() => scrollTo("tools")} className="text-muted-foreground hover:text-primary transition-colors font-medium">
            AI Tools
          </button>
          <button onClick={() => scrollTo("store")} className="text-muted-foreground hover:text-primary transition-colors font-medium">
            Store
          </button>
          <Button variant="glow" size="sm" onClick={() => scrollTo("hero")}>
            Start Project
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
            <button onClick={() => scrollTo("services")} className="text-muted-foreground hover:text-primary transition-colors font-medium text-left py-2">
              Services
            </button>
            <button onClick={() => scrollTo("tools")} className="text-muted-foreground hover:text-primary transition-colors font-medium text-left py-2">
              AI Tools
            </button>
            <button onClick={() => scrollTo("store")} className="text-muted-foreground hover:text-primary transition-colors font-medium text-left py-2">
              Store
            </button>
            <Button variant="glow" className="mt-2">
              Start Project
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};
