import { Link } from "react-router-dom";
import { FileText, Link2, Image, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";

const tools = [
  {
    icon: FileText,
    title: "Invoice Generator",
    description: "Create professional invoices in seconds. Add your logo, customize items, and download as PDF.",
    link: "/tools/invoice",
  },
  {
    icon: Link2,
    title: "Bio Link Generator",
    description: "One link for all your socials. Perfect for Instagram and TikTok bios.",
    link: "/tools/bio-link",
  },
  {
    icon: Image,
    title: "AI Logo Generator",
    description: "Get logo ideas powered by AI. Great for brainstorming or quick mockups.",
    link: "/tools/logo-generator",
  },
];

const Tools = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="py-20 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-secondary/10 rounded-full blur-[180px] pointer-events-none" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <ScrollReveal>
            <span className="text-primary font-semibold text-sm tracking-wide uppercase">Free Tools</span>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl mt-3 mb-6">
              Free Tools
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Useful tools we built for ourselves—and now you can use them too. No signup required.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-10 justify-center">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-secondary/15 to-primary/15 flex items-center justify-center">
                <Wrench className="w-5 h-5 text-secondary" />
              </div>
              <h2 className="font-display font-bold text-2xl">Available Tools</h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {tools.map((tool, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <Link
                  to={tool.link}
                  className="glass-card-hover p-8 block group h-full"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/15 to-secondary/15 flex items-center justify-center mb-5 group-hover:shadow-[0_0_20px_rgba(124,58,237,0.2)] transition-all">
                    <tool.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-xl mb-3">{tool.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{tool.description}</p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* More Coming */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="glass-card p-10 text-center max-w-2xl mx-auto glow-purple-sm">
              <h2 className="font-display font-bold text-2xl mb-4">More Tools Coming Soon</h2>
              <p className="text-muted-foreground mb-6">
                We're always building new things. Have an idea for a tool? Let us know.
              </p>
              <Button variant="outline" className="rounded-full px-8" asChild>
                <a href="https://wa.me/966557677940" target="_blank" rel="noopener noreferrer">
                  Suggest a Tool
                </a>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Tools;
