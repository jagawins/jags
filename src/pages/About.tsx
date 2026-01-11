import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import jagHeadshot from "@/assets/jag-headshot.jpeg";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const About = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`Inquiry from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:erpjaga@msn.com?subject=${subject}&body=${body}`;
    
    toast({
      title: "Opening email client",
      description: "Your default email client should open with the message.",
    });
    
    setIsSubmitting(false);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <Layout>
      <SEO 
        title="About"
        description="Executive operator building at the intersection of healthcare, AI, and governance. 15+ years founding companies, leading operations, and guiding organizations through complex transitions."
        keywords="Jag Mariappan, About, Executive Operator, Healthcare AI, Stanford Medicine, Leadership, Biography"
        url="https://jagmariappan.com/about"
      />
      <section className="section-spacing">
        <div className="container-narrow">
          <div className="animate-fade-in">
            {/* Header with photo */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 mb-16">
              <div className="md:col-span-4 lg:col-span-3">
                <div className="w-48 md:w-full aspect-square">
                  <img
                    src={jagHeadshot}
                    alt="Jag Mariappan"
                    className="w-full h-full object-cover rounded-sm"
                  />
                </div>
              </div>
              <div className="md:col-span-8 lg:col-span-9">
                <h1 className="heading-display text-foreground mb-6">About</h1>
                <p className="body-large text-muted-foreground max-w-2xl">
                  Executive operator building at the intersection of healthcare, AI, and governance.
                </p>
              </div>
            </div>
            
            {/* Bio content */}
            <div className="max-w-3xl space-y-6 text-lg text-muted-foreground leading-relaxed mb-16">
              <p>
                I'm an executive operator who builds and scales decision systems in healthcare and AI. My work sits at the intersection of technology, governance, and organizational design.
              </p>
              <p>
                Over the past fifteen years, I've founded companies, led operations, and guided organizations through complex transitions—including two successful exits. I specialize in taking ambiguous situations and creating clarity, structure, and forward momentum.
              </p>
              <p>
                My approach combines strategic thinking with hands-on execution. I believe in building systems that outlast their builders, measuring what matters, and making decisions with incomplete information when necessary.
              </p>
              <p>
                Currently, I'm focused on AI governance and the operationalization of intelligent systems in regulated industries.
              </p>
            </div>

            {/* Contact Form Section */}
            <div id="contact" className="border-t border-border pt-12 mb-16 scroll-mt-24">
              <h2 className="font-serif text-2xl font-medium text-foreground mb-6">
                Get in Touch
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl">
                For executive roles, advisory opportunities, or strategic conversations about healthcare, AI, or organizational design.
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      type="text"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-background"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="bg-background"
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={5}
                      className="bg-background resize-none"
                    />
                  </div>
                  <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>

                {/* Direct Contact Info */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-muted-foreground/70 font-medium mb-4">
                      Direct Contact
                    </h3>
                    <div className="space-y-4">
                      <a
                        href="mailto:erpjaga@msn.com"
                        className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                      >
                        <Mail className="w-5 h-5 text-muted-foreground" />
                        erpjaga@msn.com
                      </a>
                      <a
                        href="tel:+18138679488"
                        className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                      >
                        <Phone className="w-5 h-5 text-muted-foreground" />
                        +1-813-867-9488
                      </a>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-muted-foreground/70 font-medium mb-4">
                      Connect Online
                    </h3>
                    <div className="flex flex-col gap-3">
                      <a
                        href="https://www.linkedin.com/in/jagawins/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
                      >
                        Connect on LinkedIn
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                      <a
                        href="https://myjmr.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
                      >
                        Read my writing
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
