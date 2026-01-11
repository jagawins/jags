import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import ProofSnapshot from "@/components/home/ProofSnapshot";
import RecentWork from "@/components/home/RecentWork";
import Awards from "@/components/home/Awards";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <ProofSnapshot />
      <Awards />
      <RecentWork />
    </Layout>
  );
};

export default Index;
