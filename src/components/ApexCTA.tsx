import { ArrowRight, Mail, CalendarDays } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const ApexCTA = () => {
  const ref = useScrollReveal();

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden" ref={ref as React.RefObject<HTMLElement>}>
      <div className="max-w-7xl mx-auto">
        {/* Banner card */}
        <div className="relative rounded-3xl overflow-hidden py-24 px-8 md:px-16 text-center reveal"
          style={{ background: "linear-gradient(135deg, hsl(228 54% 8%) 0%, hsl(228 50% 13%) 45%, hsl(221 70% 22%) 100%)" }}>

          {/* Glow orb — top right */}
          <div
            className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, hsl(221 83% 53% / 0.35) 0%, transparent 65%)",
              transform: "translate(25%, -35%)",
            }}
          />
          {/* Glow orb — bottom left */}
          <div
            className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, hsl(189 94% 43% / 0.22) 0%, transparent 65%)",
              transform: "translate(-30%, 35%)",
            }}
          />

          {/* Dot grid overlay */}
          <div className="absolute inset-0 dot-pattern opacity-[0.12]" />

          {/* Subtle border glow */}
          <div className="absolute inset-0 rounded-3xl border border-primary/25 pointer-events-none" />

          {/* Content */}
          <div className="relative z-10">
            <div className="reveal delay-100">
              <span
                className="section-label"
                style={{
                  color: "hsl(189 94% 53%)",
                  borderColor: "hsl(189 94% 43% / 0.4)",
                  background: "hsl(189 94% 43% / 0.1)",
                }}
              >
                Let's Work Together
              </span>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mt-6 mb-6 leading-tight text-white">
                Let's Create Something{" "}
                <span className="gradient-text">Amazing Together!</span>
              </h2>
              <p className="text-white/65 text-lg leading-relaxed mb-12 max-w-xl mx-auto">
                We already think it's a match. Book a call to see how ApexTech Square
                can help elevate your company's designs to the next level.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 reveal delay-200">
              <a
                href="https://cal.com/apextech-square/15min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gradient text-white font-semibold px-9 py-4 rounded-full text-base flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <CalendarDays className="w-4 h-4" aria-hidden="true" />
                Schedule a Call
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </a>
              <a
                href="mailto:apextechsquare@gmail.com"
                className="px-9 py-4 rounded-full text-base flex items-center gap-2 font-semibold border border-white/25 text-white hover:bg-white/10 hover:border-white/50 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <Mail className="w-4 h-4" aria-hidden="true" />
                Send an Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApexCTA;
