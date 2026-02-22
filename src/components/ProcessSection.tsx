import { MessageSquare, Palette, Code, Rocket } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "We Chat",
    description: "Tell us what you need. No forms, no bots—just a real conversation on WhatsApp or email.",
  },
  {
    number: "02",
    icon: Palette,
    title: "We Design",
    description: "We sketch out ideas and show you mockups. You give feedback. We tweak until you love it.",
  },
  {
    number: "03",
    icon: Code,
    title: "We Build",
    description: "Our devs bring the design to life. Clean code, fast loading, mobile-friendly—the whole package.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "We Launch",
    description: "Your site goes live. We stick around to make sure everything runs smoothly.",
  },
];

export const ProcessSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm tracking-wide uppercase">Our Process</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl mt-3 mb-4">
              How We Work Together
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              No complicated processes. No weeks of waiting. Here's how we get things done.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <ScrollReveal key={index} delay={index * 0.12}>
              <div className="relative text-center">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-full h-[1px] bg-gradient-to-r from-primary/30 to-transparent" />
                )}

                <div className="relative z-10">
                  <div className="w-20 h-20 rounded-2xl glass-card border-primary/20 flex items-center justify-center mx-auto mb-4 group hover:shadow-[0_0_20px_rgba(34,197,94,0.2)] transition-shadow duration-300">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <span className="text-primary/50 text-sm font-mono mb-2 block">{step.number}</span>
                  <h3 className="font-display font-bold text-lg mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
