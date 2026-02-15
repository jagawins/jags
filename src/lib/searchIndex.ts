export interface SearchDocument {
  id: string;
  title: string;
  content: string;
  url: string;
  keywords: string[];
}

export const searchIndex: SearchDocument[] = [
  {
    id: "home",
    title: "Jag Mariappan - Executive Portfolio",
    content: "Jag Mariappan is a Senior Director of Enterprise Operations at Stanford Medicine, specializing in healthcare operations, AI systems leadership, enterprise governance, and digital transformation. Leadership philosophy: Clarity reduces friction, cadence creates alignment, decision quality defines outcomes.",
    url: "https://jagmariappan.com/",
    keywords: ["jag mariappan", "stanford medicine", "healthcare", "ai", "operations", "leadership", "executive"],
  },
  {
    id: "work",
    title: "Work & Ventures",
    content: "Portfolio of ventures and exits: Stanford Medicine (Senior Director), Bairo Healthcare (Founder & CEO, Sold), VerityAxis (Co-Founder, Sold), PrismOS (COO, Live), PodoraHQ (CPO, Live), AxiomAppeals (Executive Advisor, Live), Axora (Founder, Live), Medhara (Founder, Live). 2 ventures acquired, 5 live platforms, 15+ years operating.",
    url: "https://jagmariappan.com/work",
    keywords: ["ventures", "exits", "bairo", "verityaxis", "prismos", "podora", "axiomappeals", "axora", "medhara", "startups", "healthcare technology"],
  },
  {
    id: "stanford",
    title: "Stanford Medicine Role",
    content: "Senior Director, Enterprise Operations (VP-Equivalent) at Stanford Medicine. Leading enterprise-scale portfolios spanning digital health, AI-enabled patient experience, and data/security governance. Aligning platform roadmaps and adoption across clinical, operational, and technology stakeholders.",
    url: "https://jagmariappan.com/work",
    keywords: ["stanford", "stanford medicine", "enterprise operations", "digital health", "healthcare"],
  },
  {
    id: "ai-products",
    title: "AI Products Built",
    content: "AI products built by Jag Mariappan: Axora (Executive Narrative Engineering Platform), Medhara (Evidence-Driven Healthcare Search), FocusDay (AI productivity), PrismOS (Clinical decision support), Podora (AI-powered decisions), AxiomAppeals (Healthcare revenue cycle).",
    url: "https://jagmariappan.com/work",
    keywords: ["ai products", "axora", "medhara", "focusday", "prismos", "podora", "axiomappeals", "artificial intelligence"],
  },
  {
    id: "axora",
    title: "Axora - Executive Narrative Engineering",
    content: "Axora transforms unstructured inputs—documents, transcripts, strategy notes—into executive-grade narratives, investor decks, and board-ready communication. Applies structured intelligence, visual block composition, and adaptive reasoning. Available at axora.verityaxis.com.",
    url: "https://axora.verityaxis.com/",
    keywords: ["axora", "narrative", "executive", "investor deck", "board", "communication", "ai"],
  },
  {
    id: "medhara",
    title: "Medhara - Healthcare Search Intelligence",
    content: "Medhara is a precision search engine for healthcare professionals requiring fast, accurate, cited answers across CPT guidance, LCD/NCD policies, prior authorization, HIPAA rules, and clinical evidence. Every answer is sourced, structured, and defensible. Available at medhara.axiomappeals.com.",
    url: "https://medhara.axiomappeals.com/",
    keywords: ["medhara", "healthcare search", "cpt", "hipaa", "clinical", "medical", "compliance"],
  },
  {
    id: "ai-capital-scale",
    title: "AI Capital Allocation & Institutional Scale",
    content: "Frameworks for funding, governing, and scaling AI in regulated healthcare enterprises. Capital Allocation Model with Realized NPV equation factoring adoption, time, and governance drag. Institutional Adoption Playbook showing physician AI usage growth from 38% to 66%, 71% organizational adoption, and 3.2x ROI. AI Native Enterprise essays on governance drag, distribution mechanics, and capital discipline.",
    url: "https://jagmariappan.com/ai-capital-scale",
    keywords: ["ai capital", "capital allocation", "governance drag", "institutional scale", "adoption", "npv", "healthcare ai", "distribution", "playbook"],
  },
  {
    id: "principles",
    title: "Operating Principles",
    content: "Leadership and operating principles: Clarity reduces friction. Cadence creates alignment. Decision quality defines outcomes. Operational clarity, execution cadence, AI governance structures, cross-functional decision systems, and enterprise portfolio discipline.",
    url: "https://jagmariappan.com/principles",
    keywords: ["principles", "leadership", "clarity", "cadence", "decisions", "governance", "philosophy"],
  },
  {
    id: "expertise",
    title: "Areas of Expertise",
    content: "Expertise areas: Healthcare Operations, AI Systems, Enterprise Governance, Digital Transformation, Portfolio Management, Cross Functional Execution, Vendor Management, Operational Strategy, AI Governance.",
    url: "https://jagmariappan.com/faq",
    keywords: ["expertise", "skills", "healthcare", "ai", "governance", "transformation", "operations"],
  },
  {
    id: "contact",
    title: "Contact & Connect",
    content: "Connect with Jag Mariappan on LinkedIn (linkedin.com/in/jagawins/) or X/Twitter (@AXORAHQ). Website: jagmariappan.com.",
    url: "https://jagmariappan.com/about",
    keywords: ["contact", "linkedin", "twitter", "connect", "social"],
  },
  {
    id: "faq",
    title: "FAQ - Frequently Asked Questions",
    content: "FAQ: What does Jag specialize in? Healthcare operations, AI systems leadership, enterprise governance. What roles? Enterprise Operations, Digital Health, AI Systems Delivery, Chief of Staff, VP-level leadership. Industries? Healthcare, public sector, enterprise technology, AI platforms.",
    url: "https://jagmariappan.com/faq",
    keywords: ["faq", "questions", "roles", "industries", "specialization"],
  },
];
