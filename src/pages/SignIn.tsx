import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "@/integrations/supabase/client";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

const SignIn = () => {
  const navigate = useNavigate();
  const { session } = useAuth();

  useEffect(() => {
    if (session) {
      navigate("/");
    }
  }, [session, navigate]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8 glass-effect p-8 rounded-lg">
        <div className="text-center">
          <img src="/navisa-logo.svg" alt="Navisa" className="h-12 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-foreground">Welcome back</h2>
          <p className="text-muted mt-2">Sign in to your account to continue</p>
        </div>
        <Auth
          supabaseClient={supabase}
          appearance={{
            theme: ThemeSupa,
            variables: {
              default: {
                colors: {
                  brand: '#8989DE',
                  brandAccent: '#7878CD',
                }
              }
            }
          }}
          providers={[]}
        />
      </div>
    </div>
  );
};

export default SignIn;