const credentials = [
  {
    institution: "Harvard Business School",
    credential: "Alumnus",
  },
  {
    institution: "Stanford University",
    credential: "Advanced Management",
  },
  {
    institution: "University of South Florida",
    credential: "MBA",
  },
];

const EducationCredentials = () => {
  return (
    <section className="border-t border-border bg-muted/30">
      <div className="container-narrow py-16 md:py-20">
        <h2 className="text-xs uppercase tracking-wider text-muted-foreground/70 font-medium mb-10 text-center">
          Education & Credentials
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {credentials.map((item, index) => (
            <div 
              key={index} 
              className="text-center"
            >
              <p className="font-serif text-lg md:text-xl font-medium text-foreground mb-1">
                {item.institution}
              </p>
              <p className="text-sm text-muted-foreground">
                {item.credential}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationCredentials;