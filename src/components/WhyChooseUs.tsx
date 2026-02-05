import { Clock, Heart, Shield, Zap } from "lucide-react";

const reasons = [
  {
    icon: Heart,
    title: "We Actually Care",
    description: "This isn't just a job for us. Every project we take on gets our full attention. Your success is our success—simple as that."
  },
  {
    icon: Clock,
    title: "We Respect Deadlines",
    description: "We know you have plans. When we say we'll deliver by Friday, we deliver by Friday. No excuses, no delays."
  },
  {
    icon: Shield,
    title: "No Hidden Fees",
    description: "The price we quote is the price you pay. We've been clients ourselves—we know how annoying surprise charges can be."
  },
  {
    icon: Zap,
    title: "Fast Turnarounds",
    description: "Need something done quickly? We're known for our speed without cutting corners. Quality work, on time."
  }
];

export const WhyChooseUs = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl mb-4 animate-fade-in-up">
            Why Clients Keep Coming Back
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto animate-fade-in-up delay-100">
            We're not the biggest agency out there. But we might just be the most dedicated one you'll work with.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="glass-card p-6 rounded-xl text-center animate-fade-in-up"
              style={{ animationDelay: `${(index + 2) * 0.1}s`, animationFillMode: "forwards", opacity: 0 }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <reason.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">{reason.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
