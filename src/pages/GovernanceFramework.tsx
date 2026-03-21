import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Download, CheckCircle } from "lucide-react";

const scorecardDimensions = [
  "Strategic clarity",
  "Financial model maturity",
  "Data integrity confidence",
  "Workflow integration readiness",
  "Regulatory exposure assessment",
  "Vendor transparency",
  "Change management readiness",
  "Measurement infrastructure",
  "Long-term maintainability",
  "Decommission plan",
];

const faqData = [
  {
    question: "What is a healthcare AI governance framework?",
    answer:
      "A healthcare AI governance framework is a structured system of oversight, accountability, and decision rights that determines how AI systems are evaluated, approved, deployed, monitored, and retired across an enterprise health system.",
  },
  {
    question: "Why do health systems need AI governance in 2026?",
    answer:
      "AI is now embedded in EHR workflows, revenue cycle automation, ambient documentation, and clinical decision support. Without structured governance, health systems face regulatory risk, bias propagation, and uncontrolled capital deployment.",
  },
  {
    question: "How do you measure ROI on healthcare AI?",
    answer:
      "AI ROI in healthcare is measured across four categories: cost avoidance, revenue capture improvement, labor leverage, and quality metric improvement. Each initiative must define a baseline, target, measurement window, and accountable owner.",
  },
];

const GovernanceFramework = () => {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Healthcare AI Governance Framework for Health Systems in 2026",
    author: {
      "@type": "Person",
      name: "Jag Mariappan",
      url: "https://jagmariappan.com/about",
    },
    datePublished: "2026-03-21",
    dateModified: "2026-03-21",
    publisher: {
      "@type": "Organization",
      name: "Jag Mariappan",
      url: "https://jagmariappan.com",
    },
    description:
      "A board-ready governance framework for evaluating, approving, scaling, and retiring AI across enterprise health systems. Includes a five-layer model, executive scorecard, and 2026 outlook.",
    mainEntityOfPage:
      "https://jagmariappan.com/healthcare-ai-governance-framework",
    image: "https://jagmariappan.com/og-image-new.png",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <Layout>
      <SEO
        title="Healthcare AI Governance Framework for Health Systems 2026 — Jag Mariappan"
        description="A board-ready five-layer governance framework for evaluating, approving, scaling, and retiring AI across enterprise health systems. Includes executive scorecard and ROI model."
        keywords="healthcare AI governance framework, AI governance in healthcare 2026, enterprise AI strategy health systems, responsible AI adoption healthcare, AI governance model, Jag Mariappan"
        url="https://jagmariappan.com/healthcare-ai-governance-framework"
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <article className="py-16 md:py-24">
        <div className="container-narrow max-w-3xl">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/writing" className="hover:text-foreground transition-colors">Writing</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">Governance Framework</span>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <p className="text-sm font-medium text-primary tracking-wide uppercase mb-4">
              Flagship Framework
            </p>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground leading-tight">
              Healthcare AI Governance Framework for Health Systems in 2026
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
              A board-ready model for evaluating, approving, scaling, and retiring AI across enterprise health systems.
            </p>
            <div className="mt-6 flex items-center gap-4 text-sm text-muted-foreground">
              <span>By <Link to="/about" className="text-foreground hover:text-primary transition-colors">Jag Mariappan</Link></span>
              <span>•</span>
              <span>March 2026</span>
              <span>•</span>
              <span>12 min read</span>
            </div>
          </header>

          {/* Scorecard CTA */}
          <div className="mb-12 p-6 rounded-lg border border-primary/20 bg-primary/5">
            <div className="flex items-start gap-4">
              <Download className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium text-foreground">Assess Your Health System's AI Governance Maturity in 10 Minutes</p>
                <p className="text-sm text-muted-foreground mt-1">Download the Healthcare AI Executive Readiness Scorecard — includes the 10-dimension rubric, tier classification matrix, and board reporting template.</p>
                <a
                  href="/healthcare-ai-scorecard-2026.pdf"
                  download
                  className="inline-flex items-center gap-2 mt-3 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  Download the Executive Scorecard
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Executive Introduction */}
          <section className="prose-section mb-12">
            <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-6">
              Executive Introduction
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Healthcare AI is moving from experimentation to infrastructure.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Health systems now face:
            </p>
            <ul className="space-y-2 text-muted-foreground mb-6 ml-4">
              <li className="flex items-start gap-2"><span className="text-primary mt-1.5">•</span>AI embedded in EHR workflows</li>
              <li className="flex items-start gap-2"><span className="text-primary mt-1.5">•</span>Ambient documentation tools</li>
              <li className="flex items-start gap-2"><span className="text-primary mt-1.5">•</span>Revenue cycle automation engines</li>
              <li className="flex items-start gap-2"><span className="text-primary mt-1.5">•</span>Clinical decision augmentation</li>
              <li className="flex items-start gap-2"><span className="text-primary mt-1.5">•</span>Agentic workflow orchestration</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Yet governance maturity remains uneven.
            </p>
            <p className="text-foreground leading-relaxed font-medium">
              This framework provides a board-ready model for evaluating, approving, scaling, and retiring AI across enterprise health systems.
            </p>
          </section>

          {/* Section 1 */}
          <section className="mb-12">
            <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-6">
              1. Why Healthcare AI Governance Requires a Different Model
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Traditional IT governance assumes deterministic logic, fixed outputs, and predictable failure modes.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              AI systems are probabilistic, adaptive, and data-dependent. Failure modes are subtle. Drift is continuous. Bias risk is dynamic.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Healthcare AI therefore requires:
            </p>
            <ul className="space-y-2 text-muted-foreground mb-6 ml-4">
              <li className="flex items-start gap-2"><span className="text-primary mt-1.5">•</span>Tiered oversight</li>
              <li className="flex items-start gap-2"><span className="text-primary mt-1.5">•</span>Continuous monitoring</li>
              <li className="flex items-start gap-2"><span className="text-primary mt-1.5">•</span>Structured accountability</li>
            </ul>
            <p className="text-foreground leading-relaxed font-medium italic border-l-2 border-primary pl-4">
              Governance is not friction. It is strategic acceleration.
            </p>
          </section>

          {/* Section 2 - Five Layer Model */}
          <section className="mb-12">
            <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-8">
              2. The Five-Layer Governance Model
            </h2>

            {/* Layer 1 */}
            <div className="mb-10 p-6 rounded-lg border border-border bg-muted/30">
              <h3 className="font-serif text-xl font-medium text-foreground mb-4">
                Layer 1: Strategic Alignment
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Every AI initiative must map to one of three enterprise outcomes:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
                {["Clinical quality improvement", "Operational throughput", "Financial performance"].map((item) => (
                  <div key={item} className="flex items-center gap-2 p-3 rounded border border-border bg-background">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed mb-2">Board alignment questions:</p>
              <ul className="space-y-1 text-muted-foreground ml-4 mb-4">
                <li>• What problem does this solve?</li>
                <li>• What metric improves?</li>
                <li>• What happens if we do nothing?</li>
              </ul>
              <p className="text-foreground font-medium text-sm">No strategic map → No approval.</p>
            </div>

            {/* Layer 2 */}
            <div className="mb-10 p-6 rounded-lg border border-border bg-muted/30">
              <h3 className="font-serif text-xl font-medium text-foreground mb-4">
                Layer 2: Risk Classification
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                AI use cases must be classified before deployment.
              </p>
              <div className="space-y-4 mb-4">
                <div className="p-4 rounded border border-border bg-background">
                  <p className="font-medium text-foreground text-sm mb-1">Tier 1: Informational Assistance</p>
                  <p className="text-xs text-muted-foreground">Summarization, search, analytics</p>
                </div>
                <div className="p-4 rounded border border-border bg-background">
                  <p className="font-medium text-foreground text-sm mb-1">Tier 2: Operational Decision Support</p>
                  <p className="text-xs text-muted-foreground">Staffing optimization, scheduling automation, denial prediction</p>
                </div>
                <div className="p-4 rounded border border-border bg-background">
                  <p className="font-medium text-foreground text-sm mb-1">Tier 3: Clinical Decision Influence</p>
                  <p className="text-xs text-muted-foreground">Diagnostic support, treatment recommendations</p>
                </div>
              </div>
              <p className="text-foreground font-medium text-sm">
                Governance intensity increases by tier — preventing over-regulation of low-risk tools and under-governance of high-risk ones.
              </p>
            </div>

            {/* Layer 3 */}
            <div className="mb-10 p-6 rounded-lg border border-border bg-muted/30">
              <h3 className="font-serif text-xl font-medium text-foreground mb-4">
                Layer 3: Data Integrity
              </h3>
              <p className="text-foreground leading-relaxed font-medium mb-4">
                AI quality equals data quality.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-3">Validation must include:</p>
              <ul className="space-y-2 text-muted-foreground ml-4 mb-4">
                <li className="flex items-start gap-2"><span className="text-primary mt-1.5">•</span>Source system audit</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1.5">•</span>Longitudinal continuity</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1.5">•</span>Bias detection review</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1.5">•</span>Data refresh cadence</li>
              </ul>
              <p className="text-foreground font-medium text-sm italic border-l-2 border-primary pl-4">
                Drift without monitoring creates invisible risk.
              </p>
            </div>

            {/* Layer 4 */}
            <div className="mb-10 p-6 rounded-lg border border-border bg-muted/30">
              <h3 className="font-serif text-xl font-medium text-foreground mb-4">
                Layer 4: Workflow Integration
              </h3>
              <p className="text-foreground leading-relaxed font-medium mb-4">
                Most AI fails here.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-3">Success indicators:</p>
              <ul className="space-y-2 text-muted-foreground ml-4 mb-4">
                <li className="flex items-start gap-2"><span className="text-primary mt-1.5">•</span>Reduced clicks</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1.5">•</span>Reduced documentation burden</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1.5">•</span>Faster throughput</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1.5">•</span>Higher user adoption</li>
              </ul>
              <p className="text-foreground font-medium text-sm">
                AI that adds friction will be abandoned. Workflow redesign must precede AI insertion.
              </p>
            </div>

            {/* Layer 5 */}
            <div className="mb-10 p-6 rounded-lg border border-border bg-muted/30">
              <h3 className="font-serif text-xl font-medium text-foreground mb-4">
                Layer 5: ROI and Economic Defensibility
              </h3>
              <p className="text-foreground leading-relaxed font-medium mb-4">
                AI must justify <Link to="/measuring-roi-of-ai-in-healthcare" className="text-primary hover:text-primary/80 transition-colors underline">capital allocation</Link>.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-3">Each initiative must define:</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                {["Baseline", "Target", "Measurement window", "Accountable owner"].map((item) => (
                  <div key={item} className="p-3 rounded border border-border bg-background text-center">
                    <span className="text-sm text-foreground font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed mb-3">ROI categories:</p>
              <ul className="space-y-1 text-muted-foreground ml-4 mb-4">
                <li>• Cost avoidance</li>
                <li>• Revenue capture improvement</li>
                <li>• Labor leverage</li>
                <li>• Quality metric improvement</li>
              </ul>
              <p className="text-foreground font-medium text-sm">No economic clarity → No enterprise scale.</p>
            </div>
          </section>

          {/* Section 3 - Operating Structure */}
          <section className="mb-12">
            <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-6">
              3. Governance Operating Structure
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Recommended structure:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                { title: "AI Steering Committee", desc: "Executive oversight and strategic direction" },
                { title: "Risk & Compliance Review", desc: "Regulatory alignment and risk assessment" },
                { title: "Data Quality Review Board", desc: "Source validation and bias monitoring" },
                { title: "Operational Implementation", desc: "Workflow integration and adoption tracking" },
              ].map((group) => (
                <div key={group.title} className="p-4 rounded-lg border border-border bg-muted/30">
                  <p className="font-medium text-foreground text-sm">{group.title}</p>
                  <p className="text-xs text-muted-foreground mt-1">{group.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-foreground font-medium">
              Clear ownership reduces fragmentation.
            </p>
          </section>

          {/* Section 4 - Scorecard */}
          <section className="mb-12" id="scorecard">
            <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-6">
              4. Ten-Dimension Executive Scorecard
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Score each dimension 1 to 5:
            </p>
            <div className="space-y-3 mb-8">
              {scorecardDimensions.map((dim, i) => (
                <div key={dim} className="flex items-center gap-4 p-3 rounded border border-border bg-muted/30">
                  <span className="text-sm font-medium text-primary w-6">{i + 1}</span>
                  <span className="text-sm text-foreground">{dim}</span>
                  <div className="ml-auto flex gap-2">
                    {[1, 2, 3, 4, 5].map((n) => (
                      <span key={n} className="w-7 h-7 rounded border border-border bg-background text-xs flex items-center justify-center text-muted-foreground">
                        {n}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="p-6 rounded-lg border border-border bg-muted/30">
              <p className="font-medium text-foreground mb-3">Score Interpretation:</p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded bg-destructive/10 text-destructive font-medium">Below 35</span>
                  <span className="text-muted-foreground">Pilot only</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded bg-accent text-accent-foreground font-medium">35–45</span>
                  <span className="text-muted-foreground">Controlled expansion</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded bg-primary/10 text-primary font-medium">Above 45</span>
                  <span className="text-muted-foreground">Enterprise scale candidate</span>
                </div>
              </div>
            </div>
            {/* Download CTA */}
            <div className="mt-6 p-6 rounded-lg border border-primary/20 bg-primary/5">
              <p className="font-medium text-foreground mb-2">Download the Full Executive Scorecard</p>
              <p className="text-sm text-muted-foreground mb-3">
                Includes the scoring rubric, tier classification matrix, ROI measurement template, and board reporting slide.
              </p>
              <a
                href="/healthcare-ai-scorecard-2026.pdf"
                download
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
              >
                <Download className="w-4 h-4" />
                Download PDF Scorecard
              </a>
            </div>
          </section>

          {/* Section 5 - 2026 Outlook */}
          <section className="mb-12">
            <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-6">
              5. The 2026 Outlook
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Regulation will tighten. Boards will demand ROI. Vendor claims will accelerate.
            </p>
            <p className="text-foreground leading-relaxed font-medium">
              Health systems with structured governance will lead. Those without it will react.
            </p>
          </section>

          {/* Section 6 - Closing */}
          <section className="mb-12">
            <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-6">
              6. Closing Position
            </h2>
            <div className="p-6 rounded-lg border border-border bg-muted/30 space-y-3">
              <p className="text-foreground leading-relaxed">AI is becoming operational infrastructure.</p>
              <p className="text-foreground leading-relaxed">Infrastructure requires oversight.</p>
              <p className="text-foreground leading-relaxed">Oversight requires structure.</p>
              <p className="text-foreground leading-relaxed font-medium text-lg">Structure creates advantage.</p>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqData.map((faq) => (
                <div key={faq.question}>
                  <h3 className="font-medium text-foreground mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Internal Links */}
          <section className="mb-12 p-6 rounded-lg border border-border bg-muted/30">
            <p className="font-medium text-foreground mb-4">Continue Reading</p>
            <div className="space-y-3">
              <Link to="/measuring-roi-of-ai-in-healthcare" className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors">
                <ArrowRight className="w-4 h-4" />
                Measuring ROI of AI in Healthcare
              </Link>
              <Link to="/ai-capital-scale" className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors">
                <ArrowRight className="w-4 h-4" />
                AI Capital & Institutional Scale
              </Link>
              <Link to="/writing/healthcare-ai-governance-executive-competency" className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors">
                <ArrowRight className="w-4 h-4" />
                Healthcare AI Governance Is the Executive Competency of 2026
              </Link>
              <Link to="/speaking" className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors">
                <ArrowRight className="w-4 h-4" />
                Invite Jag to Speak
              </Link>
            </div>
          </section>

          {/* Author */}
          <footer className="pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              <Link to="/about" className="text-foreground hover:text-primary transition-colors font-medium">Jag Mariappan</Link> is Senior Director at Stanford Medicine, building frameworks for AI capital allocation, governance architecture, and institutional adoption in regulated enterprises. Harvard Business School alumnus.
            </p>
          </footer>
        </div>
      </article>
    </Layout>
  );
};

export default GovernanceFramework;
