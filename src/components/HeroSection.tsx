import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import arenexLogo from "@/assets/arenex-logo.png";

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center pt-20 pb-10 overflow-hidden">
      <div className="container mx-auto px-6">
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
                <Button size="lg" className="rounded-full px-8 shadow-lg shadow-primary/20" asChild>
                  <a
                    href="https://wa.me/966557677940"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Let's Talk About Your Project
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="rounded-full px-8" asChild>
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
              {/* Background blob */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-[3rem] blur-3xl" />
              
              {/* Floating service labels */}
              <div className="relative w-full max-w-md mx-auto">
                <div className="aspect-square rounded-[3rem] bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center border border-border/50 overflow-hidden">
                  <img
                    src={arenexLogo}
                    alt="Arenex TechWorks"
                    className="w-1/2 h-auto object-contain animate-float"
                  />
                </div>

                {/* Floating badges */}
                <div className="absolute -top-4 -right-4 bg-background rounded-2xl shadow-lg border border-border px-4 py-3 animate-float">
                  <p className="text-xs font-semibold text-foreground">Web Design</p>
                </div>
                <div className="absolute -bottom-4 -left-4 bg-background rounded-2xl shadow-lg border border-border px-4 py-3 animate-float" style={{ animationDelay: "1s" }}>
                  <p className="text-xs font-semibold text-foreground">Graphic Design</p>
                </div>
                <div className="absolute top-1/2 -right-8 bg-primary text-primary-foreground rounded-2xl shadow-lg px-4 py-3 animate-float" style={{ animationDelay: "2s" }}>
                  <p className="text-xs font-semibold">SEO</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Service Links Row */}
        <ScrollReveal delay={0.4}>
          <div className="grid grid-cols-3 gap-6 mt-20 pt-10 border-t border-border">
            <Link to="/services" className="group">
              <h3 className="font-display font-bold text-lg group-hover:text-primary transition-colors">Web Design</h3>
              <div className="w-8 h-0.5 bg-primary/30 mt-2 group-hover:w-16 transition-all duration-300" />
            </Link>
            <Link to="/services" className="group">
              <h3 className="font-display font-bold text-lg group-hover:text-primary transition-colors">Web Development</h3>
              <div className="w-8 h-0.5 bg-primary/30 mt-2 group-hover:w-16 transition-all duration-300" />
            </Link>
            <Link to="/services" className="group">
              <h3 className="font-display font-bold text-lg group-hover:text-primary transition-colors">Graphic Design</h3>
              <div className="w-8 h-0.5 bg-primary/30 mt-2 group-hover:w-16 transition-all duration-300" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
