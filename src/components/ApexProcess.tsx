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
    title: "Final Review & Launch Support",
    description: "We review everything together, make final tweaks, and ensure your launch is smooth. Our team stays available for post-launch support and iteration.",
  },
];

const ApexProcess = () => {
  const ref = useScrollReveal();

  return (
    <section id="process" className="py-28 relative overflow-hidden" ref={ref as React.RefObject<HTMLElement>}>
      <div className="absolute inset-0 dot-pattern opacity-25" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(221 83% 53% / 0.06) 0%, transparent 70%)" }} />

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

        {/* Steps */}
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-8 top-8 bottom-8 w-px bg-gradient-to-b from-primary/40 via-accent/30 to-transparent hidden lg:block" style={{ left: "calc(50% - 0.5px)" }} />

          <div className="space-y-6 lg:space-y-0 lg:grid lg:grid-cols-1 lg:gap-0">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isEven = i % 2 === 0;
              return (
                <div
                  key={step.number}
                  className={`reveal delay-${[100, 200, 300, 200, 100][i]} flex flex-col lg:flex-row items-start lg:items-center gap-6 ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  } mb-8`}
                >
                  {/* Card */}
                  <div className={`flex-1 ${isEven ? "lg:text-right lg:pr-12" : "lg:text-left lg:pl-12"}`}>
                    <div className={`glass-card rounded-2xl p-7 card-hover border border-border/50 group inline-block w-full lg:max-w-md ${isEven ? "lg:ml-auto" : ""}`}>
                      <div className={`flex items-center gap-3 mb-3 ${isEven ? "lg:flex-row-reverse" : ""}`}>
                        <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="font-bold text-base">{step.title}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden lg:flex flex-shrink-0 w-12 h-12 rounded-full gradient-bg items-center justify-center text-white font-black text-sm z-10 shadow-lg shadow-primary/30">
                    {step.number}
                  </div>

                  {/* Spacer */}
                  <div className="flex-1 hidden lg:block" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApexProcess;
