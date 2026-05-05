import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { Download } from "lucide-react";

const IDPDecisionSystem = () => {
  return (
    <Layout>
      <SEO
        title="IDP Decision System | Quantifying Drug Program Alignment"
        description="A six-layer decision intelligence system for drug development: TPP alignment scoring, timing risk, value erosion signals, and scenario modeling."
        url="https://jagmariappan.com/idp-decision-system"
      />
      <article className="container-narrow py-24 md:py-32">
        <header className="mb-16 max-w-3xl">
          <p className="tag-outcome mb-4">Integrated Development Plan</p>
          <h1 className="font-serif text-4xl md:text-6xl font-medium text-foreground leading-tight mb-6">
            IDP Decision System
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Quantifying alignment, timing risk, and value erosion across drug programs.
          </p>
          <div className="mt-8">
            <a
              href="/downloads/IDP-Decision-System.pptx"
              download
              className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium bg-foreground text-background hover:bg-foreground/85 transition-colors rounded-sm"
            >
              <Download className="w-4 h-4" />
              Download slides (.pptx)
            </a>
          </div>
        </header>

        <section className="mb-20">
          <p className="tag-outcome mb-3">The Problem</p>
          <h2 className="font-serif text-3xl md:text-4xl font-medium mb-8">
            Most trackers record progress. None quantify misalignment.
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Timing risk quantification",
              "Value erosion signals",
              "TPP alignment scoring",
            ].map((item) => (
              <div key={item} className="border border-border p-6">
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Not Measured</p>
                <p className="font-serif text-xl text-foreground">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <p className="tag-outcome mb-3">System Architecture</p>
          <h2 className="font-serif text-3xl md:text-4xl font-medium mb-8">
            Six layers of decision intelligence
          </h2>
          <ol className="space-y-5">
            {[
              ["01 Asset Overview", "Molecule, indication, phase, regulatory pathway"],
              ["02 TPP Framework", "Target attributes weighted by strategic priority"],
              ["03 IDP Milestones", "Execution spine with critical path and delay tracking"],
              ["04 Clinical Data Inputs", "Evidence layer with data maturity tracking"],
              ["05 Alignment Engine", "Quantified gap, weighted score, risk classification"],
              ["06 Scenario Modeling", "Decision layer with time-adjusted projections"],
            ].map(([title, desc]) => (
              <li key={title} className="border-l-2 border-primary pl-6 py-1">
                <p className="font-serif text-lg font-medium text-foreground">{title}</p>
                <p className="text-muted-foreground mt-1">{desc}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mb-20">
          <p className="tag-outcome mb-3">Core Logic</p>
          <h2 className="font-serif text-3xl md:text-4xl font-medium mb-8">The Alignment Engine</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-muted/40 p-6">
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3">Step 1 — Gap</p>
              <p className="font-serif text-xl mb-3">Normalized Gap</p>
              <code className="block text-sm mb-3">(Observed − Target) / Target</code>
              <p className="text-sm text-muted-foreground">Handles scale differences across endpoints. Directional, positive signals overshoot.</p>
            </div>
            <div className="bg-muted/40 p-6">
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3">Step 2 — Score</p>
              <p className="font-serif text-xl mb-3">Alignment Score</p>
              <code className="block text-sm mb-3">MAX(0, MIN(100, 100 − |Gap| × 100))</code>
              <p className="text-sm text-muted-foreground">Bounded 0 to 100. Weighted against attribute strategic priority.</p>
            </div>
            <div className="bg-muted/40 p-6">
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3">Step 3 — Risk</p>
              <p className="font-serif text-xl mb-3">Status Flag</p>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li><span className="text-foreground font-medium">Green</span> — Score ≥ 85</li>
                <li><span className="text-foreground font-medium">Yellow</span> — Score ≥ 70</li>
                <li><span className="text-foreground font-medium">Red</span> — Score &lt; 70</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <p className="tag-outcome mb-3">Target Product Profile</p>
          <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">Four attribute categories</h2>
          <p className="text-muted-foreground max-w-2xl mb-8">
            Every TPP attribute is assigned a weight and a minimum acceptable value. The gap between target and observed determines alignment.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              ["Intended Use", "First-line vs. second-line therapy, monotherapy or combination"],
              ["Target Population", "Disease stage, biomarker selection, patient demographics"],
              ["Efficacy", "OS improvement, response rate, progression-free survival"],
              ["Safety", "Grade 3+ AE rate, discontinuation rate, key toxicities"],
            ].map(([title, desc]) => (
              <div key={title} className="border border-border p-6">
                <p className="font-serif text-xl mb-2">{title}</p>
                <p className="text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <p className="tag-outcome mb-3">Decision Layer</p>
          <h2 className="font-serif text-3xl md:text-4xl font-medium mb-8">Scenario modeling</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              ["Base Case", "Observed data as-is", "Current alignment score derived directly from clinical data inputs at present maturity level."],
              ["Optimistic", "Projected = Observed × (1 + F)", "Apply an improvement factor to project upside scenarios."],
              ["Conservative", "Projected = Observed × (1 − F/2)", "Apply a damped improvement factor for downside projections."],
            ].map(([title, formula, desc]) => (
              <div key={title} className="border border-border p-6">
                <p className="font-serif text-xl mb-3">{title}</p>
                <code className="block text-sm bg-muted/50 p-2 mb-3">{formula}</code>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <p className="tag-outcome mb-3">Executive Dashboard</p>
          <h2 className="font-serif text-3xl md:text-4xl font-medium mb-8">Three executive signals</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              ["Value Risk", "Percentage of TPP attributes flagged Red. The higher this number, the further the program is from its target profile."],
              ["Time Risk", "Total delay in days accumulated across all critical-path milestones. Compounded delays are invisible until this is tracked."],
              ["Evidence Strength", "Average data maturity across all clinical studies. Below 70% triggers projected timeline delay calculations."],
            ].map(([title, desc]) => (
              <div key={title} className="border-t-2 border-primary pt-4">
                <p className="font-serif text-2xl mb-2">{title}</p>
                <p className="text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-border pt-16 mt-16 max-w-3xl">
          <p className="font-serif text-2xl md:text-3xl text-foreground leading-relaxed">
            Most trackers tell you where you are. This one tells you whether you are building the right product, at the right time, with the right evidence.
          </p>
          <div className="mt-10">
            <a
              href="/downloads/IDP-Decision-System.pptx"
              download
              className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium bg-foreground text-background hover:bg-foreground/85 transition-colors rounded-sm"
            >
              <Download className="w-4 h-4" />
              Download full slides (.pptx)
            </a>
          </div>
        </section>
      </article>
    </Layout>
  );
};

export default IDPDecisionSystem;
