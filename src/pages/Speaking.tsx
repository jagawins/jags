import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { ArrowUpRight, Mic, Users, Building2, Lightbulb } from "lucide-react";

const topics = [
  {
    icon: Building2,
    title:
      "Why 70% of Healthcare AI Projects Fail — And What Stanford Medicine Does Differently",
    description:
      "I co-developed ChatEHR and built the FURM AI Governance Framework at Stanford Medicine. In this talk, I'll show you the 3 governance layers most health systems skip, why they cause AI projects to stall after pilot, and the practical framework we use to move from experiment to enterprise adoption. You'll leave with a governance playbook you can implement in 90 days.",
  },
  {
    icon: Lightbulb,
    title:
      "I Built 7 HealthTech Products and Sold the Company. Here's What Enterprise Leaders Get Wrong About Platform Transformation.",
    description:
      "From founding Bairo Healthcare (7 products, PE exit) to leading platform strategy at Stanford Medicine, I've seen both sides: building from zero and transforming from within. This talk covers the 3 critical shifts organizations must make to move from project-based IT to platform-driven operations — and why most \"digital transformations\" produce dashboards but not outcomes.",
  },
  {
    icon: Users,
    title:
      "The Data Foundation for Healthcare AI: What We Built at Stanford (Databricks, Qualtrics, and the Governance Layer Nobody Talks About)",
    description:
      "Before you can deploy AI, you need data infrastructure that's governed, accessible, and trusted. I'll walk through how we built our enterprise Data Lake on Databricks, created friction maps with Qualtrics for Oncology and GI workflows, and overhauled our security review process (RACER) to cut approval times. Practical architecture decisions, not theory.",
  },
  {
    icon: Mic,
    title:
      "From Wipro to Stanford Medicine: The Unconventional Path to VP-Level Technology Leadership",
    description:
      "Wipro → IBM (12 years, $154M P&L) → Founded Bairo (7 products, PE exit) → Medtronic (FDA devices) → Google (Cloud + Revenue Cycle) → Stanford Medicine (AI + Enterprise Platforms). I'll share the leadership lessons from each chapter, the career decisions that seemed wrong at the time, and why the most valuable VP skill isn't technical — it's knowing when to build, when to operate, and when to walk away.",
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
        title="Speaking | Jag Mariappan — Healthcare AI & Governance Speaker"
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
