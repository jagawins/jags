import SEO from "@/components/SEO";

const SoCalPolicyMap = () => {
  return (
    <>
      <SEO
        title="Southern California Tech Ecosystem & Policy Map"
        description="Interactive map of Southern California's tech ecosystem — market cap, ZIP codes, policy impact, and regulatory landscape for major tech companies."
        keywords="Southern California, tech ecosystem, policy map, AI regulation, antitrust, tech companies, Los Angeles, San Diego"
        url="https://jagmariappan.com/socal-policy-map"
      />
      <iframe
        src="/socal-policy-map.html"
        title="Southern California Tech Ecosystem & Policy Map"
        className="w-full h-screen border-0"
        loading="lazy"
      />
    </>
  );
};

export default SoCalPolicyMap;
