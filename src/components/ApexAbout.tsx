import { useScrollReveal } from "@/hooks/useScrollReveal";

const stats = [
  { value: "95%", label: "Percent", sub: "Customer Satisfaction" },
  { value: "06+", label: "Years of", sub: "Experience" },
  { value: "10+", label: "Projects", sub: "Completed" },
];

const ApexAbout = () => {
  const ref = useScrollReveal();

  return (
    <section id="about" className="py-28 relative overflow-hidden" ref={ref as React.RefObject<HTMLElement>}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px"
        style={{ background: "linear-gradient(to right, transparent, hsl(221 83% 53% / 0.4), transparent)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left */}
          <div className="reveal-left">
            <span className="section-label">Who We Are</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-5 mb-6">
              About <span className="gradient-text">Us</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-5">
              We are a dedicated team of creative professionals committed to delivering
              exceptional design and development solutions. With a passion for innovation
              and attention to detail, we specialize in crafting unique experiences that
              resonate with our clients' visions.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-5">
              Our approach is collaborative, ensuring that every project reflects the
              individuality and goals of those we work with. Whether you're building a
              brand, designing a product, or launching a digital platform, we're here to
              turn your ideas into impactful realities.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              At the heart of what we do is a belief in the power of design to shape
              meaningful connections. From concept to completion, we work closely with
              our clients to understand their needs and exceed their expectations.
            </p>
          </div>

          {/* Right — visual */}
          <div className="reveal-right delay-200">
            <div className="relative">
              <div className="grid grid-cols-3 gap-5">
                {stats.map((s) => (
                  <div
                    key={s.sub}
                    className="glass-card rounded-2xl p-6 text-center border border-border/50 card-hover group"
                  >
                    <div className="text-3xl md:text-4xl font-black gradient-text mb-1">{s.value}</div>
                    <div className="text-xs text-muted-foreground">{s.label}</div>
                    <div className="text-sm font-semibold mt-0.5">{s.sub}</div>
                  </div>
                ))}
              </div>

              {/* Decorative card */}
              <div className="mt-5 glass-card rounded-2xl p-6 border border-primary/20 relative overflow-hidden">
                <div className="absolute inset-0 opacity-5"
                  style={{ background: "linear-gradient(135deg, hsl(221 83% 53%) 0%, hsl(189 94% 43%) 100%)" }} />
                <p className="text-sm text-muted-foreground leading-relaxed relative z-10">
                  "With a strong foundation in innovation and a dedication to quality,
                  we create solutions that inspire and engage, helping you achieve
                  your goals with confidence."
                </p>
                <div className="flex items-center gap-3 mt-4 relative z-10">
                  <div className="w-8 h-8 rounded-full gradient-bg flex items-center justify-center text-white text-sm font-bold">A</div>
                  <div>
                    <p className="text-sm font-semibold">ApexTech Square</p>
                    <p className="text-xs text-muted-foreground">Design & Development Agency</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApexAbout;
