import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Code2, Palette, Check, ArrowRight } from "lucide-react";
import { GraphicDesignPricing } from "@/components/GraphicDesignPricing";
import { AboutSection } from "@/components/AboutSection";

const webDevFeatures = [
  "Custom Website Development",
  "E-commerce Solutions",
  "Web Application Development",
  "API Integration",
  "Performance Optimization",
  "SEO-Friendly Architecture",
];

const graphicDesignFeatures = [
  "Brand Identity Design",
  "Logo Design & Branding",
  "UI/UX Design",
  "Social Media Graphics",
  "Marketing Materials",
  "Print Design",
];

const Services = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 text-center relative">
          <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl mb-6">
            Our <span className="text-gradient">Services</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Professional digital solutions tailored to elevate your business
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="space-y-24">
            {/* Web Development */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="glass-card p-10 lg:p-14">
                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-8">
                  <Code2 className="w-10 h-10 text-primary" />
                </div>
                <h2 className="font-display font-bold text-3xl md:text-4xl mb-6">Web Development</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  We build high-performance, scalable websites and web applications using the latest technologies. 
                  From simple landing pages to complex e-commerce platforms, we deliver solutions that drive results.
                </p>
                <ul className="space-y-4 mb-8">
                  {webDevFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="glow" asChild>
                  <Link to="/pricing">
                    View Pricing <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
              <div className="hidden lg:flex items-center justify-center">
                <div className="relative">
                  <div className="w-80 h-80 rounded-3xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <Code2 className="w-32 h-32 text-primary/50" />
                  </div>
                  <div className="absolute -top-4 -right-4 w-24 h-24 rounded-2xl bg-primary/30 blur-xl" />
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-2xl bg-secondary/20 blur-xl" />
                </div>
              </div>
            </div>

            {/* Graphic Design */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="hidden lg:flex items-center justify-center lg:order-first">
                <div className="relative">
                  <div className="w-80 h-80 rounded-3xl bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center">
                    <Palette className="w-32 h-32 text-secondary/50" />
                  </div>
                  <div className="absolute -top-4 -left-4 w-24 h-24 rounded-2xl bg-secondary/30 blur-xl" />
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl bg-primary/20 blur-xl" />
                </div>
              </div>
              <div className="glass-card p-10 lg:p-14">
                <div className="w-20 h-20 rounded-2xl bg-secondary/10 flex items-center justify-center mb-8">
                  <Palette className="w-10 h-10 text-secondary" />
                </div>
                <h2 className="font-display font-bold text-3xl md:text-4xl mb-6">Graphic Design</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  Create stunning visual identities that resonate with your audience. Our design team crafts 
                  memorable brand experiences that set you apart from the competition.
                </p>
                <ul className="space-y-4 mb-8">
                  {graphicDesignFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center">
                        <Check className="w-4 h-4 text-secondary" />
                      </div>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="glow" asChild>
                  <a href="#design-pricing">
                    View Pricing <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Graphic Design Pricing */}
      <div id="design-pricing">
        <GraphicDesignPricing />
      </div>

      {/* About & Contact Section */}
      <AboutSection />

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="glass-card p-12 md:p-16 text-center max-w-4xl mx-auto">
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Let's work together to bring your vision to life. Check out our pricing plans or get in touch.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="glow" size="lg" asChild>
                <Link to="/pricing">View Pricing</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/tools">Try Free Tools</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
