import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How much does a website cost?",
    answer: "Depends on what you need. A simple one-pager starts around $299. Bigger projects with custom features go up from there. We'll always give you a clear quote before starting—no surprises."
  },
  {
    question: "How long will my project take?",
    answer: "Most websites take 1-2 weeks. Logo and branding work is usually done in 2-4 days. Rush jobs? We can do those too, just let us know upfront."
  },
  {
    question: "Do you offer revisions?",
    answer: "Absolutely. We want you happy with the result. Most packages include multiple revision rounds, and we're pretty flexible even beyond that."
  },
  {
    question: "Can you help with hosting and domain?",
    answer: "Yes! We can set everything up so you don't have to worry about the technical stuff. We'll walk you through your options and recommend what makes sense for your budget."
  },
  {
    question: "What if I'm not happy with the design?",
    answer: "That rarely happens because we involve you throughout the process. But if something's off, we'll keep working on it. Your satisfaction matters more to us than finishing fast."
  },
  {
    question: "Do you work with clients outside Saudi Arabia?",
    answer: "Definitely. We've worked with clients across the Gulf, Pakistan, Europe, and beyond. WhatsApp and Zoom make distance a non-issue."
  }
];

export const FAQSection = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl mb-4 animate-fade-in-up">
            Got Questions?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto animate-fade-in-up delay-100">
            Here are the things people usually ask us. If yours isn't here, just message us.
          </p>
        </div>

        <div className="max-w-2xl mx-auto animate-fade-in-up delay-200">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="glass-card rounded-xl px-6 border-0"
              >
                <AccordionTrigger className="text-left hover:no-underline py-5">
                  <span className="font-medium">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
