import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import ValueSnapshot from "@/components/home/ValueSnapshot";
import AISearchBox from "@/components/home/AISearchBox";
import FeaturedFrameworks from "@/components/home/FeaturedFrameworks";
import ProofSnapshot from "@/components/home/ProofSnapshot";
import PartnerOperations from "@/components/home/PartnerOperations";
import Awards from "@/components/home/Awards";
import RecentWork from "@/components/home/RecentWork";
import HomeCTA from "@/components/home/HomeCTA";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <Layout>
      <SEO 
        description="Jag Mariappan builds frameworks for AI capital allocation, governance architecture, and institutional adoption in regulated enterprises. Thought leadership and doctrine for executives and founders."
        keywords="Jag Mariappan, AI Capital Allocation, Governance Architecture, Institutional Adoption, Regulated Healthcare, Healthcare AI, Enterprise Transformation"
      />
      <Hero />
      <ValueSnapshot />
      <AISearchBox />
      <FeaturedFrameworks />
      <ProofSnapshot />
      <PartnerOperations />
      <Awards />
      <RecentWork />
      <HomeCTA />
    </Layout>
  );
};

export default Index;
