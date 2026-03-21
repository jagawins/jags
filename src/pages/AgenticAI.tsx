import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight } from "lucide-react";

const autonomyLevels = [
  { level: 0, name: "Assistant", behavior: "Drafts, summarizes, retrieves. No tool calls that change systems.", human: "Human decides and acts.", governance: "Broad adoption with PHI controls, logging, and periodic QA sampling." },
  { level: 1, name: "Recommender", behavior: "Produces structured recommendations, does not execute changes.", human: "Human validates and executes.", governance: "Limited rollout with calibrated sampling, bias testing, and performance monitoring." },
  { level: 2, name: "Tool User", behavior: "Calls tools, but every action requires explicit approval.", human: "Human approves each action.", governance: "Tool allowlists, audit logs must show every approved action." },
  { level: 3, name: "Delegated Agent", behavior: "Executes low-risk actions within a policy sandbox, escalates exceptions.", human: "Human monitors and handles exceptions.", governance: "Scale only if logs, monitoring, and rollback controls are proven." },
  { level: 4, name: "Autonomous", behavior: "Completes a workflow end to end with exception-based oversight.", human: "Human monitors outcomes and safety signals.", governance: "End-to-end automation in narrow domains with strong reversibility." },
];

const riskDomains = [
  { domain: "Patient Safety", failure: "Mis-triage, wrong escalation, delays through routing errors; tone affects urgency recommendations.", mitigation: "Tiered autonomy, explicit escalation thresholds, per-step approvals, kill switch, structured incident review." },
  { domain: "PHI & Privacy", failure: "Prompt injection, leakage through logs and retrieval context, tool misuse.", mitigation: "BAA and subprocessor controls, least privilege, redaction filtering, segregated logging, periodic access audits." },
  { domain: "Bias & Equity", failure: "Sociodemographic labels and non-clinical signals influence recommendations; tone shifts reallocate resources.", mitigation: "Counterfactual fairness testing including tone variants, subgroup parity dashboards, human sampling." },
  { domain: "Compliance", failure: "Misclassification of CDS vs. device function; insufficient documentation and logs.", mitigation: "Document intended use and autonomy tier, maintain audit trail, implement human oversight measures." },
  { domain: "Workforce", failure: "Verification burden creates shadow work, deskilling, lower adoption, distrust.", mitigation: "Role redesign, training on failure modes, explicit communication that capacity is the objective." },
  { domain: "Financial", failure: "Misrouted workqueues, unintended utilization increases, runaway inference costs.", mitigation: "Pre-defined ROI metrics, cost guardrails, rate limits, canary release, and rollback criteria." },
];

const faqData = [
  { question: "What is agentic AI in healthcare?", answer: "Agentic AI refers to AI systems that autonomously plan and execute multi-step tasks using external tools and feedback loops, rather than producing a single response to a single prompt. In healthcare, these systems can manage workflows like inbox triage, prior authorization, and clinical documentation." },
  { question: "How is agentic AI different from a chatbot?", answer: "A chatbot produces a single response to a single prompt. An agentic system plans a sequence of steps, calls tools, executes actions, maintains state, and checks whether the goal was achieved. When outputs become actions, autonomy becomes a risk multiplier." },
  { question: "What are the autonomy levels for agentic AI?", answer: "Agentic AI is governed across five levels: Level 0 (Assistant — drafts only), Level 1 (Recommender — proposes decisions), Level 2 (Tool user with approvals), Level 3 (Delegated agent in a sandbox), and Level 4 (Autonomous closed-loop). Governance intensity increases with each level." },
  { question: "What regulations apply to agentic AI in healthcare?", answer: "Key regulatory anchors include the EU AI Act (lifecycle logging, human oversight, deployer obligations effective August 2026), FDA CDS guidance (January 2026 update on clinical decision support exclusion criteria), ONC HTI-1 (predictive DSI transparency), and HIPAA cloud computing guidance for PHI in agent logs." },
];

const AgenticAI = () => {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Agentic AI in Clinical and Operational Workflows",
    author: { "@type": "Person", name: "Jag Mariappan", url: "https://jagmariappan.com/about" },
    datePublished: "2026-03-21",
    dateModified: "2026-03-21",
    publisher: { "@type": "Organization", name: "Jag Mariappan", url: "https://jagmariappan.com" },
    description: "The executive guide to autonomy, governance, risk, and ROI for agentic AI in healthcare. Covers autonomy levels 0–4, risk matrix, regulatory landscape, monitoring, and vendor selection.",
    mainEntityOfPage: "https://jagmariappan.com/agentic-ai-in-clinical-and-operational-workflows",
    image: "https://jagmariappan.com/og-image-new.png",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <Layout>
      <SEO
        title="Agentic AI in Clinical and Operational Workflows — Jag Mariappan"
        description="The executive guide to autonomy, governance, risk, and ROI for agentic AI in healthcare. Autonomy levels 0–4, risk matrix, regulatory anchors, monitoring design, and vendor selection."
        keywords="agentic AI healthcare, AI agents clinical workflows, autonomous AI health systems, agentic AI governance, AI autonomy levels healthcare, healthcare AI risk matrix"
        url="https://jagmariappan.com/agentic-ai-in-clinical-and-operational-workflows"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <article className="section-spacing">
        <div className="container-narrow">
          {/* Header */}
          <header className="max-w-3xl mb-16 animate-fade-in">
            <p className="text-sm uppercase tracking-widest text-primary mb-4 font-medium">Framework</p>
            <h1 className="heading-display text-foreground mb-6">
              Agentic AI in Clinical and Operational Workflows
            </h1>
            <p className="body-large text-muted-foreground mb-4">
              The executive guide to autonomy, governance, risk, and ROI.
            </p>
            <p className="text-sm text-muted-foreground/70">
              By <Link to="/about" className="link-executive">Jag Mariappan</Link> · March 2026 · ~2,500 words
            </p>
          </header>

          {/* Executive Introduction */}
          <section className="prose-executive mb-16 animate-fade-in">
            <p className="body-large text-foreground leading-relaxed mb-6">
              Agentic AI is not a bigger chatbot. It is a workflow actor.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              A standard assistant drafts a message or summarizes a chart. An agent plans a sequence of steps, calls tools, executes actions, and checks whether the goal was achieved. Healthcare reviews increasingly define agentic AI as systems that move beyond simple prompt–response by combining autonomous planning, tool utilization, and self-correction loops.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              That shift changes the executive problem. When outputs become actions, autonomy becomes a risk multiplier. It increases the blast radius of errors, blurs accountability, and raises the governance burden required for responsible scale.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The EU AI Act makes this direction explicit for high-risk AI by requiring lifetime logging (Article 12), effective human oversight (Article 14), and deployer duties to assign oversight, monitor operation, and retain logs for at least six months (Article 26). Core provisions apply from August 2, 2026.
            </p>
          </section>

          {/* Autonomy Taxonomy */}
          <section className="mb-16 animate-fade-in">
            <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-6">
              A Practical Autonomy Taxonomy
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Agentic AI should be governed by autonomy level, not vendor claims. This is not theory — it is the difference between "help me write" and "help me run."
            </p>
            <div className="space-y-4">
              {autonomyLevels.map((level) => (
                <div key={level.level} className="border border-border rounded-lg p-6 hover:bg-muted/30 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <span className="text-primary font-bold text-sm">{level.level}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-lg font-medium text-foreground mb-2">
                        Level {level.level}: {level.name}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-2">{level.behavior}</p>
                      <p className="text-muted-foreground/70 text-sm"><strong className="text-foreground/80">Human role:</strong> {level.human}</p>
                      <p className="text-muted-foreground/70 text-sm"><strong className="text-foreground/80">Governance:</strong> {level.governance}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Why Autonomy Can Be Powerful and Dangerous */}
          <section className="mb-16 animate-fade-in">
            <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-6">
              Why Autonomy Can Be Powerful — and Dangerous
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="border border-border rounded-lg p-6">
                <h3 className="font-serif text-lg font-medium text-foreground mb-3">The Power</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  In a randomized trial of autonomous AI diabetic retinopathy screening at point of care, exam completion was <strong className="text-foreground">100%</strong> in the intervention group versus <strong className="text-foreground">22%</strong> in usual referral control, with higher follow-through when abnormal results were detected.
                </p>
                <div className="flex items-end gap-4 mt-4">
                  <div className="flex flex-col items-center">
                    <div className="w-16 bg-primary/20 rounded-t" style={{ height: '120px' }}></div>
                    <span className="text-xs text-muted-foreground mt-2">100%</span>
                    <span className="text-xs text-muted-foreground/60">AI</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-16 bg-muted rounded-t" style={{ height: '26px' }}></div>
                    <span className="text-xs text-muted-foreground mt-2">22%</span>
                    <span className="text-xs text-muted-foreground/60">Control</span>
                  </div>
                </div>
              </div>
              <div className="border border-border rounded-lg p-6">
                <h3 className="font-serif text-lg font-medium text-foreground mb-3">The Danger</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  In agentic LLM e-medicine evaluation, urgent and demanding patient framing increased same-day or urgent care recommendations from <strong className="text-foreground">14%</strong> to <strong className="text-foreground">37–63%</strong> — despite identical symptoms.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Language is a clinical variable. If you deploy agents in inbox or access workflows, you must test tone and style counterfactuals — or you will allocate care based on communication habits rather than medical need.
                </p>
              </div>
            </div>
          </section>

          {/* Technical Reality */}
          <section className="mb-16 animate-fade-in">
            <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-6">
              The Technical Reality
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              The strongest architecture pattern in healthcare agents is not "a smarter model." It is a model that is constrained, grounded, and instrumented.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Grounding via RAG", desc: "Agents use retrieval-augmented generation with institutional policy libraries and patient context to anchor outputs in authoritative sources, reducing hallucination risk." },
                { title: "Tool-Augmented Determinism", desc: "LLMs without tools produce incorrect clinical calculations frequently. Adding task-specific tools substantially reduces incorrect responses in large-scale trials." },
                { title: "State & Long-Running Workflows", desc: "Health system workflows require state recovery, pausing for human approval, and rewinding polluted context — essential for safe clinical deployment where interruptions are normal." },
                { title: "Security Is Not Hypothetical", desc: "Prompt injection and insecure output handling are top LLM risk categories. If you connect an agent to tools, you must assume adversarial inputs will attempt unauthorized actions." },
              ].map((item, i) => (
                <div key={i} className="border border-border rounded-lg p-6">
                  <h3 className="font-serif text-lg font-medium text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Governance Model */}
          <section className="mb-16 animate-fade-in">
            <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-6">
              Governance: Decision Attribution, Escalation, Auditability
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Agentic AI requires governance that assigns accountability for actions initiated by machines. A minimum governance model assigns three owners.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                { role: "Model Owner", duties: "Evaluation, drift response, version control, safety testing." },
                { role: "Workflow Owner", duties: "Redesign, escalation thresholds, training, adoption, exception handling." },
                { role: "Systems Owner", duties: "Tool allowlists, IAM, audit logs, resilience, incident response." },
              ].map((owner, i) => (
                <div key={i} className="border border-border rounded-lg p-6 text-center">
                  <h3 className="font-serif text-lg font-medium text-foreground mb-3">{owner.role}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{owner.duties}</p>
                </div>
              ))}
            </div>

            <div className="bg-muted/30 border border-border rounded-lg p-6">
              <h3 className="font-serif text-lg font-medium text-foreground mb-4">Auditability Requirements</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                You must be able to reconstruct what context the agent saw, what it generated, what tools it called, what approvals were provided, and what changed downstream.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { label: "Context", desc: "What data and documents were retrieved or provided" },
                  { label: "Model", desc: "Model version, system instructions, prompt, output" },
                  { label: "Tools", desc: "Tool called, parameters, approvals, responses, errors" },
                  { label: "Outcome", desc: "What changed, who accepted or overrode, downstream reversals" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-primary font-bold text-sm mt-0.5">→</span>
                    <div>
                      <span className="text-foreground font-medium text-sm">{item.label}:</span>{" "}
                      <span className="text-muted-foreground text-sm">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Risk Matrix */}
          <section className="mb-16 animate-fade-in">
            <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-6">
              Risk Matrix and Regulatory Anchors
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              A credible deployment plan must address six risk domains. Each domain maps to specific failure modes and auditable mitigations.
            </p>
            <div className="space-y-4">
              {riskDomains.map((risk, i) => (
                <div key={i} className="border border-border rounded-lg p-6">
                  <h3 className="font-serif text-lg font-medium text-foreground mb-2">{risk.domain}</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-muted-foreground/60 mb-1">How agents fail</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">{risk.failure}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-muted-foreground/60 mb-1">Mitigations</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">{risk.mitigation}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Regulatory anchors */}
            <div className="mt-8 grid md:grid-cols-2 gap-6">
              {[
                { name: "EU AI Act", detail: "Lifecycle logging (Art. 12), human oversight by design (Art. 14), deployer obligations (Art. 26). Applies from August 2, 2026." },
                { name: "FDA CDS Guidance", detail: "January 2026 update clarifies CDS exclusion criteria — clinicians must independently review the basis for recommendations." },
                { name: "ONC HTI-1", detail: "Defines predictive DSI broadly; ties certified health IT to expanded transparency and risk management practices." },
                { name: "HIPAA Cloud Guidance", detail: "Cloud providers storing ePHI are business associates — BAAs required even for encrypted-only storage." },
              ].map((reg, i) => (
                <div key={i} className="border border-border rounded-lg p-5">
                  <h4 className="font-medium text-foreground text-sm mb-2">{reg.name}</h4>
                  <p className="text-muted-foreground text-xs leading-relaxed">{reg.detail}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Monitoring */}
          <section className="mb-16 animate-fade-in">
            <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-6">
              Monitoring and Drift Detection
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              You must monitor drift across four layers. As systems scale, manual review does not scale — feedback volume declines after broader rollout, increasing the need for automated monitoring.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { type: "Input Drift", items: "Patient population shifts, language patterns, seasonality, documentation templates." },
                { type: "Decision Drift", items: "Triage distribution changes, escalation threshold triggers, override increases, action rate changes." },
                { type: "Outcome Drift", items: "Time to disposition, access delays, adverse events, denial reversal rates, patient complaints." },
                { type: "Tool Drift", items: "API changes, EHR permission changes, downtime, errors in deterministic functions." },
              ].map((drift, i) => (
                <div key={i} className="border border-border rounded-lg p-5">
                  <h3 className="font-medium text-foreground mb-2">{drift.type}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{drift.items}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-muted/30 border border-border rounded-lg p-6">
              <h3 className="font-serif text-lg font-medium text-foreground mb-4">Required Dashboards</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { name: "Safety", metrics: "Override rate, escalation distribution, clinician-flagged errors, adverse event mentions." },
                  { name: "Privacy & Security", metrics: "PHI leakage triggers, access anomalies, prompt injection failures, suspicious tool patterns." },
                  { name: "Operational Performance", metrics: "Time to first response, resolution time, backlog size, automation rate, exception rate." },
                  { name: "Cost & Reliability", metrics: "Inference spend, tool latency, error rate, retries, downtime, fallback utilization." },
                ].map((db, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-primary font-bold text-sm mt-0.5">◆</span>
                    <div>
                      <span className="text-foreground font-medium text-sm">{db.name}:</span>{" "}
                      <span className="text-muted-foreground text-sm">{db.metrics}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Deployment Stance */}
          <section className="mb-16 animate-fade-in">
            <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-6">
              The Deployment Stance That Scales Responsibly
            </h2>
            <div className="space-y-4 mb-8">
              {[
                "Start with Level 0 and Level 1 in high-volume workflows to build trust and measurement discipline.",
                "Pilot Level 2 with strict approvals and tool allowlists.",
                "Scale to Level 3 only if audit logs, monitoring dashboards, and rollback controls are proven.",
                "Treat Level 4 as exceptional and justify it with a workflow-specific safety case.",
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-primary text-xs font-bold">{i + 1}</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{step}</p>
                </div>
              ))}
            </div>

            {/* Deployment flow */}
            <div className="bg-muted/30 border border-border rounded-lg p-6">
              <h3 className="font-serif text-lg font-medium text-foreground mb-4">Deployment Flow</h3>
              <div className="flex flex-wrap gap-2">
                {["Intake", "Tier Classification", "Workflow Redesign", "PHI & Security Review", "Build & Integrate", "Shadow Mode (8–12 wks)", "Bounded Execution", "Controlled Scale", "Continuous Monitoring", "Decommission / Redesign"].map((step, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="bg-primary/10 text-primary text-xs font-medium px-3 py-1.5 rounded-full">{step}</span>
                    {i < 9 && <ArrowRight className="w-3 h-3 text-muted-foreground/50 shrink-0" />}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Vendor Checklist */}
          <section className="mb-16 animate-fade-in">
            <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-6">
              Vendor Selection and Contract Clauses
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Vendor selection for agentic systems requires verifiable evidence, not marketing decks.
            </p>
            <div className="space-y-4">
              {[
                { category: "Action Control", verify: "Tool allowlists, per-tool approval gates, environment segregation, least privilege." },
                { category: "End-to-End Traceability", verify: "Correlated logs across model and tools; export to SIEM; retention controls." },
                { category: "Security Hardening", verify: "Prompt injection defenses, output validation, safe tool invocation patterns." },
                { category: "Data Governance & PHI", verify: "BAA availability, retention and deletion SLAs, subprocessor transparency." },
                { category: "Change Control", verify: "Model version pinning, release notes, rollback support." },
                { category: "Monitoring & Observability", verify: "Tracing, guardrail metrics, invocation logging, error budgets." },
                { category: "Audit Logging", verify: "Admin activity and data access logging, role-based access to logs." },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 border border-border rounded-lg p-4">
                  <span className="text-primary font-bold text-sm mt-0.5">✓</span>
                  <div>
                    <span className="text-foreground font-medium text-sm">{item.category}:</span>{" "}
                    <span className="text-muted-foreground text-sm">{item.verify}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 border border-border rounded-lg p-6">
              <h3 className="font-serif text-lg font-medium text-foreground mb-4">Contract Clauses You Should Insist On</h3>
              <div className="space-y-3">
                {[
                  { clause: "Data Rights & PHI", detail: "Explicit prohibition on training with your PHI, retention limits, deletion SLAs, right to audit." },
                  { clause: "Model Change Control", detail: "Advance notice of material changes, version pinning, rollback rights, evaluation results per release." },
                  { clause: "Liability & Indemnification", detail: "Liability aligned to autonomy tier — higher autonomy, higher vendor accountability." },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-primary text-sm mt-0.5">→</span>
                    <div>
                      <span className="text-foreground font-medium text-sm">{item.clause}:</span>{" "}
                      <span className="text-muted-foreground text-sm">{item.detail}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Closing Position */}
          <section className="mb-16 animate-fade-in">
            <div className="bg-muted/30 border border-border rounded-lg p-8 text-center">
              <p className="font-serif text-xl md:text-2xl text-foreground leading-relaxed mb-4">
                Agentic AI will become infrastructure.<br />
                Infrastructure must be governed.<br />
                Governance is the mechanism that lets autonomy create advantage rather than exposure.
              </p>
            </div>
          </section>

          {/* Internal Links */}
          <section className="mb-16 animate-fade-in">
            <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-6">
              Related Frameworks
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Healthcare AI Governance Framework", url: "/healthcare-ai-governance-framework", desc: "Board-ready five-layer model for enterprise AI oversight." },
                { title: "Measuring ROI of AI in Healthcare", url: "/measuring-roi-of-ai-in-healthcare", desc: "Quantitative frameworks for cost avoidance, throughput, and labor leverage." },
                { title: "Speaking & Engagements", url: "/speaking", desc: "Healthcare AI governance, platform transformation, enterprise leadership." },
              ].map((link, i) => (
                <Link key={i} to={link.url} className="group border border-border rounded-lg p-6 hover:bg-muted/30 transition-colors">
                  <h3 className="font-serif text-lg font-medium text-foreground group-hover:text-primary transition-colors mb-2">{link.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">{link.desc}</p>
                  <span className="text-primary text-sm flex items-center gap-1">
                    Read <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-16 animate-fade-in">
            <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqData.map((faq, i) => (
                <div key={i} className="border-t border-border pt-6">
                  <h3 className="font-serif text-lg font-medium text-foreground mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="animate-fade-in">
            <div className="border-t border-border pt-12">
              <p className="text-muted-foreground mb-4">
                Interested in how agentic AI governance shapes enterprise technology strategy?
              </p>
              <Link to="/speaking" className="inline-flex items-center gap-2 text-primary font-medium hover:underline">
                Invite Jag to speak <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </section>
        </div>
      </article>
    </Layout>
  );
};

export default AgenticAI;
