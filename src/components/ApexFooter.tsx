import { useState, useEffect } from "react";

const LINKEDIN_URL = "https://www.linkedin.com/company/apextechsquare/";
const UPWORK_URL   = "https://www.upwork.com/freelancers/~0166c489ac5524df1e";
const EMAIL        = "apextechsquare@gmail.com";

const services = [
  { label: "Product Design",                  href: "#services" },
  { label: "Branding Agency",                 href: "#services" },
  { label: "SaaS Development",                href: "#services" },
  { label: "No-Code Development",             href: "#services" },
  { label: "Mobile App Design & Development", href: "#services" },
  { label: "Web Design & Development",        href: "#services" },
];

const importantLinks = [
  { label: "Portfolio", href: "#portfolio" },
  { label: "About us",  href: "#about"     },
  { label: "Pricing",   href: "#pricing"   },
  { label: "FAQ",       href: "#faq"       },
];

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M88.718 45.1819C89.4592 45.1646 90.2004 45.1597 90.9415 45.1673C117.761 45.6568 115.101 70.3304 115.143 89.8002C115.161 98.1906 115.254 106.662 115.084 115.055L101.605 115.062C99.2212 115.061 96.3155 114.966 93.9759 115.085C94.0592 107.975 93.9903 100.736 93.989 93.6173L93.9897 84.5828C93.9905 78.7886 94.4923 68.4699 88.6814 65.2043C85.9369 63.6619 81.4988 63.6482 78.5155 64.4871C75.3803 65.3686 73.7853 66.8576 72.2638 69.6582C69.7195 75.6866 70.2248 82.4191 70.2239 88.8454L70.2273 104.309C70.2304 107.919 70.2819 111.611 70.1357 115.209C69.135 115.129 67.3738 115.181 66.3275 115.181L59.0902 115.183L52.1677 115.187C51.1458 115.185 50.0047 115.097 49.0188 115.166L49.0122 71.6412L49.0088 55.9644C49.0085 53.0633 48.9408 49.7968 49.0592 46.9212C54.15 46.7589 59.3304 46.9548 64.4302 46.8749C66.0017 46.8503 67.7732 46.8433 69.3229 47.0269C69.3037 48.1538 69.1642 55.1596 69.3553 55.6496L69.5715 55.6606C70.0512 55.2641 70.6725 54.3568 71.0775 53.8294C75.357 48.2576 81.7048 45.4817 88.718 45.1819Z" fill="currentColor"/>
    <path d="M14.8765 46.9351C19.1933 46.5494 24.1628 47.0177 28.5392 46.8415C30.7448 46.7527 33.5784 46.7872 35.7637 46.989C35.6543 48.7864 35.7455 51.3889 35.746 53.259L35.747 65.4741L35.7459 103.533C35.7453 106.617 35.7488 111.542 35.7108 114.805C35.7088 114.976 35.3689 115.071 35.179 115.151C30.3969 115.245 25.5909 115.156 20.8059 115.199C18.6604 115.218 16.5204 115.239 14.385 115.004C14.4777 113.827 14.3304 111.509 14.332 110.207L14.3477 98.2852L14.3463 61.495L14.3472 50.3974C14.3557 49.4727 14.3425 48.3381 14.386 47.4106C14.3985 47.1417 14.6693 47.0497 14.8765 46.9351Z" fill="currentColor"/>
    <path d="M23.767 12.9231C30.5212 12.2051 36.575 17.1073 37.2771 23.8632C37.9791 30.6191 33.0626 36.6612 26.3051 37.3473C19.5701 38.0311 13.5525 33.1344 12.8529 26.4012C12.1531 19.6679 17.0354 13.6387 23.767 12.9231Z" fill="currentColor"/>
  </svg>
);

const UpworkSocialIcon = () => (
  <svg width="18" height="18" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M45.9734 33.0099C49.7504 32.8479 53.9886 32.8933 57.7868 33.0853C58.2666 33.1095 58.5038 33.3133 58.6548 33.7649C61.5199 42.3333 65.1459 50.598 69.9296 58.2795C70.1808 58.683 70.5326 59.1326 71.0299 59.225C71.4427 59.0413 72.1886 57.0786 72.4233 56.4986C75.8508 48.0304 82.2512 41.8233 91.4302 40.2936C104.967 38.038 117.955 46.9969 120.28 60.5635C121.89 69.7116 118.718 78.7444 111.694 84.866C103.165 92.2986 91.2612 92.1945 81.4188 87.5852C80.3881 87.1024 79.0617 86.7577 78.1652 86.1038C77.8686 88.6668 77.0027 92.0936 76.5202 94.6904C75.4042 100.696 73.9726 106.781 72.9086 112.785C71.6764 112.81 60.4768 112.861 60.2488 112.675C60.1943 111.239 61.8084 104.211 62.2397 102.275C63.5129 96.5583 64.6634 90.6963 65.9557 84.9946C66.5478 82.1624 67.4307 79.0503 67.6389 76.2009C67.7064 75.2774 65.2137 71.7925 64.6077 70.837C63.4223 68.9415 62.2837 67.0171 61.1928 65.0658C60.9096 64.5658 59.6454 62.0034 59.4131 61.7879L59.2419 61.8538C58.8887 62.7121 58.9221 67.205 58.7728 68.6214C58.0998 75.4373 54.9469 81.4264 49.6349 85.7775C39.1426 94.372 23.5877 92.5188 15.1474 81.9265C12.7106 78.9083 11.0282 75.3528 10.2395 71.5545C9.57262 68.3255 9.6857 63.9538 9.68456 60.6383L9.68503 48.483L9.66818 39.7701C9.66302 37.6423 9.59837 35.3793 9.83408 33.273C10.8992 33.1078 12.9039 33.1416 14.0276 33.1378C16.6383 33.1364 19.2491 33.1494 21.8598 33.1769C21.9944 40.9351 22.0246 48.6948 21.9504 56.4538C21.9491 60.2819 21.8161 64.6351 22.1627 68.4411C22.2598 69.5059 23.3802 71.9442 24.0149 72.8313C25.9351 75.4967 28.8271 77.2993 32.0656 77.8493C37.8494 78.7794 43.5853 75.0219 45.2386 69.5023C45.9522 67.1195 45.8399 62.6546 45.8418 60.1191L45.8392 42.0178C45.8371 39.9269 45.6847 34.7948 45.9734 33.0099ZM81.6483 72.4871C85.2439 75.5208 90.7325 78.0497 95.5076 78.0214C106.712 77.7388 112.833 64.5335 104.643 56.3724C102.027 53.7651 98.4096 52.9304 94.7946 53.0435C94.6744 53.0473 94.5543 53.0529 94.4344 53.0601C84.6182 54.765 83.2919 64.1186 81.6483 72.4871Z" fill="currentColor"/>
  </svg>
);

const EmailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M10.8207 19.0458C12.0595 18.927 14.1869 18.9839 15.4642 18.9864L23.3858 18.9973L49.4467 18.9965L94.0456 18.9957L108.605 18.9993C110.692 18.999 120.27 18.4772 121.066 20.4415C120.273 21.4985 118.683 23.008 117.697 23.9928L112.185 29.4833L93.2082 48.3719C89.1051 52.6674 84.6629 56.791 80.4987 61.0427C77.4383 64.1673 74.3087 67.3764 70.9684 70.1808C68.3582 72.3722 65.5754 72.9303 62.2447 72.5098C58.0002 71.9743 54.8948 68.4168 52.0364 65.5664L45.7946 59.3433L25.8918 39.543L12.9771 26.6765C11.3155 25.0213 9.64615 23.3613 7.9929 21.6967C7.49397 21.1943 7.00588 20.7918 7.12038 20.055C7.6864 19.3538 9.91688 19.1499 10.8207 19.0458Z" fill="currentColor"/>
    <path d="M82.4326 69.4895L82.489 69.5234C84.9225 71.014 88.3778 74.8537 90.5204 76.9847L101.814 88.204L116.17 102.465C117.126 103.432 120.601 106.644 121.029 107.594C121.002 109.545 111.257 109.05 109.653 109.049L93.3129 109.041H38.2799L21.0961 109.046C19.2635 109.05 7.07538 109.616 6.91016 107.536C7.60071 106.488 10.7732 103.381 11.776 102.386L20.3785 93.8775L36.1531 78.2291C37.9654 76.4303 43.3493 70.6685 45.2069 69.5829C46.0948 69.8008 49.0001 73.0634 49.9081 73.93C53.9453 77.7835 58.3955 80.2055 64.0748 80.155C72.6986 80.0781 76.9055 75.1043 82.4326 69.4895Z" fill="currentColor"/>
    <path d="M126.717 102.358C124.447 100.047 121.928 97.6769 119.603 95.3659L100.061 75.9505L93.0418 68.9863C92.2596 68.2108 88.4244 64.7008 88.4612 63.8489C89.3263 62.4043 94.8246 57.1539 96.3615 55.6248L113.28 38.7903L121.716 30.3888C122.696 29.4125 125.231 26.7785 126.251 26.0719C126.972 25.9762 127.116 26.7147 127.907 27.2768L128 27.3415V100.591C127.269 100.916 127.057 101.634 126.717 102.358Z" fill="currentColor"/>
    <path d="M0 27.181L0.0794894 27.1264C0.922425 26.5369 0.804701 26.0005 1.66051 26.0902C3.33204 27.3663 6.89332 31.0947 8.58061 32.773L21.6199 45.7493L33.5845 57.645C34.9112 58.9642 38.5784 62.4557 39.4714 63.7274C39.4307 64.1617 39.344 64.5667 39.0327 64.8874C36.914 67.0712 34.6916 69.2434 32.5339 71.3835L19.8414 83.9799L7.63627 96.1009C5.74621 97.9809 3.81189 99.9145 1.91999 101.802C1.6639 102.058 1.60698 102.016 1.29235 102.03C0.613328 101.661 0.693112 100.817 0 100.636V27.181Z" fill="currentColor"/>
  </svg>
);

const ApexFooter = () => {
  const [isLight, setIsLight] = useState(
    () => document.documentElement.getAttribute("data-theme") === "light"
  );

  useEffect(() => {
    const check = () =>
      setIsLight(document.documentElement.getAttribute("data-theme") === "light");
    const observer = new MutationObserver(check);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
    return () => observer.disconnect();
  }, []);

  return (
    <footer className="border-t border-border/30 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* ── Brand column ── */}
          <div className="lg:col-span-1 max-w-[260px]">
            <a href="/" className="flex items-center gap-2.5 mb-4">
              <img
                src="/apex-tech-logo.svg"
                alt="ApexTech Square logo"
                className="h-10 w-10 object-contain flex-shrink-0"
              />
              <span className="font-clash font-semibold text-lg leading-tight">
                ApexTech <span className="gradient-text">Square</span>
              </span>
            </a>

            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              We design and build digital products for early-stage SaaS founders.
            </p>

            <div className="flex items-center gap-3">
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg bg-secondary border border-border flex items-center justify-center transition-all text-muted-foreground hover:text-[#0077B5] hover:border-[#0077B5]/40 hover:bg-[#0077B5]/10"
              >
                <LinkedInIcon />
              </a>
              <a
                href={UPWORK_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Upwork"
                className="w-9 h-9 rounded-lg bg-secondary border border-border flex items-center justify-center transition-all text-muted-foreground hover:text-[#6FDA44] hover:border-[#6FDA44]/40 hover:bg-[#6FDA44]/10"
              >
                <UpworkSocialIcon />
              </a>
              <a
                href={`mailto:${EMAIL}`}
                aria-label="Email us"
                className="w-9 h-9 rounded-lg bg-secondary border border-border flex items-center justify-center transition-all text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/10"
              >
                <EmailIcon />
              </a>
            </div>
          </div>

          {/* ── Services column ── */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.label}>
                  <a href={s.href} className="text-sm text-foreground/75 hover:text-foreground transition-colors">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Important Links column ── */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-5">
              Important Links
            </h4>
            <ul className="space-y-3">
              {importantLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-foreground/75 hover:text-foreground transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Accepted Payments column ── */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-5">
              Accepted Payments
            </h4>
            <div className="flex flex-col gap-7">
              <a
                href="https://www.payoneer.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Payoneer"
                className="inline-block opacity-75 hover:opacity-100 transition-opacity"
              >
                <img
                  src={isLight ? "/payoneer-light.svg" : "/payoneer-dark.svg"}
                  alt="Payoneer"
                  className="h-5 w-auto"
                />
              </a>
              <a
                href={UPWORK_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Upwork"
                className="inline-block opacity-75 hover:opacity-100 transition-opacity"
              >
                <img
                  src={isLight ? "/upwork-light.svg" : "/upwork-dark.svg"}
                  alt="Upwork"
                  className="h-5 w-auto"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-border/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <p className="text-xs text-muted-foreground text-center">
            © 2026 ApexTech Square. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default ApexFooter;
