import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import Work from "./pages/Work";
import Principles from "./pages/Principles";
import Writing from "./pages/Writing";
import About from "./pages/About";
import Install from "./pages/Install";
import FAQ from "./pages/FAQ";
import AICapitalScale from "./pages/AICapitalScale";
import MedtronicCaseStudy from "./pages/MedtronicCaseStudy";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/work" element={<Work />} />
            <Route path="/ai-capital-scale" element={<AICapitalScale />} />
            <Route path="/case-studies/medtronic-770-to-780" element={<MedtronicCaseStudy />} />
            <Route path="/principles" element={<Principles />} />
            <Route path="/writing" element={<Writing />} />
            <Route path="/about" element={<About />} />
            <Route path="/install" element={<Install />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
