import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";

const SYSTEM_PROMPT = `You are an expert ATS and executive resume evaluator. Analyze the provided Job Description and Resume and return ONLY valid JSON. No markdown, no commentary.
JSON shape:
{
  "overall_score": number,
  "overall_label": string,
  "summary": string,
  "strengths": [string],
  "gaps": [{"title": string, "severity": "high"|"medium"|"low", "detail": string, "points_impact": number}],
  "criteria_scores": [{"criterion": string, "weight": number, "score": number, "match_level": "full"|"partial"|"missing", "evidence": string, "improvement": string}],
  "matched_keywords": [string],
  "missing_keywords": [string],
  "optimized_summary": string,
  "optimized_headline": string,
  "optimized_bullets": [{"section": string, "before": string, "after": string, "reason": string}],
  "checklist": [{"task": string, "priority": "high"|"medium"|"low"}],
  "cover_letter_hook": string
}
Rules:
- Score 0 to 100.
- Use the actual content provided; do not reuse previous analyses.
- Make criteria specific to this JD, 10 to 16 criteria.
- Optimized bullets must be concise, ATS-friendly, and truthful in tone.
- If evidence is weak, say so.
- Return strict JSON only.`;

// In-memory rate limit: 10 req/min/IP
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
function isRateLimited(ip: string) {
  const now = Date.now();
  const e = rateLimitMap.get(ip);
  if (!e || now > e.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + 60_000 });
    return false;
  }
  e.count++;
  return e.count > 10;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });

  try {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    if (isRateLimited(ip)) {
      return new Response(JSON.stringify({ error: "Too many requests. Try again in a minute." }), {
        status: 429,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const { jd, resume } = await req.json();
    if (typeof jd !== "string" || typeof resume !== "string" || !jd.trim() || !resume.trim()) {
      return new Response(JSON.stringify({ error: "Missing jd or resume" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (jd.length > 60000 || resume.length > 60000) {
      return new Response(JSON.stringify({ error: "Input too large (max ~60k chars each)" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const key = Deno.env.get("ANTHROPIC_API_KEY");
    if (!key) {
      return new Response(JSON.stringify({ error: "ANTHROPIC_API_KEY not configured" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "x-api-key": key,
        "anthropic-version": "2023-06-01",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-5",
        max_tokens: 4096,
        system: SYSTEM_PROMPT,
        messages: [
          { role: "user", content: `JOB DESCRIPTION:\n${jd}\n\nRESUME:\n${resume}` },
        ],
      }),
    });

    const data = await res.json();
    if (!res.ok) {
      console.error("Anthropic error", res.status, data);
      return new Response(JSON.stringify({ error: data.error?.message || "Anthropic API error" }), {
        status: 502,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const raw: string = data.content?.[0]?.text || "{}";
    const cleaned = raw.replace(/^```json?\s*/i, "").replace(/\s*```$/i, "").trim();
    let parsed;
    try {
      parsed = JSON.parse(cleaned);
    } catch {
      const m = cleaned.match(/\{[\s\S]*\}/);
      if (!m) throw new Error("Model did not return valid JSON");
      parsed = JSON.parse(m[0]);
    }

    return new Response(JSON.stringify(parsed), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("analyze-resume error", err);
    return new Response(JSON.stringify({ error: String((err as Error).message || err) }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
