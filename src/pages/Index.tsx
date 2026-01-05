import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import ProofSnapshot from "@/components/home/ProofSnapshot";
import RecentWork from "@/components/home/RecentWork";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <ProofSnapshot />
      <RecentWork />
    </Layout>
  );
};

export default Index;
