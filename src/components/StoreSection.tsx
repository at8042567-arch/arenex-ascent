import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import productAssetsPack from "@/assets/product-assets-pack.png";
import productMotionBundle from "@/assets/product-motion-bundle.png";
import productKaliEbook from "@/assets/product-kali-ebook.jpg";
import productWebdevEbook from "@/assets/product-webdev-ebook.jpg";

const products = [
  { 
    id: 1, 
    label: "Graphic Designing 2500+ Assets Pack", 
    price: "$4.99",
    image: productAssetsPack
  },
  { 
    id: 2, 
    label: "500+ Motion Reels Bundle", 
    price: "$1.99",
    image: productMotionBundle
  },
  { 
    id: 3, 
    label: "Kali Linux Mastery E-book", 
    price: "$9.99",
    image: productKaliEbook
  },
  { 
    id: 4, 
    label: "Web Development E-book", 
    price: "$11.99",
    image: productWebdevEbook
  },
];

const WHATSAPP_LINK = "https://wa.me/966557677940";

export const StoreSection = () => {
  const handleBuyNow = () => {
    window.open(WHATSAPP_LINK, "_blank");
  };

  return (
    <section id="store" className="py-16 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl mb-4">
            Premium <span className="text-gradient">Assets</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            High-quality digital resources to accelerate your projects
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {products.map((product) => (
            <div key={product.id} className="glass-card overflow-hidden group">
              {/* Product Image */}
              <div className="aspect-square bg-muted/30 relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Card Content */}
              <div className="p-5">
                <h3 className="font-display font-semibold text-sm sm:text-base mb-2 line-clamp-2 min-h-[2.5rem]">
                  {product.label}
                </h3>
                <p className="text-primary font-bold text-lg mb-3">{product.price}</p>
                <Button 
                  variant="glow" 
                  onClick={handleBuyNow}
                  className="w-full"
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Buy Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
