const dimensions = [
  {
    label: "Technical Credibility",
    description: "Firmware over-the-air deployment at Medtronic. Databricks and HIPAA/SOC 2 infrastructure at PrismOS. Enough architecture fluency to evaluate tradeoffs and hold engineering accountable.",
  },
  {
    label: "Strategic Vision",
    description: "FURM AI Governance Framework. Multi-year digital health roadmaps at Stanford Medicine. Two ventures built and exited. AI strategy that compounds, not just pilots that stall.",
  },
  {
    label: "Commercial Judgment",
    description: "$154M P&L owned at IBM. 22% CAC reduction at portfolio scale. 30-day deal cycle compression. Every AI investment tied to a measurable business outcome.",
  },
  {
    label: "Change Leadership",
    description: "50,000-patient adoption at Bairo Healthcare. Cross-functional alignment across clinical, IT, and executive administration at Stanford. Adoption as the primary KPI, not deployment.",
  },
];

const IntegratorPositioning = () => {
  return (
    <section className="py-20 md:py-28 border-t border-border">
      <div className="container-narrow">
        <p className="tag-outcome mb-6">The Integrator</p>
        <p
          className="body-large text-muted-foreground max-w-2xl mb-4 animate-fade-in"
          style={{ opacity: 0, animationDelay: "150ms", animationFillMode: "forwards" }}
        >
          The rarest profile in AI leadership — and the one organizations need most at an inflection point.
        </p>
        <p
          className="text-base text-muted-foreground max-w-2xl mb-12 animate-fade-in"
          style={{ opacity: 0, animationDelay: "200ms", animationFillMode: "forwards" }}
        >
          Technical credibility. Strategic vision. Commercial judgment. Change leadership. Most organizations try to assemble this across multiple hires. The Integrator is the leader where the synthesis lives in one person.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
          {dimensions.map((dim, index) => (
            <div
              key={index}
              className="border-l-2 border-primary/20 pl-6 animate-fade-in"
              style={{ opacity: 0, animationDelay: `${300 + index * 150}ms`, animationFillMode: "forwards" }}
            >
              <p className="text-lg font-medium text-foreground mb-2">{dim.label}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{dim.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntegratorPositioning;
