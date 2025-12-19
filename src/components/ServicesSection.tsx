import { Code2, Palette, Play } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description: "High-performance custom websites built with cutting-edge technologies. Scalable, secure, and blazingly fast.",
    large: true,
  },
  {
    icon: Palette,
    title: "Graphic Design",
    description: "Stunning visuals that capture your brand essence and leave lasting impressions.",
    large: false,
  },
  {
    icon: Play,
    title: "Video Editing",
    description: "Cinematic video production that tells your story with impact and emotion.",
    large: false,
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We deliver excellence across every digital touchpoint
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Large Card - Web Development */}
          <div className="md:row-span-2 glass-card-hover p-8 flex flex-col justify-between min-h-[400px] group">
            <div>
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <Code2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display font-bold text-2xl mb-4">{services[0].title}</h3>
              <p className="text-muted-foreground leading-relaxed">{services[0].description}</p>
            </div>
            <div className="mt-8 flex items-center gap-2 text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
              <span>Learn More</span>
              <span className="group-hover:translate-x-2 transition-transform">→</span>
            </div>
          </div>

          {/* Small Card - Graphic Design */}
          <div className="glass-card-hover p-8 group">
            <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-5 group-hover:bg-secondary/20 transition-colors">
              <Palette className="w-7 h-7 text-secondary" />
            </div>
            <h3 className="font-display font-bold text-xl mb-3">{services[1].title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{services[1].description}</p>
          </div>

          {/* Small Card - Video Editing */}
          <div className="glass-card-hover p-8 group">
            <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
              <Play className="w-7 h-7 text-accent" />
            </div>
            <h3 className="font-display font-bold text-xl mb-3">{services[2].title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{services[2].description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
