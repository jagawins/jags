import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border">
      <div className="container-narrow py-12 md:py-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="space-y-2">
            <p className="font-serif text-lg font-medium">Jag Mariappan</p>
            <p className="text-sm text-muted-foreground">
              Executive operator. Builder. Exit architect.
            </p>
          </div>
          
          <div className="flex flex-col md:items-end gap-4">
            <div className="flex items-center gap-6 text-sm">
              <a
                href="https://www.linkedin.com/in/jagawins/"
                target="_blank"
                rel="noopener noreferrer"
                className="link-executive"
              >
                LinkedIn
              </a>
              <a
                href="https://myjmr.org"
                target="_blank"
                rel="noopener noreferrer"
                className="link-executive"
              >
                Blog
              </a>
              <Link to="/about" className="link-executive">
                Connect
              </Link>
            </div>
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Jag Mariappan. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
