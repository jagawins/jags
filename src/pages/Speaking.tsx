import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { ArrowUpRight, Mic, Users, Building2, Lightbulb } from "lucide-react";

const topics = [
  {
    icon: Building2,
    title: "AI Capital Allocation in Regulated Enterprises",
    description:
      "Why most AI investments fail at the governance layer — and how to fund, structure, and scale durable adoption in healthcare and beyond.",
  },
  {
    icon: Lightbulb,
    title: "From Device to Platform: The Institutional Shift",
    description:
      "Lessons from transforming hardware-centric business models into software-defined ecosystems inside regulated industries.",
  },
  {
    icon: Users,
    title: "Governance Architecture as Competitive Advantage",
    description:
      "How embedding governance into product and operations — rather than bolting it on — accelerates speed, trust, and adoption at scale.",
  },
  {
    icon: Mic,
    title: "The Operator's Case for AI Doctrine",
    description:
      "Moving past AI experimentation: building capital discipline, distribution mechanics, and institutional memory that compounds.",
  },
];

const formats = [
  "Conference Keynotes",
  "Executive Roundtables",
  "Board & Leadership Offsites",
  "Panel Moderation",
  "Podcast & Media Interviews",
  "Private Advisory Sessions",
];

const Speaking = () => {
  return (
    <Layout>
      <SEO
        title="Speaking"
        description="Jag Mariappan speaks on AI capital allocation, governance architecture, and institutional scale in regulated enterprises. Available for keynotes, panels, and executive sessions."
        keywords="Jag Mariappan speaking, healthcare AI keynote, AI governance speaker, enterprise transformation speaker, Stanford Medicine, executive speaker"
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
              I speak about what I build — and what I've learned building it.
            </h1>
            <p className="body-large text-muted-foreground max-w-2xl">
              Frameworks for AI capital allocation, governance architecture, and
              institutional adoption — drawn from 15+ years operating at the
              intersection of healthcare, technology, and organizational design.
            </p>
          </div>

          {/* Topics */}
          <div className="mb-20">
            <h2 className="font-serif text-2xl font-medium text-foreground mb-8">
              Topics
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {topics.map((topic) => (
                <div
                  key={topic.title}
                  className="border border-border rounded-sm p-6 space-y-3"
                >
                  <div className="flex items-center gap-3">
                    <topic.icon className="w-5 h-5 text-primary" />
                    <h3 className="font-serif text-lg font-medium text-foreground">
                      {topic.title}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
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
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {formats.map((format) => (
                <div
                  key={format}
                  className="border-l-2 border-primary/30 pl-4 py-2"
                >
                  <p className="text-sm text-foreground font-medium">
                    {format}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Credential Bar */}
          <div className="mb-20 border border-border rounded-sm p-8 bg-muted/30">
            <p className="text-xs uppercase tracking-widest text-muted-foreground/70 font-medium mb-6">
              Background
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-muted-foreground">
              <div>
                <p className="text-foreground font-medium mb-1">Current Role</p>
                <p>Senior Director, Enterprise Operations</p>
                <p>Stanford Medicine</p>
              </div>
              <div>
                <p className="text-foreground font-medium mb-1">Education</p>
                <p>Harvard Business School</p>
                <p>Stanford Medicine</p>
              </div>
              <div>
                <p className="text-foreground font-medium mb-1">Track Record</p>
                <p>2 ventures acquired, 5 live platforms</p>
                <p>$150M+ portfolio operations</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="border-t border-border pt-12 text-center max-w-xl mx-auto">
            <h2 className="font-serif text-2xl font-medium text-foreground mb-4">
              Book a Speaking Engagement
            </h2>
            <p className="text-muted-foreground mb-8">
              For keynotes, panels, or private sessions — reach out directly.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/about#contact"
                className="px-6 py-2.5 text-sm font-medium border border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors"
              >
                Get in Touch
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
