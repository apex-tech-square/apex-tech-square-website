import { useEffect, useRef } from "react";
import { MessageSquare, Search, Figma, Code2, Rocket } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Discovery & Strategy",
    description: "We start by understanding your goals, users, and product vision. Through calls, research, and workshops, we align on what success looks like.",
  },
  {
    number: "02",
    icon: Search,
    title: "Structure & Wireframing",
    description: "We map out the core experience using wireframes and user flows — laying the foundation for intuitive navigation and smart functionality.",
  },
  {
    number: "03",
    icon: Figma,
    title: "Visual Design",
    description: "Now we bring the wireframes to life with stunning UI. Every color, component, and interaction is thoughtfully designed to reflect your brand.",
  },
  {
    number: "04",
    icon: Code2,
    title: "Handoff & Development",
    description: "Once approved, we hand off design files to your dev team — or build them ourselves using no-code tools, depending on your project type.",
  },
  {
    number: "05",
    icon: Rocket,
    title: "Final Review & Launch",
    description: "We review everything together, make final tweaks, and ensure your launch is smooth. Our team stays available for post-launch support and iteration.",
  },
];

const ApexProcess = () => {
  const ref = useScrollReveal();
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Per-step staggered IntersectionObserver
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    stepRefs.current.forEach((el, i) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              el.classList.add("process-visible");
            }, i * 160);
            obs.disconnect();
          }
        },
        { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  return (
    <section
      id="process"
      className="py-28 relative overflow-hidden"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className="absolute inset-0 dot-pattern opacity-25" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(221 83% 53% / 0.08) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 reveal">
          <span className="section-label">How We Work</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-5 mb-4">
            Navigating Success{" "}
            <span className="gradient-text">Together</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            From creative design to technical solutions — we lead you through
            every step of the journey.
          </p>
        </div>

        {/* Zigzag timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical centre line */}
          <div
            className="absolute hidden lg:block w-0.5 top-6 bottom-6"
            style={{
              left: "50%",
              transform: "translateX(-50%)",
              background: "linear-gradient(to bottom, hsl(221 83% 53% / 0.6), hsl(189 94% 43% / 0.4), transparent)",
            }}
          />

          {steps.map((step, i) => {
            const Icon = step.icon;
            const isLeft = i % 2 === 0;

            return (
              <div
                key={step.number}
                ref={(el) => { stepRefs.current[i] = el; }}
                className="process-step mb-6 lg:mb-0"
              >
                {/* Mobile */}
                <div className="flex items-start gap-4 lg:hidden rounded-2xl p-6 border border-border/60 card-hover mb-6 bg-card shadow-md shadow-black/10">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-white font-black text-sm shadow-lg shadow-primary/30">
                    {step.number}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className="w-4 h-4 text-accent" aria-hidden="true" />
                      <h3 className="font-bold text-base">{step.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>

                {/* Desktop zigzag: 3-col grid */}
                <div className="hidden lg:grid lg:grid-cols-[1fr_64px_1fr] lg:items-center lg:mb-10">
                  {/* Left slot */}
                  <div className={isLeft ? "pr-8" : ""}>
                    {isLeft && (
                      <div className="rounded-2xl p-6 border border-border/60 card-hover group ml-auto max-w-sm bg-card shadow-lg shadow-black/10 [data-theme=light]:shadow-primary/5">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-md shadow-primary/20">
                            <Icon className="w-4 h-4 text-white" aria-hidden="true" />
                          </div>
                          <h3 className="font-bold">{step.title}</h3>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                      </div>
                    )}
                  </div>

                  {/* Centre number dot */}
                  <div className="flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-white font-black text-sm z-10 shadow-lg shadow-primary/40 ring-4 ring-background">
                      {step.number}
                    </div>
                  </div>

                  {/* Right slot */}
                  <div className={!isLeft ? "pl-8" : ""}>
                    {!isLeft && (
                      <div className="rounded-2xl p-6 border border-border/60 card-hover group mr-auto max-w-sm bg-card shadow-lg shadow-black/10">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-md shadow-primary/20">
                            <Icon className="w-4 h-4 text-white" aria-hidden="true" />
                          </div>
                          <h3 className="font-bold">{step.title}</h3>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Per-step animation styles */}
      <style>{`
        .process-step {
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.65s cubic-bezier(0.22, 1, 0.36, 1), transform 0.65s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .process-step.process-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
};

export default ApexProcess;
