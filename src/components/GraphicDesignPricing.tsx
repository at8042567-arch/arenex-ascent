import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "The Startup Kit",
    price: "$49",
    period: "one-time",
    description: "Perfect for new businesses",
    features: [
      "Modern Logo (2 Concepts)",
      "Business Card Design",
      "Social Media Setup",
      "High-Res Files",
      "2 Days Delivery",
    ],
    highlighted: false,
  },
  {
    name: "Brand Identity Pro",
    price: "$149",
    period: "one-time",
    description: "Complete brand package",
    features: [
      "Everything in Startup Kit",
      "Full Brand Color/Typography",
      "Social Kit (5 Posts)",
      "Source Files (AI/PSD)",
      "Unlimited Revisions",
    ],
    highlighted: true,
  },
  {
    name: "Monthly Design Partner",
    price: "$299",
    period: "/month",
    description: "Ongoing design support",
    features: [
      "Unlimited Design Requests",
      "Thumbnails & Ads",
      "Dedicated Senior Designer",
      "24h Turnaround",
      "Priority Support",
    ],
    highlighted: false,
  },
];

export const GraphicDesignPricing = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-secondary" />
            <span className="text-sm text-muted-foreground">Graphic Design</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl mb-4">
            Design <span className="text-gradient">Pricing Plans</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional design services tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
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

      <style>{`
        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 20px hsl(var(--primary) / 0.3), 0 0 40px hsl(var(--primary) / 0.1);
          }
          50% {
            box-shadow: 0 0 30px hsl(var(--primary) / 0.5), 0 0 60px hsl(var(--primary) / 0.2);
          }
        }
      `}</style>
    </section>
  );
};
