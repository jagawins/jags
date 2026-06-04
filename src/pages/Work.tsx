import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
const projects = [
  {
    name: "Stanford Medicine",
    outcome: "Scaling Institutional AI & Digital Health",
    role: "VP-Equivalent Executive — Enterprise AI, Research Informatics & Governance",
    bullets: [
      "Reports directly to C-suite executive leadership (CMO, CIO) with accountability for AI and digital health strategy across the institution — including budget authority, vendor approval, and technology governance decisions escalated to executive administration",
      "Presents AI governance frameworks, platform adoption metrics, and compliance posture to institutional leadership and governance committees at board-equivalent level",
      "Leading enterprise-scale portfolios spanning digital health, AI-enabled patient experience, and data/security governance within a premier academic health system",
      "Architecting research informatics infrastructure including Databricks data platform implementation, Qualtrics clinical workflow integration, and enterprise security governance programs",
      "Developed the FURM AI Governance Framework — a board-reportable decision architecture for deploying AI in regulated clinical environments",
      "Driving cross-functional alignment between clinical leadership, IT, research operations, and executive administration",
      "Overhauled security approval processes to accelerate research data access timelines without compromising compliance posture",
    ],
    relevance:
      "C-suite-reporting VP-equivalent with direct accountability to institutional executive leadership — budget authority, board-level governance reporting, and enterprise AI strategy ownership inside one of the world's premier academic health systems.",
    keyAchievement:
      "Created the FURM AI Governance Framework — a board-reportable architecture presented to institutional governance committees and now governing AI deployment across clinical and operational domains at scale.",
    featured: true,
  },
  {
    name: "IBM",
    outcome: "Enterprise Scale",
    role: "Executive Portfolio Leader — $154M P&L, Global Operations",
    bullets: [
      "Owned and managed a $154M revenue portfolio across global enterprise accounts in regulated industries",
      "Led cross-functional teams spanning sales, delivery, and technical operations at enterprise scale",
      "Recognized with IBM Eminence & Excellence Award (2012) and IBM Outstanding Contributor Award (2013) for exceptional commercial and operational leadership",
      "Built the enterprise execution discipline — governance, accountability structures, and operating cadence — that informed all subsequent operator and executive roles",
    ],
    relevance:
      "Demonstrated C-suite-adjacent P&L ownership and global operating accountability at one of the world's largest technology enterprises.",
    keyAchievement:
      "Managed a $154M portfolio with direct accountability for revenue, delivery, and governance — the foundational proof of executive-scale operating experience.",
    featured: false,
  },
  {
    name: "Medtronic Diabetes",
    outcome: "Digitizing the 770G to 780G Platform",
    role: "Senior Director and Operator — Connected Health & Software-Defined Medical Devices",
    bullets: [
      "Evaluated and directed architecture tradeoffs for firmware over-the-air (FOTA) delivery — maintaining credibility with engineering teams while driving the product decision that eliminated physical device exchanges",
      "Led transformation of Medtronic's diabetes management ecosystem by architecting and scaling digital capabilities that recaptured market competitiveness against Dexcom",
      "Scaled real-time caregiver connectivity via CarePartner App with secure data sharing, alerts, and scalable backend architecture supporting regulated data flows",
      "Designed cybersecurity-aligned development lifecycle and FDA compliance architecture — balancing product velocity with regulatory oversight at medical device scale",
      "Enabled a continuous software upgrade path — transforming a hardware-centric business model into a software-defined delivery model",
    ],
    relevance:
      "Demonstrated technical depth to evaluate architecture tradeoffs and hold engineering accountable, while driving the strategic and regulatory decisions that transformed Medtronic's upgrade economics.",
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
      "Evaluated AI model architecture tradeoffs and infrastructure design decisions, maintaining technical credibility with engineering while driving operational accountability",
      "Designed and implemented SOC 2 and HIPAA compliance programs from the ground up — translating regulatory requirements into engineering constraints the team could execute against",
      "Built operational infrastructure supporting 99.9% uptime SLAs for real-time clinical decision support — a reliability standard that required both technical judgment and vendor governance",
      "Established procurement frameworks and vendor accountability structures that aligned external dependencies to internal engineering standards",
    ],
    relevance:
      "COO role requiring genuine technical fluency — evaluating architecture, setting compliance infrastructure, and holding engineering to uptime and security standards in a regulated clinical AI environment.",
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
        title="Work & Experience | Jag Mariappan — VP Healthcare AI, Board Governance, Research Informatics"
        description="VP-level executive record: $154M P&L at IBM, C-suite roles (CEO, COO, CPO), research informatics at Stanford Medicine, two exits. 25+ years in healthcare AI and enterprise governance."
        keywords="Jag Mariappan work, VP healthcare AI, research informatics, Stanford Medicine, IBM P&L, Medtronic, healthcare executive, enterprise transformation, board governance, C-suite healthcare, Bairo Healthcare, AXIVA"
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
