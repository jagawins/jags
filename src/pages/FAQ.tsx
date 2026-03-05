import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { Helmet } from "react-helmet-async";

const faqs = [
  {
    question: "What does Jag Mariappan specialize in?",
    answer: "Healthcare operations, digital systems leadership, enterprise governance, and AI-enabled execution across large organizations."
  },
  {
    question: "What roles does he work best in?",
    answer: "Enterprise Operations, Digital Health, AI Systems Delivery, Chief of Staff functions, and VP-level operational leadership."
  },
  {
    question: "What is his leadership philosophy?",
    answer: "Clarity reduces friction. Cadence creates alignment. Decision quality defines outcomes."
  },
  {
    question: "What industries has he led in?",
    answer: "Healthcare, public sector, enterprise technology, and AI-driven digital platforms."
  },
  {
    question: "What frameworks does he use?",
    answer: "Operational clarity, execution cadence, AI governance structures, cross-functional decision systems, and enterprise portfolio discipline."
  },
  {
    question: "What are his current focus areas?",
    answer: "Healthcare AI, digital operations, enterprise systems, and multi-program governance."
  },
  {
    question: "Does he build AI products?",
    answer: "Yes. AXIVA, FocusDay, PrismOS, Podora, and AxiomAppeals."
  },
  {
    question: "How does he help organizations execute better?",
    answer: "By simplifying decisions, structuring cross-functional alignment, and driving predictable execution."
  }
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

const FAQ = () => {
  return (
    <Layout>
      <SEO
        title="FAQ | Jag Mariappan"
        description="Frequently asked questions about Jag Mariappan's expertise in healthcare operations, AI systems, enterprise governance, and digital transformation."
        keywords="Jag Mariappan FAQ, healthcare operations, AI systems, enterprise governance, digital transformation, leadership philosophy"
        url="https://jagmariappan.com/faq"
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <main className="section-spacing">
        <div className="container-narrow">
          <header className="mb-16">
            <h1 className="heading-display mb-6">Frequently Asked Questions</h1>
            <p className="body-large text-muted-foreground max-w-2xl">
              Common questions about Jag Mariappan's expertise, leadership philosophy, and focus areas.
            </p>
          </header>

          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <article 
                key={index} 
                className="border-b border-border pb-8 last:border-0"
                itemScope
                itemType="https://schema.org/Question"
              >
                <h2 
                  className="heading-section text-xl md:text-2xl mb-4"
                  itemProp="name"
                >
                  {faq.question}
                </h2>
                <div 
                  itemScope 
                  itemType="https://schema.org/Answer"
                  itemProp="acceptedAnswer"
                >
                  <p 
                    className="text-muted-foreground text-lg leading-relaxed"
                    itemProp="text"
                  >
                    {faq.answer}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default FAQ;
