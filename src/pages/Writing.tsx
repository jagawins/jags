import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import bookCover from "@/assets/silence-is-success.png";
import healthBookCover from "@/assets/your-health-your-data-your-ai.png";
import modelBookMockup from "@/assets/inside-the-model-mockup.png.asset.json";
const modelBookCover = modelBookMockup.url;
import amazonLogo from "@/assets/logos/amazon.svg";
import googlePlayLogo from "@/assets/logos/googleplay.svg";
import spotifyLogo from "@/assets/logos/spotify.svg";
import audibleLogo from "@/assets/logos/audible.svg";

const modelBookRetailers = [
  { name: "Amazon Kindle", url: "https://www.amazon.com/dp/B0HSZLTJJM", logo: amazonLogo },
  { name: "Amazon Paperback", url: "https://www.amazon.com/dp/B0HPY268KS", logo: amazonLogo },
  { name: "Google Play Books", url: "https://play.google.com/store/books/details?id=c7IzEgAAQBAJ", logo: googlePlayLogo },
  { name: "Barnes & Noble", url: "https://www.barnesandnoble.com/s/Inside%20the%20Model%20Mariappan", logo: null },
  { name: "Spotify", url: "https://open.spotify.com/search/Inside%20the%20Model%20Mariappan/audiobooks", logo: spotifyLogo },
  { name: "Audible", url: "https://www.audible.com/search?keywords=Inside+the+Model+Mariappan", logo: audibleLogo },
];

const bookRetailers = [
  { name: "Apple Books", url: "https://books.apple.com/us/book/silence-is-success-vijays-quiet-revolution/id6768719644" },
  { name: "Rakuten Kobo", url: "https://www.kobo.com/us/en/ebook/silence-is-success-vijay-s-quiet-revolution" },
  { name: "Books2Read (all stores)", url: "https://books2read.com/u/bMLjpa" },
  { name: "Thalia", url: "https://www.thalia.de/shop/home/artikeldetails/A1079815620" },
];
const healthBookRetailers = [
  { name: "Kindle", url: "https://www.amazon.com/dp/B0H7H9T7Q8" },
  { name: "Paperback", url: "https://www.amazon.com/dp/B0HM1RN9XT" },
  { name: "Barnes & Noble", url: "https://www.barnesandnoble.com/w/your-health-your-data-your-ai-jagadeesan-jag-mariappan/1151583889?ean=2940196646881" },
  { name: "Rakuten Kobo", url: "https://www.kobo.com/search?query=9798182866569" },
  { name: "Bookshop.org", url: "https://bookshop.org/p/books/your-health-your-data-your-ai-jagadeesan-jag-mariappan/ac3e7a11124be46a?ean=9798182866569" },
  { name: "Medhara", url: "https://medhara.ai/book" },
];
const posts = [
  {
    title: "Research Computing: From Wish to System",
    url: "/writing/research-computing-wish-to-system",
    date: "2026",
    excerpt: "How to turn a research-ready aspiration into an i2b2 feasibility query that runs in four hours instead of four weeks.",
    internal: true,
    flagship: true,
    category: "Research",
  },
  {
    title: "Healthcare AI Governance Framework for Health Systems in 2026",
    url: "/healthcare-ai-governance-framework",
    date: "March 2026",
    excerpt: "A board-ready five-layer governance model for evaluating, approving, scaling, and retiring AI across enterprise health systems. Includes executive scorecard.",
    internal: true,
    flagship: true,
    category: "Healthcare AI",
  },
  {
    title: "Measuring ROI of AI in Healthcare",
    url: "/measuring-roi-of-ai-in-healthcare",
    date: "March 2026",
    excerpt: "Quantitative frameworks for cost avoidance, throughput acceleration, denial reduction, labor leverage, and quality correlation — with real math.",
    internal: true,
    flagship: true,
    category: "Healthcare AI",
  },
  {
    title: "Agentic AI in Clinical and Operational Workflows",
    url: "/agentic-ai-in-clinical-and-operational-workflows",
    date: "March 2026",
    excerpt: "The executive guide to autonomy levels 0–4, governance, risk matrix, regulatory anchors, monitoring design, and vendor selection for agentic AI in healthcare.",
    internal: true,
    flagship: true,
    category: "Healthcare AI",
  },
  {
    title: "Healthcare AI Governance Is the Executive Competency of 2026",
    url: "/writing/healthcare-ai-governance-executive-competency",
    date: "March 2026",
    excerpt: "Why the most important skill for health system leaders isn't understanding AI — it's governing it. A practitioner's guide from Stanford Medicine.",
    internal: true,
    category: "Healthcare AI",
  },
  {
    title: "The Chair Theory",
    url: "https://myjmr.org/2025/12/27/the-chair-theory/",
    date: "December 2025",
    excerpt: "Everyone has a table in their life. Some tables pull a chair the moment you arrive. Others make you wait. Some never quite make room at all.",
    category: "Essays",
  },
  {
    title: "Lucky Girl Syndrome",
    url: "https://myjmr.org/2025/12/27/lucky-girl-syndrome/",
    date: "December 2025",
    excerpt: "What is Lucky Girl Syndrome really, and how should you think about it in a practical way? Mindset meets strategy.",
    category: "Essays",
  },
  {
    title: "Comfort Protects. Faith Carries. Purpose Decides.",
    url: "https://myjmr.org/2025/12/25/comfort-protects-faith-carries-purpose-decides/",
    date: "December 2025",
    excerpt: "You were not built for a painless life. You were built for a purposeful one.",
    category: "Essays",
  },
];

const mediumPosts = [
  {
    title: "The Governance Gap in Enterprise AI",
    excerpt: "Why most AI initiatives fail at the intersection of ambition and accountability.",
  },
  {
    title: "Decision Systems at Scale",
    excerpt: "Building operational frameworks that survive complexity and growth.",
  },
  {
    title: "Healthcare's AI Inflection Point",
    excerpt: "What healthcare operators must understand before the next wave arrives.",
  },
];

const Writing = () => {
  return (
    <Layout>
      <SEO 
        title="Writing & Books | Jag Mariappan — Author"
        description="Author of 'Your Health, Your Data, Your AI' and 'Silence is Success: Vijay's Quiet Revolution in Tamil Nadu'. Essays and frameworks on healthcare AI, governance, and transformation."
        keywords="Jag Mariappan author, Your Health Your Data Your AI book, Silence is Success book, Jagadeesan Mariappan, healthcare AI writing, AI governance essays, patient AI literacy"
        url="https://jagmariappan.com/writing"
        type="book"
        image="https://jagmariappan.com/silence-is-success-cover.png"
      />
      <Helmet>
        <meta property="book:author" content="Jagadeesan Mariappan" />
        <meta property="og:see_also" content="https://books2read.com/u/bMLjpa" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Book",
          "name": "Silence is Success: Vijay's Quiet Revolution in Tamil Nadu",
          "author": { "@type": "Person", "name": "Jagadeesan Mariappan" },
          "bookFormat": "https://schema.org/EBook",
          "inLanguage": "en",
          "image": "https://jagmariappan.com/silence-is-success-cover.png",
          "url": "https://books2read.com/u/bMLjpa",
          "description": "A political biography of Tamil Nadu's most unlikely Chief Minister — how Vijay built a movement in silence.",
          "sameAs": [
            "https://books.apple.com/us/book/silence-is-success-vijays-quiet-revolution/id6768719644",
            "https://www.kobo.com/us/en/ebook/silence-is-success-vijay-s-quiet-revolution",
            "https://www.thalia.de/shop/home/artikeldetails/A1079815620"
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Book",
          "name": "Your Health, Your Data, Your AI",
          "alternateName": "What Every Patient Should Know as Artificial Intelligence Changes Medicine",
          "author": { "@type": "Person", "name": "Jagadeesan Mariappan" },
          "inLanguage": "en",
          "url": "https://jagmariappan.com/your-health-your-data-your-ai",
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
          <div className="max-w-3xl mb-16 animate-fade-in">
            <h1 className="heading-display text-foreground mb-6">Writing</h1>
            <p className="body-large text-muted-foreground">
              Author, essayist, and operator. Published books, long-form essays, and frameworks on purpose, focus, and building systems that scale.
            </p>
          </div>

          {/* Published Book */}
          <div className="border-t border-border pt-12 mb-20 animate-fade-in">
            <p className="tag-outcome mb-6">Published Books</p>
            <div className="grid md:grid-cols-[260px_1fr] gap-10 items-start mb-20">
              <a href="https://www.amazon.com/dp/B0HSZLTJJM" target="_blank" rel="noopener noreferrer" className="block group">
                <img src={modelBookCover} alt="Inside the Model: How Large Language Models Are Built, Trained, Served and Judged, by Jag Mariappan" className="w-full max-w-[260px]" />
              </a>
              <div>
                <p className="text-xs font-semibold tracking-wider uppercase text-primary/80 mb-2">New Release</p>
                <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground leading-tight mb-3">
                  Inside the Model: How Large Language Models Are Built, Trained, Served and Judged
                </h2>
                <p className="text-sm text-muted-foreground/80 mb-5">An Illustrated Guide for Leaders in Healthcare and Enterprise, by Jag Mariappan</p>
                <p className="text-muted-foreground leading-relaxed mb-8 max-w-2xl">
                  A clear, illustrated walk through how large language models actually work, from data and training to serving and evaluation, so leaders can make informed decisions about AI in healthcare and enterprise.
                </p>
                <p className="tag-outcome mb-3">Available in Ebook, Paperback &amp; Audiobook</p>
                <ul className="flex flex-wrap gap-3">
                  {modelBookRetailers.map((r) => (
                    <li key={r.name}>
                      <a href={r.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-border rounded-md px-3 py-2 text-sm text-foreground hover:border-primary hover:text-primary transition-colors">
                        {r.logo ? <img src={r.logo} alt="" aria-hidden="true" className="w-4 h-4 opacity-80" /> : <span aria-hidden="true" className="font-serif font-semibold text-xs">B&amp;N</span>}
                        {r.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="grid md:grid-cols-[260px_1fr] gap-10 items-start">
              <a
                href="https://books2read.com/u/bMLjpa"
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <img
                  src={bookCover}
                  alt="Silence is Success — Vijay's Quiet Revolution in Tamil Nadu, by Jagadeesan Mariappan"
                  className="w-full max-w-[240px] shadow-lg group-hover:shadow-xl transition-shadow"
                />
              </a>
              <div>
                <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground leading-tight mb-3">
                  Silence is Success: Vijay's Quiet Revolution in Tamil Nadu
                </h2>
                <p className="text-sm text-muted-foreground/80 mb-5">A Political Biography by Jagadeesan Mariappan</p>
                <p className="text-muted-foreground leading-relaxed mb-8 max-w-2xl">
                  "He said nothing. He changed everything." From silver screen to Secretariat —
                  how India's most unlikely Chief Minister built a movement in silence.
                </p>
                <p className="tag-outcome mb-3">Available in Ebook</p>
                <ul className="flex flex-wrap gap-x-6 gap-y-3">
                  {bookRetailers.map((r) => (
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
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-12 mb-20 animate-fade-in">
            <div className="grid md:grid-cols-[260px_1fr] gap-10 items-start">
              <Link
                to="/your-health-your-data-your-ai"
                className="block group"
              >
                <img
                  src={healthBookCover}
                  alt="Your Health, Your Data, Your AI, by Jagadeesan Mariappan"
                  className="w-full max-w-[240px] shadow-lg group-hover:shadow-xl transition-shadow"
                />
              </Link>
              <div>
                <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground leading-tight mb-3">
                  Your Health, Your Data, Your AI
                </h2>
                <p className="text-sm text-muted-foreground/80 mb-5">What Every Patient Should Know as Artificial Intelligence Changes Medicine, by Jagadeesan Mariappan</p>
                <p className="text-muted-foreground leading-relaxed mb-8 max-w-2xl">
                  A patient's guide to what comes next. Health AI is already part of the story around your care. This book helps you understand the tools, ask better questions, and make room for your own judgment.
                </p>
                <p className="tag-outcome mb-3">Available in Ebook &amp; Paperback</p>
                <ul className="flex flex-wrap gap-x-6 gap-y-3">
                  {healthBookRetailers.map((r) => (
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
                  <li>
                    <Link to="/your-health-your-data-your-ai" className="link-executive inline-flex items-center gap-1.5 text-sm">
                      About the book
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-0">
            {posts.map((post, index) => {
              const isInternal = 'internal' in post && post.internal;
              const Wrapper = isInternal ? Link : 'a';
              const linkProps = isInternal
                ? { to: post.url }
                : { href: post.url, target: "_blank", rel: "noopener noreferrer" };
              return (
                <Wrapper
                  key={index}
                  {...(linkProps as any)}
                  className="group block border-t border-border py-10 transition-colors hover:bg-muted/30 animate-fade-in"
                  style={{ opacity: 0, animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
                >
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex-1">
                      <p className="text-xs font-semibold tracking-wider uppercase text-primary/80 mb-2">
                        {post.category}
                      </p>
                      <h2 className="font-serif text-xl md:text-2xl font-medium text-foreground group-hover:text-primary transition-colors leading-tight mb-3">
                        {post.title}
                      </h2>
                      <p className="text-muted-foreground leading-relaxed mb-2 max-w-2xl">
                        {post.excerpt}
                      </p>
                      <p className="text-sm text-muted-foreground/70">
                        {post.date}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-primary shrink-0 mt-1">
                      <span className="text-sm hidden sm:inline">{isInternal ? "Read" : "Read"}</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </Wrapper>
              );
            })}
          </div>

          {/* Featured on Medium */}
          <div className="border-t border-border pt-16 mt-8">
            <div className="mb-8">
              <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-3">
                Featured on Medium
              </h2>
              <p className="text-muted-foreground">
                Synthesized insights on AI, Governance, and Operational Scale.
              </p>
            </div>

            <div className="space-y-0">
              {mediumPosts.map((post, index) => (
                <a
                  key={index}
                  href="https://medium.com/@jagawins/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block border-t border-border py-8 transition-colors hover:bg-muted/30 animate-fade-in"
                  style={{ opacity: 0, animationDelay: `${(posts.length + index) * 100}ms`, animationFillMode: 'forwards' }}
                >
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex-1">
                      <h3 className="font-serif text-lg md:text-xl font-medium text-foreground group-hover:text-primary transition-colors leading-tight mb-2">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed max-w-2xl">
                        {post.excerpt}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-primary shrink-0 mt-1">
                      <span className="text-sm hidden sm:inline">Read on Medium</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="border-t border-border pt-12 mt-0">
            <p className="text-muted-foreground">
              View more writing on{" "}
              <a
                href="https://myjmr.org"
                target="_blank"
                rel="noopener noreferrer"
                className="link-executive"
              >
                myjmr.org
              </a>
              {" "}or{" "}
              <a
                href="https://medium.com/@jagawins/"
                target="_blank"
                rel="noopener noreferrer"
                className="link-executive"
              >
                Medium
              </a>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Writing;
