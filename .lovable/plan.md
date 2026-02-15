

# Add Medtronic Diabetes Entry to Work Page

## Overview

Add a new project entry for "Medtronic Diabetes" to the Work page, positioned second in the list (after Stanford Medicine) given its enterprise significance and Senior Director title.

---

## Changes

**File: `src/pages/Work.tsx`**

Insert a new project object into the `projects` array at position 2 (index 1, after Stanford Medicine). The entry will use the existing data structure with an expanded bullet set to capture the three key contribution areas and enterprise impact.

**New entry details:**

- **name**: "Medtronic Diabetes"
- **outcome**: "Digitizing the 770G to 780G Platform"
- **role**: "Senior Director and Operator -- Connected Health & Software-Defined Medical Devices"
- **featured**: false
- **bullets** (structured to cover all provided content):
  1. Led transformation of Medtronic's diabetes management ecosystem by architecting and scaling digital capabilities that recaptured market competitiveness
  2. Developed and deployed secure firmware over-the-air (FOTA) capability to transition users from legacy 770G to 780G without physical device exchanges
  3. Scaled real-time caregiver connectivity via CarePartner App with secure data sharing, alerts, and scalable backend architecture supporting regulated data flows
  4. Built digital governance architecture balancing product velocity with regulatory oversight, including cybersecurity-aligned development lifecycle and FDA compliance
  5. Enabled a continuous software upgrade path -- transforming a hardware-centric business model and increasing upgrade rates through digital scalability
  6. Positioned Medtronic to regain competitive ground against Dexcom and other digital competitors
- **relevance**: "Demonstrated ability to digitize and scale a connected medical device platform within a regulated enterprise, shifting upgrade economics from hardware replacement to software-defined delivery."
- **keyAchievement**: "Deployed firmware over-the-air capability that eliminated physical device exchanges, extending platform lifespan and transforming Medtronic's upgrade economics."

---

## No other files affected

Only `src/pages/Work.tsx` needs to be edited. The existing page rendering logic handles the new entry automatically.

