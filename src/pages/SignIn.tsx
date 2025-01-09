import { useAuth } from "@/contexts/AuthContext";
import AuthHero from "@/components/auth/AuthHero";
import AuthForm from "@/components/auth/AuthForm";
import { useAuthRedirect } from "@/hooks/useAuthRedirect";
import { useLocation } from "react-router-dom";

const SignIn = () => {
  const { session } = useAuth();
  const location = useLocation();
  const { error } = useAuthRedirect(session);
  const preserveFormData = location.state?.preserveFormData;

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