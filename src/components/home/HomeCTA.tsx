import { Link } from "react-router-dom";

const HomeCTA = () => {
  return (
    <section className="section-spacing border-t border-border">
      <div className="container-narrow text-center max-w-2xl mx-auto">
        <p className="body-large text-foreground mb-6">
          I advise executives and institutions on AI capital allocation, governance design, and scaling strategies. If you are serious about durable AI adoption, let's talk.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {["Speak", "Advise", "Collaborate"].map((label) => (
            <Link
              key={label}
              to="/about#contact"
              className="px-5 py-2.5 text-sm font-medium border border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeCTA;
