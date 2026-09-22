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
    "jobTitle": "Executive Director",
    "description": "Executive Director at Beth Israel Lahey Health since September 2026, advancing research computing, HPC, AI infrastructure, and biomedical discovery.",
    "worksFor": {
      "@type": "Organization",
      "name": "Beth Israel Lahey Health"
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
      "Research Computing",
      "High-Performance Computing",
      "Biomedical Discovery",
      "AI Infrastructure",
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
        "name": "Executive Director",
        "startDate": "2026-09",
        "occupationLocation": {
          "@type": "Organization",
          "name": "Beth Israel Lahey Health"
        }
      },
      {
        "@type": "Occupation",
        "name": "Enterprise AI and Research Informatics Executive",
        "endDate": "2026-08",
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
