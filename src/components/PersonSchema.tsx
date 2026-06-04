import { Helmet } from "react-helmet-async";

const PersonSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Jag Mariappan",
    "alternateName": ["Jagadeesan Mariappan", "Jagadeesan 'Jag' Mariappan"],
    "url": "https://jagmariappan.com",
    "image": "https://jagmariappan.com/og-image-new.png",
    "sameAs": [
      "https://www.linkedin.com/in/jagawins/",
      "https://github.com/jagawins"
    ],
    "jobTitle": "Senior Director and Vice President, Healthcare AI & Enterprise Governance",
    "description": "Senior Director and Vice President with $154M P&L ownership, C-suite executive roles (CEO, COO, CPO), two successful venture exits, and board advisory experience across healthcare AI, research informatics, and regulated enterprise systems.",
    "worksFor": {
      "@type": "Organization",
      "name": "Stanford Medicine"
    },
    "alumniOf": [
      {
        "@type": "CollegeOrUniversity",
        "name": "Harvard Business School"
      },
      {
        "@type": "CollegeOrUniversity",
        "name": "Stanford University"
      },
      {
        "@type": "CollegeOrUniversity",
        "name": "University of South Florida"
      }
    ],
    "knowsAbout": [
      "Healthcare AI Governance",
      "Research Informatics",
      "Enterprise AI Adoption",
      "Board Governance",
      "AI Capital Allocation",
      "Digital Health",
      "Regulated Enterprise Systems",
      "Clinical Data Infrastructure",
      "HIPAA Compliance",
      "Executive Leadership"
    ],
    "hasOccupation": [
      {
        "@type": "Occupation",
        "name": "Senior Director and Vice President — Enterprise AI & Research Informatics, reporting to CMO and CIO with budget authority and board-level governance accountability",
        "occupationLocation": {
          "@type": "Organization",
          "name": "Stanford Medicine"
        }
      },
      {
        "@type": "Occupation",
        "name": "Executive Portfolio Leader — $154M P&L, Global Operations",
        "occupationLocation": {
          "@type": "Organization",
          "name": "IBM"
        }
      },
      {
        "@type": "Occupation",
        "name": "Chief Operating Officer",
        "occupationLocation": {
          "@type": "Organization",
          "name": "PrismOS"
        }
      },
      {
        "@type": "Occupation",
        "name": "Chief Product Officer",
        "occupationLocation": {
          "@type": "Organization",
          "name": "PodoraHQ"
        }
      },
      {
        "@type": "Occupation",
        "name": "Founder & CEO",
        "occupationLocation": {
          "@type": "Organization",
          "name": "Bairo Healthcare"
        }
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default PersonSchema;
