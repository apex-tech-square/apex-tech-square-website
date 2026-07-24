import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

const ApexHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border/60 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo — icon + text in Clash Display */}
          <a href="/" className="flex items-center gap-2.5 group">
            <img
              src="/apex-tech-logo.svg"
              alt=""
              aria-hidden="true"
              className="h-8 w-8 flex-shrink-0"
            />
            <span className="font-clash font-bold text-xl md:text-2xl tracking-tight leading-none">
              ApexTech <span className="gradient-text">Square</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
              >
                {link.label}
                <span className="absolute bottom-0 left-4 right-4 h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
            ))}
          </nav>

          {/* Right: Theme Toggle + CTA */}
          <div className="flex items-center gap-2 md:gap-3">
            <button
              onClick={toggleTheme}
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              className="w-9 h-9 rounded-full border border-border/60 bg-secondary/60 hover:bg-secondary hover:border-primary/40 flex items-center justify-center transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 text-muted-foreground" aria-hidden="true" />
              ) : (
                <Moon className="w-4 h-4 text-muted-foreground" aria-hidden="true" />
              )}
            </button>

            <a
              href="https://cal.com/apextech-square/15min"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex btn-gradient px-5 py-2.5 rounded-full text-sm font-semibold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              Get a Free Consultation
            </a>

            {/* Mobile toggle */}
            <button
              className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-background/95 backdrop-blur-xl border-b border-border/60`}
      >
        <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/40 rounded-lg transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://cal.com/apextech-square/15min"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 btn-gradient px-5 py-3 rounded-full text-sm font-semibold text-white text-center"
          >
            Get a Free Consultation
          </a>
        </nav>
      </div>
    </header>
  );
};

export default ApexHeader;
