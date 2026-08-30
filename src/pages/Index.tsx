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
import PersonSchema from "@/components/PersonSchema";

const Index = () => {
  return (
    <Layout>
      <PersonSchema />
      <SEO
        title="Jag Mariappan | Executive Director, Research Computing"
        description="Executive Director, Research Computing and Informatics. $154M P&L, C-suite roles, and board advisory in healthcare AI. Stanford Medicine. Harvard Business School."
        keywords="Jag Mariappan, Executive Director Research Computing Informatics healthcare AI, healthcare technology executive, Chief AI Officer, board advisor healthcare, research informatics, AI governance, healthcare executive, enterprise transformation, Stanford Medicine, C-suite healthcare, digital health executive"
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
