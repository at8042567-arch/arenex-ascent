import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Code2, Palette, Globe, Smartphone, ShoppingCart, Zap, Image, Film, MessageCircle, ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

const webServices = [
  {
    icon: Globe,
    title: "Business Websites",
    description: "A professional home for your business online. Clean design, fast loading, and built to convert visitors into customers.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "Most people browse on their phones. Every site we build looks and works perfectly on any screen size.",
  },
  {
    icon: ShoppingCart,
    title: "Online Stores",
    description: "Want to sell products online? We set up your store with secure payments, inventory management, and everything you need.",
  },
  {
    icon: Zap,
    title: "Landing Pages",
    description: "Got a product launch or campaign? We build focused landing pages designed to get clicks and signups.",
  },
];

const designServices = [
  {
    icon: Image,
    title: "Logo & Branding",
    description: "Your logo is often the first thing people see. We design memorable marks that capture what your business is about.",
  },
  {
    icon: Palette,
    title: "Social Media Graphics",
    description: "Stand out in the scroll. We create eye-catching posts, stories, and ads that match your brand.",
  },
  {
    icon: Film,
    title: "Motion Graphics",
    description: "Animated logos, video intros, and reels that grab attention. Perfect for social media content.",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="py-20 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-primary/8 rounded-full blur-[150px] pointer-events-none" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <ScrollReveal>
            <span className="text-primary font-semibold text-sm tracking-wide uppercase">Our Services</span>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl mt-3 mb-6">
              What We Do
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We focus on two things and do them really well: building great websites and creating beautiful designs.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Web Development */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Code2 className="w-6 h-6 text-primary" />
              </div>
              <h2 className="font-display font-bold text-2xl sm:text-3xl">Web Development</h2>
            </div>
            <p className="text-muted-foreground max-w-2xl mb-10">
              Your website should work for you, not against you. We build sites that load fast,
              look professional, and actually help you get more business.
            </p>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {webServices.map((service, index) => (
              <ScrollReveal key={index} delay={index * 0.08}>
                <div className="glass-card-hover p-6 h-full">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                    <service.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Graphic Design */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Palette className="w-6 h-6 text-primary" />
              </div>
              <h2 className="font-display font-bold text-2xl sm:text-3xl">Graphic Design</h2>
            </div>
            <p className="text-muted-foreground max-w-2xl mb-10">
              Good design isn't just about looking pretty—it's about making your business memorable.
              We create visuals that people actually remember.
            </p>
          </ScrollReveal>

          <div className="grid sm:grid-cols-3 gap-6">
            {designServices.map((service, index) => (
              <ScrollReveal key={index} delay={index * 0.08}>
                <div className="glass-card-hover p-6 h-full">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                    <service.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="glass-card p-10 md:p-16 text-center max-w-3xl mx-auto glow-green-sm">
              <h2 className="font-display font-bold text-2xl md:text-3xl mb-4">
                Got a Project in Mind?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Let's talk about what you need. No commitments, just a friendly conversation.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="px-8" asChild>
                  <a href="https://wa.me/966557677940" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Start a Conversation
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="px-8" asChild>
                  <Link to="/pricing">
                    See Our Pricing
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Services;
