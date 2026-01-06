import { Link } from "react-router-dom";
import { Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border">
      <div className="container-narrow py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Brand */}
          <div className="space-y-2">
            <p className="font-serif text-lg font-medium">Jag Mariappan</p>
            <p className="text-sm text-muted-foreground">
              Executive operator. Builder. Exit architect.
            </p>
          </div>
          
          {/* Digital Footprint */}
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-wider text-muted-foreground/70 font-medium">
              Digital Footprint
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.linkedin.com/in/jagawins/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                  <span className="text-xs text-muted-foreground/60 group-hover:text-muted-foreground transition-colors">
                    — Professional Record
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://myjmr.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <span className="w-4 h-4 flex items-center justify-center text-xs font-serif font-bold">W</span>
                  <span>WordPress</span>
                  <span className="text-xs text-muted-foreground/60 group-hover:text-muted-foreground transition-colors">
                    — Deep Logic
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://medium.com/@jagawins/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <span className="w-4 h-4 flex items-center justify-center text-xs font-serif font-bold">M</span>
                  <span>Medium</span>
                  <span className="text-xs text-muted-foreground/60 group-hover:text-muted-foreground transition-colors">
                    — Platform Authority
                  </span>
                </a>
              </li>
            </ul>
          </div>
          
          {/* Connect */}
          <div className="space-y-4 md:text-right">
            <p className="text-xs uppercase tracking-wider text-muted-foreground/70 font-medium">
              Connect
            </p>
            <div className="flex flex-col gap-2">
              <Link to="/about" className="text-sm link-executive">
                Get in Touch
              </Link>
            </div>
            <p className="text-xs text-muted-foreground pt-4">
              © {new Date().getFullYear()} Jag Mariappan
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
