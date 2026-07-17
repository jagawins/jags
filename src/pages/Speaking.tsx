import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { ArrowUpRight, Mic, Users, Building2, Lightbulb, Cpu, Shield, FlaskConical, Database, Network, GitBranch, DollarSign } from "lucide-react";

const topics = [
  {
    icon: Building2,
    category: "Keynote",
    title:
      "Why 70% of Healthcare AI Projects Fail — And What Stanford Medicine Does Differently",
    description:
      "I co-developed ChatEHR and built the FURM AI Governance Framework at Stanford Medicine. In this talk, I'll show you the 3 governance layers most health systems skip, why they cause AI projects to stall after pilot, and the practical framework we use to move from experiment to enterprise adoption. You'll leave with a governance playbook you can implement in 90 days.",
  },
  {
    icon: Lightbulb,
    category: "Platform Strategy",
    title:
      "I Built 7 HealthTech Products and Sold the Company. Here's What Enterprise Leaders Get Wrong About Platform Transformation.",
    description:
      "From founding Bairo Healthcare (7 products, PE exit) to leading platform strategy at Stanford Medicine, I've seen both sides: building from zero and transforming from within. This talk covers the 3 critical shifts organizations must make to move from project-based IT to platform-driven operations — and why most \"digital transformations\" produce dashboards but not outcomes.",
  },
  {
    icon: Users,
    category: "Data Infrastructure",
    title:
      "The Data Foundation for Healthcare AI: What We Built at Stanford (Databricks, Qualtrics, and the Governance Layer Nobody Talks About)",
    description:
      "Before you can deploy AI, you need data infrastructure that's governed, accessible, and trusted. I'll walk through how we built our enterprise Data Lake on Databricks, created friction maps with Qualtrics for Oncology and GI workflows, and overhauled our security review process (RACER) to cut approval times. Practical architecture decisions, not theory.",
  },
  {
    icon: Mic,
    category: "Leadership",
    title:
      "From Wipro to Stanford Medicine: The Unconventional Path to VP-Level Technology Leadership",
    description:
      "Wipro → IBM (12 years, $154M P&L) → Founded Bairo (7 products, PE exit) → Medtronic (FDA devices) → Google (Cloud + Revenue Cycle) → Stanford Medicine (AI + Enterprise Platforms). I'll share the leadership lessons from each chapter, the career decisions that seemed wrong at the time, and why the most valuable VP skill isn't technical — it's knowing when to build, when to operate, and when to walk away.",
  },
  {
    icon: Building2,
    category: "Keynote",
    title: "The Research-Ready Health System: Building Infrastructure That Says Yes",
    description:
      "Why the gap between research ambition and compute capability is the most consequential problem in academic medicine — and a five-layer framework for closing it. Includes the pharmaceutical partnership problem: what health systems lose when infrastructure can't answer yes.",
  },
  {
    icon: Cpu,
    category: "Technical Leadership",
    title: "HPC Governance: The Policy Layer Nobody Builds",
    description:
      "Fair-share scheduling, compute allocation equity, charge-back models, and the governance architecture that prevents expensive GPU clusters from being captured by the loudest three research groups. Practical models from multi-hospital health systems.",
  },
  {
    icon: FlaskConical,
    category: "Research Strategy",
    title: "Multimodal AI in Clinical Research: Architecture for the Next Decade",
    description:
      "How to integrate genomics, medical imaging, EHR data, and wearable sensor streams into unified research datasets — with the governance and compute architecture required to make the result HIPAA-compliant and scientifically reproducible.",
  },
  {
    icon: DollarSign,
    category: "Executive Education",
    title: "GPU Economics for Health System Leaders: Build, Burst, or Both?",
    description:
      "The on-premises vs. cloud GPU decision has a calculable break-even point. A practitioner's framework for evaluating research computing capital investments, modeling utilization scenarios, and designing hybrid architectures that grow with research demand.",
  },
  {
    icon: Database,
    category: "Research Informatics",
    title: "i2b2, OMOP, and the Clinical Data Substrate: Unlocking Your Patient Population",
    description:
      "How i2b2 and OMOP CDM transform institutional clinical data into a queryable research asset — enabling AI-enhanced trial recruitment, feasibility analysis in hours instead of weeks, and cross-institutional federated queries that multiply the scientific value of existing clinical operations.",
  },
  {
    icon: Shield,
    category: "Compliance Architecture",
    title: "HIPAA-Compliant Research Computing: Compliance as Competitive Advantage",
    description:
      "Institutions that build HIPAA-compliant research computing correctly find that compliance posture enables pharmaceutical partnerships and federal grant eligibility that non-compliant environments cannot access. The architecture of getting this right — and why it is a revenue enabler, not a cost center.",
  },
  {
    icon: Network,
    category: "Emerging Technology",
    title: "Federated Learning in Healthcare: Computing Across Institutions Without Moving Data",
    description:
      "NVIDIA FLARE, federated query, and privacy-preserving record linkage as the enabling architecture for multi-institutional research on rare disease, genomics, and population health — without any patient data crossing institutional boundaries.",
  },
  {
    icon: GitBranch,
    category: "Research Operations",
    title: "MLOps and Reproducibility: Clinical AI That Survives Peer Review",
    description:
      "Containers (Singularity/Apptainer), workflow managers (Nextflow, Snakemake), provenance tracking, and the operational infrastructure that makes clinical AI models reproducible by independent teams — a prerequisite for publication, regulatory submission, and real-world deployment.",
  },
];

const formats = [
  { label: "Conference Keynotes", detail: "30–60 min" },
  { label: "Executive Roundtables & Fireside Chats", detail: "45–60 min" },
  {
    label: "Board & Leadership Offsites",
    detail: "half-day workshops available",
  },
  { label: "Panel Moderation & Participation", detail: null },
  { label: "Podcast & Media Interviews", detail: null },
  { label: "Private Advisory Sessions & Office Hours", detail: null },
];

const trackRecord = [
  "2 ventures co-founded and exited (Bairo Healthcare: 7 products, PE sale 2018; Kandaya)",
  "8+ enterprise platforms led at Stanford Medicine (ChatEHR, FURM AI Governance, Databricks Data Lake, Qualtrics, Icertis, ServiceNow, Workday)",
  "$154M product portfolio P&L ownership at IBM (15 product lines, 120+ global projects)",
  "1,500+ person global engineering organization (HCL America)",
  "$146M regulated R&D portfolio (Medtronic, FDA medical devices)",
  "Google Cloud healthcare provider expansion",
];

const Speaking = () => {
  return (
    <Layout>
      <SEO
        title="Speaking | Jag Mariappan — Healthcare AI Speaker"
        description="Book Jag Mariappan for keynotes and panels on healthcare AI governance, digital transformation, and enterprise leadership. Stanford Medicine practitioner."
        keywords="healthcare AI speaker, Jag Mariappan speaking, AI governance keynote, enterprise transformation speaker, healthcare technology speaker, Stanford Medicine"
        url="https://jagmariappan.com/speaking"
      />

      <section className="section-spacing">
        <div className="container-narrow animate-fade-in">
          {/* Hero */}
          <div className="mb-16">
            <p className="text-xs uppercase tracking-widest text-muted-foreground/70 font-medium mb-4">
              Speaking & Engagements
            </p>
            <h1 className="heading-display text-foreground mb-6 max-w-3xl">
              I speak about what I've built — and the governance, platforms, and
              organizational change that made it work.
            </h1>
            <p className="body-large text-muted-foreground max-w-2xl mb-8">
              I've founded and sold a healthcare technology company, led
              enterprise AI transformation at Stanford Medicine, built a
              rapid-approval engine at Google, and managed $154M portfolios at
              IBM.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-foreground font-medium">
              <span>2 ventures acquired</span>
              <span className="text-muted-foreground/40">•</span>
              <span>8+ enterprise platforms at Stanford</span>
              <span className="text-muted-foreground/40">•</span>
              <span>$154M+ portfolio leadership</span>
              <span className="text-muted-foreground/40">•</span>
              <span>1,500+ FTE global organizations</span>
            </div>
          </div>

          {/* Topics */}
          <div className="mb-20">
            <h2 className="font-serif text-2xl font-medium text-foreground mb-8">
              Talk Topics
            </h2>
            <div className="grid grid-cols-1 gap-6">
              {topics.map((topic) => (
                <div
                  key={topic.title}
                  className="border border-border rounded-sm p-6 space-y-3"
                >
                  <div className="flex items-start gap-3">
                    <topic.icon className="w-5 h-5 text-primary mt-1 shrink-0" />
                    <h3 className="font-serif text-lg font-medium text-foreground leading-snug">
                      {topic.title}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed pl-8">
                    {topic.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Formats */}
          <div className="mb-20">
            <h2 className="font-serif text-2xl font-medium text-foreground mb-8">
              Formats
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {formats.map((format) => (
                <div
                  key={format.label}
                  className="border-l-2 border-primary/30 pl-4 py-2"
                >
                  <p className="text-sm text-foreground font-medium">
                    {format.label}
                  </p>
                  {format.detail && (
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {format.detail}
                    </p>
                  )}
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-6 italic">
              Available for both in-person and virtual engagements. All talks can
              be customized for your audience.
            </p>
          </div>

          {/* Track Record */}
          <div className="mb-20 border border-border rounded-sm p-8 bg-muted/30">
            <p className="text-xs uppercase tracking-widest text-muted-foreground/70 font-medium mb-6">
              Track Record
            </p>
            <ul className="space-y-3 mb-8">
              {trackRecord.map((item, i) => (
                <li
                  key={i}
                  className="text-sm text-muted-foreground leading-relaxed pl-4 border-l-2 border-primary/20"
                >
                  {item}
                </li>
              ))}
            </ul>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-border text-sm text-muted-foreground">
              <div>
                <p className="text-foreground font-medium mb-1">Institutions</p>
                <p>
                  Stanford Medicine • Google • IBM • Medtronic • Tenet Healthcare
                </p>
              </div>
              <div>
                <p className="text-foreground font-medium mb-1">Education</p>
                <p>
                  Harvard Business School • Stanford University • USF (MBA) •
                  University of Madras (BS CS&E)
                </p>
              </div>
              <div>
                <p className="text-foreground font-medium mb-1">
                  Certifications
                </p>
                <p>
                  Google Cloud Certified • NVIDIA AI Certified • PMP • Lean Six
                  Sigma Black Belt
                </p>
              </div>
            </div>
          </div>

          {/* Social Proof */}
          <div className="mb-20">
            <p className="text-xs uppercase tracking-widest text-muted-foreground/70 font-medium mb-6">
              Previously Presented To
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Leadership audiences at Stanford Medicine, Google, IBM, and
              Medtronic.
            </p>
          </div>

          {/* CTA */}
          <div className="border-t border-border pt-12 text-center max-w-xl mx-auto">
            <h2 className="font-serif text-2xl font-medium text-foreground mb-4">
              Book Jag for Your Event
            </h2>
            <p className="text-muted-foreground mb-3">
              Available for keynotes, panels, executive roundtables, and podcast
              interviews. In-person and virtual.
            </p>
            <p className="text-xs text-muted-foreground/60 mb-8 italic">
              Typical lead time: 4–6 weeks for conference sessions, 2 weeks for
              virtual engagements.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/about#contact"
                className="px-6 py-2.5 text-sm font-medium border border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors"
              >
                Book Now
              </Link>
              <a
                href="https://www.linkedin.com/in/jagawins/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors border border-border"
              >
                LinkedIn
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Speaking;
