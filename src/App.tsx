import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { TooltipProvider } from "@/components/ui/tooltip";
import LandingLayout from "@/components/layouts/LandingLayout";
import AppLayout from "@/components/layouts/AppLayout";

// Landing pages
import Index from "./pages/Index";
import SignIn from "./pages/SignIn";
import HowItWorks from "./pages/HowItWorks";
import Pathways from "./pages/Pathways";
import Enterprise from "./pages/Enterprise";
import Resources from "./pages/Resources";
import ResourceDetail from "./pages/ResourceDetail";
import EligibilityAssessment from "./pages/EligibilityAssessment";

// App pages
import Dashboard from "./pages/Dashboard";
import ConsultationBooking from "./pages/ConsultationBooking";
import VerificationConfirmation from "./pages/VerificationConfirmation";
import AccountSettings from "@/components/account/AccountSettings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <AuthProvider>
        <TooltipProvider>
          <Routes>
            {/* Landing pages with Navbar */}
            <Route element={<LandingLayout />}>
              <Route path="/" element={<Index />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/how-it-works" element={<HowItWorks />} />
              <Route path="/pathways" element={<Pathways />} />
              <Route path="/enterprise" element={<Enterprise />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/resources/:id" element={<ResourceDetail />} />
              <Route path="/eligibility" element={<EligibilityAssessment />} />
            </Route>

            {/* App pages without Navbar */}
            <Route element={<AppLayout />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/consultation" element={<ConsultationBooking />} />
              <Route path="/verify-success" element={<VerificationConfirmation />} />
              <Route path="/account" element={<AccountSettings />} />
            </Route>

            {/* Catch all route */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </TooltipProvider>
      </AuthProvider>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;