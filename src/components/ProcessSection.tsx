import { MessageSquare, Palette, Code, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "We Chat",
    description: "Tell us what you need. No forms, no bots—just a real conversation on WhatsApp or email."
  },
  {
    number: "02",
    icon: Palette,
    title: "We Design",
    description: "We sketch out ideas and show you mockups. You give feedback. We tweak until you love it."
  },
  {
    number: "03",
    icon: Code,
    title: "We Build",
    description: "Our devs bring the design to life. Clean code, fast loading, mobile-friendly—the whole package."
  },
  {
    number: "04",
    icon: Rocket,
    title: "We Launch",
    description: "Your site goes live. We stick around to make sure everything runs smoothly."
  }
];

export const ProcessSection = () => {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl mb-4 animate-fade-in-up">
            How We Work Together
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto animate-fade-in-up delay-100">
            No complicated processes. No weeks of waiting. Here's how we get things done.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative animate-fade-in-up"
              style={{ animationDelay: `${(index + 2) * 0.1}s`, animationFillMode: "forwards", opacity: 0 }}
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-1/2 w-full h-[2px] bg-gradient-to-r from-primary/50 to-transparent" />
              )}
              
              <div className="relative z-10 text-center">
                <div className="w-20 h-20 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <span className="text-primary/60 text-sm font-mono mb-2 block">{step.number}</span>
                <h3 className="font-display font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
