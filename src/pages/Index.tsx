import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import ValueSnapshot from "@/components/home/ValueSnapshot";
import AISearchBox from "@/components/home/AISearchBox";
import FeaturedFrameworks from "@/components/home/FeaturedFrameworks";
import ProofSnapshot from "@/components/home/ProofSnapshot";
import PartnerOperations from "@/components/home/PartnerOperations";
import IntegratorPositioning from "@/components/home/IntegratorPositioning";
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
        title="Jag Mariappan | Senior Director and Vice President, Healthcare AI & Board Governance"
        description="Senior Director and Vice President with $154M P&L ownership, C-suite roles (CEO, COO, CPO), and board advisory experience across healthcare AI, research informatics, and enterprise governance. Stanford Medicine. Harvard Business School."
        keywords="Jag Mariappan, Senior Director Vice President healthcare AI, Vice President healthcare technology, Chief AI Officer, board advisor healthcare, research informatics, AI governance, healthcare executive, enterprise transformation, Stanford Medicine, C-suite healthcare, digital health executive"
      />
      <Hero />
      <ValueSnapshot />
      <AISearchBox />
      <FeaturedFrameworks />
      <ProofSnapshot />
      <IntegratorPositioning />
      <PartnerOperations />
      <Awards />
      <RecentWork />
      <HomeCTA />
    </Layout>
  );
};

export default Index;
