import { Check, Zap, Star } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const plans = [
  {
    name: "Basic",
    tag: "Perfect for existing products that need a fresh boost.",
    price: "$500",
    period: "mo",
    description: "Already have a product but feel it could perform better? We'll dig deep into what's not working, improve usability, and make your product more intuitive and visually appealing — all while keeping your goals in mind.",
    features: [
      "UX audit & pain-point analysis",
      "UI and UX enhancements",
      "Usability improvement",
      "Conversion-focused design tweaks",
      "Design performance recommendations",
      "Daily communication via Slack + Loom",
      "Unlimited design requests",
    ],
    cta: "Book Now",
    ctaHref: "https://cal.com/apextech-square/15min",
    popular: false,
  },
  {
    name: "Advance",
    tag: "For building new products from scratch",
    price: "$1,200",
    period: "mo",
    description: "This plan is ideal for founders and teams starting from zero. We'll help shape your product from idea to launch with clear strategy, thoughtful user experience, and polished, developer-ready design.",
    features: [
      "Discovery and product strategy",
      "Competitor research and User Flow",
      "Complete UI and UX design",
      "Interactive prototypes",
      "Design system & component setup",
      "Developer-ready handoff",
      "Daily communication via Slack + Loom",
      "Unlimited design requests",
    ],
    cta: "Book Now",
    ctaHref: "https://cal.com/apextech-square/15min",
    popular: true,
  },
  {
    name: "Enterprise",
    tag: "Tailored for large organizations with custom requirements",
    price: "Custom",
    period: "mo",
    description: "We'll tailor a package that aligns with your scale, systems, specific needs and long-term goals. From multi-platform designs to ongoing design partnerships, this plan gives you full flexibility.",
    features: [
      "Multi-platform products",
      "Advanced product strategy roadmapping",
      "SaaS, CRM, or internal tool design",
      "Ongoing design collaboration",
      "Daily communication via Slack + Loom",
      "Unlimited design requests",
    ],
    cta: "Contact Us",
    ctaHref: "mailto:hello@apextechsquare.com",
    popular: false,
  },
];

const ApexPricing = () => {
  const ref = useScrollReveal();

  return (
    <section id="pricing" className="py-28 relative" ref={ref as React.RefObject<HTMLElement>}>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full pointer-events-none opacity-15"
        style={{ background: "radial-gradient(circle, hsl(221 83% 53% / 0.4) 0%, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <span className="section-label">All-In-One Plan</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-5 mb-4">
            Simple and{" "}
            <span className="gradient-text">Transparent Pricing</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Enjoy the full experience with no hidden fees or surprises!
            Per month — cancel any time.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-7 items-start">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`reveal delay-${[100, 200, 300][i]} relative rounded-2xl p-8 border transition-all duration-300 ${
                plan.popular
                  ? "bg-gradient-to-b from-primary/15 to-card border-primary/50 shadow-2xl shadow-primary/20 scale-[1.03]"
                  : "glass-card border-border/50 card-hover"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="gradient-bg text-white text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1.5">
                    <Star className="w-3 h-3" fill="white" />
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-bold mb-1">{plan.name}</h3>
                <p className="text-xs text-muted-foreground mb-4 italic">{plan.tag}</p>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="text-4xl font-black gradient-text">{plan.price}</span>
                  {plan.price !== "Custom" && (
                    <span className="text-muted-foreground text-sm">/{plan.period}</span>
                  )}
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{plan.description}</p>
              </div>

              <a
                href={plan.ctaHref}
                target={plan.ctaHref.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className={`w-full flex items-center justify-center gap-2 font-semibold py-3 rounded-full mb-7 transition-all ${
                  plan.popular ? "btn-gradient text-white" : "btn-outline-glow"
                }`}
              >
                {plan.popular && <Zap className="w-4 h-4" />}
                {plan.cta}
              </a>

              <p className="text-xs font-semibold text-muted-foreground mb-3 uppercase tracking-wider">
                What's Included:
              </p>
              <ul className="space-y-2.5">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-10 reveal">
          Per month / cancel any time.{" "}
          <a href="https://cal.com/apextech-square/15min" target="_blank" rel="noopener noreferrer"
            className="text-primary hover:text-accent transition-colors">
            Not sure which plan? Book a free discovery call →
          </a>
        </p>
      </div>
    </section>
  );
};

export default ApexPricing;
