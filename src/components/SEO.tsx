import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEO = ({
  title = "Jag Mariappan | Executive Operator in Healthcare & AI",
  description = "Jag Mariappan — Senior Director at Stanford Medicine. 25+ years leading healthcare operations, AI governance, and enterprise transformation. Harvard Business School alumnus.",
  keywords = "Jag Mariappan, Executive Leader, Healthcare AI, Stanford Medicine, Enterprise Transformation, Digital Health, AI Governance",
  image = "https://jagmariappan.com/og-image.png",
  url = "https://jagmariappan.com",
  type = "website",
}: SEOProps) => {
  const siteTitle = title.includes("Jag Mariappan") 
    ? title 
    : `${title} | Jag Mariappan`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="title" content={siteTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={siteTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;
