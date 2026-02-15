import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const practiceAreas = [
  {
    name: "AI Capital Allocation & Modeling",
    description: "Frameworks that price adoption risk and governance drag into investment decisions.",
  },
  {
    name: "Governance Architecture for Regulated Systems",
    description: "Scalable governance that enables deployment, not just compliance.",
  },
  {
    name: "Institutional AI Adoption & Distribution",
    description: "Turning pilots into repeated, measurable institutional usage.",
  },
  {
    name: "Enterprise Operating Model Design",
    description: "Partner-led structures that compound operating leverage across portfolios.",
  },
  {
    name: "Founder-Operator Leadership in Tech & Healthcare",
    description: "Building, scaling, and exiting ventures at the intersection of AI and healthcare.",
  },
];

const RecentWork = () => {
  return (
    <section className="section-spacing border-t border-border">
      <div className="container-narrow">
        <div className="flex items-end justify-between mb-12">
          <p className="tag-outcome">Practice Areas</p>
          <Link 
            to="/work" 
            className="flex items-center gap-2 text-sm link-executive"
          >
            View all work
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        
        <div className="space-y-0">
          {practiceAreas.map((area, index) => (
            <Link 
              key={index}
              to="/work"
              className="group block border-b border-border py-8 transition-colors hover:bg-muted/30"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-serif text-xl md:text-2xl font-medium text-foreground group-hover:text-primary transition-colors">
                    {area.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {area.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentWork;
