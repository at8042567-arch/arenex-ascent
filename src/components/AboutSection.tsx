import { Mail, MessageCircle, Code2, Palette, Brain, Video, Shield, Eye, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import founderImage from "@/assets/founder-image.png";

const teamRoles = [
  { icon: Code2, label: "Web Engineering" },
  { icon: Palette, label: "Creative Design" },
  { icon: Brain, label: "AI Solutions" },
  { icon: Video, label: "Motion Graphics" },
  { icon: Shield, label: "Cybersecurity" },
];

export const AboutSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        {/* CEO Profile */}
        <div className="glass-card p-8 md:p-12 rounded-2xl mb-16 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="w-32 h-32 rounded-full overflow-hidden bg-gradient-to-br from-primary to-accent flex-shrink-0">
              <img 
                src={founderImage} 
                alt="Abdulrehman Tariq" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="text-center md:text-left">
              <h3 className="font-display font-bold text-2xl md:text-3xl mb-2">
                Abdulrehman Tariq
              </h3>
              <p className="text-primary font-medium mb-4">Founder & Lead Developer</p>
              <p className="text-muted-foreground leading-relaxed max-w-xl">
                Bridging the gap between complex technology and business growth through 
                high-performance code and AI. Passionate about creating digital solutions 
                that empower businesses to thrive in the modern era.
              </p>
            </div>
          </div>
        </div>

        {/* Our Team */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-6">
            <Users className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Our Team</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl mb-4">
            The Powerhouse Behind <span className="text-gradient">Arenex</span>
          </h2>
          <p className="text-muted-foreground mb-12">
            A specialized team of <span className="text-primary font-semibold">5 Elite Creators</span>
          </p>

          <div className="flex flex-wrap justify-center gap-6 max-w-3xl mx-auto">
            {teamRoles.map((role, index) => (
              <div
                key={index}
                className="glass-card-hover p-6 rounded-2xl flex flex-col items-center gap-3 w-32"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/15 to-secondary/15 flex items-center justify-center">
                  <role.icon className="w-7 h-7 text-primary" />
                </div>
                <span className="text-xs text-muted-foreground text-center">{role.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Our Vision */}
        <div className="glass-card p-8 md:p-12 rounded-2xl mb-16 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-6">
            <Eye className="w-4 h-4 text-accent" />
            <span className="text-sm text-muted-foreground">Our Vision</span>
          </div>
          <h3 className="font-display font-bold text-2xl md:text-3xl mb-4">
            Innovating for Tomorrow
          </h3>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Empowering businesses with the tools of 2026. We believe in creating digital 
            experiences that not only meet today's needs but anticipate tomorrow's challenges.
          </p>
        </div>

        {/* Contact Actions */}
        <div className="text-center">
          <h3 className="font-display font-bold text-2xl mb-8">Get In Touch</h3>
          
          <div className="flex flex-col items-center gap-4">
            <a
              href="mailto:Arenextechworks@gmail.com"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>Arenextechworks@gmail.com</span>
            </a>

            <Button size="lg" className="px-8" asChild>
              <a
                href="https://wa.me/966557677940"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
