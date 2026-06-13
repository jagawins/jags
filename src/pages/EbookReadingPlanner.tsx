import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { ExternalLink } from "lucide-react";

const EbookReadingPlanner = () => {
  return (
    <Layout>
      <SEO
        title="Ebook Reading Planner | PDF & EPUB Pace Tracker"
        description="Ebook Reading Planner — upload a PDF or EPUB, set a target finish date, and get a daily reading pace plan."
        url="https://jagmariappan.com/ebook-reading-planner"
      />
      <article className="container-narrow py-24 md:py-32">
        <header className="mb-12 max-w-3xl">
          <p className="tag-outcome mb-4">Tool</p>
          <h1 className="font-serif text-4xl md:text-6xl font-medium text-foreground leading-tight mb-6">
            Ebook Reading Planner
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Upload a PDF or EPUB and get a daily pace plan to finish by your target date.
          </p>
          <div className="mt-8 flex gap-3">
            <a
              href="/ebook-reading-planner.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium bg-foreground text-background hover:bg-foreground/85 transition-colors rounded-sm"
            >
              <ExternalLink className="w-4 h-4" />
              Open in new tab
            </a>
          </div>
        </header>

        <div className="border border-border rounded-sm overflow-hidden bg-background">
          <iframe
            src="/ebook-reading-planner.html"
            title="Ebook Reading Planner"
            className="w-full"
            style={{ height: "calc(100vh - 200px)", minHeight: "800px" }}
          />
        </div>
      </article>
    </Layout>
  );
};

export default EbookReadingPlanner;
