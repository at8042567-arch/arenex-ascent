import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, Clock } from "lucide-react";

export const ContactSection = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 relative">
        <div className="glass-card p-8 md:p-12 rounded-2xl max-w-3xl mx-auto text-center animate-fade-in-up">
          <h2 className="font-display font-bold text-3xl sm:text-4xl mb-4">
            Ready to Start?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Drop us a message. No pressure, no sales pitch—just a friendly chat about what you're looking to build.
          </p>

          {/* Quick Info */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              <span>Usually reply within 2 hours</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary" />
              <span>Arenextechworks@gmail.com</span>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="glow"
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white border-0 shadow-lg shadow-green-600/30"
              asChild
            >
              <a
                href="https://wa.me/966557677940"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Message Us on WhatsApp
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
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
      </div>
    </section>
  );
};
