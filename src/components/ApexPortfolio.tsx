import { ExternalLink, ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const projects = [
  {
    id: 1,
    title: "Tamreeni Fitness",
    description: "A fitness app that helps users plan workouts, track progress, and stay consistent with personalized training plans.",
    image: "/assets/Project-1.png",
    year: "2025",
    type: "Mobile App",
    tags: ["Health & Fitness", "Personal Tracking"],
  },
  {
    id: 2,
    title: "PickPro Warehouse Logistics",
    description: "A logistics platform that helps warehouse teams manage inventory, track orders, and streamline picking operations.",
    image: "/assets/Project-2.png",
    year: "2024",
    type: "Web App",
    tags: ["Warehouse Management", "Logistics", "Inventory Management", "SaaS"],
  },
  {
    id: 3,
    title: "Security Services Authority",
    description: "A platform that helps security service providers manage licensing, compliance, and personnel across web and mobile.",
    image: "/assets/Project-3.png",
    year: "2025",
    type: "Web + Mobile App",
    tags: ["Security", "Compliance", "Government", "Operations"],
  },
  {
    id: 4,
    title: "Mdrouz Ecommerce",
    description: "An ecommerce app that helps shoppers browse, compare, and purchase products with a smooth checkout experience.",
    image: "/assets/Project-4.png",
    year: "2024",
    type: "Mobile App",
    tags: ["Ecommerce", "Retail" , "Shopping"],
  },
  {
    id: 5,
    title: "Aspire Academy",
    description: "A dashboard that helps academy staff monitor student performance, attendance, and program outcomes in one place.",
    image: "/assets/Project-6.png",
    year: "2024",
    type: "SaaS Web App",
    tags: ["Education", "Dashboard", "LMS", "Analytics"],
  },
  {
    id: 6,
    title: "Yeppy Super App",
    description: "A super app that brings multiple everyday services together, letting users shop, pay, and connect from one place.",
    image: "/assets/Project-8.png",
    year: "2025",
    type: "Mobile + Web App",
    tags: ["Super App", "Multi Service"],
  },
  {
    id: 7,
    title: "Al Hussaini",
    description: "An ecommerce website that helps customers explore and purchase luxury watches with a refined shopping experience.",
    image: "/assets/Project-5.png",
    year: "2024",
    type: "Website",
    tags: ["E-commerce", "Luxury Retail"],
  },
  {
    id: 8,
    title: "Tourism",
    description: "A tourism website that helps travelers discover destinations, plan trips, and book experiences in one place.",
    image: "/assets/Project-7.png",
    year: "2025",
    type: "Website",
    tags: ["Tourism", "Travel Planning"],
  },
  {
    id: 9,
    title: "Pirelli Web",
    description: "A dashboard that helps distributors manage tyre inventory, orders, and delivery logistics across their network.",
    image: "/assets/Project-9.png",
    year: "2026",
    type: "Web App",
    tags: ["Dashboard", "Logistics", "Distribution"],
  },
  {
    id: 10,
    title: "Qarin",
    description: "A sales platform that helps teams manage their sales process with clarity and control from lead to close.",
    image: "/assets/Project-11.png",
    year: "2026",
    type: "Website",
    tags: ["No-Code", "Sales", "CRM"],
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
