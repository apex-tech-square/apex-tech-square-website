import { DollarSign, RefreshCw, TrendingUp, Zap, Sliders, CreditCard, Bell, Heart } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const benefits = [
  {
    icon: DollarSign,
    title: "Affordability",
    description: "Access high-quality design services at a fraction of traditional costs.",
  },
  {
    icon: RefreshCw,
    title: "Consistency",
    description: "Ensure a consistent brand identity with regular design output.",
  },
  {
    icon: TrendingUp,
    title: "Scalability",
    description: "Scale your design needs up or down as your business grows — no long-term lock-ins.",
  },
  {
    icon: Zap,
    title: "Speed",
    description: "Get quicker turnarounds on design projects without sacrificing quality at a way better price on your wallet.",
  },
  {
    icon: Sliders,
    title: "Flexibility",
    description: "Adapt the service to cover a wide range of design tasks as needed.",
  },
  {
    icon: CreditCard,
    title: "Easy & Secure Payments",
    description: "Enjoy hassle-free, secure transactions with multiple payment options for your convenience.",
  },
  {
    icon: Bell,
    title: "Regular Updates",
    description: "Ongoing updates to ensure the latest features and improvements for your experience.",
  },
  {
    icon: Heart,
    title: "Convenience",
    description: "Streamline the design process with a simple workflow and process.",
  },
];

const ApexBenefits = () => {
  const ref = useScrollReveal();

  return (
    <section className="py-28 relative" ref={ref as React.RefObject<HTMLElement>}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px"
        style={{ background: "linear-gradient(to right, transparent, hsl(189 94% 43% / 0.4), transparent)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <span className="section-label">Benefits</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-5 mb-4">
          Here are a few things we do that
          <br />
            <span className="gradient-text">others really just don't.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            const delays = [100, 200, 300, 400, 100, 200, 300, 400];
            return (
              <div
                key={b.title}
                className={`reveal delay-${delays[i]} glass-card rounded-2xl p-6 card-hover border border-border/50 group relative overflow-hidden`}
              >
                <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "radial-gradient(circle, hsl(221 83% 53% / 0.15) 0%, transparent 70%)" }} />
                <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:gradient-bg transition-all duration-300">
                  <Icon className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold mb-2 text-sm">{b.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{b.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ApexBenefits;
