const items = [
  { title: "Technical Execution", line: "Close enough to the architecture to earn engineering trust." },
  { title: "Strategic Vision", line: "Multi-year AI platform thinking grounded in business outcomes." },
  { title: "Organizational Adoption", line: "Change leadership that makes AI stick across the enterprise." },
  { title: "Research Informatics", line: "Data infrastructure built for clinical and operational truth." },
];

const ValueSnapshot = () => {
  return (
    <section className="border-t border-b border-border">
      <div className="container-narrow py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {items.map((item) => (
            <div key={item.title}>
              <h3 className="font-serif text-lg font-medium text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground">{item.line}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueSnapshot;
