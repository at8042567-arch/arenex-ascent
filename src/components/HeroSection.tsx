import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import arenexLogo from "@/assets/arenex-logo.png";

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center pt-20 pb-10 overflow-hidden relative">
      {/* Background orbs */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content - Left */}
          <div>
            <ScrollReveal>
              <span className="inline-block text-primary font-semibold text-sm tracking-wide uppercase mb-4">
                Web Design & Development Agency
              </span>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl leading-[1.1] mb-6 text-foreground">
                We Build Websites That{" "}
                <span className="text-gradient">Actually Work</span>{" "}
                for Your Business
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
                No fancy jargon. No empty promises. Just clean websites, stunning designs,
                and honest work from a small team that genuinely cares about your success.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <p className="text-sm text-muted-foreground mb-8">
                Trusted by <span className="text-primary font-semibold">50+ businesses</span> across Saudi Arabia & beyond
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <Button size="lg" className="px-8" asChild>
                  <a
                    href="https://wa.me/966557677940"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Let's Talk About Your Project
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="px-8" asChild>
                  <Link to="/services">
                    See What We Do
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>

          {/* Visual - Right */}
          <ScrollReveal direction="right" delay={0.2}>
            <div className="relative flex items-center justify-center">
              {/* Background glow blob */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/10 rounded-[3rem] blur-3xl" />
              
              {/* Floating orbs */}
              <div className="absolute -top-8 right-12 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary opacity-60 animate-float blur-sm" />
              <div className="absolute bottom-12 -left-6 w-10 h-10 rounded-full bg-gradient-to-br from-accent to-primary opacity-50 animate-float" style={{ animationDelay: "2s" }} />
              <div className="absolute top-1/3 -right-4 w-8 h-8 rounded-full bg-secondary/40 animate-float" style={{ animationDelay: "3s" }} />

              {/* Floating logo */}
              <div className="relative w-full max-w-md mx-auto">
                <div className="aspect-square rounded-[3rem] glass-card flex items-center justify-center overflow-hidden">
                  <img
                    src={arenexLogo}
                    alt="Arenex TechWorks"
                    className="w-1/2 h-auto object-contain animate-float"
                  />
                </div>

                {/* Floating badges */}
                <div className="absolute -top-4 -right-4 glass-card px-4 py-3 animate-float glow-purple-sm">
                  <p className="text-xs font-semibold text-foreground">Web Design</p>
                </div>
                <div className="absolute -bottom-4 -left-4 glass-card px-4 py-3 animate-float" style={{ animationDelay: "1s" }}>
                  <p className="text-xs font-semibold text-foreground">Graphic Design</p>
                </div>
                <div className="absolute top-1/2 -right-8 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-full shadow-[0_0_25px_rgba(124,58,237,0.4)] px-4 py-3 animate-float" style={{ animationDelay: "2s" }}>
                  <p className="text-xs font-semibold">SEO</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Service Links Row */}
        <ScrollReveal delay={0.4}>
          <div className="grid grid-cols-3 gap-6 mt-20 pt-10 border-t border-[rgba(255,255,255,0.06)]">
            <Link to="/services" className="group">
              <h3 className="font-display font-bold text-lg group-hover:text-primary transition-colors">Web Design</h3>
              <div className="w-8 h-0.5 bg-gradient-to-r from-primary to-secondary mt-2 group-hover:w-16 transition-all duration-300" />
            </Link>
            <Link to="/services" className="group">
              <h3 className="font-display font-bold text-lg group-hover:text-primary transition-colors">Web Development</h3>
              <div className="w-8 h-0.5 bg-gradient-to-r from-secondary to-accent mt-2 group-hover:w-16 transition-all duration-300" />
            </Link>
            <Link to="/services" className="group">
              <h3 className="font-display font-bold text-lg group-hover:text-primary transition-colors">Graphic Design</h3>
              <div className="w-8 h-0.5 bg-gradient-to-r from-accent to-primary mt-2 group-hover:w-16 transition-all duration-300" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
