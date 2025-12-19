import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, Star, Zap, Crown } from "lucide-react";

const plans = [
  {
    name: "Starter",
    icon: Star,
    price: "299",
    description: "Perfect for small businesses and startups",
    features: [
      "Single Page Website",
      "Mobile Responsive Design",
      "Basic SEO Setup",
      "Contact Form Integration",
      "3 Revisions",
      "1 Week Delivery",
      "30 Days Support",
    ],
    popular: false,
    color: "primary",
  },
  {
    name: "Professional",
    icon: Zap,
    price: "599",
    description: "Ideal for growing businesses",
    features: [
      "Up to 5 Pages Website",
      "Custom UI/UX Design",
      "Advanced SEO Optimization",
      "Social Media Integration",
      "Logo & Branding Package",
      "Unlimited Revisions",
      "2 Weeks Delivery",
      "90 Days Support",
      "Analytics Dashboard",
    ],
    popular: true,
    color: "secondary",
  },
  {
    name: "Enterprise",
    icon: Crown,
    price: "1299",
    description: "Complete solution for large businesses",
    features: [
      "Unlimited Pages",
      "Custom Web Application",
      "E-commerce Integration",
      "Complete Brand Identity",
      "Premium SEO & Marketing",
      "Priority Support",
      "Custom Delivery Timeline",
      "1 Year Support",
      "Dedicated Project Manager",
      "Monthly Maintenance",
    ],
    popular: false,
    color: "accent",
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

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`glass-card-hover p-8 relative ${
                  plan.popular ? "ring-2 ring-secondary" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-display font-semibold">
                    Most Popular
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className={`w-16 h-16 rounded-2xl bg-${plan.color}/10 flex items-center justify-center mx-auto mb-4`}>
                    <plan.icon className={`w-8 h-8 text-${plan.color}`} />
                  </div>
                  <h3 className="font-display font-bold text-2xl mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm">{plan.description}</p>
                </div>

                <div className="text-center mb-8">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-muted-foreground text-lg">$</span>
                    <span className="font-display font-bold text-5xl text-gradient">{plan.price}</span>
                  </div>
                  <p className="text-muted-foreground text-sm mt-2">One-time payment</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full bg-${plan.color}/20 flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        <Check className={`w-3 h-3 text-${plan.color}`} />
                      </div>
                      <span className="text-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.popular ? "glow" : "outline"}
                  className="w-full"
                  size="lg"
                >
                  Get Started
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

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
              <Button variant="glow" size="lg">
                Contact Us
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
