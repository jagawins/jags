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
        title="Jag Mariappan | Research Computing, HPC & Biomedical Discovery"
        description="Executive Director, Research Computing and Informatics at Beth Israel Lahey Health, advancing HPC, AI infrastructure, and biomedical discovery."
        keywords="Jag Mariappan, Beth Israel Lahey Health, Stanford Medicine, research computing, HPC, high-performance computing, biomedical discovery, AI infrastructure, research informatics, healthcare AI governance"
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
