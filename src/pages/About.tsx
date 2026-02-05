import { Mail, MessageCircle, Code2, Palette, Brain, Video, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
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
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 text-center relative">
          <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl mb-6 animate-fade-in-up">
            The People Behind the Work
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-in-up delay-100">
            We're a small team that takes big pride in our work. Here's our story.
          </p>
        </div>
      </section>

      {/* Founder Story - More personal and authentic */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="glass-card p-8 md:p-12 rounded-2xl max-w-4xl mx-auto animate-fade-in-up delay-200">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              {/* Photo */}
              <div className="w-36 h-36 rounded-full overflow-hidden bg-gradient-to-br from-primary to-secondary flex-shrink-0">
                <img 
                  src={founderImage} 
                  alt="Abdulrehman Tariq" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Story */}
              <div className="text-center md:text-left">
                <h2 className="font-display font-bold text-2xl md:text-3xl mb-2">
                  Abdulrehman Tariq
                </h2>
                <p className="text-primary font-medium mb-4">Founder</p>
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
        </div>
      </section>

      {/* Team Skills */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-6 animate-fade-in-up">
              <Users className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Our Expertise</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl mb-4 animate-fade-in-up delay-100">
              A Team of 5 Specialists
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto animate-fade-in-up delay-200">
              Small enough to care, skilled enough to deliver. Each team member brings something unique to the table.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 max-w-3xl mx-auto">
            {teamSkills.map((skill, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-2xl flex flex-col items-center gap-3 w-32 hover:border-primary/50 transition-all group animate-fade-in-up"
                style={{ animationDelay: `${(index + 3) * 0.1}s`, animationFillMode: "forwards", opacity: 0 }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <skill.icon className="w-7 h-7 text-primary" />
                </div>
                <span className="text-xs text-muted-foreground text-center">{skill.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values - More genuine */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="glass-card p-8 md:p-12 rounded-2xl text-center max-w-3xl mx-auto animate-fade-in-up">
            <h2 className="font-display font-bold text-2xl md:text-3xl mb-6">
              What We Believe In
            </h2>
            <div className="grid sm:grid-cols-3 gap-6 text-left">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Honesty First</h3>
                <p className="text-sm text-muted-foreground">
                  If we can't do something, we'll tell you. If something will cost more, we'll explain why before starting.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Quality Matters</h3>
                <p className="text-sm text-muted-foreground">
                  We don't rush to hit deadlines if it means shipping sloppy work. Every project gets our best effort.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Relationships, Not Transactions</h3>
                <p className="text-sm text-muted-foreground">
                  Many of our clients have worked with us multiple times. That repeat trust means everything to us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display font-bold text-2xl mb-8 animate-fade-in-up">Want to Say Hello?</h2>
          
          <div className="flex flex-col items-center gap-4 animate-fade-in-up delay-100">
            <a
              href="mailto:Arenextechworks@gmail.com"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>Arenextechworks@gmail.com</span>
            </a>

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
                Chat on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
