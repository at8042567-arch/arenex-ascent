import { ShoppingBag, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import productAssetsPack from "@/assets/product-assets-pack.png";
import productMotionBundle from "@/assets/product-motion-bundle.png";
import productKaliEbook from "@/assets/product-kali-ebook.jpg";
import productWebdevEbook from "@/assets/product-webdev-ebook.jpg";

const products = [
  {
    name: "2500+ Design Assets Pack",
    price: "$4.99",
    image: productAssetsPack,
    description: "Icons, templates, mockups, and more. Everything you need for your design projects."
  },
  {
    name: "500+ Motion Reels Bundle",
    price: "$1.99",
    image: productMotionBundle,
    description: "Ready-to-use motion graphics and templates for your social media content."
  },
  {
    name: "Kali Linux Mastery E-book",
    price: "$9.99",
    image: productKaliEbook,
    description: "Learn cybersecurity fundamentals with practical Kali Linux tutorials."
  },
  {
    name: "Web Development E-book",
    price: "$11.99",
    image: productWebdevEbook,
    description: "From HTML to deployment—a complete guide to building modern websites."
  }
];

const Store = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 text-center relative">
          <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl mb-6 animate-fade-in-up">
            Digital Resources
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-in-up delay-100">
            Useful stuff we've put together. Assets, templates, and guides to help you level up.
          </p>
        </div>
      </section>
      
      {/* Products */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-3 mb-10 justify-center animate-fade-in-up">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <ShoppingBag className="w-5 h-5 text-primary" />
            </div>
            <h2 className="font-display font-bold text-2xl">Available Products</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {products.map((product, index) => (
              <div
                key={index}
                className="glass-card rounded-xl overflow-hidden group animate-fade-in-up"
                style={{ animationDelay: `${(index + 2) * 0.1}s`, animationFillMode: "forwards", opacity: 0 }}
              >
                {/* Image */}
                <div className="aspect-square overflow-hidden bg-muted/20">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Info */}
                <div className="p-5">
                  <h3 className="font-semibold text-foreground mb-2 line-clamp-2">{product.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{product.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="font-display font-bold text-xl text-primary">{product.price}</span>
                    <Button size="sm" asChild>
                      <a
                        href="https://wa.me/966557677940"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Buy Now
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="glass-card p-10 text-center max-w-2xl mx-auto animate-fade-in-up">
            <h2 className="font-display font-bold text-2xl mb-4">Looking for Something Specific?</h2>
            <p className="text-muted-foreground mb-6">
              Don't see what you need? Let us know—we might have it or can create it for you.
            </p>
            <Button
              variant="glow"
              className="bg-green-600 hover:bg-green-700 text-white border-0"
              asChild
            >
              <a href="https://wa.me/966557677940" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                Ask Us
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Store;
