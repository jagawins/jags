import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const readinessLayers = [
  {
    n: "1",
    title: "Compute",
    body: "Raw CPU, GPU, memory, and parallel storage sized for the workloads faculty want to run in three years, not last year. The governance question — who allocates, on what basis — matters more than the hardware spec.",
  },
  {
    n: "2",
    title: "Data",
    body: "Clinical data available in research-grade form: de-identified, normalized, queryable, integrated across data types. Warehouse, OMOP mapping, i2b2, genomics and imaging repositories.",
  },
  {
    n: "3",
    title: "Compliance",
    body: "PHI handled appropriately end-to-end — HIPAA-compliant compute environment, de-identification pipeline, cloud BAA governance. Without it, none of the other layers function on real data.",
  },
  {
    n: "4",
    title: "Access",
    body: "Researcher onboarding, self-service to approved environments, helpdesk, training. Sophisticated infrastructure locked behind a six-week provisioning process is not useful research infrastructure.",
  },
  {
    n: "5",
    title: "Value",
    body: "Publications, grant awards, trial enrollments, pharmaceutical partnerships. Utilization is an input metric. Impact is the output metric. Most institutions track only the former.",
  },
];

const failures = [
  {
    title: "They buy compute before they have data infrastructure.",
    body: "A GPU cluster without a research-grade data repository has nothing to process. The result: months of idle hardware while data architecture catches up.",
  },
  {
    title: "They build for today's workloads.",
    body: "Infrastructure sized for 2022 genomics is systematically inadequate for 2026 multimodal AI. Build ahead of current demand.",
  },
  {
    title: "They ignore governance until it's a crisis.",
    body: "Fair-share scheduling, allocation policy, faculty access equity, and charge-back frameworks are not afterthoughts. Clusters meant for twenty groups end up serving three.",
  },
  {
    title: "They treat compliance as a barrier rather than an architecture.",
    body: "Done correctly, HIPAA-compliant research computing becomes the deciding factor in pharmaceutical partnership selection.",
  },
  {
    title: "They measure utilization instead of impact.",
    body: "A cluster running at 90% utilization is not necessarily producing research value. Track grants, publications, trials, partnerships.",
  },
];

const faqData = [
  {
    question: "What is research informatics in an academic medical center?",
    answer:
      "Research informatics is the institutional capability to extract structured scientific value from clinical data — reproducibly, under compliance, at the speed that science requires. It spans HPC, research data warehouses, i2b2 query infrastructure, genomics and imaging pipelines, and the governance that ties them together.",
  },
  {
    question: "When does on-premises GPU compute beat cloud burst for clinical AI?",
    answer:
      "Break-even is roughly 25,000–35,000 GPU-hours annually. Below that, cloud burst on BAA-covered NVIDIA A100/H100 instances is economically rational. Above it, on-premises H100 clusters deliver per-GPU-hour costs under $3 versus $10–$32 on demand in cloud.",
  },
  {
    question: "Why does i2b2 matter for clinical trial recruitment?",
    answer:
      "i2b2 turns feasibility assessments that took weeks of chart review into queries that return in seconds. Combined with NLP against unstructured notes, AI-enhanced recruitment delivers 3–5× enrollment velocity and 40–60% lower cost per enrolled patient — the metrics that make a site attractive to pharmaceutical sponsors.",
  },
  {
    question: "What is federated research computing?",
    answer:
      "An architecture that lets institutions collaborate on research questions without moving patient data. It combines federated query (i2b2, N3C, PCORnet), privacy-preserving record linkage, and federated learning (NVIDIA FLARE, Intel OpenFL) — enabling cross-site science that no single institution's population can support.",
  },
];

const ResearchInformatics = () => {
  const url = "https://jagmariappan.com/research-informatics-hpc";

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Research Informatics & Scientific Computing in Healthcare",
    author: { "@type": "Person", name: "Jag Mariappan", url: "https://jagmariappan.com/about" },
    datePublished: "2026-07-17",
    dateModified: "2026-07-17",
    publisher: { "@type": "Organization", name: "Jag Mariappan", url: "https://jagmariappan.com" },
    description:
      "Practitioner frameworks for building research computing infrastructure at academic medical centers — HPC, NVIDIA GPU clusters, i2b2, HIPAA-compliant cloud, federated data, and clinical AI at scale.",
    mainEntityOfPage: url,
    image: "https://jagmariappan.com/og-image-new.png",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <Layout>
      <SEO
        title="Research Informatics & HPC in Healthcare | Jag Mariappan"
        description="Practitioner frameworks for building research computing at academic medical centers — HPC, NVIDIA GPU, i2b2, HIPAA cloud, federated data, and clinical AI at scale."
        keywords="research informatics, HPC healthcare, NVIDIA GPU healthcare, i2b2, clinical trial recruitment AI, federated research computing, HIPAA HPC, OMOP CDM, academic medical center HPC"
        url={url}
        type="article"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <article className="container-narrow py-24 md:py-32">
        <header className="mb-16 max-w-3xl">
          <p className="tag-outcome mb-4">Pillar / Research Infrastructure</p>
          <h1 className="font-serif text-4xl md:text-6xl font-medium text-foreground leading-tight mb-6">
            Research Informatics & Scientific Computing in Healthcare
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Practitioner frameworks for building research computing at academic medical centers — HPC, NVIDIA GPU
            clusters, i2b2, HIPAA-compliant cloud, federated data, and clinical AI at scale.
          </p>
        </header>

        <section className="prose-section space-y-6 mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground">
            The infrastructure gap health systems don't talk about
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I've sat in rooms where a pharmaceutical company walked away from a partnership because a health system
            couldn't support the patient population they needed. I've watched research grants go to competing
            institutions not because the science was weaker, but because the compute infrastructure couldn't meet
            submission requirements. I've seen faculty recruits decline offers because the research computing
            environment was years behind what they had at their previous lab.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The gap between research ambition and research infrastructure is one of the most consequential — and most
            avoidable — problems in academic medicine. And it is almost never discussed at the executive level until
            something is lost.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-6">
            What research informatics actually means
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Research informatics is not a department. It is not the IT team's responsibility for supporting grant
            applications. It is the institutional capability to extract structured scientific value from clinical data
            — reproducibly, under compliance, at the speed that science requires.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                h: "Structured scientific value",
                b: "Research-grade data that supports peer review, regulatory submission, or grant renewal. Not the same pipeline as operational reporting.",
              },
              {
                h: "Reproducibly",
                b: "Every transformation documented, every version controlled, every parameter logged — the FDA-grade discipline that peer review also demands.",
              },
              {
                h: "At the speed science requires",
                b: "Grant cycles, submissions, enrollment windows, and pharma timelines don't wait. Speed is a governance problem before it is a technology problem.",
              },
            ].map((c) => (
              <div key={c.h} className="border border-border p-6 rounded-sm">
                <h3 className="font-serif text-xl font-medium text-foreground mb-2">{c.h}</h3>
                <p className="text-muted-foreground leading-relaxed">{c.b}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16 space-y-6">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground">
            The HPC imperative: compute as scientific strategy
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            HPC is no longer a specialty capability reserved for national labs and genomics centers. It is table
            stakes for any institution that intends to compete for federal grants, attract research faculty, or
            maintain credibility with pharmaceutical partners.
          </p>
          <ul className="space-y-4 text-lg text-muted-foreground leading-relaxed">
            <li>
              <strong className="text-foreground">AI workloads require GPU compute.</strong> Predictive clinical
              deterioration, multimodal imaging diagnosis, genomic risk stratification, AI-enhanced recruitment — a
              training run that takes three weeks on CPU takes four hours on a properly configured NVIDIA GPU
              cluster.
            </li>
            <li>
              <strong className="text-foreground">Genomics data volumes have outrun traditional compute.</strong> A
              single whole-genome run produces 100–200 GB. Programs sequencing 500+ samples/year need petabyte-scale
              storage with I/O demands standard hospital infrastructure cannot meet.
            </li>
            <li>
              <strong className="text-foreground">Federal funders are requiring it.</strong> NIH, DOE, and NSF
              mechanisms specify HPC capability, FAIR data compliance, and reproducible workflow infrastructure.
              Infrastructure is no longer separable from the science.
            </li>
          </ul>
          <h3 className="font-serif text-2xl font-medium text-foreground pt-4">Architecture decisions that matter</h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Slurm and fair-share scheduling</strong> is governance, not just
            technology. Fair-share determines how compute is allocated across competing groups — a policy decision.
            Institutions spend millions on GPUs and watch resources captured by two or three aggressive labs while
            junior faculty wait months. Governance design must precede hardware purchase.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Bare-metal vs. virtualized GPU.</strong> For distributed training and
            multi-GPU inference, bare-metal outperforms virtualized environments by 15–30% on communication-bound
            workloads — $450K–$900K of wasted capacity on a $3M cluster. Partition the cluster: bare-metal for
            high-performance, virtualized for general use.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Storage and data gravity.</strong> The most common HPC failure is
            inadequate storage I/O — GPU clusters idle waiting for data. Parallel file systems (Lustre, IBM Spectrum
            Scale, VAST, WekaFS) with bandwidth matched to cluster appetite. Compute must be co-located with data.
          </p>
        </section>

        <section className="mb-16 space-y-6">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground">
            NVIDIA GPU economics in clinical research
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            H100 and A100 accelerators are the de facto standard for medical AI. Eight-node NVLink H100 configurations
            run $2.5M–$4M; amortized over five years, per-GPU-hour cost falls under $3 versus $10–$32 on demand in
            cloud. Break-even for on-prem sits at roughly <strong className="text-foreground">25,000–35,000
            GPU-hours/year</strong>.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Cloud burst — AWS P4d, Azure NDm A100 v4, Google Cloud A3 — is a strategy, not a fallback. It lets teams
            run week-long training runs in days without displacing others from shared hardware. Governance
            requirement: BAA coverage confirmed before any PHI-adjacent workload moves. State-level compute subsidies
            should be modeled explicitly as capital offsets — they can materially change the ROI on on-prem
            investment.
          </p>
        </section>

        <section className="mb-16 space-y-6">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground">
            i2b2, tranSMART, and the clinical data substrate
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The most powerful HPC is inert without a queryable, research-grade representation of the patient
            population. <strong className="text-foreground">i2b2</strong> is the dominant open-source platform for
            aggregate cohort queries at U.S. AMCs. Feasibility questions that used to take weeks of chart review
            return in seconds — with counts, demographics, and timelines — without exposing individual records.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            <strong className="text-foreground">tranSMART</strong> extends i2b2 with integrated genomic data,
            longitudinal timelines, and biomarker correlation. <strong className="text-foreground">AI-enhanced trial
            recruitment</strong> — i2b2 plus NLP against unstructured notes — delivers 3–5× enrollment velocity and
            40–60% lower cost per enrolled patient. That is the number pharmaceutical sponsors optimize on.
          </p>
        </section>

        <section className="mb-16 space-y-6">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground">
            HIPAA-compliant research computing
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Institutions that build HIPAA-compliant research environments properly end up with a posture that
            enables pharmaceutical partnerships, federal eligibility, and multi-site collaboration that non-compliant
            environments cannot support. Compliance is a revenue enabler.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The controls are familiar: dedicated network segments separated from clinical operations, role-based
            access integrated with institutional identity, full-disk encryption on compute and storage, comprehensive
            audit logging. In cloud, BAA coverage must be confirmed for every service touching PHI — with automated
            alerts when data moves to non-approved destinations and a provisioning process fast enough that
            researchers won't route around it. De-identification pipelines must combine Safe Harbor removal with
            NLP-based scrubbing of unstructured notes, where most manual efforts fail.
          </p>
        </section>

        <section className="mb-16 space-y-6">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground">
            Genomics, imaging, and the multimodal pipeline
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Genomics.</strong> FASTQ → alignment (BWA-MEM, STAR) → variant calling
            (GATK, DeepVariant) → annotation (VEP, ClinVar). GPU-accelerated tools like NVIDIA Clara Parabricks cut
            30× whole-genome alignment from 4–8 hours on 32 CPU cores to 30–45 minutes per sample — the difference
            between processing 500 samples in a research cycle and being perpetually behind.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Imaging.</strong> A 3D MRI study is 500MB–2GB; a digital pathology
            whole-slide image is 2–15GB. 5,000 studies/year requires petabyte-scale storage. The research DICOM
            archive must be separate from clinical PACS, with a de-identification pipeline between them.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            <strong className="text-foreground">EHR integration</strong> flows through the institutional warehouse
            normalized into OMOP CDM — the enabling technology for federated queries across institutions that have
            each mapped to the common model.
          </p>
        </section>

        <section className="mb-16 space-y-6">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground">
            MLOps and research reproducibility
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The FDA-submission discipline — every version logged, every transformation documented, every parameter
            recorded — is the discipline research computing now requires. A significant proportion of published
            clinical AI cannot be reproduced by independent teams, not because the science was fraudulent, but
            because the environment and preprocessing were not documented with sufficient precision.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Containers</strong> (Docker, Singularity/Apptainer for HPC) solve the
            environment problem. <strong className="text-foreground">Workflow managers</strong> (Nextflow, Snakemake,
            CWL) turn multi-step pipelines into version-controlled code — typically cutting time from data receipt to
            publishable result by 30–50%. <strong className="text-foreground">Provenance tracking</strong> (MLflow,
            Weights & Biases) captures the audit trail: data version, preprocessing parameters, model architecture,
            training split. Reproducing a table should be one command, not a three-week archaeology exercise.
          </p>
        </section>

        <section className="mb-16 space-y-6">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground">
            Federated research computing
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Some of the most important research questions require patient populations no single institution has. You
            cannot answer them by shipping PHI between institutions. Federated computing resolves the tension across
            three layers:
          </p>
          <ul className="space-y-4 text-lg text-muted-foreground leading-relaxed">
            <li>
              <strong className="text-foreground">Federated query</strong> — each institution runs the same query
              locally and returns aggregates. i2b2 network federation, PCORnet, NIH N3C.
            </li>
            <li>
              <strong className="text-foreground">Privacy-Preserving Record Linkage (PPRL)</strong> — cryptographic
              hashing of identifiers links the same patient across hospitals without revealing underlying data.
            </li>
            <li>
              <strong className="text-foreground">Federated learning</strong> — the model travels to the data. NVIDIA
              FLARE and Intel OpenFL are the production-ready platforms in clinical use.
            </li>
          </ul>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The <strong className="text-foreground">regional HPC partnership model</strong> — a major health system's
            research computing as a shared resource for affiliated academic institutions — is the most efficient
            deployment of capital I've seen in this space. Strategic capital allocation, not philanthropy.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-8">
            The research computing readiness model
          </h2>
          <div className="space-y-4">
            {readinessLayers.map((l) => (
              <div key={l.n} className="border border-border p-6 rounded-sm flex gap-6">
                <div className="font-serif text-4xl text-primary shrink-0">{l.n}</div>
                <div>
                  <h3 className="font-serif text-xl font-medium text-foreground mb-2">Layer {l.n} — {l.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{l.body}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed mt-8">
            Institutions that invest heavily in Layer 1 but neglect 2–5 have expensive hardware running at low
            utilization. The most competitive programs invest coherently across all five layers, with governance at
            every level.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-8">
            What health systems get wrong
          </h2>
          <div className="space-y-6">
            {failures.map((f) => (
              <div key={f.title} className="border-l-2 border-primary pl-6">
                <h3 className="font-serif text-xl font-medium text-foreground mb-2">{f.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16 space-y-6">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground">
            The executive role in research computing
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Research computing is not a technology problem. It is a strategy and governance problem that requires
            executive leadership to solve. The research computing executive must be able to walk into a meeting with a
            pharmaceutical company and say yes — yes, we can support your patient population, yes, our compute can
            handle your data volume, yes, our compliance will satisfy your legal team.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Institutions that invest deliberately across compute, data, compliance, access, and value measurement
            attract faculty, win grants, enable pharmaceutical partnerships, and accelerate translation of clinical
            data into patient benefit. The ones that don't lose those opportunities quietly.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-8">
            Frequently asked questions
          </h2>
          <div className="space-y-6">
            {faqData.map((f) => (
              <div key={f.question} className="border-b border-border pb-6">
                <h3 className="font-serif text-xl font-medium text-foreground mb-2">{f.question}</h3>
                <p className="text-muted-foreground leading-relaxed">{f.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-border pt-12">
          <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-4">Related work</h2>
          <ul className="space-y-3 text-lg">
            <li>
              <Link to="/healthcare-ai-governance-framework" className="text-primary hover:underline inline-flex items-center gap-2">
                Healthcare AI Governance Framework <ArrowRight className="w-4 h-4" />
              </Link>
            </li>
            <li>
              <Link to="/measuring-roi-of-ai-in-healthcare" className="text-primary hover:underline inline-flex items-center gap-2">
                Measuring ROI of AI in Healthcare <ArrowRight className="w-4 h-4" />
              </Link>
            </li>
            <li>
              <Link to="/agentic-ai-in-clinical-and-operational-workflows" className="text-primary hover:underline inline-flex items-center gap-2">
                Agentic AI in Clinical and Operational Workflows <ArrowRight className="w-4 h-4" />
              </Link>
            </li>
            <li>
              <Link to="/about#contact" className="text-primary hover:underline inline-flex items-center gap-2">
                Contact Jag <ArrowRight className="w-4 h-4" />
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </Layout>
  );
};

export default ResearchInformatics;
