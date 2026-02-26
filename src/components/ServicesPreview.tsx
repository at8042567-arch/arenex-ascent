import { Link } from "react-router-dom";
import { ArrowRight, Code2, Palette, Package } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Your website should load fast, look great on phones, and actually help you get customers. That's what we build.",
    link: "/services",
    gradient: "from-primary to-secondary",
  },
  {
    icon: Palette,
    title: "Graphic Design",
    description: "Logos, brand kits, social media graphics—the visual stuff that makes people remember you. Professional quality, fair prices.",
    link: "/services",
    gradient: "from-secondary to-accent",
  },
  {
    icon: Package,
    title: "Digital Products",
    description: "Templates, asset packs, and ebooks to level up your game. Ready-made resources that save you time.",
    link: "/store",
    gradient: "from-accent to-primary",
  },
];

export const ServicesPreview = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm tracking-wide uppercase">Our Services</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl mt-3 mb-4">
              What We Can Do For You
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              We keep things simple. Three core services, done really well.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <Link
                to={service.link}
                className="glass-card-hover p-8 block group h-full"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} bg-opacity-10 flex items-center justify-center mb-5 group-hover:shadow-[0_0_20px_rgba(124,58,237,0.25)] transition-all duration-300`}>
                  <service.icon className="w-7 h-7 text-foreground" />
                </div>
                <h3 className="font-display font-bold text-xl mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-2 text-primary text-sm font-semibold group-hover:gap-3 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
