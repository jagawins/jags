import { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Download, Smartphone, CheckCircle, Apple, Monitor } from "lucide-react";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

const Install = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    // Check if running on iOS
    const isIOSDevice = /iPad|iPhone|iPod/.test(navigator.userAgent);
    setIsIOS(isIOSDevice);

    // Check if already installed
    if (window.matchMedia("(display-mode: standalone)").matches) {
      setIsInstalled(true);
    }

    // Listen for the beforeinstallprompt event
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
    };
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;

    await deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === "accepted") {
      setIsInstalled(true);
    }

    setDeferredPrompt(null);
  };

  return (
    <Layout>
      <SEO
        title="Install App"
        description="Install the Jag Mariappan progressive web app for quick access to healthcare AI frameworks, case studies, and enterprise transformation insights."
      />

      <section className="py-16 md:py-24">
        <div className="container max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
              <Download className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-medium text-foreground mb-4">
              Install the App
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Get instant access to insights on operating leverage and partner-led growth—right from your home screen.
            </p>
          </div>

          {isInstalled ? (
            <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-2xl p-8 text-center">
              <CheckCircle className="w-12 h-12 text-green-600 dark:text-green-400 mx-auto mb-4" />
              <h2 className="text-2xl font-serif font-medium text-foreground mb-2">
                Already Installed
              </h2>
              <p className="text-muted-foreground">
                You're already using the installed version of this app. Enjoy the full experience!
              </p>
            </div>
          ) : (
            <div className="space-y-8">
              {/* Install Button for supported browsers */}
              {deferredPrompt && (
                <div className="bg-card border border-border rounded-2xl p-8 text-center">
                  <Smartphone className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h2 className="text-2xl font-serif font-medium text-foreground mb-4">
                    One-Click Install
                  </h2>
                  <Button
                    size="lg"
                    onClick={handleInstall}
                    className="gap-2"
                  >
                    <Download className="w-5 h-5" />
                    Install App
                  </Button>
                </div>
              )}

              {/* iOS Instructions */}
              {isIOS && (
                <div className="bg-card border border-border rounded-2xl p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Apple className="w-8 h-8 text-foreground" />
                    <h2 className="text-2xl font-serif font-medium text-foreground">
                      Install on iPhone or iPad
                    </h2>
                  </div>
                  <ol className="space-y-4 text-muted-foreground">
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center font-medium">1</span>
                      <span>Tap the <strong className="text-foreground">Share</strong> button in Safari (the square with an arrow pointing up)</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center font-medium">2</span>
                      <span>Scroll down and tap <strong className="text-foreground">"Add to Home Screen"</strong></span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center font-medium">3</span>
                      <span>Tap <strong className="text-foreground">"Add"</strong> in the top right corner</span>
                    </li>
                  </ol>
                </div>
              )}

              {/* Generic Instructions */}
              {!deferredPrompt && !isIOS && (
                <div className="bg-card border border-border rounded-2xl p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Monitor className="w-8 h-8 text-foreground" />
                    <h2 className="text-2xl font-serif font-medium text-foreground">
                      Install from Browser
                    </h2>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Look for the install icon in your browser's address bar, or use the browser menu:
                  </p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex gap-3">
                      <span className="text-primary">•</span>
                      <span><strong className="text-foreground">Chrome:</strong> Click the install icon in the address bar, or Menu → Install App</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary">•</span>
                      <span><strong className="text-foreground">Edge:</strong> Click the install icon in the address bar, or Menu → Apps → Install</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary">•</span>
                      <span><strong className="text-foreground">Firefox:</strong> PWA install may require an extension</span>
                    </li>
                  </ul>
                </div>
              )}

              {/* Benefits */}
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { title: "Instant Access", desc: "Launch directly from your home screen" },
                  { title: "Works Offline", desc: "Access content even without internet" },
                  { title: "Native Feel", desc: "Full-screen experience like a native app" },
                ].map((benefit) => (
                  <div key={benefit.title} className="bg-muted/50 rounded-xl p-6 text-center">
                    <h3 className="font-medium text-foreground mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Install;
