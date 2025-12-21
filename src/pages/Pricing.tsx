import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";
import { GraphicDesignPricing } from "@/components/GraphicDesignPricing";

const webDevPlans = [
  {
    name: "Starter",
    price: "$299",
    period: "one-time",
    description: "Perfect for small businesses",
    features: [
      "Single Page Website",
      "Mobile Responsive Design",
      "Basic SEO Setup",
      "Contact Form Integration",
      "3 Revisions",
    ],
  },
  {
    name: "Professional",
    price: "$599",
    period: "one-time",
    description: "Ideal for growing businesses",
    features: [
      "Up to 5 Pages Website",
      "Custom UI/UX Design",
      "Advanced SEO Optimization",
      "Social Media Integration",
      "Unlimited Revisions",
    ],
  },
  {
    name: "Enterprise",
    price: "$1299",
    period: "one-time",
    description: "Complete solution for large businesses",
    features: [
      "Unlimited Pages",
      "Custom Web Application",
      "E-commerce Integration",
      "Priority Support",
      "1 Year Support",
    ],
  },
];

const Pricing = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 text-center relative">
          <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl mb-6">
            Pricing <span className="text-gradient">Plans</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Transparent pricing for every business size. Choose the plan that fits your needs.
          </p>
        </div>
      </section>

      {/* Web Development Pricing */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Web Development</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl mb-4">
              Development <span className="text-gradient">Pricing Plans</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Professional web development services tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {webDevPlans.map((plan, index) => (
              <div
                key={index}
                className="glass-card p-8 rounded-2xl relative transition-all duration-500 hover:border-primary/30"
              >
                <div className="text-center mb-8">
                  <h3 className="font-display font-bold text-xl mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="font-display font-bold text-4xl text-primary">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground text-sm">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant="outline"
                  className="w-full"
                  asChild
                >
                  <a
                    href="https://wa.me/966557677940"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Started
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Graphic Design Pricing */}
      <GraphicDesignPricing />

      {/* FAQ or CTA */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="glass-card p-12 md:p-16 text-center max-w-4xl mx-auto">
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Have specific requirements? We can create a custom package tailored to your unique needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="glow" size="lg" asChild>
                <a
                  href="https://wa.me/966557677940"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contact Us
                </a>
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

export default Pricing;
