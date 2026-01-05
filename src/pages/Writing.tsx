import Layout from "@/components/layout/Layout";
import { ArrowUpRight } from "lucide-react";

const posts = [
  {
    title: "The Architecture of Exit: Building Companies Worth Acquiring",
    url: "https://jagawins.wordpress.com",
    date: "2024",
  },
  {
    title: "Decision Velocity in Healthcare AI: When Speed Meets Compliance",
    url: "https://jagawins.wordpress.com",
    date: "2024",
  },
  {
    title: "Why Most Digital Transformations Fail (And How to Avoid It)",
    url: "https://jagawins.wordpress.com",
    date: "2023",
  },
  {
    title: "Governance as Growth Engine: The Counterintuitive Path to Scale",
    url: "https://jagawins.wordpress.com",
    date: "2023",
  },
  {
    title: "Building Systems That Outlast Their Builders",
    url: "https://jagawins.wordpress.com",
    date: "2022",
  },
];

const Writing = () => {
  return (
    <Layout>
      <section className="section-spacing">
        <div className="container-narrow">
          <div className="max-w-3xl mb-16 animate-fade-in">
            <h1 className="heading-display text-foreground mb-6">Writing</h1>
            <p className="body-large text-muted-foreground">
              Thinking documented. Essays on operations, governance, and building systems that scale.
            </p>
          </div>

          <div className="space-y-0">
            {posts.map((post, index) => (
              <a
                key={index}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block border-t border-border py-8 transition-colors hover:bg-muted/30 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h2 className="font-serif text-xl md:text-2xl font-medium text-foreground group-hover:text-primary transition-colors leading-tight">
                      {post.title}
                    </h2>
                    <p className="text-sm text-muted-foreground mt-2">
                      {post.date}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-primary shrink-0 mt-1">
                    <span className="text-sm hidden sm:inline">Read</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="border-t border-border pt-12 mt-0">
            <p className="text-muted-foreground">
              View more writing on{" "}
              <a
                href="https://jagawins.wordpress.com"
                target="_blank"
                rel="noopener noreferrer"
                className="link-executive"
              >
                WordPress
              </a>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Writing;
