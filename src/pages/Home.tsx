import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Code2, Palette } from "lucide-react";
import arenexLogo from "@/assets/arenex-logo.png";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent opacity-50" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30" />
        </div>

        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-[100px] animate-float delay-300" />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-8 animate-fade-in-up opacity-0" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Next-Gen Digital Solutions</span>
            </div>

            {/* Heading */}
            <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-6 animate-fade-in-up opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
              Building the{" "}
              <span className="text-gradient-animated text-glow">Future</span>{" "}
              of Digital Business
            </h1>

            {/* Subtext */}
            <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-in-up opacity-0" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
              <span className="text-primary font-medium">Web Engineering</span>
              {" • "}
              <span className="text-secondary font-medium">Graphic Design</span>
              {" • "}
              <span className="text-accent font-medium">Digital Assets</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up opacity-0" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
              <Button variant="glow" size="lg" className="group" asChild>
                <Link to="/services">
                  Start Project
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/tools">Explore Tools</Link>
              </Button>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
              <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Services Preview */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl mb-4">
              Our <span className="text-gradient">Services</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We deliver excellence across every digital touchpoint
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Web Development */}
            <div className="glass-card-hover p-8 md:p-10 group">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <Code2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display font-bold text-2xl mb-4">Web Development</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                High-performance custom websites built with cutting-edge technologies. Scalable, secure, and blazingly fast.
              </p>
              <Link to="/services" className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Graphic Design */}
            <div className="glass-card-hover p-8 md:p-10 group">
              <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                <Palette className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-display font-bold text-2xl mb-4">Graphic Design</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Stunning visuals that capture your brand essence and leave lasting impressions on your audience.
              </p>
              <Link to="/services" className="inline-flex items-center gap-2 text-secondary font-medium group-hover:gap-3 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/pricing">View Pricing Plans</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
