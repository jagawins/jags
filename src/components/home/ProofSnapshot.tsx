const proofPoints = [
  {
    metric: "2",
    label: "Ventures Acquired",
    description: "Healthcare ventures acquired by strategic buyers",
  },
  {
    metric: "5",
    label: "Live Platforms",
    description: "Production systems operating across regulated markets",
  },
  {
    metric: "$154M",
    label: "P&L Owned",
    description: "Direct P&L accountability managing enterprise portfolios at IBM across regulated markets",
  },
];

const executionNarratives = [
  {
    title: "C-Suite Reporting at Current Scale",
    domain: "Stanford Medicine",
    fact: "Reports directly to CMO and CIO with accountability for AI and digital health strategy — budget authority, vendor approval, and technology governance decisions escalated to institutional executive leadership.",
    outcome: "Presents AI governance frameworks and platform adoption metrics to institutional governance committees at board-equivalent level, closing the loop between operational execution and executive accountability.",
  },
  {
    title: "Ecosystem Scale",
    domain: "AI/Healthcare",
    fact: "Scaled a $150M+ healthcare portfolio by transitioning from direct sales to a high-leverage partner model.",
    outcome: "Reduced cost-of-acquisition (CAC) by 22% while doubling lead volume through automated partner-led workflows.",
  },
  {
    title: "Complex Deal Governance",
    domain: "Global Operations",
    fact: "Orchestrated global operations for 3 live platforms across disparate regulatory environments.",
    outcome: "Standardized deal governance across cross-functional teams, reducing contract-to-close time by 30 days.",
  },
  {
    title: "Research Informatics Infrastructure",
    domain: "Academic Health System",
    fact: "Built governed data infrastructure at Stanford Medicine spanning Databricks implementation, Qualtrics clinical workflow integration, and enterprise security governance.",
    outcome: "Established the FURM AI Governance Framework and accelerated research data access timelines — transforming unstructured clinical data into board-reportable intelligence.",
  },
];

const ProofSnapshot = () => {
  return (
    <section className="py-20 md:py-28 border-t border-border">
      <div className="container-narrow">
        <p className="tag-outcome mb-12">Operating Facts</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 mb-20">
          {proofPoints.map((point, index) => (
            <div 
              key={index} 
              className="animate-fade-in"
              style={{ opacity: 0, animationDelay: `${300 + index * 150}ms`, animationFillMode: 'forwards' }}
            >
              <p className="font-serif text-5xl md:text-6xl font-medium text-foreground mb-3">
                {point.metric}
              </p>
              <p className="text-lg font-medium text-foreground mb-2">
                {point.label}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        {/* Execution Narratives */}
        <div className="border-t border-border pt-16">
          <p className="tag-outcome mb-10">Execution Narratives</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            {executionNarratives.map((narrative, index) => (
              <div 
                key={index}
                className="animate-fade-in"
                style={{ opacity: 0, animationDelay: `${600 + index * 150}ms`, animationFillMode: 'forwards' }}
              >
                <div className="flex items-baseline gap-3 mb-4">
                  <p className="text-lg font-medium text-foreground">{narrative.title}</p>
                  <span className="text-xs text-muted-foreground uppercase tracking-wide">{narrative.domain}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                  <span className="font-medium text-foreground">The Fact:</span> {narrative.fact}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <span className="font-medium text-foreground">The Outcome:</span> {narrative.outcome}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProofSnapshot;
