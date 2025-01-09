import { Auth } from "@supabase/auth-ui-react";
import { supabase } from "@/integrations/supabase/client";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useAuthError } from "@/hooks/useAuthError";
import { AuthFormHeader } from "./AuthFormHeader";
import { authUiConfig } from "@/config/authUiConfig";
import { useEffect } from "react";
import { Link } from "react-router-dom";

interface AuthFormProps {
  error: string;
  preserveFormData?: boolean;
}

const AuthForm = ({ error: propError, preserveFormData }: AuthFormProps) => {
  console.log("Auth form rendered with error:", propError);
  const { error, setAuthError } = useAuthError(propError);
  // Update redirectTo to use the current origin
  const redirectTo = `${window.location.origin}/signin`;

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      console.log("Auth state changed in AuthForm:", event, session);
      if (event === 'USER_UPDATED' || event === 'SIGNED_IN') {
        setAuthError("");
      }
    });

    return () => subscription.unsubscribe();
  }, [setAuthError]);

  return (
    <div className="w-full lg:w-1/2 flex flex-col items-center justify-between p-8 bg-white min-h-screen">
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
      
      <div className="w-full max-w-md mt-8 pt-8 border-t border-gray-200">
        <div className="text-center space-y-4">
          <p className="text-muted-foreground">
            Don't have an account yet?
          </p>
          <Link 
            to="/signin?view=sign_up" 
            className="inline-block px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-200"
          >
            Create an Account
          </Link>
          <p className="text-sm text-muted-foreground">
            Join thousands of professionals who trust Navisa for their international mobility journey.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;