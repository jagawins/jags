import SEO from "@/components/SEO";

const SVPolicyMap = () => {
  return (
    <>
      <SEO
        title="Silicon Valley Healthcare AI Policy Map | Jag Mariappan"
        description="Interactive map of Silicon Valley's healthcare AI policy landscape — regulations, governance frameworks, and stakeholders shaping the future of health tech."
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
