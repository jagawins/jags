const capabilities = [
  {
    title: "Board Governance",
    description: "Translating operational complexity into board-level clarity — risk frameworks, fiduciary reporting, and governance structures that executives and directors can act on.",
  },
  {
    title: "Alliances",
    description: "Designing co-sell frameworks that turn technology partners into primary growth engines.",
  },
  {
    title: "Deal Governance",
    description: "Establishing clear rules of engagement and decision rights to protect margins and accelerate velocity.",
  },
  {
    title: "Partner Ops",
    description: "Implementing the telemetry and PRM stacks needed to track attribution and partner-sourced pipeline.",
  },
];

const PartnerOperations = () => {
  return (
    <section className="py-20 md:py-28 border-t border-border">
      <div className="container-narrow">
        <p className="tag-outcome mb-6">Executive & Board-Level Capabilities</p>
        <p
          className="body-large text-muted-foreground max-w-2xl mb-12 animate-fade-in"
          style={{ opacity: 0, animationDelay: '150ms', animationFillMode: 'forwards' }}
        >
          C-suite and board-ready execution across governance, alliances, and operational infrastructure. This moves beyond "relationships" into structured operating facts.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
          {capabilities.map((capability, index) => (
            <div 
              key={index}
              className="animate-fade-in"
              style={{ opacity: 0, animationDelay: `${300 + index * 150}ms`, animationFillMode: 'forwards' }}
            >
              <p className="text-lg font-medium text-foreground mb-3">
                {capability.title}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {capability.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerOperations;
