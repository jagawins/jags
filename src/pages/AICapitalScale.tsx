import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";

const AICapitalScale = () => {
  return (
    <Layout>
      <SEO
        title="AI Capital Allocation & Institutional Scale in Healthcare"
        description="Frameworks for funding, governing, and scaling AI in regulated healthcare enterprises."
        url="https://jagmariappan.com/ai-capital-scale"
      />

      {/* Hero */}
      <section className="py-20 md:py-28">
        <div className="container-narrow">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground leading-tight">
            AI Capital & Institutional Scale
          </h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl">
            How regulated enterprises fund, govern, and scale AI.
          </p>
          <p className="mt-6 text-base text-muted-foreground max-w-2xl leading-relaxed">
            Capital decides what gets funded. Governance decides what survives. Distribution decides what scales.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#capital-allocation"
              className="inline-flex items-center gap-2 px-6 py-3 border border-foreground text-foreground text-sm tracking-wide hover:bg-foreground hover:text-background transition-colors"
            >
              Capital Allocation Model
            </a>
            <a
              href="#adoption-playbook"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border text-muted-foreground text-sm tracking-wide hover:border-foreground hover:text-foreground transition-colors"
            >
              Institutional Adoption Playbook
            </a>
          </div>
        </div>
      </section>

      {/* Capital Allocation Model */}
      <section id="capital-allocation" className="py-20 md:py-28 border-t border-border">
        <div className="container-narrow">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground">
            Capital Allocation Model
          </h2>
          <p className="mt-3 text-base text-muted-foreground max-w-2xl">
            A quantitative decision discipline for AI investments in regulated healthcare.
          </p>

          <div className="mt-12 space-y-6 max-w-2xl text-base text-muted-foreground leading-relaxed">
            <p>
              Most organizations evaluate AI on technical promise.
              Few evaluate it on realized economic impact.
            </p>
            <p>
              AI investments fail not because models are weak, but because adoption friction, time to scale, and governance drag are never priced into the decision.
            </p>
            <p className="text-foreground">
              I treat AI as a capital allocation problem, not a pilot program.
            </p>
          </div>

          {/* Equation Block */}
          <div className="mt-14 bg-muted/50 border border-border rounded px-8 py-10 md:px-12 md:py-12 text-center">
            <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground leading-relaxed tracking-tight">
              Realized NPV ≈ NPV × Adoption × Time × (1 − Governance Drag)
            </p>
          </div>

          <ul className="mt-12 space-y-4 max-w-2xl text-base text-muted-foreground leading-relaxed">
            <li className="pl-4 border-l-2 border-border">
              Expected value must be risk-adjusted for real-world adoption probability.
            </li>
            <li className="pl-4 border-l-2 border-border">
              Time to operational leverage compresses or destroys return.
            </li>
            <li className="pl-4 border-l-2 border-border">
              Governance friction behaves like a tax on AI value creation.
            </li>
          </ul>

          <div className="mt-12">
            <a
              href="/docs/How-I-Decide-Where-AI-Capital-Should-Actually-Go-in-Healthcare.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-foreground text-foreground text-sm tracking-wide hover:bg-foreground hover:text-background transition-colors"
            >
              Read the Full Capital Allocation Framework
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Institutional Adoption Playbook */}
      <section id="adoption-playbook" className="py-20 md:py-28 border-t border-border">
        <div className="container-narrow">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground">
            Institutional Adoption Playbook
          </h2>
          <p className="mt-3 text-base text-muted-foreground max-w-2xl">
            How AI actually compounds inside governance-heavy systems.
          </p>

          <div className="mt-12 space-y-6 max-w-2xl text-base text-muted-foreground leading-relaxed">
            <p>
              AI does not scale because of algorithm quality.
              It scales when governance, incentives, and distribution are designed intentionally.
            </p>
            <p>
              Between 2023 and 2024, physician AI usage increased from 38 percent to 66 percent. Organizational adoption reached 71 percent. Those gains were not accidental. They followed a repeatable structure.
            </p>
          </div>

          {/* Key Signals */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-border rounded px-6 py-8 text-center">
              <p className="font-serif text-3xl md:text-4xl text-foreground">38% → 66%</p>
              <p className="mt-2 text-sm text-muted-foreground">Physician Usage</p>
            </div>
            <div className="border border-border rounded px-6 py-8 text-center">
              <p className="font-serif text-3xl md:text-4xl text-foreground">71%</p>
              <p className="mt-2 text-sm text-muted-foreground">Organizational Adoption</p>
            </div>
            <div className="border border-border rounded px-6 py-8 text-center">
              <p className="font-serif text-3xl md:text-4xl text-foreground">3.2×</p>
              <p className="mt-2 text-sm text-muted-foreground">ROI Realized</p>
            </div>
          </div>

          <ul className="mt-12 space-y-4 max-w-2xl text-base text-muted-foreground leading-relaxed">
            <li className="pl-4 border-l-2 border-border">Start with burden reduction, not capability expansion.</li>
            <li className="pl-4 border-l-2 border-border">Gate aggressively before deployment.</li>
            <li className="pl-4 border-l-2 border-border">Align incentives explicitly.</li>
            <li className="pl-4 border-l-2 border-border">Build peer network multipliers.</li>
            <li className="pl-4 border-l-2 border-border">Measure usage obsessively.</li>
          </ul>

          <p className="mt-8 text-base text-muted-foreground max-w-2xl leading-relaxed">
            AI scaling follows a compounding curve once governance friction is solved.
          </p>

          <div className="mt-12">
            <a
              href="/docs/AI_Distribution_Governance.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-foreground text-foreground text-sm tracking-wide hover:bg-foreground hover:text-background transition-colors"
            >
              Read the Institutional Playbook
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* AI Native Enterprise Essays */}
      <section className="py-20 md:py-28 border-t border-border">
        <div className="container-narrow">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground">
            AI Native Enterprise
          </h2>
          <p className="mt-3 text-base text-muted-foreground max-w-2xl">
            Ongoing essays on funding, governing, and scaling AI inside regulated systems.
          </p>

          <div className="mt-8 space-y-4 max-w-2xl text-base text-muted-foreground leading-relaxed">
            <p>
              AI transformation is not a technology upgrade.
              It is an operating model shift.
            </p>
            <p>
              These essays explore governance drag, adoption compounding, capital discipline, and executive architecture required for durable AI scale.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Why Most AI Investments Fail",
                thesis: "A breakdown of adoption discounting and governance drag in enterprise AI funding decisions.",
              },
              {
                title: "Governance Drag as Strategic Constraint",
                thesis: "Why regulatory architecture is not a blocker but a structural variable to model explicitly.",
              },
              {
                title: "Distribution Is the Proof of AI",
                thesis: "Usage metrics, time compression, and peer network multipliers as validation signals.",
              },
            ].map((essay) => (
              <div
                key={essay.title}
                className="border border-border rounded p-6 flex flex-col justify-between hover:border-foreground transition-colors group"
              >
                <div>
                  <h3 className="font-serif text-lg font-medium text-foreground">{essay.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{essay.thesis}</p>
                </div>
                <span className="mt-6 inline-flex items-center gap-1 text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  Read Essay <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Positioning Close */}
      <section className="py-20 md:py-28 border-t border-border">
        <div className="container-narrow max-w-2xl">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground">
            Why This Matters
          </h2>
          <div className="mt-8 space-y-6 text-base text-muted-foreground leading-relaxed">
            <p>
              Most health systems are funding AI projects.
              Very few are allocating AI capital.
            </p>
            <p>
              Durable AI advantage emerges when capital discipline, governance architecture, and distribution mechanics align into a single operating system.
            </p>
          </div>
          <p className="mt-10 text-sm text-muted-foreground leading-relaxed border-t border-border pt-8">
            Jag Mariappan works at the intersection of AI capital allocation, governance design, and institutional scale in regulated healthcare systems.
          </p>
          <div className="mt-10">
            <Link
              to="/about#contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-foreground text-foreground text-sm tracking-wide hover:bg-foreground hover:text-background transition-colors"
            >
              Invite Jag to Speak or Advise
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AICapitalScale;
