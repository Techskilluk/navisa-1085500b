import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Navbar from "@/components/Navbar";
import Index from "./pages/Index";
import SignIn from "./pages/SignIn";
import EligibilityAssessment from "./pages/EligibilityAssessment";
import HowItWorks from "./pages/HowItWorks";
import Pathways from "./pages/Pathways";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <AuthProvider>
        <TooltipProvider>
          <Navbar />
          <Toaster />
          <Sonner />
          <Routes>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/eligibility" element={<EligibilityAssessment />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/pathways" element={<Pathways />} />
            <Route path="/" element={<Index />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </TooltipProvider>
      </AuthProvider>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;