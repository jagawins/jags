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
  title = "Jag Mariappan | Research Computing, HPC & Biomedical Discovery",
  description = "Jag Mariappan is Executive Director at Beth Israel Lahey Health, advancing HPC, AI infrastructure, and biomedical discovery.",
  keywords = "Jag Mariappan, Beth Israel Lahey Health, Stanford Medicine, research computing, HPC, high-performance computing, biomedical discovery, AI infrastructure, research informatics, healthcare AI governance",
  image = "https://jagmariappan.com/og-image-new.png",
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
