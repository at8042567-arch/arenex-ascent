import { AboutSection } from "@/components/AboutSection";

const About = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 text-center relative">
          <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl mb-6">
            About <span className="text-gradient">Us</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Meet the team behind Arenex TechWorks
          </p>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />
    </div>
  );
};

export default About;
