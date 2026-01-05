import Layout from "@/components/layout/Layout";
import { ArrowUpRight } from "lucide-react";

const About = () => {
  return (
    <Layout>
      <section className="section-spacing">
        <div className="container-narrow">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="heading-display text-foreground mb-8">About</h1>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-16">
              <p>
                I'm an executive operator who builds and scales decision systems in healthcare and AI. My work sits at the intersection of technology, governance, and organizational design.
              </p>
              <p>
                Over the past fifteen years, I've founded companies, led operations, and guided organizations through complex transitions—including two successful exits. I specialize in taking ambiguous situations and creating clarity, structure, and forward momentum.
              </p>
              <p>
                My approach combines strategic thinking with hands-on execution. I believe in building systems that outlast their builders, measuring what matters, and making decisions with incomplete information when necessary.
              </p>
              <p>
                Currently, I'm focused on AI governance and the operationalization of intelligent systems in regulated industries.
              </p>
            </div>

            <div className="border-t border-border pt-12">
              <h2 className="font-serif text-2xl font-medium text-foreground mb-6">
                Connect
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl">
                For executive roles, advisory opportunities, or strategic conversations about healthcare, AI, or organizational design.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://www.linkedin.com/in/jagawins/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
                >
                  Connect on LinkedIn
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <a
                  href="https://myjmr.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
                >
                  Read my writing
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
