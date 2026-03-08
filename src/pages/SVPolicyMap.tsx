import SEO from "@/components/SEO";

const SVPolicyMap = () => {
  return (
    <>
      <SEO
        title="Silicon Valley Tech Ecosystem & Policy Map"
        description="Interactive map of Silicon Valley's tech ecosystem — market cap, ZIP codes, policy impact, and regulatory landscape for major tech companies."
        keywords="Silicon Valley, tech ecosystem, policy map, AI regulation, antitrust, CHIPS Act, tech companies"
        url="https://jagmariappan.com/sv-policy-map"
      />
      <iframe
        src="/sv-policy-map.html"
        title="Silicon Valley Tech Ecosystem & Policy Map"
        className="w-full h-screen border-0"
        loading="lazy"
      />
    </>
  );
};

export default SVPolicyMap;
