import { ArrowRight, Phone } from "lucide-react";

const clientLogos = [
  "azugo", "yeppy", "PetsVetConnect", "Security Services Support Authority",
  "Tamreeni", "OneView", "azugo", "yeppy", "PetsVetConnect",
  "Security Services", "Tamreeni", "OneView",
];

const stats = [
  { value: "95%", label: "Customer Satisfaction" },
  { value: "07+", label: "Years of Experience" },
  { value: "30+", label: "Projects Completed" },
];

const ApexHero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-20 overflow-hidden">
      {/* Dot grid */}
      <div className="absolute inset-0 dot-pattern opacity-50" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(221 83% 53% / 0.14) 0%, transparent 70%)" }} />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(189 94% 43% / 0.10) 0%, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-8 animate-fade-in">
            <span className="section-label">
              <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
              Design & Development Agency
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-6 animate-slide-up">
            Elevating Your Brand
            <br />
            with{" "}
            <span className="gradient-text">Innovative Design</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10 animate-slide-up stagger-1">
            At ApexTech Square we blend artistry and strategy to create designs
            that not only captivate but also elevate.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up stagger-2">
            <a
              href="#portfolio"
              className="btn-gradient text-white font-semibold px-8 py-4 rounded-full text-base flex items-center gap-2 group"
            >
              Our Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://cal.com/apextechsquare/15min?user=apextechsquare"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-glow font-semibold px-8 py-4 rounded-full text-base flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Schedule a Call
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-5 mt-20 max-w-2xl mx-auto animate-fade-in stagger-3">
          {stats.map((s) => (
            <div key={s.label} className="glass-card rounded-2xl p-5 text-center card-hover border border-border/50">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">{s.value}</div>
              <div className="text-xs text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Logo marquee */}
        <div className="mt-16 animate-fade-in stagger-4">
          <p className="text-center text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-6 opacity-50">
            Featured highlights of our work
          </p>
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-24 z-10"
              style={{ background: "linear-gradient(to right, hsl(228 54% 7%), transparent)" }} />
            <div className="absolute right-0 top-0 bottom-0 w-24 z-10"
              style={{ background: "linear-gradient(to left, hsl(228 54% 7%), transparent)" }} />
            <div className="flex animate-marquee whitespace-nowrap">
              {[...clientLogos, ...clientLogos].map((logo, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 mx-5 px-6 py-3 rounded-xl bg-secondary/40 border border-border/40 hover:border-primary/30 transition-colors"
                >
                  <span className="text-sm font-semibold text-muted-foreground">{logo}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApexHero;
