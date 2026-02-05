import { Link } from "react-router-dom";
import { FileText, Link2, Image, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";

const tools = [
  {
    icon: FileText,
    title: "Invoice Generator",
    description: "Create professional invoices in seconds. Add your logo, customize items, and download as PDF.",
    link: "/tools/invoice"
  },
  {
    icon: Link2,
    title: "Bio Link Generator",
    description: "One link for all your socials. Perfect for Instagram and TikTok bios.",
    link: "/tools/bio-link"
  },
  {
    icon: Image,
    title: "AI Logo Generator",
    description: "Get logo ideas powered by AI. Great for brainstorming or quick mockups.",
    link: "/tools/logo-generator"
  }
];

const Tools = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 text-center relative">
          <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl mb-6 animate-fade-in-up">
            Free Tools
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-in-up delay-100">
            Useful tools we built for ourselves—and now you can use them too. No signup required.
          </p>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-3 mb-10 justify-center animate-fade-in-up">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Wrench className="w-5 h-5 text-primary" />
            </div>
            <h2 className="font-display font-bold text-2xl">Available Tools</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {tools.map((tool, index) => (
              <Link
                key={index}
                to={tool.link}
                className="glass-card-hover p-8 rounded-xl group animate-fade-in-up"
                style={{ animationDelay: `${(index + 2) * 0.1}s`, animationFillMode: "forwards", opacity: 0 }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <tool.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-xl mb-3">{tool.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{tool.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* More Coming */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="glass-card p-10 text-center max-w-2xl mx-auto animate-fade-in-up">
            <h2 className="font-display font-bold text-2xl mb-4">More Tools Coming Soon</h2>
            <p className="text-muted-foreground mb-6">
              We're always building new things. Have an idea for a tool? Let us know.
            </p>
            <Button variant="outline" asChild>
              <a href="https://wa.me/966557677940" target="_blank" rel="noopener noreferrer">
                Suggest a Tool
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tools;
