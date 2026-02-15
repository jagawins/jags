

# AI Capital & Institutional Scale -- Implementation Plan

## Overview

Create a new doctrine section at `/ai-capital-scale` that positions Jag as the architect of AI capital allocation and institutional scale in regulated enterprises. This is a structured authority page, not a blog.

---

## 1. File Operations -- PDFs

Copy both uploaded PDFs to `public/docs/` so they can be linked and downloaded directly:

- `public/docs/How-I-Decide-Where-AI-Capital-Should-Actually-Go-in-Healthcare.pdf`
- `public/docs/AI_Distribution_Governance.pdf`

---

## 2. Navigation Update

**File: `src/components/layout/Navigation.tsx`**

Add "AI Capital & Scale" to the `navLinks` array, positioned between "Work" and "Principles":

```text
Home | Work | AI Capital & Scale | Principles | Writing | About
```

Both desktop and mobile menus use the same array, so both update automatically.

---

## 3. New Page: `/ai-capital-scale`

**File: `src/pages/AICapitalScale.tsx`**

A single-page component with four distinct sections, wrapped in the existing `Layout` component. No new dependencies required.

### Section A -- Hero
- Title: "AI Capital & Institutional Scale"
- Subtitle: "How regulated enterprises fund, govern, and scale AI."
- Supporting line about capital, governance, distribution
- Two CTA buttons linking to anchor sections below: Capital Allocation Model and Institutional Adoption Playbook

### Section B -- Capital Allocation Model
- Header and subheader
- Body copy on why AI is a capital allocation problem
- **Equation block** with visually distinct styling: subtle background, larger serif/monospace typography for the formula `Realized NPV ~ NPV x Adoption x Time x (1 - Governance Drag)`
- Three explanatory bullets
- CTA button: "Read the Full Capital Allocation Framework" linking to the PDF in `/docs/`

### Section C -- Institutional Adoption Playbook
- Header and subheader
- Opening paragraph with adoption statistics
- **Key Signals row**: three stat cards showing `38% -> 66%`, `71%`, `3.2x ROI`
- Five core principle bullets
- CTA button: "Read the Institutional Playbook" linking to the PDF

### Section D -- AI Native Enterprise Essays
- Header, subheader, intro copy
- Three essay cards in a grid layout:
  1. "Why Most AI Investments Fail"
  2. "Governance Drag as Strategic Constraint"
  3. "Distribution Is the Proof of AI"
- Each card: title, one-sentence thesis, "Read Essay" link (placeholder hrefs for now)

### Section E -- Positioning Close
- "Why This Matters" header
- Two-paragraph closing statement
- Bio line
- CTA: "Invite Jag to Speak or Advise" linking to `/about#contact`

---

## 4. Route Registration

**File: `src/App.tsx`**

Add route:
```typescript
import AICapitalScale from "./pages/AICapitalScale";
// ...
<Route path="/ai-capital-scale" element={<AICapitalScale />} />
```

---

## 5. SEO

The page component will use the existing `SEO` component with:
- **Title**: "AI Capital Allocation & Institutional Scale in Healthcare"
- **Description**: "Frameworks for funding, governing, and scaling AI in regulated healthcare enterprises."
- **URL**: `https://jagmariappan.com/ai-capital-scale`

---

## 6. Sitemap Update

**File: `public/sitemap.xml`**

Add entry for `/ai-capital-scale` with priority `0.9`.

---

## 7. Search Index Update

**File: `src/lib/searchIndex.ts`**

Add an entry for the new AI Capital & Scale page so the AI search feature can surface it.

---

## Visual Design Notes

All styling uses existing Tailwind utilities and CSS custom properties. No new dependencies.

- **Equation block**: `bg-muted/50` background, `font-serif` at `text-2xl md:text-3xl`, padded container with border
- **Stat cards**: Simple bordered cards with large numeric values using `font-serif text-3xl`
- **Essay cards**: `border border-border` with hover state, arrow indicator
- **Spacing**: `section-spacing` utility class between sections, `container-narrow` for max-width
- **Colors**: Foreground, muted-foreground, and primary only -- consistent with existing palette
- No gradients, no parallax, no stock imagery

---

## Files Changed Summary

| File | Action |
|------|--------|
| `public/docs/How-I-Decide-Where-AI-Capital-Should-Actually-Go-in-Healthcare.pdf` | Copy from upload |
| `public/docs/AI_Distribution_Governance.pdf` | Copy from upload |
| `src/pages/AICapitalScale.tsx` | Create (new page) |
| `src/components/layout/Navigation.tsx` | Edit (add nav item) |
| `src/App.tsx` | Edit (add route) |
| `public/sitemap.xml` | Edit (add URL) |
| `src/lib/searchIndex.ts` | Edit (add index entry) |

No existing pages are refactored. No new dependencies.

