import { Star, Quote } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const testimonials = [
  {
    quote: "ApexTech Square delivered an exceptional mobile app design for Tamreeni. Their attention to user experience and clean UI made the product feel premium from day one.",
    author: "Tamreeni Team",
    role: "Fitness Platform",
    /*logo: "/testimonial-logo-1.svg",*/
    avatar: "/assets/testimonial-avatar-1.jpg",
    rating: 5,
  },
  {
    quote: "The design system they built for us is outstanding. Consistent, scalable, and developer-friendly. It cut our future development time significantly.",
    author: "OneView Client",
    role: "SaaS Platform",
   /* logo: "/testimonial-logo-2.svg",*/
    avatar: "/assets/testimonial-avatar-2.jpg",
    rating: 5,
  },
  {
    quote: "Working with ApexTech Square on our government portal was smooth and professional. They understood our complex requirements and delivered on time.",
    author: "Security Services Authority",
    role: "Government Platform",
   /* logo: "/testimonial-logo-3.svg",*/
    avatar: "/assets/testimonial-avatar-3.jpg",
    rating: 5,
  },
  {
    quote: "PetsVetConnect wouldn't be what it is today without their mobile design work. The app is intuitive, beautiful, and our users absolutely love it.",
    author: "PetsVetConnect Team",
    role: "Mobile App",
   /* logo: "/testimonial-logo-4.svg",*/
    avatar: "/assets/testimonial-avatar-4.jpg",
    rating: 5,
  },
  {
    quote: "EvenStan's brand and website came together perfectly. The no-code development meant we launched faster than we thought possible. Incredible value.",
    author: "",
    role: "CEO, EvenStan",
   /* logo: "/testimonial-logo-5.svg",*/
    avatar: "/assets/testimonial-avatar-5.jpg",
    rating: 5,
  },
  {
    quote: "Unlimited revisions, fast communication, and designs that truly reflect our brand. ApexTech Square is a rare find in the agency world.",
    author: "Aspire Client",
    role: "Product Manager",
    /* logo: "/testimonial-logo-6.svg",*/
    avatar: "/assets/testimonial-avatar-6.jpg",
    rating: 5,
  },
  {
    quote: "They nailed our vision on the first try. The design felt like us immediately, no back and forth trying to explain our brand over and over.",
    author: "Sarah Mitchell",
    role: "Founder, Mdrouz",
    /*logo: "/testimonial-logo-7.svg",*/
    avatar: "/assets/testimonial-avatar-7.jpg",
    rating: 5,
  },
  {
    quote: "Honestly one of the most painless design experiences I've had. They just get it. Responsive, sharp, and the final product looked better than what I imagined.",
    author: "James Okafor",
    role: "CEO, EvenStan",
    /*logo: "/testimonial-logo-8.svg",*/
    avatar: "/assets/testimonial-avatar-8.jpg",
    rating: 5,
  },
];

// Generates initials from a name, e.g. "Tamreeni Team" -> "TT"
const getInitials = (name: string) => {
  const parts = name.trim().split(" ");
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[1][0]).toUpperCase();
};

const ApexTestimonials = () => {
  const ref = useScrollReveal();

  return (
    <section id="testimonials" className="py-28 relative overflow-hidden" ref={ref as React.RefObject<HTMLElement>}>
      <div className="absolute inset-0 dot-pattern opacity-25" />
      <div
        className="absolute top-1/2 right-0 w-96 h-96 rounded-full pointer-events-none -translate-y-1/2 opacity-20"
        style={{ background: "radial-gradient(circle, hsl(189 94% 43% / 0.3) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 reveal">
          <span className="section-label">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-5 mb-4">
            Worldwide <span className="gradient-text">Customers</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Don't take our word for it. Here's what the teams we've partnered
            with have to say about working with us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => {
            const delays = [100, 200, 300, 100, 200, 300, 100, 200];
            return (
              <div
                key={t.author}
                className={`reveal delay-${delays[i]} glass-card rounded-2xl p-7 card-hover border border-border/50 flex flex-col group`}
              >
          { /*     Client logo, aligned left and larger 
                <div className="flex justify-start mb-5">
                  <img
                    src={t.logo}
                    alt={t.author}
                    className="h-16 w-auto max-w-[160px] object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                    style={{ filter: "var(--logo-filter)" }}
                  />
                </div>  

              */}

                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <Star key={s} className="w-4 h-4 text-amber-400" fill="#fbbf24" />
                  ))}
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-6">
                  "{t.quote}"
                </p>

                  {/* Avatar photo with name and role */}
                  <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.author}
                    className="w-10 h-10 rounded-full object-cover border border-border/50 shrink-0"
                  />
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