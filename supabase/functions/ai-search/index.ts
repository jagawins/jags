/// <reference types="https://esm.sh/@supabase/functions-js/src/edge-runtime.d.ts" />

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface SearchDocument {
  id: string;
  title: string;
  content: string;
  url: string;
  keywords: string[];
}

const searchIndex: SearchDocument[] = [
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

function retrieveRelevantDocuments(query: string, topK: number = 5): SearchDocument[] {
  const queryLower = query.toLowerCase();
  const queryTerms = queryLower.split(/\s+/).filter((term) => term.length > 2);

  const scoredDocs = searchIndex.map((doc) => {
    let score = 0;

    for (const keyword of doc.keywords) {
      if (queryLower.includes(keyword)) {
        score += 10;
      }
      for (const term of queryTerms) {
        if (keyword.includes(term)) {
          score += 5;
        }
      }
    }

    const titleLower = doc.title.toLowerCase();
    for (const term of queryTerms) {
      if (titleLower.includes(term)) {
        score += 8;
      }
    }

    const contentLower = doc.content.toLowerCase();
    for (const term of queryTerms) {
      if (contentLower.includes(term)) {
        score += 3;
      }
    }

    return { doc, score };
  });

  return scoredDocs
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, topK)
    .map((item) => item.doc);
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { query } = await req.json();

    if (!query || typeof query !== "string") {
      return new Response(
        JSON.stringify({ error: "Query is required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const OPENAI_API_KEY = Deno.env.get("OPENAI_API_KEY");
    if (!OPENAI_API_KEY) {
      return new Response(
        JSON.stringify({ error: "OpenAI API key not configured" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Retrieve relevant documents
    const relevantDocs = retrieveRelevantDocuments(query, 5);

    if (relevantDocs.length === 0) {
      return new Response(
        JSON.stringify({
          answer: "I don't have information about that in my knowledge base. Please ask about Jag Mariappan's work, expertise, ventures, or leadership philosophy.",
          sources: [],
        }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Format context for AI
    const context = relevantDocs
      .map((doc, index) => `[Source ${index + 1}: ${doc.title}]\n${doc.content}`)
      .join("\n\n");

    const systemPrompt = `You are an AI assistant for Jag Mariappan's portfolio website. Answer questions ONLY using the provided sources. Be concise and professional. If the information is not in the sources, say so. Always cite which sources you used.`;

    const userPrompt = `Context from knowledge base:\n${context}\n\nQuestion: ${query}\n\nProvide a concise answer based only on the sources above.`;

    // Call OpenAI
    const openaiResponse = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt },
        ],
        temperature: 0.3,
        max_tokens: 500,
      }),
    });

    if (!openaiResponse.ok) {
      const errorText = await openaiResponse.text();
      console.error("OpenAI error:", openaiResponse.status, errorText);
      return new Response(
        JSON.stringify({ error: "Failed to get AI response" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const openaiData = await openaiResponse.json();
    const answer = openaiData.choices?.[0]?.message?.content || "Unable to generate answer.";

    // Extract unique source URLs
    const sources = [...new Set(relevantDocs.map((doc) => doc.url))];

    return new Response(
      JSON.stringify({ answer, sources }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("AI Search error:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
