import { Mail, MessageCircle, Code2, Palette, Brain, Video, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";
import founderImage from "@/assets/founder-image.png";

const teamSkills = [
  { icon: Code2, label: "Web Development" },
  { icon: Palette, label: "Design" },
  { icon: Brain, label: "AI & Automation" },
  { icon: Video, label: "Motion Graphics" },
  { icon: Shield, label: "Cybersecurity" },
];

const About = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="py-20 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-primary/10 rounded-full blur-[180px] pointer-events-none" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <ScrollReveal>
            <span className="text-primary font-semibold text-sm tracking-wide uppercase">About Us</span>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl mt-3 mb-6">
              The People Behind the Work
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We're a small team that takes big pride in our work. Here's our story.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="glass-card p-8 md:p-12 max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="w-36 h-36 rounded-full overflow-hidden bg-gradient-to-br from-primary/30 to-accent/20 flex-shrink-0 border-2 border-primary/20">
                  <img
                    src={founderImage}
                    alt="Abdulrehman Tariq"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="text-center md:text-left">
                  <h2 className="font-display font-bold text-2xl md:text-3xl mb-2">
                    Abdulrehman Tariq
                  </h2>
                  <p className="text-primary font-semibold mb-4">Founder</p>
                  <div className="text-muted-foreground leading-relaxed space-y-4">
                    <p>
                      Started building websites in my bedroom back in 2019. What began as a hobby quickly
                      turned into something bigger when local businesses started asking for help with their
                      online presence.
                    </p>
                    <p>
                      Fast forward to today, and Arenex TechWorks has grown into a small but mighty team.
                      We've helped restaurants launch delivery sites, startups build their first apps, and
                      established businesses refresh their digital image.
                    </p>
                    <p>
                      Our philosophy is simple: do honest work, charge fair prices, and treat every
                      client's project like it's our own. That's it. No fancy mission statements needed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Team Skills */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-6">
                <Users className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">Our Expertise</span>
              </div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl mb-4">
                A Team of 5 Specialists
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Small enough to care, skilled enough to deliver. Each team member brings something unique to the table.
              </p>
            </div>
          </ScrollReveal>

          <div className="flex flex-wrap justify-center gap-6 max-w-3xl mx-auto">
            {teamSkills.map((skill, index) => (
              <ScrollReveal key={index} delay={index * 0.08}>
                <div className="glass-card-hover p-6 flex flex-col items-center gap-3 w-32">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/15 to-secondary/15 flex items-center justify-center">
                    <skill.icon className="w-7 h-7 text-primary" />
                  </div>
                  <span className="text-xs text-muted-foreground text-center">{skill.label}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="glass-card p-8 md:p-12 text-center max-w-3xl mx-auto">
              <h2 className="font-display font-bold text-2xl md:text-3xl mb-6">
                What We Believe In
              </h2>
              <div className="grid sm:grid-cols-3 gap-6 text-left">
                <div>
                  <h3 className="font-bold text-foreground mb-2">Honesty First</h3>
                  <p className="text-sm text-muted-foreground">
                    If we can't do something, we'll tell you. If something will cost more, we'll explain why before starting.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">Quality Matters</h3>
                  <p className="text-sm text-muted-foreground">
                    We don't rush to hit deadlines if it means shipping sloppy work. Every project gets our best effort.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">Relationships, Not Transactions</h3>
                  <p className="text-sm text-muted-foreground">
                    Many of our clients have worked with us multiple times. That repeat trust means everything to us.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="font-display font-bold text-2xl mb-8">Want to Say Hello?</h2>
            <div className="flex flex-col items-center gap-4">
              <a
                href="mailto:Arenextechworks@gmail.com"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>Arenextechworks@gmail.com</span>
              </a>
              <Button size="lg" className="px-8" asChild>
                <a href="https://wa.me/966557677940" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Chat on WhatsApp
                </a>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default About;
