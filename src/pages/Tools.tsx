import { ToolsSection } from "@/components/ToolsSection";

const Tools = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 text-center relative">
          <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl mb-6 animate-fade-in-up">
            Free <span className="text-gradient">Tools</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-in-up delay-100">
            Powerful AI-powered tools to boost your productivity
          </p>
        </div>
      </section>
      
      <div className="animate-fade-in-up delay-200">
        <ToolsSection />
      </div>
    </div>
  );
};

export default Tools;
