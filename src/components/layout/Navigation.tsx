import { Link, useLocation } from "react-router-dom";
import { Linkedin } from "lucide-react";
import logo from "@/assets/logo.svg";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/ai-capital-scale", label: "AI Capital & Scale" },
  { href: "/principles", label: "Principles" },
  { href: "/writing", label: "Writing" },
  { href: "/speaking", label: "Speaking" },
  { href: "/axiva-daily-briefing", label: "GPT" },
  { href: "/about", label: "About" },
];

const Navigation = () => {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/40">
      <nav className="container-narrow">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link 
            to="/" 
            className="flex items-center gap-3"
          >
            <img 
              src={logo} 
              alt="Jag Mariappan Logo" 
              className="h-10 md:h-12 w-auto"
            />
            <div className="flex flex-col">
              <span className="font-serif text-lg md:text-xl font-medium text-foreground hover:text-primary transition-colors">
                Jag Mariappan
              </span>
              <span className="text-[10px] md:text-xs text-muted-foreground/70 tracking-wide">
                Stanford Medicine • Harvard Business School
              </span>
            </div>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {navLinks.slice(1).map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className={`text-sm tracking-wide transition-colors ${
                      location.pathname === link.href
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            
            <div className="flex items-center gap-3 pl-4 border-l border-border/60">
              <a
                href="https://www.linkedin.com/in/jagawins/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://myjmr.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                Blog
              </a>
              <a
                href="https://medium.com/@jagawins/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                Insights
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
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
          <ul className="container-narrow py-6 space-y-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className={`block text-base transition-colors ${
                    location.pathname === link.href
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </details>
    </div>
  );
};

export default Navigation;
