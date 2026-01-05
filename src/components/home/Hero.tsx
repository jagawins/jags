import jagHeadshot from "@/assets/jag-headshot.jpeg";

const Hero = () => {
  return (
    <section className="py-24 md:py-32 lg:py-40">
      <div className="container-narrow">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <div className="lg:col-span-8 order-2 lg:order-1">
            <h1 
              className="heading-display text-foreground mb-8 animate-fade-in"
              style={{ opacity: 0, animationFillMode: 'forwards' }}
            >
              I design and scale decision systems in complex healthcare and AI environments.
            </h1>
            <p 
              className="body-large text-muted-foreground max-w-2xl animate-fade-in"
              style={{ opacity: 0, animationDelay: '150ms', animationFillMode: 'forwards' }}
            >
              Executive operator with a record of building, governing, and exiting real systems.
            </p>
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
                className="w-full h-full object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
