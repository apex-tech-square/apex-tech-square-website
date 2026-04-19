import { ArrowRight, Mail, CalendarDays } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const ApexCTA = () => {
  const ref = useScrollReveal();

  return (
    <section id="contact" className="py-28 relative overflow-hidden" ref={ref as React.RefObject<HTMLElement>}>
      <div className="absolute inset-0 dot-pattern opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, hsl(221 83% 53% / 0.1) 0%, transparent 70%)" }} />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Emoji/icon badge */}
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl gradient-bg mb-8 animate-pulse-glow reveal">
          <span className="text-2xl">✌️</span>
        </div>

        <div className="reveal delay-100">
          <span className="section-label">Let's Work Together</span>
          <h2 className="text-4xl md:text-6xl font-bold mt-5 mb-6 leading-tight">
            Let's Create Something{" "}
            <span className="gradient-text">Amazing Together!</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            We already think it's a match. Book a call to see how ApexTech Square
            can help elevate your company's designs to the next level.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 reveal delay-200">
          <a
            href="https://cal.com/apextechsquare/15min?user=apextechsquare"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gradient text-white font-semibold px-8 py-4 rounded-full text-base flex items-center gap-2 group"
          >
            <CalendarDays className="w-4 h-4" />
            Schedule a Call
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="mailto:hello@apextechsquare.com"
            className="btn-outline-glow font-semibold px-8 py-4 rounded-full text-base flex items-center gap-2"
          >
            <Mail className="w-4 h-4" />
            Send an Email
          </a>
        </div>

        <p className="mt-8 text-sm text-muted-foreground reveal delay-300">
          <a href="mailto:hello@apextechsquare.com" className="text-accent hover:underline">
            hello@apextechsquare.com
          </a>
        </p>
      </div>
    </section>
  );
};

export default ApexCTA;
