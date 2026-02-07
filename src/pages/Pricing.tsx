import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, Code2, Palette, MessageCircle } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

const webDevPlans = [
  {
    name: "Starter",
    price: "$299",
    period: "one-time",
    description: "Perfect for getting started",
    features: ["Single Page Website", "Mobile Responsive", "Basic SEO Setup", "Contact Form", "3 Revisions"],
  },
  {
    name: "Professional",
    price: "$599",
    period: "one-time",
    description: "Most popular choice",
    popular: true,
    features: ["Up to 5 Pages", "Custom Design", "Advanced SEO", "Social Integration", "Unlimited Revisions"],
  },
  {
    name: "Enterprise",
    price: "$1299",
    period: "one-time",
    description: "Full business solution",
    features: ["Unlimited Pages", "Custom Features", "E-commerce Ready", "Priority Support", "1 Year Maintenance"],
  },
];

const designPlans = [
  {
    name: "Startup Kit",
    price: "$49",
    period: "one-time",
    description: "Get your brand started",
    features: ["Logo Design (2 Concepts)", "Business Card", "Social Media Setup", "High-Res Files", "2 Day Delivery"],
  },
  {
    name: "Brand Identity",
    price: "$149",
    period: "one-time",
    description: "Complete brand package",
    popular: true,
    features: ["Everything in Startup", "Color & Typography Guide", "Social Kit (5 Posts)", "Source Files (AI/PSD)", "Unlimited Revisions"],
  },
  {
    name: "Monthly Partner",
    price: "$299",
    period: "/month",
    description: "Ongoing design support",
    features: ["Unlimited Requests", "Thumbnails & Ads", "Dedicated Designer", "24h Turnaround", "Priority Support"],
  },
];

const PricingCard = ({ plan, index }: { plan: { name: string; price: string; period: string; description: string; features: string[]; popular?: boolean }; index: number }) => (
  <ScrollReveal delay={index * 0.1}>
    <div className={`clean-card p-8 h-full relative ${plan.popular ? "border-primary/50 shadow-lg shadow-primary/5" : ""}`}>
      {plan.popular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-semibold px-4 py-1 rounded-full">
          Popular
        </span>
      )}
      <div className="text-center mb-6">
        <h3 className="font-display font-bold text-xl mb-1">{plan.name}</h3>
        <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
        <div className="flex items-baseline justify-center gap-1">
          <span className="font-display font-extrabold text-4xl text-primary">{plan.price}</span>
          <span className="text-sm text-muted-foreground">{plan.period}</span>
        </div>
      </div>

      <ul className="space-y-3 mb-8">
        {plan.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3 text-sm">
            <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Check className="w-3 h-3 text-primary" />
            </div>
            <span className="text-foreground">{feature}</span>
          </li>
        ))}
      </ul>

      <Button variant={plan.popular ? "default" : "outline"} className="w-full rounded-full" asChild>
        <a href="https://wa.me/966557677940" target="_blank" rel="noopener noreferrer">
          Get Started
        </a>
      </Button>
    </div>
  </ScrollReveal>
);

const Pricing = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <ScrollReveal>
            <span className="text-primary font-semibold text-sm tracking-wide uppercase">Pricing</span>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl mt-3 mb-6">
              Simple, Honest Pricing
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              No hidden fees, no surprise charges. Pick what works for you, and let's get started.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Web Development */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-10 justify-center">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Code2 className="w-5 h-5 text-primary" />
              </div>
              <h2 className="font-display font-bold text-2xl">Web Development</h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {webDevPlans.map((plan, index) => (
              <PricingCard key={index} plan={plan} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Graphic Design */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-10 justify-center">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Palette className="w-5 h-5 text-primary" />
              </div>
              <h2 className="font-display font-bold text-2xl">Graphic Design</h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {designPlans.map((plan, index) => (
              <PricingCard key={index} plan={plan} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Custom Work CTA */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="clean-card p-10 md:p-14 text-center max-w-3xl mx-auto">
              <h2 className="font-display font-bold text-2xl md:text-3xl mb-4">
                Need Something Custom?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                These packages don't fit? No problem. Tell us what you need and we'll put together a quote.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  size="lg"
                  className="rounded-full px-8 bg-green-600 hover:bg-green-700 text-white"
                  asChild
                >
                  <a href="https://wa.me/966557677940" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Let's Talk
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="rounded-full px-8" asChild>
                  <Link to="/tools">Check Out Free Tools</Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
