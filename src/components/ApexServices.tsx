import { useState } from "react";
import { Palette, Layers, Smartphone, Grid3x3, Code2 } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  {
    id: 1,
    icon: Palette,
    title: "Product Design",
    description: "We design intuitive digital products your users will love from MVPs to full-scale SaaS platforms. Every screen is crafted with usability, clarity, and business goals in mind.",
    tags: ["UI/UX", "SaaS", "MVP"],
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=700&q=80",
  },
  {
    id: 2,
    icon: Layers,
    title: "Brand Identity",
    description: "Your brand deserves more than just a logo. We build bold, memorable identities that reflect your values and resonate with your target audience.",
    tags: ["Logo", "Branding", "Identity"],
    image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=700&q=80",
  },
  {
    id: 3,
    icon: Smartphone,
    title: "Web & Mobile Apps",
    description: "We design sleek, high-performing interfaces for websites, SaaS dashboards, and mobile apps — ensuring your product looks great on every screen.",
    tags: ["Web", "Mobile", "SaaS"],
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=700&q=80",
  },
  {
    id: 4,
    icon: Grid3x3,
    title: "Design Systems",
    description: "Build once, scale forever. We create organized, reusable design systems that power consistent UI across your entire SaaS or product ecosystem.",
    tags: ["Figma", "Components", "Tokens"],
    image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=700&q=80",
  },
  {
    id: 5,
    icon: Code2,
    title: "No-Code Development",
    description: "Need to launch fast? We build responsive, scalable web and SaaS apps using leading no-code tools — all without sacrificing design quality.",
    tags: ["Webflow", "Framer", "No-Code"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&q=80",
  },
];

const ApexServices = () => {
  const [active, setActive] = useState(services[0]);
  const ref = useScrollReveal();

  return (
    <section id="services" className="py-28 relative" ref={ref as React.RefObject<HTMLElement>}>
      <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full pointer-events-none -translate-y-1/2 opacity-20"
        style={{ background: "radial-gradient(circle, hsl(221 83% 53% / 0.3) 0%, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <span className="section-label">What We Offer</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-5 mb-4">
            Expert Services That{" "}
            <span className="gradient-text">Define Our Excellence</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            From brand identity to fully shipped digital products — we cover the full
            spectrum of design and no-code development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* List */}
          <div className="space-y-3 reveal">
            {services.map((s) => {
              const Icon = s.icon;
              const isActive = active.id === s.id;
              return (
                <button
                  key={s.id}
                  onClick={() => setActive(s)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 group ${
                    isActive
                      ? "bg-primary/10 border-primary/50 shadow-lg shadow-primary/10"
                      : "bg-card border-border hover:border-primary/25 hover:bg-secondary/50"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all ${
                      isActive ? "gradient-bg" : "bg-secondary"
                    }`}>
                      <Icon className={`w-5 h-5 ${isActive ? "text-white" : "text-primary"}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className={`font-semibold transition-colors ${
                        isActive ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
                      }`}>
                        {s.title}
                      </h3>
                      {isActive && (
                        <div className="animate-fade-in">
                          <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{s.description}</p>
                          <div className="flex flex-wrap gap-2 mt-3">
                            {s.tags.map((t) => (
                              <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Image */}
          <div className="sticky top-28 reveal-right delay-200">
            <div className="relative rounded-3xl overflow-hidden border border-border/50 glow-blue aspect-[4/3]">
              <img
                src={active.image}
                alt={active.title}
                className="w-full h-full object-cover transition-all duration-500"
              />
              <div className="absolute inset-0"
                style={{ background: "linear-gradient(to top, hsl(228 54% 7% / 0.92) 0%, transparent 55%)" }} />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center gap-3 mb-3">
                  {(() => { const Icon = active.icon; return <Icon className="w-6 h-6 text-accent" />; })()}
                  <h3 className="text-xl font-bold">{active.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {active.tags.map((t) => (
                    <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-white/10 border border-white/20 text-white/80">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApexServices;
