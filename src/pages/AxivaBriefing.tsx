import { Link } from "react-router-dom";
import { ArrowRight, Clock, Target, Mail, TrendingUp, Zap, CheckCircle2, ExternalLink } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";

const AxivaBriefing = () => {
  return (
    <Layout>
      <SEO
        title="Axiva Daily Briefing Agent | AI-Powered Executive Decision Layer"
        description="Stop reacting to your inbox. Axiva is the AI briefing agent that ranks your priorities by deadline and impact, surfaces what matters, and delivers clarity in under 2 minutes."
        keywords="AI executive briefing, daily priority agent, executive productivity AI, decision support tool, AI chief of staff"
        url="https://jagmariappan.com/axiva-daily-briefing"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Axiva Daily Briefing Agent  - The Decision Layer Between Your Inputs and Your Impact",
            author: { "@type": "Person", name: "Jag Mariappan" },
            datePublished: "2026-03-30",
            description: "An AI-powered executive briefing agent that replaces inbox-driven mornings with structured, impact-ranked daily priorities.",
          }),
        }}
      />

      {/* Hero */}
      <section className="py-16 md:py-24">
        <div className="container-narrow">
          <div className="max-w-3xl">
            <p className="tag-outcome mb-4">Executive AI Tool</p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] mb-6 text-foreground">
              Most executives start their day
              <span className="text-primary"> already behind.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              They open email. They scan Slack. They react. By 9 AM, their priorities are hijacked  - not by strategy, not by impact, but by whoever spoke the loudest.
            </p>
            <a
              href="https://chatgpt.com/g/g-69c9db002ce88191aaaf957118dcecfe"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="gap-2">
                Launch Axiva Briefing Agent <ExternalLink className="w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-12 md:py-16 border-t border-border">
        <div className="container-narrow">
          <div className="max-w-3xl">
            <h2 className="font-serif text-2xl md:text-3xl font-medium mb-8 text-foreground">
              The Pattern I Kept Seeing
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                I kept observing the same failure mode across teams. Smart people. Strong operators. But no structured way to decide what actually matters <em>today</em>.
              </p>
              <p>
                The inbox becomes the agenda. Slack becomes the priority queue. Calendar becomes the strategy.
              </p>
              <p>
                None of these are designed to help you decide. They are designed to collect demands.
              </p>
              <p className="text-foreground font-medium">
                The gap is not information. The gap is a decision layer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Axiva Does */}
      <section className="py-12 md:py-16 border-t border-border bg-muted/20">
        <div className="container-narrow">
          <div className="max-w-3xl">
            <h2 className="font-serif text-2xl md:text-3xl font-medium mb-4 text-foreground">
              Axiva Daily Briefing Agent
            </h2>
            <p className="text-muted-foreground mb-10">
              A layer between your inputs and your decisions. Built for operators who refuse to start the day in reactive mode.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="p-6 border border-border rounded-lg bg-background">
                <h3 className="font-serif text-lg font-medium mb-4 text-foreground flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-primary" /> You Paste
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <Clock className="w-4 h-4 mt-1 text-primary/70 shrink-0" />
                    <span>Your calendar for the day</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Target className="w-4 h-4 mt-1 text-primary/70 shrink-0" />
                    <span>Your open tasks and commitments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail className="w-4 h-4 mt-1 text-primary/70 shrink-0" />
                    <span>Key inbox signals and threads</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 border border-border rounded-lg bg-background">
                <h3 className="font-serif text-lg font-medium mb-4 text-foreground flex items-center gap-2">
                  <Zap className="w-4 h-4 text-primary" /> You Get Back
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 mt-1 text-primary/70 shrink-0" />
                    <span><strong className="text-foreground">Top 3 priorities</strong>  - ranked by deadline and impact</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 mt-1 text-primary/70 shrink-0" />
                    <span><strong className="text-foreground">Preparation flags</strong>  - what actually needs prep before meetings</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 mt-1 text-primary/70 shrink-0" />
                    <span><strong className="text-foreground">Inbox triage</strong>  - what in your inbox truly matters</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <TrendingUp className="w-4 h-4 mt-1 text-primary/70 shrink-0" />
                    <span><strong className="text-foreground">3 industry signals</strong>  - you should not ignore today</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-5 border border-primary/20 bg-primary/5 rounded-lg">
              <p className="text-sm text-foreground">
                <strong>All in under 2 minutes.</strong> No noise. No summaries. Just clarity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Insight */}
      <section className="py-12 md:py-16 border-t border-border">
        <div className="container-narrow">
          <div className="max-w-3xl">
            <h2 className="font-serif text-2xl md:text-3xl font-medium mb-6 text-foreground">
              The Real Value Is Not Organization
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                What surprised me was this: the value is not in organizing information. Every tool does that.
              </p>
              <p className="text-foreground font-medium text-lg">
                The value is in forcing decisions.
              </p>
              <ul className="space-y-2 pl-1">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">→</span>
                  <span>What to focus on.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">→</span>
                  <span>What to ignore.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">→</span>
                  <span>What will actually move the day.</span>
                </li>
              </ul>
              <p>
                Most productivity tools give you more data. Axiva gives you fewer, better decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 border-t border-border bg-muted/20">
        <div className="container-narrow text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-medium mb-4 text-foreground">
            If you start your day in your inbox, you are already behind.
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Use it for 3 days. Then decide if you want to go back.
          </p>
          <a
            href="https://chatgpt.com/g/g-69c9db002ce88191aaaf957118dcecfe"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="gap-2">
              Launch Axiva Briefing Agent <ExternalLink className="w-4 h-4" />
            </Button>
          </a>

          <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <Link to="/work" className="hover:text-foreground transition-colors">Practice Areas →</Link>
            <Link to="/healthcare-ai-governance-framework" className="hover:text-foreground transition-colors">AI Governance Framework →</Link>
            <Link to="/principles" className="hover:text-foreground transition-colors">Operating Principles →</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AxivaBriefing;
