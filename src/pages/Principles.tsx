import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
const principles = [
  {
    title: "Clarity precedes speed",
    description:
      "Ambiguity creates friction that compounds exponentially. Before accelerating, ensure every stakeholder shares the same definition of success. The time invested in alignment always returns multiples in execution velocity.",
  },
  {
    title: "Decisions beat consensus",
    description:
      "Organizations stall when everyone must agree. My role is to gather the right inputs, make the call, and own the outcome. Reversible decisions should be made quickly; irreversible ones deserve deliberation—but both require someone willing to decide.",
  },
  {
    title: "Systems outlast heroics",
    description:
      "Individual brilliance doesn't scale. Build processes, documentation, and infrastructure that perform regardless of who operates them. A good system makes exceptional outcomes repeatable and ordinary performers effective.",
  },
  {
    title: "Constraints enable creativity",
    description:
      "Unlimited resources breed mediocrity. The most elegant solutions emerge from working within boundaries—regulatory requirements, budget limits, technical debt. Embrace constraints as the architecture of innovation.",
  },
  {
    title: "Measure what matters",
    description:
      "Dashboards full of vanity metrics obscure reality. Identify the three to five numbers that genuinely indicate progress toward your goal. Report them relentlessly and let them drive uncomfortable conversations.",
  },
  {
    title: "Exit with intention",
    description:
      "Every initiative should have a defined end state—whether acquisition, transition, or graceful sunset. Building without an exit plan is building a trap. Know when success looks like moving on.",
  },
];

const Principles = () => {
  return (
    <Layout>
      <SEO 
        title="Principles | Jag Mariappan's Leadership & Governance Framework"
        description="The leadership principles and operating values behind Jag Mariappan's approach to healthcare AI governance, enterprise transformation, and team building."
        keywords="Jag Mariappan principles, leadership philosophy, executive decision making, systems thinking, healthcare AI leadership, operational excellence"
        url="https://jagmariappan.com/principles"
      />
      <section className="section-spacing">
        <div className="container-narrow">
          <div className="max-w-3xl mb-16 animate-fade-in">
            <h1 className="heading-display text-foreground mb-6">
              Operating Principles
            </h1>
            <p className="body-large text-muted-foreground">
              The documented beliefs that govern how I build, lead, and make decisions.
            </p>
          </div>

          <figure className="max-w-3xl mb-16 border-l-4 border-primary pl-6 py-2 animate-fade-in">
            <blockquote className="font-serif text-2xl md:text-3xl text-foreground leading-snug italic">
              "AI systems can't scale without earning the trust of customers, employees, executives, and regulators. That requires governance."
            </blockquote>
            <figcaption className="mt-4 text-sm text-muted-foreground tracking-wide uppercase">
              — Jag Mariappan
            </figcaption>
          </figure>

          <div className="space-y-0">
            {principles.map((principle, index) => (
              <article
                key={index}
                className="border-t border-border py-12 md:py-16 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16">
                  <div className="lg:col-span-1">
                    <span className="font-serif text-3xl text-muted-foreground/40">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="lg:col-span-11">
                    <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-4">
                      {principle.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed max-w-3xl text-lg">
                      {principle.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Principles;
