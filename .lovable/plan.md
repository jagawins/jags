

# Homepage Positioning Overhaul

## Overview

Transform the homepage from a portfolio listing into a doctrine-anchored authority page. Every change reinforces the positioning: AI Capital, Governance Architecture, Institutional Adoption.

---

## 1. Hero Rewrite

**File: `src/components/home/Hero.tsx`**

Replace all hero copy:

- **Headline**: "Senior Director and Institutional Operator Architecting AI Capital, Governance, and Scale"
- **Subheadline**: "Designing and deploying AI systems that survive regulatory scrutiny, align with capital discipline, and scale across complex healthcare enterprises."
- **Supporting line**: "From funding decisions to governance architecture to real-world adoption -- I build AI that compounds inside regulated systems."
- **Buttons** (relabeled):
  - "Explore AI Capital & Scale" linking to `/ai-capital-scale`
  - "View Experience" linking to `/work`
- Remove the third "Selected Thinking" button

---

## 2. New Value Snapshot Section

**File: `src/components/home/ValueSnapshot.tsx`** (new)

A compact 3-column row inserted immediately after the Hero, before the AI Search box. Each item is a short doctrine phrase:

| Column | Title | Line |
|--------|-------|------|
| 1 | AI Capital Discipline | Realized value over projected promise. |
| 2 | Governance as Architecture | Design before deployment. |
| 3 | Institutional Adoption | Usage as the primary KPI. |

Styled as a bordered section with `container-narrow`, matching the existing minimalist card pattern.

---

## 3. New Featured Frameworks Section

**File: `src/components/home/FeaturedFrameworks.tsx`** (new)

Placed after the Value Snapshot / AI Search box, before ProofSnapshot. Three linked cards that surface the flagship doctrine pages:

- **Capital Allocation Model** -- links to `/ai-capital-scale#capital-allocation`
- **Institutional Adoption Playbook** -- links to `/ai-capital-scale#adoption-playbook`
- **AI Native Enterprise Essays** -- links to `/ai-capital-scale` (essays section)

Each card has title, one-line description, and an arrow link. Uses existing border/hover patterns.

---

## 4. Rename "Selected Work" to "Practice Areas"

**File: `src/components/home/RecentWork.tsx`**

Replace the current role-based listing with domain-of-authority framing:

- Section label changes from "Selected Work" to "Practice Areas"
- Items become:
  1. AI Capital Allocation & Modeling
  2. Governance Architecture for Regulated Systems
  3. Institutional AI Adoption & Distribution
  4. Enterprise Operating Model Design
  5. Founder-Operator Leadership in Tech & Healthcare
- Each item links to `/work` with a brief outcome-oriented description instead of a role title
- "View all work" link remains

---

## 5. New CTA Section Above Footer

**File: `src/components/home/HomeCTA.tsx`** (new)

A closing engagement block placed after Awards and before the footer:

- **Text**: "I advise executives and institutions on AI capital allocation, governance design, and scaling strategies. If you are serious about durable AI adoption, let's talk."
- **Three CTA buttons**: Speak | Advise | Collaborate -- all linking to `/about#contact`

---

## 6. Footer Brand Line Update

**File: `src/components/layout/Footer.tsx`**

Change the tagline from:
> "Executive operator. Builder. Exit architect."

To:
> "AI Capital. Governance Architecture. Institutional Scale."

Reinforces positioning in the persistent footer element.

---

## 7. Homepage SEO Update

**File: `src/pages/Index.tsx`**

Update the `SEO` component props:

- **description**: "Jag Mariappan builds frameworks for AI capital allocation, governance architecture, and institutional adoption in regulated enterprises. Thought leadership and doctrine for executives and founders."
- **keywords**: Add "AI Capital Allocation, Governance Architecture, Institutional Adoption, Regulated Healthcare"

---

## 8. Homepage Section Order

**File: `src/pages/Index.tsx`**

New component order:

```text
SEO
Hero (rewritten)
ValueSnapshot (new)
AISearchBox (existing)
FeaturedFrameworks (new)
ProofSnapshot (existing)
PartnerOperations (existing)
Awards (existing)
RecentWork (renamed to Practice Areas)
HomeCTA (new)
```

---

## 9. Visual Flow Diagram

Add a simple text-based flow line inside the Hero section, below the supporting line and above the buttons:

```
Capital -> Governance -> Adoption -> Scale
```

Rendered as a styled inline element with arrow separators, using `text-muted-foreground` and small caps tracking. No SVG or images needed.

---

## Files Summary

| File | Action |
|------|--------|
| `src/components/home/Hero.tsx` | Edit -- new copy, buttons, flow diagram |
| `src/components/home/ValueSnapshot.tsx` | Create -- 3-column doctrine row |
| `src/components/home/FeaturedFrameworks.tsx` | Create -- 3 linked framework cards |
| `src/components/home/RecentWork.tsx` | Edit -- rename to Practice Areas, domain framing |
| `src/components/home/HomeCTA.tsx` | Create -- closing engagement CTA |
| `src/components/layout/Footer.tsx` | Edit -- updated tagline |
| `src/pages/Index.tsx` | Edit -- new section order, SEO props |

No new dependencies. All styling uses existing Tailwind utilities and design tokens.

