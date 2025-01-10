import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Navbar from "@/components/Navbar";
import Index from "./pages/Index";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import EligibilityAssessment from "./pages/EligibilityAssessment";
import HowItWorks from "./pages/HowItWorks";
import Pathways from "./pages/Pathways";
import Enterprise from "./pages/Enterprise";
import Resources from "./pages/Resources";
import VerificationConfirmation from "./pages/VerificationConfirmation";
import ConsultationBooking from "./pages/ConsultationBooking";
import AccountSettings from "@/components/account/AccountSettings";
import ResourceDetail from "./pages/ResourceDetail";
import DashboardLayout from "@/components/dashboard/DashboardLayout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <AuthProvider>
        <TooltipProvider>
          <Routes>
            {/* Consultation route outside of the main layout */}
            <Route path="/consultation" element={
              <div className="min-h-screen bg-background">
                <ConsultationBooking />
              </div>
            } />
            
            {/* Dashboard routes */}
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="resources" element={<Resources />} />
              <Route path="account" element={<AccountSettings />} />
            </Route>

            {/* All other routes with Navbar */}
            <Route
              path="/*"
              element={
                <>
                  <Navbar />
                  <Routes>
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/eligibility" element={<EligibilityAssessment />} />
                    <Route path="/how-it-works" element={<HowItWorks />} />
                    <Route path="/pathways" element={<Pathways />} />
                    <Route path="/resources" element={<Resources />} />
                    <Route path="/resources/:id" element={<ResourceDetail />} />
                    <Route path="/enterprise" element={<Enterprise />} />
                    <Route path="/verify-success" element={<VerificationConfirmation />} />
                    <Route path="/account" element={<AccountSettings />} />
                    <Route path="/" element={<Index />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                  </Routes>
                </>
              }
            />
          </Routes>
          <Toaster />
          <Sonner />
        </TooltipProvider>
      </AuthProvider>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;