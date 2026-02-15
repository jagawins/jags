const items = [
  { title: "AI Capital Discipline", line: "Realized value over projected promise." },
  { title: "Governance as Architecture", line: "Design before deployment." },
  { title: "Institutional Adoption", line: "Usage as the primary KPI." },
];

const ValueSnapshot = () => {
  return (
    <section className="border-t border-b border-border">
      <div className="container-narrow py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
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
