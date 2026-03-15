import { Link } from "react-router-dom";
import jagHeadshot from "@/assets/jag-headshot.jpeg";

const flowSteps = ["Capital", "Governance", "Adoption", "Scale"];

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
              Senior Director and Institutional Operator Architecting AI Capital, Governance, and Scale
            </h1>
            <p 
              className="body-large text-muted-foreground max-w-2xl mb-4 animate-fade-in"
              style={{ opacity: 0, animationDelay: '150ms', animationFillMode: 'forwards' }}
            >
              Designing and deploying AI systems that survive regulatory scrutiny, align with capital discipline, and scale across complex healthcare enterprises.
            </p>
            <p 
              className="text-base text-muted-foreground max-w-2xl mb-6 italic animate-fade-in"
              style={{ opacity: 0, animationDelay: '200ms', animationFillMode: 'forwards' }}
            >
              From funding decisions to governance architecture to real-world adoption — I build AI that compounds inside regulated systems.
            </p>

            {/* Visual flow diagram */}
            <div 
              className="flex items-center gap-2 mb-10 animate-fade-in"
              style={{ opacity: 0, animationDelay: '250ms', animationFillMode: 'forwards' }}
            >
              {flowSteps.map((step, i) => (
                <span key={step} className="flex items-center gap-2">
                  <span className="text-xs font-medium tracking-widest uppercase text-muted-foreground">
                    {step}
                  </span>
                  {i < flowSteps.length - 1 && (
                    <span className="text-muted-foreground/50">→</span>
                  )}
                </span>
              ))}
            </div>

            {/* Navigation buttons */}
            <div 
              className="flex flex-wrap gap-3 animate-fade-in"
              style={{ opacity: 0, animationDelay: '300ms', animationFillMode: 'forwards' }}
            >
              <Link
                to="/ai-capital-scale"
                className="px-5 py-2.5 text-sm font-medium border border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors"
              >
                Explore AI Capital & Scale
              </Link>
              <Link
                to="/work"
                className="px-5 py-2.5 text-sm font-medium border border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors"
              >
                View Experience
              </Link>
            </div>
          </div>

          {/* Headshot */}
          <div 
            className="lg:col-span-4 order-1 lg:order-2 animate-fade-in"
            style={{ opacity: 0, animationDelay: '100ms', animationFillMode: 'forwards' }}
          >
            <div className="relative w-44 h-44 md:w-52 md:h-52 lg:w-56 lg:h-56 mx-auto lg:mx-0">
              <img
                src={jagHeadshot}
                alt="Jag Mariappan - Executive Operator"
                className="w-full h-full object-cover object-top rounded-full border-2 border-border"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
