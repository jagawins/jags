import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
const posts = [
  {
    title: "Healthcare AI Governance Framework for Health Systems in 2026",
    url: "/healthcare-ai-governance-framework",
    date: "March 2026",
    excerpt: "A board-ready five-layer governance model for evaluating, approving, scaling, and retiring AI across enterprise health systems. Includes executive scorecard.",
    internal: true,
    flagship: true,
  },
  {
    title: "Measuring ROI of AI in Healthcare",
    url: "/measuring-roi-of-ai-in-healthcare",
    date: "March 2026",
    excerpt: "Quantitative frameworks for cost avoidance, throughput acceleration, denial reduction, labor leverage, and quality correlation — with real math.",
    internal: true,
    flagship: true,
  },
  {
    title: "Agentic AI in Clinical and Operational Workflows",
    url: "/agentic-ai-in-clinical-and-operational-workflows",
    date: "March 2026",
    excerpt: "The executive guide to autonomy levels 0–4, governance, risk matrix, regulatory anchors, monitoring design, and vendor selection for agentic AI in healthcare.",
    internal: true,
    flagship: true,
  },
  {
    title: "Healthcare AI Governance Is the Executive Competency of 2026",
    url: "/writing/healthcare-ai-governance-executive-competency",
    date: "March 2026",
    excerpt: "Why the most important skill for health system leaders isn't understanding AI — it's governing it. A practitioner's guide from Stanford Medicine.",
    internal: true,
  },
  {
    title: "The Chair Theory",
    url: "https://myjmr.org/2025/12/27/the-chair-theory/",
    date: "December 2025",
    excerpt: "Everyone has a table in their life. Some tables pull a chair the moment you arrive. Others make you wait. Some never quite make room at all.",
  },
  {
    title: "Lucky Girl Syndrome",
    url: "https://myjmr.org/2025/12/27/lucky-girl-syndrome/",
    date: "December 2025",
    excerpt: "What is Lucky Girl Syndrome really, and how should you think about it in a practical way? Mindset meets strategy.",
  },
  {
    title: "Comfort Protects. Faith Carries. Purpose Decides.",
    url: "https://myjmr.org/2025/12/25/comfort-protects-faith-carries-purpose-decides/",
    date: "December 2025",
    excerpt: "You were not built for a painless life. You were built for a purposeful one.",
  },
];

const mediumPosts = [
  {
    title: "The Governance Gap in Enterprise AI",
    excerpt: "Why most AI initiatives fail at the intersection of ambition and accountability.",
  },
  {
    title: "Decision Systems at Scale",
    excerpt: "Building operational frameworks that survive complexity and growth.",
  },
  {
    title: "Healthcare's AI Inflection Point",
    excerpt: "What healthcare operators must understand before the next wave arrives.",
  },
];

const Writing = () => {
  return (
    <Layout>
      <SEO 
        title="Writing & Insights | Healthcare AI & Transformation — Jag Mariappan"
        description="Thought leadership articles, frameworks, and essays on healthcare AI, enterprise transformation, and governance from a Stanford Medicine insider."
        keywords="Jag Mariappan writing, healthcare AI thought leadership, AI governance essays, enterprise transformation insights, healthcare operations blog"
        url="https://jagmariappan.com/writing"
      />
      <section className="section-spacing">
        <div className="container-narrow">
          <div className="max-w-3xl mb-16 animate-fade-in">
            <h1 className="heading-display text-foreground mb-6">Writing</h1>
            <p className="body-large text-muted-foreground">
              Thinking documented. Essays on purpose, focus, and building systems that scale.
            </p>
          </div>

          <div className="space-y-0">
            {posts.map((post, index) => {
              const isInternal = 'internal' in post && post.internal;
              const Wrapper = isInternal ? Link : 'a';
              const linkProps = isInternal
                ? { to: post.url }
                : { href: post.url, target: "_blank", rel: "noopener noreferrer" };
              return (
                <Wrapper
                  key={index}
                  {...(linkProps as any)}
                  className="group block border-t border-border py-10 transition-colors hover:bg-muted/30 animate-fade-in"
                  style={{ opacity: 0, animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
                >
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex-1">
                      <h2 className="font-serif text-xl md:text-2xl font-medium text-foreground group-hover:text-primary transition-colors leading-tight mb-3">
                        {post.title}
                      </h2>
                      <p className="text-muted-foreground leading-relaxed mb-2 max-w-2xl">
                        {post.excerpt}
                      </p>
                      <p className="text-sm text-muted-foreground/70">
                        {post.date}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-primary shrink-0 mt-1">
                      <span className="text-sm hidden sm:inline">{isInternal ? "Read" : "Read"}</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </Wrapper>
              );
            })}
          </div>

          {/* Featured on Medium */}
          <div className="border-t border-border pt-16 mt-8">
            <div className="mb-8">
              <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-3">
                Featured on Medium
              </h2>
              <p className="text-muted-foreground">
                Synthesized insights on AI, Governance, and Operational Scale.
              </p>
            </div>

            <div className="space-y-0">
              {mediumPosts.map((post, index) => (
                <a
                  key={index}
                  href="https://medium.com/@jagawins/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block border-t border-border py-8 transition-colors hover:bg-muted/30 animate-fade-in"
                  style={{ opacity: 0, animationDelay: `${(posts.length + index) * 100}ms`, animationFillMode: 'forwards' }}
                >
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex-1">
                      <h3 className="font-serif text-lg md:text-xl font-medium text-foreground group-hover:text-primary transition-colors leading-tight mb-2">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed max-w-2xl">
                        {post.excerpt}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-primary shrink-0 mt-1">
                      <span className="text-sm hidden sm:inline">Read on Medium</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="border-t border-border pt-12 mt-0">
            <p className="text-muted-foreground">
              View more writing on{" "}
              <a
                href="https://myjmr.org"
                target="_blank"
                rel="noopener noreferrer"
                className="link-executive"
              >
                myjmr.org
              </a>
              {" "}or{" "}
              <a
                href="https://medium.com/@jagawins/"
                target="_blank"
                rel="noopener noreferrer"
                className="link-executive"
              >
                Medium
              </a>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Writing;
