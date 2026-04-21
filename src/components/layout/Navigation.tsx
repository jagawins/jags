import { Link, useLocation } from "react-router-dom";
import { Linkedin, ChevronDown } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.svg";

type NavItem = { href: string; label: string; description?: string };

const navGroups: { label: string; items: NavItem[] }[] = [
  {
    label: "What I've Built",
    items: [
      { href: "/work", label: "Work & Experience", description: "25+ years operating across regulated systems" },
      { href: "/ai-capital-scale", label: "AI Capital & Scale", description: "Capital allocation doctrine" },
      { href: "/healthcare-ai-governance-framework", label: "Governance Framework", description: "Pillar: AI governance for health systems" },
      { href: "/measuring-roi-of-ai-in-healthcare", label: "Measuring ROI", description: "Pillar: financial discipline for AI" },
      { href: "/agentic-ai-in-clinical-and-operational-workflows", label: "Agentic AI in Healthcare", description: "Pillar: clinical and operational workflows" },
      { href: "/case-studies/medtronic-770-to-780", label: "Medtronic 770G → 780G", description: "Case study" },
    ],
  },
  {
    label: "Thoughts & Speaking",
    items: [
      { href: "/principles", label: "Operating Principles" },
      { href: "/writing", label: "Writing & Insights" },
      { href: "/speaking", label: "Speaking & Engagements" },
      { href: "/axiva-daily-briefing", label: "GPT: Axiva Briefing" },
    ],
  },
  {
    label: "Connect",
    items: [
      { href: "/about", label: "About & Contact" },
      { href: "/faq", label: "FAQ" },
    ],
  },
];

const Navigation = () => {
  const location = useLocation();
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/40">
      <nav className="container-narrow">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Jag Mariappan Logo" className="h-10 md:h-12 w-auto" />
            <div className="flex flex-col">
              <span className="font-serif text-lg md:text-xl font-medium text-foreground hover:text-primary transition-colors">
                Jag Mariappan
              </span>
              <span className="text-[10px] md:text-xs text-muted-foreground/70 tracking-wide">
                Stanford Medicine • Harvard Business School
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-2">
            <ul className="flex items-center gap-1">
              {navGroups.map((group) => (
                <li
                  key={group.label}
                  className="relative"
                  onMouseEnter={() => setOpenGroup(group.label)}
                  onMouseLeave={() => setOpenGroup(null)}
                >
                  <button
                    className="flex items-center gap-1 px-3 py-2 text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors"
                    aria-expanded={openGroup === group.label}
                  >
                    {group.label}
                    <ChevronDown className="w-3 h-3" />
                  </button>
                  {openGroup === group.label && (
                    <div className="absolute left-0 top-full pt-2 w-72">
                      <div className="bg-background border border-border shadow-md rounded-sm overflow-hidden">
                        <ul className="py-2">
                          {group.items.map((item) => (
                            <li key={item.href}>
                              <Link
                                to={item.href}
                                className={`block px-4 py-2.5 text-sm transition-colors hover:bg-muted/60 ${
                                  location.pathname === item.href ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                                }`}
                              >
                                <div className="font-medium text-foreground">{item.label}</div>
                                {item.description && (
                                  <div className="text-xs text-muted-foreground mt-0.5">{item.description}</div>
                                )}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3 pl-3 ml-2 border-l border-border/60">
              <a
                href="https://www.linkedin.com/in/jagawins/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <Link
                to="/about#contact"
                className="px-4 py-2 text-sm font-medium bg-foreground text-background hover:bg-foreground/85 transition-colors rounded-sm"
              >
                Let's talk
              </Link>
            </div>
          </div>

          <MobileNav />
        </div>
      </nav>
    </header>
  );
};

const MobileNav = () => {
  const location = useLocation();

  return (
    <div className="md:hidden">
      <details className="group">
        <summary className="list-none cursor-pointer p-2 -mr-2">
          <div className="flex flex-col gap-1.5 w-5">
            <span className="block h-0.5 bg-foreground transition-transform group-open:rotate-45 group-open:translate-y-2" />
            <span className="block h-0.5 bg-foreground group-open:opacity-0 transition-opacity" />
            <span className="block h-0.5 bg-foreground transition-transform group-open:-rotate-45 group-open:-translate-y-2" />
          </div>
        </summary>
        <div className="absolute left-0 right-0 top-full bg-background border-b border-border shadow-sm">
          <div className="container-narrow py-6 space-y-6">
            {navGroups.map((group) => (
              <div key={group.label}>
                <p className="tag-outcome mb-3">{group.label}</p>
                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        to={item.href}
                        className={`block text-base transition-colors ${
                          location.pathname === item.href ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <Link
              to="/about#contact"
              className="block text-center px-4 py-3 text-sm font-medium bg-foreground text-background hover:bg-foreground/85 transition-colors rounded-sm"
            >
              Let's talk
            </Link>
          </div>
        </div>
      </details>
    </div>
  );
};

export default Navigation;
