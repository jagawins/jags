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
        title="Jag Mariappan | Healthcare AI & Enterprise Transformation Leader"
        description="Senior Director at Stanford Medicine with 25+ years leading healthcare operations, AI governance, and enterprise transformation. Advisor. Speaker. Operator."
        keywords="Jag Mariappan, healthcare AI governance, AI capital allocation, governance architecture, institutional adoption, Stanford Medicine, enterprise transformation, digital health"
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
