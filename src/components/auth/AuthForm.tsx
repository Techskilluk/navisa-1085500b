import { Auth } from "@supabase/auth-ui-react";
import { supabase } from "@/integrations/supabase/client";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useAuthError } from "@/hooks/useAuthError";
import { AuthFormHeader } from "./AuthFormHeader";
import { authUiConfig } from "@/config/authUiConfig";
import { useEffect } from "react";

interface AuthFormProps {
  error: string;
  preserveFormData?: boolean;
}

const AuthForm = ({ error: propError, preserveFormData }: AuthFormProps) => {
  console.log("Auth form rendered with error:", propError);
  const { error, setAuthError } = useAuthError(propError);
  const redirectTo = `${window.location.origin}/signin`;

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      console.log("Auth state changed in AuthForm:", event, session);
      if (event === 'USER_UPDATED' || event === 'SIGNED_IN') {
        // Clear any existing errors when user successfully signs in
        setAuthError("");
      }
    });

    return () => subscription.unsubscribe();
  }, [setAuthError]);

  return (
    <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
      <div className="w-full max-w-md space-y-8">
        <AuthFormHeader preserveFormData={preserveFormData} />

        {error && (
          <Alert variant="destructive" className="mb-4">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <Auth
          supabaseClient={supabase}
          view="sign_in"
          showLinks={true}
          providers={[]}
          redirectTo={redirectTo}
          appearance={authUiConfig}
        />
      </div>
    </div>
  );
};

export default AuthForm;