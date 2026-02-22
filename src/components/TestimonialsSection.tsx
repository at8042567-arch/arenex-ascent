import { Star, Quote } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const testimonials = [
  {
    name: "Ahmed K.",
    role: "Restaurant Owner, Riyadh",
    text: "I was skeptical about hiring an online agency, honestly. But these guys proved me wrong. My restaurant's website looks amazing and actually brings in customers now. Worth every riyal.",
    rating: 5,
  },
  {
    name: "Sara M.",
    role: "Startup Founder",
    text: "Fast, professional, and they actually listen. I've worked with bigger agencies before—this was a much better experience. They treated my small project like it mattered.",
    rating: 5,
  },
  {
    name: "Omar H.",
    role: "E-commerce Business",
    text: "Needed a logo and brand kit in 3 days. They delivered in 2. Quality was solid and the price was fair. Already planning my next project with them.",
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-24 relative">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm tracking-wide uppercase">Testimonials</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl mt-3 mb-4">
              What Clients Say
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Real feedback from real clients. No fake reviews, no paid testimonials.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="glass-card-hover p-8 h-full flex flex-col">
                <Quote className="w-8 h-8 text-primary/30 mb-4" />

                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                  "{testimonial.text}"
                </p>

                <div className="border-t border-[rgba(255,255,255,0.06)] pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
