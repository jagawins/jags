import { Link } from "react-router-dom";
import jagHeadshot from "@/assets/jag-headshot.jpeg";

const Hero = () => {
  return (
    <section className="py-24 md:py-32 lg:py-40">
      <div className="container-narrow">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <div className="lg:col-span-8 order-2 lg:order-1">
            <h1 
              className="heading-display text-foreground mb-6 animate-fade-in"
              style={{ opacity: 0, animationFillMode: 'forwards' }}
            >
              Jag Mariappan: Driving Operating Leverage through Partner-Led Growth.
            </h1>
            <p 
              className="body-large text-muted-foreground max-w-2xl mb-10 animate-fade-in"
              style={{ opacity: 0, animationDelay: '150ms', animationFillMode: 'forwards' }}
            >
              Architecting scalable decision systems and deal governance for Healthcare and AI. Harvard Business School Alumnus delivering operating leverage via $150M+ portfolios in regulated markets.
            </p>

            {/* Navigation buttons */}
            <div 
              className="flex flex-wrap gap-3 animate-fade-in"
              style={{ opacity: 0, animationDelay: '300ms', animationFillMode: 'forwards' }}
            >
              <Link
                to="/work"
                className="px-5 py-2.5 text-sm font-medium border border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors"
              >
                Work Record
              </Link>
              <Link
                to="/principles"
                className="px-5 py-2.5 text-sm font-medium border border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors"
              >
                Operating Judgment
              </Link>
              <Link
                to="/writing"
                className="px-5 py-2.5 text-sm font-medium border border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors"
              >
                Selected Thinking
              </Link>
            </div>
          </div>

          {/* Headshot */}
          <div 
            className="lg:col-span-4 order-1 lg:order-2 animate-fade-in"
            style={{ opacity: 0, animationDelay: '100ms', animationFillMode: 'forwards' }}
          >
            <div className="relative w-40 h-40 md:w-48 md:h-48 lg:w-full lg:aspect-square mx-auto lg:mx-0">
              <img
                src={jagHeadshot}
                alt="Jag Mariappan - Executive Operator"
                className="w-full h-full object-cover rounded-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
