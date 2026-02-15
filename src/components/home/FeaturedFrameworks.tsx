import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const frameworks = [
  {
    title: "Capital Allocation Model",
    description: "A disciplined decision framework for AI investments in regulated enterprises.",
    href: "/ai-capital-scale#capital-allocation",
  },
  {
    title: "Institutional Adoption Playbook",
    description: "How AI actually scales once funded — from pilots to durable institutional usage.",
    href: "/ai-capital-scale#adoption-playbook",
  },
  {
    title: "AI Native Enterprise Essays",
    description: "Long-form thinking on governance, distribution, and capital discipline.",
    href: "/ai-capital-scale",
  },
];

const FeaturedFrameworks = () => {
  return (
    <section className="section-spacing border-t border-border">
      <div className="container-narrow">
        <p className="tag-outcome mb-12">Featured Frameworks</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {frameworks.map((fw) => (
            <Link
              key={fw.title}
              to={fw.href}
              className="group block border border-border p-6 hover:bg-muted/30 transition-colors"
            >
              <h3 className="font-serif text-lg font-medium text-foreground group-hover:text-primary transition-colors mb-2">
                {fw.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">{fw.description}</p>
              <span className="inline-flex items-center gap-1 text-sm text-primary">
                Explore <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedFrameworks;
