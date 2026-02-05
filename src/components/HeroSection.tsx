import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/15 via-transparent to-transparent opacity-60" />
      </div>

      {/* Floating Orbs - more subtle */}
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-float" />
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-secondary/15 rounded-full blur-[80px] animate-float delay-300" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto">
          {/* Main Heading - Natural, conversational */}
          <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl leading-tight mb-6 animate-fade-in-up opacity-0" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
            We Build Websites That{" "}
            <span className="text-gradient">Actually Work</span>{" "}
            for Your Business
          </h1>

          {/* Subheading - Real talk, not marketing fluff */}
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-up opacity-0 leading-relaxed" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
            No fancy jargon. No empty promises. Just clean websites, stunning designs, 
            and honest work from a small team that genuinely cares about your success.
          </p>

          {/* Trust indicator - simple and real */}
          <p className="text-sm text-muted-foreground mb-10 animate-fade-in-up opacity-0" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
            Trusted by <span className="text-primary font-medium">50+ businesses</span> across Saudi Arabia & beyond
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up opacity-0" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
            <Button variant="glow" size="lg" className="group" asChild>
              <a
                href="https://wa.me/966557677940"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Let's Talk About Your Project
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/services">
                See What We Do
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};
