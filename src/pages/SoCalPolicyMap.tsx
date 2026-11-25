import SEO from "@/components/SEO";

const SoCalPolicyMap = () => {
  return (
    <>
      <SEO
        title="Southern California Healthcare AI Policy Map | Jag Mariappan"
        description="Interactive map of Southern California's healthcare AI policy landscape — tracking regulations, governance initiatives, and key organizations shaping health tech."
        keywords="Southern California, tech ecosystem, policy map, AI regulation, antitrust, tech companies, Los Angeles, San Diego"
        url="https://jagmariappan.com/socal-policy-map"
      />
      <header className="container max-w-4xl mx-auto px-6 py-8">
        <h1 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-2">Southern California Healthcare AI Policy Map</h1>
        <p className="text-muted-foreground">Explore the regulations, governance frameworks, and stakeholders shaping healthcare AI across Southern California.</p>
      </header>
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
