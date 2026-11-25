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
      <header className="container max-w-4xl mx-auto px-6 py-8">
        <h1 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-2">Silicon Valley Healthcare AI Policy Map</h1>
        <p className="text-muted-foreground">Explore the regulations, governance frameworks, and stakeholders shaping healthcare AI and health tech in Silicon Valley.</p>
      </header>
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
