import { Zap, Linkedin, Mail, ArrowRight } from "lucide-react";

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "About", href: "#about" },
  { name: "Pricing", href: "#pricing" },
  { name: "Process", href: "#process" },
  { name: "FAQ", href: "#faq" },
];

const ApexFooter = () => {
  return (
    <footer className="relative border-t border-border/50">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-px"
        style={{ background: "linear-gradient(to right, transparent, hsl(221 83% 53% / 0.5), transparent)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA Banner */}
        <div className="py-12 border-b border-border/40">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-1">
                Ready to build something{" "}
                <span className="gradient-text">extraordinary?</span>
              </h3>
              <p className="text-muted-foreground text-sm">
                Free consultation — no commitment, no pressure.
              </p>
            </div>
            <a
              href="https://cal.com/apextechsquare/15min?user=apextechsquare"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gradient text-white font-semibold px-7 py-3.5 rounded-full flex items-center gap-2 group flex-shrink-0"
            >
              Get a Free Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Main Footer */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 py-14">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="/" className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg gradient-bg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold">
                ApexTech <span className="gradient-text">Square</span>
              </span>
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-xs">
              Empowering businesses with innovative solutions. Let's create
              something amazing together.
            </p>

            {/* Social + Email */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/apextechsquare/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg bg-secondary border border-border hover:border-primary/40 hover:bg-primary/10 flex items-center justify-center transition-all"
              >
                <Linkedin className="w-4 h-4 text-muted-foreground hover:text-primary transition-colors" />
              </a>
              <a
                href="mailto:hello@apextechsquare.com"
                aria-label="Email"
                className="w-9 h-9 rounded-lg bg-secondary border border-border hover:border-primary/40 hover:bg-primary/10 flex items-center justify-center transition-all"
              >
                <Mail className="w-4 h-4 text-muted-foreground hover:text-primary transition-colors" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Navigation</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors hover:translate-x-0.5 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Accepted Payments */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Accepted Payments</h4>
            <div className="space-y-3">
              {/* Payoneer */}
              <a
                href="https://www.payoneer.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 glass-card border border-border/50 rounded-xl px-4 py-3 hover:border-primary/30 transition-all group w-fit"
              >
                <span className="font-bold text-sm">
                  <span className="text-red-500">P</span>
                  <span className="text-yellow-400">a</span>
                  <span className="text-blue-400">y</span>
                  <span className="text-green-400">o</span>
                  <span className="text-red-400">n</span>
                  <span className="text-foreground">eer</span>
                </span>
              </a>

              {/* Upwork */}
              <a
                href="https://www.upwork.com/freelancers/~0166c489ac5524df1e"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 glass-card border border-border/50 rounded-xl px-4 py-3 hover:border-primary/30 transition-all group w-fit"
              >
                <span className="font-black text-sm" style={{ color: "#14a800" }}>Up</span>
                <span className="font-bold text-sm text-foreground">work</span>
              </a>
            </div>

            <div className="mt-5">
              <p className="text-xs text-muted-foreground mb-1">Contact</p>
              <a
                href="mailto:hello@apextechsquare.com"
                className="text-sm text-accent hover:underline"
              >
                hello@apextechsquare.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/40 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© 2025 Apextech Square. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="https://www.linkedin.com/company/apextechsquare/" target="_blank" rel="noopener noreferrer"
              className="hover:text-foreground transition-colors">LinkedIn</a>
            <a href="mailto:hello@apextechsquare.com"
              className="hover:text-foreground transition-colors">hello@apextechsquare.com</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ApexFooter;
