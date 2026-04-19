import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const faqs = [
  {
    q: "How quickly can you start?",
    a: "Once we've had our kick-off call, we can get started on the same day. Book your 15 min discovery call and we'll get you up and running and started on your project.",
  },
  {
    q: "What if I don't like the designs?",
    a: "We're pretty easy going and can correct course quickly. We'll work with you and your team to make sure that we'll get to the right solution as quickly as possible.",
  },
  {
    q: "Do you offer refunds?",
    a: "We believe in earning your trust before your money. That's why we don't charge anything upfront. If you're not happy with the outcome, you don't pay — simple as that.",
  },
  {
    q: "How many revisions do you offer?",
    a: "We offer unlimited revisions — seriously. Your satisfaction is our top priority, and we're committed to refining the design until it feels just right. From major layout changes to the smallest UI tweaks, we iterate closely with you at every step. No extra charges. No revision limits.",
  },
  {
    q: "Are there any types of projects you don't take on?",
    a: "Yes, we're selective about who we work with. We avoid projects that involve interest-based finance, adult or objectifying content, alcohol, drugs, or similar consumption-based services, apps promoting profanity or casual dating, or content that conflicts with our values. We focus on work that aligns with our principles and purpose.",
  },
];

const ApexFAQ = () => {
  const ref = useScrollReveal();

  return (
    <section id="faq" className="py-28 relative" ref={ref as React.RefObject<HTMLElement>}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <span className="section-label">FAQs</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-5 mb-4">
            Still Have{" "}
            <span className="gradient-text">Questions?</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            We help small to medium businesses and startups make a splash by
            providing both a user-centered and business-oriented vision.
          </p>
        </div>

        <div className="reveal delay-100">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="glass-card border border-border/50 rounded-2xl px-6 overflow-hidden data-[state=open]:border-primary/40 transition-all duration-200"
              >
                <AccordionTrigger className="text-left font-semibold py-5 hover:no-underline hover:text-primary transition-colors text-sm md:text-base">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5 text-sm">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12 reveal">
          <p className="text-muted-foreground text-sm mb-5">
            Your design, elevated instantly.
          </p>
          <a
            href="https://cal.com/apextechsquare/15min?user=apextechsquare"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-gradient text-white font-semibold px-7 py-3 rounded-full"
          >
            Book a Free Discovery Call
          </a>
        </div>
      </div>
    </section>
  );
};

export default ApexFAQ;
