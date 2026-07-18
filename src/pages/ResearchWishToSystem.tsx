import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const ResearchWishToSystem = () => {
  return (
    <Layout>
      <SEO
        title="Research Computing: From Wish to System | Jag Mariappan"
        description="Most research computing strategies are a wish, not a plan. Here is how to turn a research-ready aspiration into an i2b2 query that runs on Monday morning."
        keywords="research computing, clinical trial recruitment, i2b2, OMOP CDM, research informatics, federated data infrastructure, healthcare AI"
        url="https://jagmariappan.com/writing/research-computing-wish-to-system"
        type="article"
      />
      <article className="section-spacing">
        <div className="container-narrow">
          <div className="max-w-3xl mx-auto">
            <Link
              to="/writing"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Writing
            </Link>

            <div className="mb-10">
              <span className="tag-outcome">Research</span>
              <h1 className="heading-display text-foreground mt-4 mb-4">
                Research Computing: From Wish to System
              </h1>
              <p className="body-large text-muted-foreground">
                Most research computing strategies I see are a wish, not a plan.
              </p>
            </div>

            <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
              <p>
                "Become research-ready." "Enable AI-driven trial recruitment." "Build a federated data infrastructure."
              </p>

              <p>
                None of those tell a research coordinator what to do next Tuesday morning.
              </p>

              <p>
                Here is how I would turn one of those wishes into something that actually runs.
              </p>

              <p>
                Take the wish: "enable AI-driven clinical trial recruitment."
              </p>

              <p>
                Now write the outcome: a coordinator opens a query tool, types clinical criteria, and gets back a list of eligible patients in four hours — not four weeks, and not after the IRB application has already been filed.
              </p>

              <p>
                Then split it across the quarter, so it stops being a roadmap slide and starts being infrastructure.
              </p>

              <h2 className="font-serif text-2xl font-medium text-foreground mt-10 mb-4">
                Month One: Build the Data Foundation
              </h2>
              <p>
                Pull one year of Epic encounter data into an OMOP CDM extract. Not all of Epic. One year, for the five clinical concepts that trial coordinators actually argue about — diagnosis codes, medication records, lab values, visit types, demographics. Get those five right before touching anything else.
              </p>

              <h2 className="font-serif text-2xl font-medium text-foreground mt-10 mb-4">
                Month Two: Make the Query Self-Service
              </h2>
              <p>
                Stand up i2b2 on top of that OMOP extract. Train three coordinators on how to build a feasibility query without a data analyst in the room. Run one real query from a live pending protocol. Time how long it takes. Write that number down. It will be shorter than anyone expected, and that number is your budget conversation for month three.
              </p>

              <h2 className="font-serif text-2xl font-medium text-foreground mt-10 mb-4">
                Month Three: Prove the Incremental Value
              </h2>
              <p>
                Run an NLP layer over unstructured clinical notes for one high-enrollment trial. Count how many additional eligible patients the notes surface that structured codes alone missed. The number will be significant enough to have the CFO conversation you have been avoiding about research infrastructure investment.
              </p>

              <p className="font-serif text-xl text-foreground mt-10 mb-4">
                That is the difference between a research computing strategy and a research computing system.
              </p>

              <p>
                A strategy says "enable AI-driven recruitment." A system tells you which Epic extract runs in month one, which coordinator gets trained in month two, and what the NLP model finds in month three — and it tells you before the pharmaceutical sponsor asks whether your site can enroll.
              </p>

              <p>
                If your research computing plan for this year is still a list of capabilities, it is a wish. Pick one trial. Build the feasibility query for it. Everything else — the federated network, the NIH grant submission, the pharmaceutical partnership — follows from that first query that ran in four hours instead of four weeks.
              </p>
            </div>

            <div className="border-t border-border mt-16 pt-10">
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Jag Mariappan</strong> has built this pipeline from scratch, not once, but repeatedly — at health systems ranging from community hospitals to academic medical centers with five million patient records. He is the executive who turns "research-ready" from a board presentation aspiration into an i2b2 query that runs on Monday morning. He has architected the OMOP extracts, governed HPC clusters that serve twenty competing research groups equitably, built the HIPAA-compliant environments that pharmaceutical sponsors trust enough to site-select against, and launched the federated networks that let five institutions collectively answer a question none of them could answer alone — without a single patient record crossing an institutional boundary. If your research infrastructure is still a list of strategic verbs, Jag is the person who knows which table to build first, which coordinator to train next, and what the publication looks like three years from now.
              </p>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default ResearchWishToSystem;
