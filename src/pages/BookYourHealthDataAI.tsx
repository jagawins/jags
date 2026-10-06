import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { ArrowUpRight, BookOpen, ChevronDown, Download } from "lucide-react";
import bookMockup from "@/assets/your-health-your-data-your-ai.png";

const retailers = [
  { name: "Kindle · US", url: "https://www.amazon.com/dp/B0H7H9T7Q8" },
  { name: "Kindle · India", url: "https://www.amazon.in/dp/B0H7H9T7Q8" },
  { name: "Kindle · UK", url: "https://www.amazon.co.uk/dp/B0H7H9T7Q8" },
  { name: "Paperback", url: "https://www.amazon.com/dp/B0HM1RN9XT" },
  { name: "Barnes & Noble", url: "https://www.barnesandnoble.com/w/your-health-your-data-your-ai-jagadeesan-jag-mariappan/1151583889?ean=2940196646881" },
  { name: "Rakuten Kobo", url: "https://www.kobo.com/search?query=9798182866569" },
  { name: "Vivlio", url: "https://shop.vivlio.com/product/9798182866569_9798182866569_10020/your-health-your-data-your-ai" },
  { name: "Smashwords", url: "https://www.smashwords.com/books/view/2118540" },
  { name: "Bookshop.org", url: "https://bookshop.org/p/books/your-health-your-data-your-ai-jagadeesan-jag-mariappan/ac3e7a11124be46a?ean=9798182866569" },
];

const insideTheBook = [
  {
    title: "Ask better questions",
    body: "Turn a confusing answer into something useful to bring to a care conversation.",
  },
  {
    title: "Judge AI advice with care",
    body: "Notice uncertainty, missing context, and the difference between a helpful explanation and a decision.",
  },
  {
    title: "Protect your privacy",
    body: "Think through what you share with apps, chatbots, portals, and connected devices.",
  },
  {
    title: "Use wearables and portals thoughtfully",
    body: "Make sense of personal data without mistaking every number for a diagnosis.",
  },
  {
    title: "Prepare for appointments",
    body: "Organize concerns and questions so your time with a clinician can go further.",
  },
];

const toolkitItems = [
  "My Health AI Plan",
  "TRUST Checklist",
  "Chatbot-Use Checklist",
  "Before You Share Wearable Data",
  "Questions for a Study Coordinator",
  "20-Minute Privacy Audit",
];

const BookYourHealthDataAI = () => {
  const [sampleExpanded, setSampleExpanded] = useState(false);

  return (
    <Layout>
      <SEO
        title="Your Health, Your Data, Your AI | Book by Jag Mariappan"
        description="A patient's guide to what comes next: what every patient should know as artificial intelligence changes medicine. By Jag Mariappan. Kindle, paperback, and library editions."
        keywords="Your Health Your Data Your AI, Jag Mariappan book, healthcare AI patient guide, health AI book, patient AI literacy, Medhara"
        url="https://jagmariappan.com/your-health-your-data-your-ai"
        type="book"
      />
      <Helmet>
        <meta property="book:author" content="Jagadeesan Mariappan" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Book",
          "name": "Your Health, Your Data, Your AI",
          "alternateName": "What Every Patient Should Know as Artificial Intelligence Changes Medicine",
          "author": { "@type": "Person", "name": "Jagadeesan Mariappan" },
          "inLanguage": "en",
          "url": "https://medhara.ai/book",
          "description": "A patient's guide to what comes next. Health AI is already part of the story around your care. This book helps you understand the tools, ask better questions, and make room for your own judgment.",
          "sameAs": [
            "https://www.amazon.com/dp/B0H7H9T7Q8",
            "https://www.amazon.com/dp/B0HM1RN9XT",
            "https://medhara.ai/book"
          ]
        })}</script>
      </Helmet>

      <section className="section-spacing">
        <div className="container-narrow">
          {/* Hero */}
          <div className="grid md:grid-cols-[320px_1fr] gap-12 items-start mb-20 animate-fade-in">
            <img
              src={bookMockup}
              alt="Front and back covers of Your Health, Your Data, Your AI by Jag Mariappan"
              className="w-full max-w-[320px] shadow-lg"
            />
            <div>
              <p className="tag-outcome mb-4">A Patient's Guide to What Comes Next</p>
              <h1 className="heading-display text-foreground mb-4">
                Your Health, Your Data, Your AI
              </h1>
              <p className="font-serif text-xl md:text-2xl text-muted-foreground leading-snug mb-6">
                What Every Patient Should Know as Artificial Intelligence Changes Medicine
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8 max-w-2xl">
                Health AI is already part of the story around your care. It can shape how a
                diagnosis is explored, how a message is answered, how risk is scored, or how a
                lab result is explained. This book helps you understand the tools, ask better
                questions, and make room for your own judgment.
              </p>
              <p className="tag-outcome mb-3">Get Your Copy</p>
              <ul className="flex flex-wrap gap-x-6 gap-y-3 mb-8">
                {retailers.map((r) => (
                  <li key={r.name}>
                    <a
                      href={r.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-executive inline-flex items-center gap-1.5 text-sm"
                    >
                      {r.name}
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href="https://medhara.ai/health-ai-toolkit"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-foreground text-background hover:bg-foreground/85 transition-colors rounded-sm"
              >
                <Download className="w-4 h-4" />
                Get the free Health AI Toolkit
              </a>
            </div>
          </div>

          {/* Sample reading */}
          <div className="border-t border-border pt-16 mb-20 animate-fade-in">
            <p className="tag-outcome mb-3">Read a Sample</p>
            <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-3">
              Preview the book before you buy.
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mb-10">
              Start with the opening of the book right here. If it resonates, choose a retailer
              above for the full edition.
            </p>

            <article
              aria-labelledby="sample-heading"
              className="border border-border bg-muted/20 rounded-sm"
            >
              <div className="px-6 md:px-10 py-8 md:py-10 border-b border-border/60 flex items-start gap-4">
                <BookOpen className="w-5 h-5 text-primary shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <p className="tag-outcome mb-2">Sample Excerpt</p>
                  <h3 id="sample-heading" className="font-serif text-xl md:text-2xl font-medium text-foreground">
                    Introduction: The Moment We're In
                  </h3>
                </div>
              </div>

              <div className="px-6 md:px-10 py-8 md:py-10 max-w-2xl">
                <div className="space-y-5 text-foreground/90 leading-relaxed font-serif text-lg">
                  <p>
                    AI is entering healthcare through more than the exam room. It can shape how a
                    diagnosis is explored, how a message is answered, how risk is scored, how a
                    lab result is explained, or how a research study reaches you.
                  </p>
                  <p>
                    That can be useful. It can also be difficult to tell what a tool knows, what
                    it misses, where your information goes, and when a human conversation matters
                    more.
                  </p>
                  <p>
                    The goal isn't to fear every tool or trust every answer. It's to meet new
                    technology with better questions.
                  </p>
                </div>

                <div
                  id="sample-more"
                  hidden={!sampleExpanded}
                  className="space-y-5 text-foreground/90 leading-relaxed font-serif text-lg mt-5"
                >
                  <p className="italic text-muted-foreground">
                    [Placeholder] The full opening excerpt goes here. Send me the introduction or
                    first chapter text from the book and I will drop it in, formatted for
                    comfortable on-screen reading.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setSampleExpanded((v) => !v)}
                  aria-expanded={sampleExpanded}
                  aria-controls="sample-more"
                  className="mt-8 inline-flex items-center gap-2 px-4 py-2 text-sm font-medium border border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors rounded-sm"
                >
                  {sampleExpanded ? "Show less" : "Continue reading"}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${sampleExpanded ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  />
                </button>
              </div>
            </article>
          </div>

          {/* Inside the book */}
          <div className="border-t border-border pt-16 mb-20 animate-fade-in">
            <p className="tag-outcome mb-3">Inside the Book</p>
            <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-10">
              A little more clarity for the moments that matter.
            </h2>
            <div className="space-y-0">
              {insideTheBook.map((item, i) => (
                <div key={item.title} className="border-t border-border py-8 grid md:grid-cols-[80px_1fr] gap-4">
                  <span className="font-serif text-2xl text-muted-foreground/50">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-serif text-xl font-medium text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed max-w-2xl">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Caregivers */}
          <div className="border-t border-border pt-16 mb-20 animate-fade-in">
            <p className="tag-outcome mb-3">For the Person Beside You</p>
            <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-6">
              Caregivers deserve clearer tools, too.
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-2xl">
              When you're helping someone you love, you may be sorting appointment notes, portal
              messages, medication questions, or wearable data alongside your own worries. The
              book offers a steadier way to approach those tools, without pretending technology
              can replace the relationship at the center of care.
            </p>
          </div>

          {/* Toolkit */}
          <div className="border-t border-border pt-16 mb-20 animate-fade-in">
            <p className="tag-outcome mb-3">A Practical Companion</p>
            <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-6">
              Put the questions to work.
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mb-8">
              The free Health AI Toolkit turns the book's themes into six printable worksheets,
              from making a personal plan to reviewing wearable-data sharing and auditing privacy
              settings.
            </p>
            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 max-w-2xl mb-8">
              {toolkitItems.map((t) => (
                <li key={t} className="text-muted-foreground border-b border-border/60 pb-3">{t}</li>
              ))}
            </ul>
            <a
              href="https://medhara.ai/health-ai-toolkit"
              target="_blank"
              rel="noopener noreferrer"
              className="link-executive inline-flex items-center gap-1.5"
            >
              Get the free Health AI Toolkit
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* For organizations */}
          <div className="border-t border-border pt-16 animate-fade-in">
            <p className="tag-outcome mb-3">For Organizations</p>
            <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-6">
              Bring a clearer conversation to your community.
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mb-6">
              Libraries, caregiver groups, patient advocacy organizations, employers,
              health-literacy teams, and speaking inquiries are welcome.
            </p>
            <a
              href="mailto:jag@medhara.ai?subject=Book%20and%20toolkit%20inquiry"
              className="link-executive inline-flex items-center gap-1.5"
            >
              Contact Jag
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BookYourHealthDataAI;
