const Hero = () => {
  return (
    <section className="py-24 md:py-32 lg:py-40">
      <div className="container-narrow">
        <div className="max-w-4xl">
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
      </div>
    </section>
  );
};

export default Hero;
