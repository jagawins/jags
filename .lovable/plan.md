

# Medtronic Case Study: HTML Page + Doctrine Integration

## Overview

Three changes: (1) copy PDF to `public/docs/`, (2) create a full HTML case study page at `/case-studies/medtronic-770-to-780`, (3) add a Case Studies section on `/ai-capital-scale` linking doctrine to proof.

---

## 1. Copy PDF to Public Directory

Copy `user-uploads://Medtronic_770G_to_780G_Case_Study.pdf` to `public/docs/Medtronic_770G_to_780G_Case_Study.pdf` so it is downloadable at `/docs/Medtronic_770G_to_780G_Case_Study.pdf`.

---

## 2. New Case Study Page

**File: `src/pages/MedtronicCaseStudy.tsx`** (new)

Full HTML rendering of the PDF content with structured headings for SEO discoverability.

**SEO:**
- Title: "Medtronic 770G to 780G Case Study | Jag Mariappan"
- Description: "An institutional case study on scaling a connected medical device platform through FOTA, governance architecture, cloud infrastructure, and adoption mechanics."

**Page structure:**

1. Hero with title "Digitizing Diabetes: Scaling Medtronic's 770G to 780G Ecosystem" and subtitle "From Device-Centric to Software-Defined Platform Strategy"
2. "Prefer PDF?" download link near top
3. Key Outcomes summary block (5 bullet highlights from executive summary)
4. Structured sections with H2 headings:
   - Executive Summary
   - Market Context and Strategic Imperative
   - The Strategic Shift: Device to Platform
   - Implementation Architecture (with H3 subsections: FOTA, CarePartner Ecosystem, Regulatory & Governance Architecture)
   - Market Impact and Competitive Repositioning
   - The Operator Lens
   - Key Learnings for Regulated Platforms (numbered list)
   - Conclusion: The Platform Imperative
   - About the Author
5. Download PDF CTA button at bottom

All content taken directly from the parsed PDF. Styled consistently with existing page patterns (container-narrow, font-serif headings, border-l bullets, muted-foreground body text).

---

## 3. Add Route to App.tsx

**File: `src/App.tsx`**

Add route: `<Route path="/case-studies/medtronic-770-to-780" element={<MedtronicCaseStudy />} />`

---

## 4. Case Studies Section on AI Capital & Scale Page

**File: `src/pages/AICapitalScale.tsx`**

Insert a new section between the Adoption Playbook and AI Native Enterprise Essays sections.

**Content:**

```text
Section Title: Case Studies

Subheader: Institutional transformations where capital discipline,
governance architecture, and distribution mechanics produced durable scale.

Card:
  Title: Digitizing Diabetes: Medtronic 770G -> 780G
  Subtitle: From device-centric replacement cycles to a software-defined
  connected ecosystem.

  Three proof bullets:
  - Capital: Invested in infrastructure that enabled continuous software
    iteration (FOTA, cloud backbone, security operations)
  - Governance: Regulatory-grade update controls and lifecycle monitoring
    enabling safe velocity across global markets
  - Distribution: Reduced upgrade friction and increased caregiver trust
    through connected app ecosystem

  Primary button: Read Case Study -> /case-studies/medtronic-770-to-780
  Secondary link: Download PDF -> /docs/Medtronic_770G_to_780G_Case_Study.pdf

  Closing line: This case study demonstrates the same operating model
  described above: capital allocation upstream, governance embedded by
  design, adoption engineered through friction reduction.
```

---

## Files Summary

| File | Action |
|------|--------|
| `public/docs/Medtronic_770G_to_780G_Case_Study.pdf` | Copy uploaded PDF |
| `src/pages/MedtronicCaseStudy.tsx` | Create -- full HTML case study page |
| `src/App.tsx` | Edit -- add route |
| `src/pages/AICapitalScale.tsx` | Edit -- add Case Studies section |

No new dependencies required.

