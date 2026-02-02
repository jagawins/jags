import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import AISearchBox from "@/components/home/AISearchBox";
import ProofSnapshot from "@/components/home/ProofSnapshot";
import PartnerOperations from "@/components/home/PartnerOperations";
import RecentWork from "@/components/home/RecentWork";
import Awards from "@/components/home/Awards";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <Layout>
      <SEO />
      <Hero />
      <AISearchBox />
      <ProofSnapshot />
      <PartnerOperations />
      <Awards />
      <RecentWork />
    </Layout>
  );
};

export default Index;
