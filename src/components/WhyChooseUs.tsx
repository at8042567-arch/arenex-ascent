import { Clock, Heart, Shield, Zap } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const reasons = [
  {
    icon: Heart,
    title: "We Actually Care",
    description: "This isn't just a job for us. Every project we take on gets our full attention. Your success is our success—simple as that.",
  },
  {
    icon: Clock,
    title: "We Respect Deadlines",
    description: "We know you have plans. When we say we'll deliver by Friday, we deliver by Friday. No excuses, no delays.",
  },
  {
    icon: Shield,
    title: "No Hidden Fees",
    description: "The price we quote is the price you pay. We've been clients ourselves—we know how annoying surprise charges can be.",
  },
  {
    icon: Zap,
    title: "Fast Turnarounds",
    description: "Need something done quickly? We're known for our speed without cutting corners. Quality work, on time.",
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm tracking-wide uppercase">Why Us</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl mt-3 mb-4">
              Why Clients Keep Coming Back
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              We're not the biggest agency out there. But we might just be the most dedicated one you'll work with.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="clean-card p-6 text-center h-full">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <reason.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-bold text-lg mb-2">{reason.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
