import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const featuredWork = [
  {
    name: "Bairo Healthcare",
    outcome: "Sold",
    role: "Founder & CEO",
  },
  {
    name: "VerityAxis",
    outcome: "Sold",
    role: "Co-Founder",
  },
  {
    name: "Axora",
    outcome: "Live",
    role: "Founder",
  },
  {
    name: "Medhara",
    outcome: "Live",
    role: "Founder",
  },
];

const RecentWork = () => {
  return (
    <section className="section-spacing border-t border-border">
      <div className="container-narrow">
        <div className="flex items-end justify-between mb-12">
          <p className="tag-outcome">Selected Work</p>
          <Link 
            to="/work" 
            className="flex items-center gap-2 text-sm link-executive"
          >
            View all work
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        
        <div className="space-y-0">
          {featuredWork.map((work, index) => (
            <Link 
              key={index}
              to="/work"
              className="group block border-b border-border py-8 transition-colors hover:bg-muted/30"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-serif text-xl md:text-2xl font-medium text-foreground group-hover:text-primary transition-colors">
                    {work.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {work.role}
                  </p>
                </div>
                <span className="tag-outcome shrink-0 mt-1">
                  {work.outcome}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentWork;
