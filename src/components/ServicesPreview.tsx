import { Link } from "react-router-dom";
import { ArrowRight, Code2, Palette, Package } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Your website should load fast, look great on phones, and actually help you get customers. That's what we build.",
    link: "/services",
    color: "primary"
  },
  {
    icon: Palette,
    title: "Graphic Design",
    description: "Logos, brand kits, social media graphics—the visual stuff that makes people remember you. Professional quality, fair prices.",
    link: "/services",
    color: "secondary"
  },
  {
    icon: Package,
    title: "Digital Products",
    description: "Templates, asset packs, and ebooks to level up your game. Ready-made resources that save you time.",
    link: "/store",
    color: "accent"
  }
];

export const ServicesPreview = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl mb-4 animate-fade-in-up">
            What We Can Do For You
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto animate-fade-in-up delay-100">
            We keep things simple. Three core services, done really well.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-card-hover p-8 group animate-fade-in-up"
              style={{ animationDelay: `${(index + 2) * 0.1}s`, animationFillMode: "forwards", opacity: 0 }}
            >
              <div className={`w-14 h-14 rounded-xl bg-${service.color}/10 flex items-center justify-center mb-5 group-hover:bg-${service.color}/20 transition-colors`}>
                <service.icon className={`w-7 h-7 text-${service.color}`} />
              </div>
              <h3 className="font-display font-semibold text-xl mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                {service.description}
              </p>
              <Link 
                to={service.link} 
                className={`inline-flex items-center gap-2 text-${service.color} text-sm font-medium group-hover:gap-3 transition-all`}
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
