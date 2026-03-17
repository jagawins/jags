import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
const projects = [
  {
    name: "Stanford Medicine",
    outcome: "Scaling Institutional AI & Digital Health",
    role: "Executive Leader, Enterprise Transformation (VP-Equivalent)",
    bullets: [
      "Leading enterprise-scale portfolios spanning digital health, AI-enabled patient experience, and data/security governance within a premier academic health system",
      "Aligning platform roadmaps and adoption across clinical, operational, and technology stakeholders under executive governance",
      "Architecting governance frameworks for emerging technology deployment at institutional scale",
      "Driving cross-functional alignment between clinical leadership, IT, and executive administration",
    ],
    relevance:
      "Leading enterprise-scale portfolios spanning digital health, AI-enabled patient experience, and data/security governance within a premier academic health system.",
    keyAchievement:
      "Aligning platform roadmaps and adoption across clinical, operational, and technology stakeholders under executive governance.",
    featured: true,
  },
  {
    name: "Medtronic Diabetes",
    outcome: "Digitizing the 770G to 780G Platform",
    role: "Senior Director and Operator — Connected Health & Software-Defined Medical Devices",
    bullets: [
      "Led transformation of Medtronic's diabetes management ecosystem by architecting and scaling digital capabilities that recaptured market competitiveness",
      "Developed and deployed secure firmware over-the-air (FOTA) capability to transition users from legacy 770G to 780G without physical device exchanges",
      "Scaled real-time caregiver connectivity via CarePartner App with secure data sharing, alerts, and scalable backend architecture supporting regulated data flows",
      "Built digital governance architecture balancing product velocity with regulatory oversight, including cybersecurity-aligned development lifecycle and FDA compliance",
      "Enabled a continuous software upgrade path — transforming a hardware-centric business model and increasing upgrade rates through digital scalability",
      "Positioned Medtronic to regain competitive ground against Dexcom and other digital competitors",
    ],
    relevance:
      "Demonstrated ability to digitize and scale a connected medical device platform within a regulated enterprise, shifting upgrade economics from hardware replacement to software-defined delivery.",
    keyAchievement:
      "Deployed firmware over-the-air capability that eliminated physical device exchanges, extending platform lifespan and transforming Medtronic's upgrade economics.",
    featured: false,
  },
  {
    name: "Bairo Healthcare",
    outcome: "Sold",
    role: "Founder & CEO",
    bullets: [
      "Built end-to-end patient engagement platform from zero to acquisition",
      "Designed clinical workflow automation reducing administrative burden by 40%",
      "Scaled operations to serve 50,000+ patients across multiple care settings",
      "Negotiated and executed successful exit to strategic healthcare acquirer",
    ],
    relevance:
      "Documented ability to build, scale, and exit a healthcare technology company while navigating complex regulatory and clinical requirements.",
    featured: false,
  },
  {
    name: "VerityAxis",
    outcome: "Sold",
    role: "Co-Founder",
    bullets: [
      "Architected data verification platform for enterprise compliance",
      "Established governance frameworks adopted by Fortune 500 clients",
      "Led technical due diligence and integration planning for acquisition",
      "Transitioned platform and team to acquiring organization",
    ],
    relevance:
      "Demonstrated expertise in building trust infrastructure and managing complex stakeholder relationships through exit.",
    featured: false,
  },
  {
    name: "PodoraHQ",
    outcome: "Live",
    role: "Chief Product Officer",
    bullets: [
      "Defined product vision and roadmap for AI-powered decision platform",
      "Built cross-functional team spanning engineering, design, and data science",
      "Established product governance frameworks for AI deployment",
      "Driving strategic partnerships with enterprise healthcare organizations",
    ],
    relevance:
      "Current role demonstrating hands-on leadership of AI product development in regulated healthcare environment.",
    featured: false,
  },
  {
    name: "PrismOS",
    outcome: "Live",
    role: "Chief Operating Officer",
    bullets: [
      "Operationalized AI platform serving real-time clinical decision support",
      "Designed and implemented SOC 2 and HIPAA compliance programs",
      "Built operational infrastructure supporting 99.9% uptime SLAs",
      "Established vendor management and procurement frameworks",
    ],
    relevance:
      "Proven ability to operationalize complex AI systems while maintaining strict compliance and reliability standards.",
    featured: false,
  },
  {
    name: "AxiomAppeals",
    outcome: "Live",
    role: "Executive Advisor",
    bullets: [
      "Advised on strategic positioning in healthcare revenue cycle market",
      "Guided product-market fit refinement and go-to-market strategy",
      "Connected leadership with strategic partnership opportunities",
      "Provided governance counsel on scaling operations",
    ],
    relevance:
      "Advisory engagement showcasing ability to guide early-stage healthcare technology companies through critical growth phases.",
    featured: false,
  },
  {
    name: "AXIVA",
    outcome: "Live",
    role: "Founder",
    link: "https://axiva.ai/",
    bullets: [
      "Transforms unstructured inputs—documents, transcripts, strategy notes—into executive-grade narratives",
      "Applies structured intelligence, visual block composition, and adaptive reasoning",
      "Produces investor decks, board-ready communication, and decision frameworks",
      "Reflects belief that complex thinking becomes actionable through structured visualization",
    ],
    relevance:
      "Executive Narrative Engineering Platform that accelerates communication and converts complexity into clean, visual narrative flows.",
    featured: false,
  },
  {
    name: "Medhara",
    outcome: "Live",
    role: "Founder",
    link: "https://medhara.axiomappeals.com/",
    bullets: [
      "Precision search engine for healthcare professionals requiring fast, accurate, cited answers",
      "Covers CPT guidance, LCD/NCD policies, prior authorization, HIPAA rules, and clinical evidence",
      "Every answer is sourced, structured, and defensible",
      "Supports clinicians, analysts, and RCM teams with authoritative insights",
    ],
    relevance:
      "Evidence-Driven Healthcare Search and Clinical Intelligence platform that eliminates ambiguity in clinical and administrative decisions.",
    featured: false,
  },
];
const Work = () => {
  return (
    <Layout>
      <SEO 
        title="Work & Experience | Jag Mariappan — Healthcare AI Executive"
        description="Explore Jag Mariappan's career history: Stanford Medicine, global operations, AI systems, and enterprise governance spanning 25+ years."
        keywords="Jag Mariappan work, Stanford Medicine, Medtronic, healthcare AI, enterprise transformation, Bairo Healthcare, VerityAxis, AXIVA, digital health portfolio"
        url="https://jagmariappan.com/work"
      />
      <section className="section-spacing">
        <div className="container-narrow">
          <div className="max-w-3xl mb-16 animate-fade-in">
            <h1 className="heading-display text-foreground mb-6">Work</h1>
            <p className="body-large text-muted-foreground">
              A record of building, governing, and exiting systems that create measurable value in healthcare and AI.
            </p>
          </div>

          <div className="space-y-0">
            {projects.map((project, index) => (
              <article
                key={index}
                className={`border-t border-border py-12 md:py-16 animate-fade-in ${
                  project.featured ? "bg-primary/5 -mx-4 px-4 md:-mx-8 md:px-8" : ""
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
                  {/* Header */}
                  <div className="lg:col-span-4">
                    <div className="flex items-start justify-between lg:block">
                      <div>
                        <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground">
                          {project.name}
                        </h2>
                        <p className="text-muted-foreground mt-1">
                          {project.role}
                        </p>
                      </div>
                      <span className="tag-outcome lg:mt-4">{project.outcome}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-8">
                    <ul className="space-y-3 mb-8">
                      {project.bullets.map((bullet, bulletIndex) => (
                        <li
                          key={bulletIndex}
                          className="flex gap-3 text-foreground"
                        >
                          <span className="text-muted-foreground mt-2 shrink-0">
                            •
                          </span>
                          <span className="leading-relaxed">{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="border-l-2 border-primary/20 pl-4 space-y-4">
                      <div>
                        <p className="text-sm text-muted-foreground font-medium mb-1">
                          Executive Relevance
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {project.relevance}
                        </p>
                      </div>
                      {project.keyAchievement && (
                        <div>
                          <p className="text-sm text-muted-foreground font-medium mb-1">
                            Key Achievement
                          </p>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {project.keyAchievement}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Work;
