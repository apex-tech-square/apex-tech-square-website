import { ArrowRight, Phone } from "lucide-react";

const clientLogos = [
  { src: "/assets/logo-1.svg", alt: "Client 1" },
  { src: "/assets/logo-2.svg", alt: "Client 2" },
  { src: "/assets/logo-3.svg", alt: "Client 3" },
  { src: "/assets/logo-4.svg", alt: "Client 4" },
  { src: "/assets/logo-5.svg", alt: "Client 5" },
  { src: "/assets/logo-6.svg", alt: "Client 6" },
  { src: "/assets/logo-7.svg", alt: "Client 7" },
  { src: "/assets/logo-8.svg", alt: "Client 8" },
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

          {/* Headline — forced 2 lines */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6 animate-slide-up">
            <span className="block">Elevating Your Brand</span>
            <span className="block">
              with{" "}
              <span className="gradient-text">Innovative Design</span>
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10 animate-slide-up stagger-1">
            At ApexTech Square we blend artistry and strategy to create designs
            that not only captivate but also elevate.
          </p>

          {/* CTAs — WCAG AA compliant */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up stagger-2">
            <a
              href="#portfolio"
              className="btn-gradient text-white font-semibold px-8 py-4 rounded-full text-base flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              Our Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </a>
            <a
              href="https://cal.com/apextech-square/15min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-glow px-8 py-4 rounded-full text-base flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              Schedule a Call
            </a>
          </div>
        </div>

        {/* Logo marquee — no boxes, just logos */}
        <div className="mt-20 animate-fade-in stagger-3">
          <p className="text-center text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-8">
            Featured highlights of our work
          </p>
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-24 z-10"
              style={{ background: "linear-gradient(to right, hsl(var(--background)), transparent)" }} />
            <div className="absolute right-0 top-0 bottom-0 w-24 z-10"
              style={{ background: "linear-gradient(to left, hsl(var(--background)), transparent)" }} />
            <div className="flex animate-marquee whitespace-nowrap items-center">
              {[...clientLogos, ...clientLogos].map((logo, i) => (
                <div key={i} className="flex-shrink-0 mx-12 flex items-center justify-center">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-16 md:h-20 w-auto max-w-[200px] object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                    style={{ filter: "var(--logo-filter, brightness(0) invert(1))" }}
                  />
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
