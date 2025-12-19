import { Button } from "@/components/ui/button";
import { Package, Lock } from "lucide-react";

const products = [
  { id: 1, label: "UI Kit Pro" },
  { id: 2, label: "Icon Pack" },
  { id: 3, label: "Template Bundle" },
  { id: 4, label: "Motion Graphics" },
];

export const StoreSection = () => {
  return (
    <section id="store" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl mb-4">
            Premium <span className="text-gradient">Assets</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            High-quality digital resources to accelerate your projects
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {products.map((product) => (
            <div key={product.id} className="glass-card overflow-hidden group">
              {/* Skeleton Placeholder */}
              <div className="aspect-square bg-muted/30 relative flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
                <div className="text-center z-10">
                  <Package className="w-12 h-12 text-muted-foreground/50 mx-auto mb-3" />
                  <p className="text-muted-foreground text-sm font-medium">Product Coming Soon</p>
                </div>
                
                {/* Animated pulse effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -skew-x-12 animate-pulse" />
              </div>

              {/* Card Content */}
              <div className="p-5">
                <h3 className="font-display font-semibold text-lg mb-3">{product.label}</h3>
                <Button disabled variant="outline" className="w-full opacity-50 cursor-not-allowed">
                  <Lock className="w-4 h-4 mr-2" />
                  Buy Now
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Coming Soon Notice */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground text-sm">
            Our digital store is launching soon. Stay tuned for premium templates, UI kits, and more!
          </p>
        </div>
      </div>
    </section>
  );
};
