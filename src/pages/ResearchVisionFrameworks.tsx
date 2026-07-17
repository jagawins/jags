import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { Download, ExternalLink } from "lucide-react";

const ResearchVisionFrameworks = () => {
  return (
    <Layout>
      <SEO
        title="Research Vision & Frameworks | Jag Mariappan"
        description="Research informatics vision, HPC roadmap, and infrastructure frameworks turning health system ambition into scientific answer."
        url="https://jagmariappan.com/research-vision-frameworks"
      />

      <section className="section-spacing">
        <div className="container-narrow animate-fade-in">
          <div className="mb-10">
            <p className="text-xs uppercase tracking-widest text-muted-foreground/70 font-medium mb-4">
              Thoughts & Speaking
            </p>
            <h1 className="heading-display text-foreground mb-6 max-w-3xl">
              Research Vision & Frameworks
            </h1>
            <p className="body-large text-muted-foreground max-w-2xl mb-6">
              Health systems have digitized care. The next decade belongs to those that
              close the gap between clinical operations and research-competitive
              infrastructure — compute, data, compliance, access, and value — built in
              the right order.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="/research-vision-frameworks.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium border border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors"
              >
                Open full infographic <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href="/research-vision-frameworks.html"
                download
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium border border-border text-muted-foreground hover:text-foreground transition-colors"
              >
                Download HTML <Download className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div className="rounded-sm overflow-hidden border border-border bg-background">
            <iframe
              src="/research-vision-frameworks.html"
              title="Research Vision & Frameworks"
              className="w-full"
              style={{ height: "90vh", border: 0 }}
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ResearchVisionFrameworks;
