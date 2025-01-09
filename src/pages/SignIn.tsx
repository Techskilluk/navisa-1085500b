import { useAuth } from "@/contexts/AuthContext";
import AuthHero from "@/components/auth/AuthHero";
import AuthForm from "@/components/auth/AuthForm";
import { useAuthRedirect } from "@/hooks/useAuthRedirect";
import { useLocation, Navigate } from "react-router-dom";

const SignIn = () => {
  const { session } = useAuth();
  const location = useLocation();
  const { error } = useAuthRedirect(session);
  const preserveFormData = location.state?.preserveFormData;

  // If user is already authenticated, redirect to dashboard
  if (session) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="min-h-screen bg-background flex">
      <AuthHero />
      <AuthForm 
        error={error} 
        preserveFormData={preserveFormData}
      />
    </div>
  );
};

export default SignIn;