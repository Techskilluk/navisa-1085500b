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
import VerificationConfirmation from "./pages/VerificationConfirmation";
import { useAuth } from "./contexts/AuthContext";

const queryClient = new QueryClient();

// Protected Route Component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();
  
  if (!user) {
    return <Navigate to="/signin" replace />;
  }
  
  return <>{children}</>;
};

// Public Route Component with Navbar
const PublicRoute = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

const App = () => {
  const isAppDomain = window.location.hostname.startsWith('app.');
  
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuthProvider>
          <TooltipProvider>
            <Routes>
              {isAppDomain ? (
                // App Routes (app.navisa.co)
                <>
                  <Route path="/signin" element={<SignIn />} />
                  <Route
                    path="/dashboard"
                    element={
                      <ProtectedRoute>
                        <Dashboard />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/eligibility"
                    element={
                      <ProtectedRoute>
                        <EligibilityAssessment />
                      </ProtectedRoute>
                    }
                  />
                  <Route path="/" element={<Navigate to="/dashboard" replace />} />
                  <Route path="*" element={<Navigate to="/dashboard" replace />} />
                </>
              ) : (
                // Marketing Routes (www.navisa.co)
                <>
                  <Route
                    path="/"
                    element={
                      <PublicRoute>
                        <Index />
                      </PublicRoute>
                    }
                  />
                  <Route
                    path="/how-it-works"
                    element={
                      <PublicRoute>
                        <HowItWorks />
                      </PublicRoute>
                    }
                  />
                  <Route
                    path="/pathways"
                    element={
                      <PublicRoute>
                        <Pathways />
                      </PublicRoute>
                    }
                  />
                  <Route
                    path="/enterprise"
                    element={
                      <PublicRoute>
                        <Enterprise />
                      </PublicRoute>
                    }
                  />
                  <Route
                    path="/verify-success"
                    element={
                      <PublicRoute>
                        <VerificationConfirmation />
                      </PublicRoute>
                    }
                  />
                  <Route path="*" element={<Navigate to="/" replace />} />
                </>
              )}
            </Routes>
            <Toaster />
            <Sonner />
          </TooltipProvider>
        </AuthProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;