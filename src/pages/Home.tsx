import { HeroSection } from "@/components/HeroSection";
import { ServicesPreview } from "@/components/ServicesPreview";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { ProcessSection } from "@/components/ProcessSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQSection } from "@/components/FAQSection";
import { ContactSection } from "@/components/ContactSection";

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesPreview />
      <WhyChooseUs />
      <ProcessSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
    </div>
  );
};

export default Home;
