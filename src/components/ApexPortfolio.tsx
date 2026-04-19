import { ExternalLink, ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const projects = [
  {
    id: 1,
    title: "Tamreeni Fitness",
    category: "Mobile App Design",
    description: "Tamreeni is a fitness platform designed to help you train smarter, move better, and unlock your full potential, anytime, anywhere.",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
    tags: ["Mobile App", "UI/UX", "Health & Fitness"],
    accent: "from-blue-500/20 to-cyan-500/20",
  },
  {
    id: 2,
    title: "EvenStan",
    category: "Website Design",
    description: "EventStan is a modern platform that helps users discover venues, vendors, and services to plan unforgettable events with ease.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    tags: ["Website", "Events Platform", "SaaS"],
    accent: "from-purple-500/20 to-pink-500/20",
  },
  {
    id: 3,
    title: "Security Services Support Authority",
    category: "Web & Mobile App",
    description: "Developed for Ajman's Security Services Support Authority, this platform simplifies driving school operations and enhances the training journey through smart web and mobile solutions.",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&q=80",
    tags: ["Government", "Web + Mobile", "Operations"],
    accent: "from-green-500/20 to-teal-500/20",
  },
  {
    id: 4,
    title: "Pets Vet Connect",
    category: "Mobile App",
    description: "PetsVets Connect is a mobile app that makes it easy for pet owners to book appointments, track health records, and stay connected with vets on the go.",
    image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&q=80",
    tags: ["Mobile App", "Healthcare", "Pets"],
    accent: "from-orange-500/20 to-amber-500/20",
  },
];

const ApexPortfolio = () => {
  const ref = useScrollReveal();

  return (
    <section id="portfolio" className="py-28 relative" ref={ref as React.RefObject<HTMLElement>}>
      <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full pointer-events-none opacity-15"
        style={{ background: "radial-gradient(circle, hsl(189 94% 43% / 0.4) 0%, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 reveal">
          <span className="section-label">Our Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-5 mb-4">
            Showcasing Our Most{" "}
            <span className="gradient-text">Remarkable Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A showcase of projects that embody creativity, innovation, and precision.
          </p>
        </div>

        {/* Figma CTA */}
        <div className="text-center mb-14 reveal delay-100">
          <a
            href="https://www.figma.com/proto/5F4k3nMG10DYlBJ0eXdiiT/ApexTech-Square---Work?page-id=0%3A1&node-id=1-3014&viewport=-68%2C-5610%2C0.31&t=L6lVuzlfNQWtUld8-8&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=1%3A3014&hide-ui=1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-outline-glow font-semibold px-6 py-2.5 rounded-full text-sm"
          >
            <ExternalLink className="w-4 h-4" />
            View Our Figma Presentation
          </a>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-7">
          {projects.map((p, i) => (
            <div
              key={p.id}
              className={`reveal delay-${[100, 200, 100, 200][i]} group rounded-3xl overflow-hidden border border-border/50 card-hover bg-card`}
            >
              <div className="aspect-[16/9] overflow-hidden relative">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600"
                />
                <div className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, hsl(228 54% 7% / 0.5) 0%, transparent 60%)" }} />
                <div className="absolute top-4 left-4">
                  <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 text-white/90">
                    {p.category}
                  </span>
                </div>
              </div>

              <div className="p-7">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors leading-tight">
                    {p.title}
                  </h3>
                  <div className="flex-shrink-0 w-9 h-9 rounded-full border border-border flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-all ml-3">
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-secondary border border-border/60 text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-14 reveal">
          <a
            href="https://cal.com/apextechsquare/15min?user=apextechsquare"
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
