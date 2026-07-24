import { ExternalLink, ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const projects = [
  {
    id: 1,
    title: "Tamreeni Fitness",
    description: "A fitness platform to help you train smarter, move better, and unlock your full potential.",
    image: "/assets/slider-1.png",
    year: "2023",
    type: "Mobile App",
    tags: ["2023", "Mobile App", "Health & Fitness", "UI/UX"],
  },
  {
    id: 2,
    title: "EvenStan",
    description: "A modern event platform helping users discover venues, vendors, and services for unforgettable experiences.",
    image: "/assets/slider-2.png",
    year: "2024",
    type: "Website",
    tags: ["2024", "Website", "Events Platform", "SaaS"],
  },
  {
    id: 3,
    title: "Security Services Authority",
    description: "Smart web and mobile solution for Ajman's driving school operations and training management.",
    image: "/assets/slider-3.png",
    year: "2024",
    type: "Web + Mobile",
    tags: ["2024", "Web + Mobile", "Government", "Operations"],
  },
  {
    id: 4,
    title: "Pets Vet Connect",
    description: "Book appointments, track health records, and stay connected with vets from your phone.",
    image: "/assets/slider-4.png",
    year: "2023",
    type: "Mobile App",
    tags: ["2023", "Mobile App", "Healthcare", "Pets"],
  },
  {
    id: 5,
    title: "FinFlow Dashboard",
    description: "A SaaS analytics dashboard that gives finance teams real-time visibility into cash flow and forecasts.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    year: "2024",
    type: "SaaS",
    tags: ["2024", "SaaS", "Dashboard", "Fintech"],
  },
  {
    id: 6,
    title: "MindSpace",
    description: "A mental wellness web app with guided meditations, mood tracking, and therapist booking.",
    image: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=800&q=80",
    year: "2025",
    type: "Web App",
    tags: ["2025", "Web App", "Wellness", "Healthcare"],
  },
  {
    id: 7,
    title: "Crafted Co.",
    description: "Full brand identity system for a premium artisan goods marketplace — logo, system, and web.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    year: "2024",
    type: "Brand Identity",
    tags: ["2024", "Branding", "Identity", "E-commerce"],
  },
  {
    id: 8,
    title: "NomadPay",
    description: "Send money across borders in seconds — a mobile wallet designed for remote workers and digital nomads.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
    year: "2025",
    type: "Mobile App",
    tags: ["2025", "Mobile App", "Fintech", "Payments"],
  },
  {
    id: 9,
    title: "EduTrack LMS",
    description: "A learning management system that helps educators track student progress and deliver engaging course content.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
    year: "2024",
    type: "SaaS",
    tags: ["2024", "SaaS", "EdTech", "Dashboard"],
  },
  {
    id: 10,
    title: "StoreFront Pro",
    description: "A no-code e-commerce builder that lets brands launch beautiful stores without writing a single line of code.",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80",
    year: "2025",
    type: "No-Code",
    tags: ["2025", "No-Code", "E-commerce", "Webflow"],
  },
];

// Grid pattern: 2 – 3 – 2 – 3 (10 items total)
const getColSpan = (i: number) => {
  if (i < 2) return "md:col-span-3";   // row 1: 2 items
  if (i < 5) return "md:col-span-2";   // row 2: 3 items
  if (i < 7) return "md:col-span-3";   // row 3: 2 items
  return "md:col-span-2";               // row 4: 3 items
};

const ApexPortfolio = () => {
  const ref = useScrollReveal();

  return (
    <section
      id="portfolio"
      className="py-28 relative bg-card/30"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div
        className="absolute top-1/3 right-0 w-96 h-96 rounded-full pointer-events-none opacity-15"
        style={{ background: "radial-gradient(circle, hsl(189 94% 43% / 0.4) 0%, transparent 70%)" }}
      />

      <div className="w-full px-4 sm:px-8 lg:px-14">
        {/* Header */}
        <div className="text-center mb-6 reveal max-w-3xl mx-auto">
          <span className="section-label">Our Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-5 mb-4">
            Showcasing Our Most{" "}
            <span className="gradient-text">Remarkable Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A showcase of projects that embody creativity, innovation, and precision.
          </p>
        </div>

        {/* Figma CTA — primary button */}
        <div className="text-center mb-14 reveal delay-100">
          <a
            href="https://www.figma.com/proto/5F4k3nMG10DYlBJ0eXdiiT/ApexTech-Square---Work?page-id=0%3A1&node-id=1-3014&viewport=-68%2C-5610%2C0.31&t=L6lVuzlfNQWtUld8-8&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=1%3A3014&hide-ui=1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 btn-gradient text-white font-semibold px-8 py-3.5 rounded-full text-sm group"
          >
            <ExternalLink className="w-4 h-4" aria-hidden="true" />
            View Our Figma Presentation
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </a>
        </div>

        {/* Projects Grid — 2‑3‑2‑3 pattern */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          {projects.map((p, i) => (
            <div
              key={p.id}
              className={`col-span-1 ${getColSpan(i)} reveal delay-${[100, 200, 100, 200, 300, 100, 200, 100, 200, 300][i]}`}
            >
              {/* Card: image fills, hover reveals overlay */}
              <div className="group relative rounded-2xl overflow-hidden border border-border/40 cursor-pointer aspect-[3/2]">
                {/* Background image */}
                <img
                  src={p.image}
                  alt={p.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Default overlay — subtle dark gradient always visible at bottom */}
                <div
                  className="absolute inset-0 transition-opacity duration-400 group-hover:opacity-0"
                  style={{ background: "linear-gradient(to top, hsl(228 54% 7% / 0.55) 0%, transparent 55%)" }}
                />

                {/* Type badge — visible by default, hidden on hover */}
                <div className="absolute top-4 left-4 transition-opacity duration-300 group-hover:opacity-0">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-primary/80 backdrop-blur-sm border border-primary/30 text-white">
                    {p.type}
                  </span>
                </div>

                {/* Hover overlay — full dark cover with content */}
                <div
                  className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                  style={{ background: "linear-gradient(to top, hsl(228 54% 6% / 0.97) 0%, hsl(228 54% 8% / 0.85) 50%, hsl(228 54% 10% / 0.5) 100%)" }}
                >
                  <h3 className="text-lg font-bold text-white mb-1.5 leading-tight">
                    {p.title}
                  </h3>
                  <p className="text-sm text-white/70 leading-relaxed mb-3 line-clamp-2">
                    {p.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2 py-0.5 rounded-full bg-white/10 border border-white/20 text-white/85"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14 reveal">
          <a
            href="https://cal.com/apextech-square/15min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-gradient text-white font-semibold px-8 py-4 rounded-full group"
          >
            Start Your Project
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ApexPortfolio;
