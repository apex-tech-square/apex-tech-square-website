import { useState, useRef, FormEvent } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Send, Mail, CheckCircle2, AlertCircle } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

// ── Replace with your reCAPTCHA v2 site key ──
// Register at: https://www.google.com/recaptcha/admin → create v2 "I'm not a robot"
// Add your Vercel deployment domain when registering
const RECAPTCHA_SITE_KEY = "6LfRMGMtAAAAACY5bBhxrsB74ad-HKqu_XbwlC9U"; // test key (localhost only)

// ── Replace YOUR_FORM_ID with your Formspree form ID ──
// Create a free account at formspree.io → New Form → copy the ID
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xgognlgy";

const EMAIL = "apextechsquare@gmail.com";

const SERVICE_OPTIONS = [
  "Product Design",
  "Brand Identity",
  "Web & Mobile Apps",
  "Design Systems",
  "No-Code Development",
  "Other",
];

const SERVICE_LIST = [
  { label: "Product Design", sub: "UI/UX, SaaS, MVPs" },
  { label: "Brand Identity", sub: "Logo, Visual Identity" },
  { label: "Web & Mobile Apps", sub: "Responsive, Cross-platform" },
  { label: "Design Systems", sub: "Figma, Components, Tokens" },
  { label: "No-Code Development", sub: "Webflow, Framer" },
];

type Status = "idle" | "sending" | "success" | "error";

const ApexContact = () => {
  const ref = useScrollReveal();
  const [status, setStatus] = useState<Status>("idle");
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!recaptchaToken) return;
    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...form, "g-recaptcha-response": recaptchaToken }),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", service: "", message: "" });
        setRecaptchaToken(null);
        recaptchaRef.current?.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="py-28 relative"
      ref={ref as React.RefObject<HTMLElement>}
    >
      {/* Background glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full pointer-events-none opacity-20"
        style={{ background: "radial-gradient(ellipse, hsl(221 83% 53% / 0.35) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* ── LEFT: Heading + Services + Email ── */}
          <div className="reveal">
            <span className="section-label">Get In Touch</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-6 leading-tight">
              Have a challenge{" "}
              <span className="gradient-text">worth designing for?</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              Whether you need a product designed from scratch or a design system
              that scales — we'd love to hear about it. Reach out and let's figure
              out if we're a good fit.
            </p>

            {/* Services list */}
            <div className="space-y-3 mb-10">
              {SERVICE_LIST.map((s) => (
                <div key={s.label} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full gradient-bg flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-sm text-foreground">{s.label}</span>
                    <span className="text-muted-foreground text-sm"> — {s.sub}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Email */}
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2.5 text-primary font-semibold hover:opacity-80 transition-opacity"
            >
              <Mail className="w-4 h-4" />
              Send us an Email
            </a>
          </div>

          {/* ── RIGHT: Contact form ── */}
          <div className="reveal-right delay-200">
            <div className="rounded-3xl border border-border/60 p-8 bg-card shadow-xl shadow-black/10">
              {status === "success" ? (
                <div className="flex flex-col items-center text-center py-10 gap-4">
                  <CheckCircle2 className="w-14 h-14 text-green-500" />
                  <h3 className="text-xl font-bold">Message sent!</h3>
                  <p className="text-muted-foreground">
                    Thanks for reaching out. We'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-2 text-sm text-primary underline underline-offset-4"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                      Your Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="John Smith"
                      value={form.name}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="john@company.com"
                      value={form.email}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                    />
                  </div>

                  {/* Service dropdown */}
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-foreground mb-1.5">
                      Service You Need
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={form.service}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Select a service...</option>
                      {SERVICE_OPTIONS.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      placeholder="Tell us about your project, timeline, and goals..."
                      value={form.message}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none"
                    />
                  </div>

                  {/* reCAPTCHA v2 */}
                  <div>
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      sitekey={RECAPTCHA_SITE_KEY}
                      onChange={(token) => setRecaptchaToken(token)}
                      onExpired={() => setRecaptchaToken(null)}
                    />
                  </div>

                  {/* Error message */}
                  {status === "error" && (
                    <div className="flex items-center gap-2 text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      Something went wrong. Please try again or email us directly.
                    </div>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === "sending" || !recaptchaToken}
                    className="w-full btn-gradient text-white font-semibold py-3.5 rounded-xl flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {status === "sending" ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApexContact;
