import { ShoppingBag, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";
import productAssetsPack from "@/assets/product-assets-pack.png";
import productMotionBundle from "@/assets/product-motion-bundle.png";
import productKaliEbook from "@/assets/product-kali-ebook.jpg";
import productWebdevEbook from "@/assets/product-webdev-ebook.jpg";

const products = [
  {
    name: "2500+ Design Assets Pack",
    price: "$4.99",
    image: productAssetsPack,
    description: "Icons, templates, mockups, and more. Everything you need for your design projects.",
  },
  {
    name: "500+ Motion Reels Bundle",
    price: "$1.99",
    image: productMotionBundle,
    description: "Ready-to-use motion graphics and templates for your social media content.",
  },
  {
    name: "Kali Linux Mastery E-book",
    price: "$9.99",
    image: productKaliEbook,
    description: "Learn cybersecurity fundamentals with practical Kali Linux tutorials.",
  },
  {
    name: "Web Development E-book",
    price: "$11.99",
    image: productWebdevEbook,
    description: "From HTML to deployment—a complete guide to building modern websites.",
  },
];

const Store = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="py-20 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-accent/10 rounded-full blur-[180px] pointer-events-none" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <ScrollReveal>
            <span className="text-primary font-semibold text-sm tracking-wide uppercase">Store</span>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl mt-3 mb-6">
              Digital Resources
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Useful stuff we've put together. Assets, templates, and guides to help you level up.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Products */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-10 justify-center">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent/15 to-primary/15 flex items-center justify-center">
                <ShoppingBag className="w-5 h-5 text-accent" />
              </div>
              <h2 className="font-display font-bold text-2xl">Available Products</h2>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {products.map((product, index) => (
              <ScrollReveal key={index} delay={index * 0.08}>
                <div className="glass-card-hover overflow-hidden group h-full">
                  <div className="aspect-square overflow-hidden bg-muted">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-foreground mb-2 line-clamp-2">{product.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="font-display font-extrabold text-xl text-gradient">{product.price}</span>
                      <Button size="sm" asChild>
                        <a href="https://wa.me/966557677940" target="_blank" rel="noopener noreferrer">
                          Buy Now
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="glass-card p-10 text-center max-w-2xl mx-auto glow-purple-sm">
              <h2 className="font-display font-bold text-2xl mb-4">Looking for Something Specific?</h2>
              <p className="text-muted-foreground mb-6">
                Don't see what you need? Let us know—we might have it or can create it for you.
              </p>
              <Button className="px-8" asChild>
                <a href="https://wa.me/966557677940" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Ask Us
                </a>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Store;
