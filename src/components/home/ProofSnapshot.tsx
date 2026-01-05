const proofPoints = [
  {
    metric: "2",
    label: "Companies Sold",
    description: "Healthcare and technology ventures successfully acquired",
  },
  {
    metric: "3",
    label: "Live Platforms",
    description: "Production systems serving real users in complex domains",
  },
  {
    metric: "15+",
    label: "Years Operating",
    description: "Building, governing, and scaling decision systems",
  },
];

const ProofSnapshot = () => {
  return (
    <section className="py-20 md:py-28 border-t border-border">
      <div className="container-narrow">
        <p className="tag-outcome mb-12">Proof Snapshot</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
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
      </div>
    </section>
  );
};

export default ProofSnapshot;
