import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";

const AICapitalScale = () => {
  return (
    <Layout>
      <SEO
        title="AI Capital & Institutional Scale"
        description="Frameworks for funding, governing, and scaling AI in regulated healthcare. Capital allocation model, governance architecture, and institutional adoption playbook by Jag Mariappan."
        keywords="AI capital allocation, healthcare AI governance, institutional AI adoption, governance architecture, AI scaling framework, healthcare enterprise AI, Jag Mariappan"
        url="https://jagmariappan.com/ai-capital-scale"
      />

      {/* Hero */}
      <section className="py-20 md:py-28">
        <div className="container-narrow">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground leading-tight">
            AI Capital & Institutional Scale
          </h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl">
            A framework for funding, governing, and scaling AI inside regulated enterprises.
          </p>
          <p className="mt-6 text-base text-foreground max-w-2xl leading-relaxed font-medium">
            Not pilots. Not proofs. Sustainable institutional adoption.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#capital-allocation"
              className="inline-flex items-center gap-2 px-6 py-3 border border-foreground text-foreground text-sm tracking-wide hover:bg-foreground hover:text-background transition-colors"
            >
              Explore Capital Allocation Model
            </a>
            <a
              href="#adoption-playbook"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border text-muted-foreground text-sm tracking-wide hover:border-foreground hover:text-foreground transition-colors"
            >
              Explore Adoption Playbook
            </a>
          </div>
          <p className="mt-10 text-sm text-muted-foreground max-w-2xl leading-relaxed">
            For executives funding AI initiatives. For operators scaling AI inside regulated systems. For founders building institutional adoption architecture.
          </p>
        </div>
      </section>

      {/* Capital Allocation Model */}
      <section id="capital-allocation" className="py-20 md:py-28 border-t border-border">
        <div className="container-narrow">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground">
            Capital Allocation Model
          </h2>
          <p className="mt-3 text-base text-muted-foreground max-w-2xl">
            A disciplined decision framework for AI investments.
          </p>

          <div className="mt-12 space-y-6 max-w-2xl text-base text-muted-foreground leading-relaxed">
            <p>
              Most AI initiatives fail not because algorithms are weak — but because value decay from governance friction and limited adoption is never priced into decisions.
            </p>
            <p>
              This model treats AI as a capital allocation problem. It adjusts expected value based on adoption likelihood and governance drag.
            </p>
          </div>

          {/* Equation Block */}
          <div className="mt-14 bg-muted/50 border border-border rounded px-8 py-10 md:px-12 md:py-12 text-center">
            <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground leading-relaxed tracking-tight">
              Realized NPV ≈ NPV × Adoption × Time × (1 − Governance Drag)
            </p>
          </div>

          <p className="mt-10 text-base text-foreground max-w-2xl leading-relaxed font-medium">
            The right investments maximize realized, not projected return.
          </p>

          <ul className="mt-10 space-y-4 max-w-2xl text-base text-muted-foreground leading-relaxed">
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
            How AI actually scales once funded.
          </p>

          <div className="mt-12 space-y-6 max-w-2xl text-base text-muted-foreground leading-relaxed">
            <p>
              AI scales only after it enters workflows, earns repeated usage, and clears governance friction.
            </p>
            <p>
              The playbook codifies the adoption patterns that separate pilots from durable institutional value.
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
            <li className="pl-4 border-l-2 border-border">Start with use cases that reduce burden.</li>
            <li className="pl-4 border-l-2 border-border">Align incentives before tech.</li>
            <li className="pl-4 border-l-2 border-border">Gate rigorously before scale.</li>
            <li className="pl-4 border-l-2 border-border">Measure adoption as the key KPI.</li>
          </ul>

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

      {/* Case Studies */}
      <section className="py-20 md:py-28 border-t border-border">
        <div className="container-narrow">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground">
            Case Studies
          </h2>
          <p className="mt-3 text-base text-muted-foreground max-w-2xl">
            Institutional transformations where capital discipline, governance architecture, and distribution mechanics produced durable scale.
          </p>

          <div className="mt-12 border border-border rounded p-8 md:p-10 max-w-2xl">
            <h3 className="font-serif text-xl md:text-2xl font-medium text-foreground">
              Digitizing Diabetes: Medtronic 770G → 780G
            </h3>
            <p className="mt-2 text-base text-muted-foreground">
              From device-centric replacement cycles to a software-defined connected ecosystem.
            </p>

            <ul className="mt-8 space-y-4 text-base text-muted-foreground leading-relaxed">
              <li className="pl-4 border-l-2 border-border">
                <span className="font-medium text-foreground">Capital:</span> Invested in infrastructure that enabled continuous software iteration (FOTA, cloud backbone, security operations)
              </li>
              <li className="pl-4 border-l-2 border-border">
                <span className="font-medium text-foreground">Governance:</span> Regulatory-grade update controls and lifecycle monitoring enabling safe velocity across global markets
              </li>
              <li className="pl-4 border-l-2 border-border">
                <span className="font-medium text-foreground">Distribution:</span> Reduced upgrade friction and increased caregiver trust through connected app ecosystem
              </li>
            </ul>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/case-studies/medtronic-770-to-780"
                className="inline-flex items-center gap-2 px-6 py-3 border border-foreground text-foreground text-sm tracking-wide hover:bg-foreground hover:text-background transition-colors"
              >
                Read Case Study
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="/docs/Medtronic_770G_to_780G_Case_Study.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border text-muted-foreground text-sm tracking-wide hover:border-foreground hover:text-foreground transition-colors"
              >
                Download PDF
              </a>
            </div>

            <p className="mt-8 text-sm text-muted-foreground leading-relaxed border-t border-border pt-6">
              This case study demonstrates the same operating model described above: capital allocation upstream, governance embedded by design, adoption engineered through friction reduction.
            </p>
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
                title: "Why Adoption Drives Real AI Value",
                thesis: "A breakdown of adoption discounting and governance drag in enterprise AI funding decisions.",
              },
              {
                title: "Governance as a Scalable Architecture",
                thesis: "Why regulatory architecture is not a blocker but a structural variable to model explicitly.",
              },
              {
                title: "Adoption is the True KPI of AI Scale",
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

      {/* Why This Matters */}
      <section className="py-20 md:py-28 border-t border-border">
        <div className="container-narrow max-w-2xl">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground">
            Why This Matters
          </h2>
          <div className="mt-8 space-y-6 text-base text-muted-foreground leading-relaxed">
            <p>
              Most enterprises treat AI as a project.
              Real institutional scale requires aligning capital, governance, and adoption.
            </p>
          </div>
          <p className="mt-10 text-sm text-muted-foreground leading-relaxed border-t border-border pt-8">
            Jag Mariappan builds frameworks and playbooks for AI capital allocation, governance architecture, and institutional adoption. If you want durable AI value — not pilots — this is where it starts.
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
