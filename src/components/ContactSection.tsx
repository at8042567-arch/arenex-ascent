import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, Clock } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export const ContactSection = () => {
  return (
    <section className="py-24 relative">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="glass-card p-10 md:p-16 max-w-3xl mx-auto text-center glow-purple-sm">
            <span className="text-primary font-semibold text-sm tracking-wide uppercase">Contact</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl mt-3 mb-4">
              Ready to Start?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Drop us a message. No pressure, no sales pitch—just a friendly chat about what you're looking to build.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                <span>Usually reply within 2 hours</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent" />
                <span>Arenextechworks@gmail.com</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="px-8" asChild>
                <a
                  href="https://wa.me/966557677940"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Message Us on WhatsApp
                </a>
              </Button>
              <Button variant="outline" size="lg" className="px-8" asChild>
                <a href="mailto:Arenextechworks@gmail.com">
                  <Mail className="w-5 h-5 mr-2" />
                  Send an Email
                </a>
              </Button>
            </div>

            <p className="text-xs text-muted-foreground mt-6">
              We respect your time. No spam, ever.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
