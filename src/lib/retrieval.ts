import { searchIndex, type SearchDocument } from "./searchIndex";

export function retrieveRelevantDocuments(query: string, topK: number = 5): SearchDocument[] {
  const queryLower = query.toLowerCase();
  const queryTerms = queryLower.split(/\s+/).filter((term) => term.length > 2);

  const scoredDocs = searchIndex.map((doc) => {
    let score = 0;

    // Check keyword matches
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

    // Check title matches
    const titleLower = doc.title.toLowerCase();
    for (const term of queryTerms) {
      if (titleLower.includes(term)) {
        score += 8;
      }
    }

    // Check content matches
    const contentLower = doc.content.toLowerCase();
    for (const term of queryTerms) {
      if (contentLower.includes(term)) {
        score += 3;
      }
    }

    return { doc, score };
  });

  // Sort by score descending and return top K
  return scoredDocs
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, topK)
    .map((item) => item.doc);
}

export function formatContextForAI(docs: SearchDocument[]): string {
  if (docs.length === 0) {
    return "No relevant information found in the knowledge base.";
  }

  return docs
    .map((doc, index) => `[Source ${index + 1}: ${doc.title}]\n${doc.content}\nURL: ${doc.url}`)
    .join("\n\n");
}
