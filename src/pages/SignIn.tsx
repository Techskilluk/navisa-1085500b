import { useAuth } from "@/contexts/AuthContext";
import AuthHero from "@/components/auth/AuthHero";
import AuthForm from "@/components/auth/AuthForm";
import { useAuthRedirect } from "@/hooks/useAuthRedirect";

const SignIn = () => {
  const { session } = useAuth();
  const { error } = useAuthRedirect(session);

  return (
    <div className="min-h-screen bg-background flex">
      <AuthHero />
      <AuthForm error={error} />
    </div>
  );
};

export default SignIn;