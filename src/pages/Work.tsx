import Layout from "@/components/layout/Layout";

const projects = [
  {
    name: "Stanford Medicine",
    outcome: "Current",
    role: "Enterprise Transformation Lead",
    bullets: [
      "Leading enterprise-wide digital transformation initiatives across Stanford Health Care",
      "Driving AI integration strategy for clinical operations and decision support",
      "Architecting governance frameworks for emerging technology deployment",
      "Managing cross-functional teams spanning clinical, technical, and administrative domains",
    ],
    relevance:
      "Current leadership role at one of the world's premier academic medical centers, driving transformation at the intersection of healthcare delivery and AI innovation.",
    featured: true,
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
];
const Work = () => {
  return (
    <Layout>
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

                    <div className="border-l-2 border-primary/20 pl-4">
                      <p className="text-sm text-muted-foreground font-medium mb-1">
                        Executive Relevance
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {project.relevance}
                      </p>
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
