import { Star, Quote } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const testimonials = [
  {
    quote: "ApexTech Square delivered an exceptional mobile app design for Tamreeni. Their attention to user experience and clean UI made the product feel premium from day one.",
    author: "Tamreeni Team",
    role: "Fitness Platform",
    img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=100&q=80",
    rating: 5,
  },
  {
    quote: "The design system they built for us is outstanding. Consistent, scalable, and developer-friendly. It cut our future development time significantly.",
    author: "OneView Client",
    role: "SaaS Platform",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=100&q=80",
    rating: 5,
  },
  {
    quote: "Working with ApexTech Square on our government portal was a smooth, professional experience. They understood our complex requirements and delivered on time.",
    author: "Security Services Authority",
    role: "Government Platform",
    img: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=100&q=80",
    rating: 5,
  },
  {
    quote: "PetsVetConnect wouldn't be what it is today without their mobile design work. The app is intuitive, beautiful, and our users love it.",
    author: "PetsVetConnect Team",
    role: "Mobile App",
    img: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=100&q=80",
    rating: 5,
  },
  {
    quote: "EvenStan's brand and website came together perfectly. The no-code development meant we launched faster than we thought possible. Incredible value.",
    author: "EvenStan Founder",
    role: "Events Platform",
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=100&q=80",
    rating: 5,
  },
  {
    quote: "Unlimited revisions, fast communication on Slack, and designs that truly reflect our brand. ApexTech Square is a rare find in the agency world.",
    author: "Azugo Client",
    role: "Product Company",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=100&q=80",
    rating: 5,
  },
];

const ApexTestimonials = () => {
  const ref = useScrollReveal();

  return (
    <section id="testimonials" className="py-28 relative overflow-hidden" ref={ref as React.RefObject<HTMLElement>}>
      <div className="absolute inset-0 dot-pattern opacity-25" />
      <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full pointer-events-none -translate-y-1/2 opacity-20"
        style={{ background: "radial-gradient(circle, hsl(189 94% 43% / 0.3) 0%, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 reveal">
          <span className="section-label">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-5 mb-4">
            Worldwide <span className="gradient-text">Customers</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Don't take our word for it — here's what the teams we've partnered
            with have to say about working with us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => {
            const delays = [100, 200, 300, 100, 200, 300];
            return (
              <div
                key={t.author}
                className={`reveal delay-${delays[i]} glass-card rounded-2xl p-7 card-hover border border-border/50 flex flex-col group`}
              >
                <Quote className="w-7 h-7 text-primary/30 mb-4 group-hover:text-primary/50 transition-colors" />

                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <Star key={s} className="w-4 h-4 text-amber-400" fill="#fbbf24" />
                  ))}
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-6">
                  "{t.quote}"
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-border/60 flex-shrink-0">
                    <img src={t.img} alt={t.author} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{t.author}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ApexTestimonials;
