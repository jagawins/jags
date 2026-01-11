import { Link } from "react-router-dom";
import { Award } from "lucide-react";

const awards = [
  {
    title: "ISP Star Award",
    issuer: "Stanford Medicine",
    date: "2025",
    featured: true,
  },
  {
    title: "IBM Outstanding Contributor Award",
    issuer: "IBM Corp",
    date: "Mar 2013",
  },
  {
    title: "IBM Eminence & Excellence Award",
    issuer: "IBM Corp",
    date: "Dec 2012",
  },
  {
    title: "IBM means Service Award",
    issuer: "IBM Corp",
    date: "Oct 2010",
  },
  {
    title: "IBM Bravo Award",
    issuer: "IBM Corp",
    date: "Jan 2009",
  },
  {
    title: "MBA Graduate Recipient at Beta Gamma Sigma",
    issuer: "Beta Gamma Sigma & University of South Florida",
    description: "Highest recognition a business student can receive in an AACSB-accredited program",
  },
  {
    title: "Phi Kappa Phi Society",
    issuer: "University of South Florida",
    description: "Honor society membership for academic excellence",
  },
];

const Awards = () => {
  return (
    <section className="py-20 border-t border-border">
      <div className="container-narrow">
        <div className="flex items-center justify-between mb-10">
          <h2 className="heading-section text-foreground">Honors & Awards</h2>
          <Link 
            to="/about" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            View full profile →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {awards.map((award, index) => (
            <div
              key={index}
              className={`p-6 border transition-colors ${
                award.featured
                  ? "border-primary bg-primary/5 hover:bg-primary/10"
                  : "border-border hover:border-muted-foreground"
              }`}
            >
              <div className="flex items-start gap-3 mb-3">
                <Award 
                  className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                    award.featured ? "text-primary" : "text-muted-foreground"
                  }`} 
                />
                <div className="flex-1">
                  <h3 className="font-medium text-foreground leading-snug">
                    {award.title}
                  </h3>
                  {award.date && (
                    <span className="text-xs text-muted-foreground mt-1 block">
                      {award.date}
                    </span>
                  )}
                </div>
              </div>
              <p className="text-sm text-muted-foreground pl-8">
                {award.issuer}
              </p>
              {award.description && (
                <p className="text-xs text-muted-foreground/80 pl-8 mt-2 italic">
                  {award.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
