import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ToolsSection } from "@/components/ToolsSection";
import { StoreSection } from "@/components/StoreSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <ToolsSection />
        <StoreSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
