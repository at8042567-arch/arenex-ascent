import { Link } from "react-router-dom";
import { Twitter, Instagram, Linkedin, ArrowUpRight } from "lucide-react";
import arenexLogo from "@/assets/arenex-logo.png";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Tools", href: "/tools" },
  { label: "Pricing", href: "/pricing" },
  { label: "Store", href: "/store" },
];

const socialLinks = [
  { icon: Twitter, href: "https://x.com/ArenexTechworks", label: "Twitter" },
  { icon: Instagram, href: "https://instagram.com/arenex_techworks", label: "Instagram" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/arenex-techworks-12a88539b", label: "LinkedIn" },
];

export const Footer = () => {
  return (
    <footer className="py-16 border-t border-[rgba(255,255,255,0.06)]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src={arenexLogo}
                alt="Arenex TechWorks"
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              A small team building great websites and designs for businesses who want to stand out online.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 group text-sm"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4 text-foreground">Connect</h4>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 hover:shadow-[0_0_10px_rgba(34,197,94,0.2)] transition-all"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-[rgba(255,255,255,0.06)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © 2026 Arenex TechWorks. Made in Pakistan 🇵🇰
          </p>
          <p className="text-muted-foreground text-xs">www.arenextechworks.com</p>
        </div>
      </div>
    </footer>
  );
};
