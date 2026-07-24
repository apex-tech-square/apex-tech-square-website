/* Seamless auto-scrolling design showcase strip — no section heading, sits between sections */
const slides = [
  { src: "/assets/slider-1.png", alt: "Design Showcase 1" },
  { src: "/assets/slider-2.png", alt: "Design Showcase 2" },
  { src: "/assets/slider-3.png", alt: "Design Showcase 3" },
  { src: "/assets/slider-4.png", alt: "Design Showcase 4" },
];

const ApexSlider = () => {
  return (
    <div className="relative overflow-hidden py-10" aria-label="Design showcase">
      {/* Edge fade masks */}
      <div
        className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, hsl(var(--background)), transparent)" }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, hsl(var(--background)), transparent)" }}
      />

      {/* Scrolling strip */}
      <div className="flex animate-marquee" style={{ animationDuration: "22s" }}>
        {[...slides, ...slides, ...slides].map((slide, i) => (
          <div
            key={i}
            className="flex-shrink-0 mx-4 rounded-2xl overflow-hidden border border-border/40 shadow-xl shadow-black/20"
            style={{ width: "clamp(280px, 30vw, 480px)", aspectRatio: "16/10" }}
          >
            <img
              src={slide.src}
              alt={slide.alt}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApexSlider;
