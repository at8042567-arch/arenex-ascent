import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ahmed K.",
    role: "Restaurant Owner, Riyadh",
    text: "I was skeptical about hiring an online agency, honestly. But these guys proved me wrong. My restaurant's website looks amazing and actually brings in customers now. Worth every riyal.",
    rating: 5
  },
  {
    name: "Sara M.",
    role: "Startup Founder",
    text: "Fast, professional, and they actually listen. I've worked with bigger agencies before—this was a much better experience. They treated my small project like it mattered.",
    rating: 5
  },
  {
    name: "Omar H.",
    role: "E-commerce Business",
    text: "Needed a logo and brand kit in 3 days. They delivered in 2. Quality was solid and the price was fair. Already planning my next project with them.",
    rating: 5
  }
];

export const TestimonialsSection = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl mb-4 animate-fade-in-up">
            What Clients Say
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto animate-fade-in-up delay-100">
            Real feedback from real clients. No fake reviews, no paid testimonials.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-card p-6 rounded-xl animate-fade-in-up"
              style={{ animationDelay: `${(index + 2) * 0.1}s`, animationFillMode: "forwards", opacity: 0 }}
            >
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              <div className="border-t border-border/50 pt-4">
                <p className="font-medium text-foreground">{testimonial.name}</p>
                <p className="text-xs text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
