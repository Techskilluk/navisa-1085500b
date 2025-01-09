import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "@/integrations/supabase/client";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useEffect } from "react";
import { AuthError } from "@supabase/supabase-js";

interface AuthFormProps {
  error: string;
  preserveFormData?: boolean;
}

const AuthForm = ({ error: propError, preserveFormData }: AuthFormProps) => {
  console.log("Auth form rendered with error:", propError);
  
  const redirectTo = `${window.location.origin}/signin`;

  const getErrorMessage = (error: AuthError) => {
    console.log("Processing error:", error);
    const errorBody = error.message;
    
    if (errorBody.includes("Invalid login credentials")) {
      return "Invalid email or password. Please check your credentials and try again.";
    }
    
    return error.message;
  };

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      console.log("Auth state changed:", event);
      if (event === 'USER_UPDATED') {
        const { error } = await supabase.auth.getSession();
        if (error) {
          console.error("Auth error:", error);
        }
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center space-y-4">
          <img src="/navisa-logo.svg" alt="Navisa" className="h-12 mx-auto" />
          <h2 className="text-3xl font-bold text-primary">
            {preserveFormData ? "Save Your Progress" : "Welcome Back"}
          </h2>
          <p className="text-muted">
            {preserveFormData 
              ? "Create an account or sign in to save your eligibility assessment results"
              : "Sign in to continue your journey"}
          </p>
        </div>

        {propError && (
          <Alert variant="destructive" className="mb-4">
            <AlertDescription>{propError}</AlertDescription>
          </Alert>
        )}

        <Auth
          supabaseClient={supabase}
          view="sign_in"
          showLinks={true}
          providers={[]}
          redirectTo={redirectTo}
          appearance={{
            theme: ThemeSupa,
            variables: {
              default: {
                colors: {
                  brand: '#141413',
                  brandAccent: '#8989DE',
                  inputBackground: 'white',
                  inputBorder: '#E6E4DD',
                  inputText: '#141413',
                  inputPlaceholder: '#828179',
                  messageText: '#828179',
                  anchorTextColor: '#8989DE',
                  dividerBackground: '#E6E4DD',
                },
                space: {
                  inputPadding: '1rem',
                  buttonPadding: '1.25rem',
                },
                borderWidths: {
                  buttonBorderWidth: '0px',
                  inputBorderWidth: '1px',
                },
                radii: {
                  borderRadiusButton: '1.2rem',
                  buttonBorderRadius: '1.2rem',
                  inputBorderRadius: '1.2rem',
                },
                fontSizes: {
                  baseInputSize: '1rem',
                  baseButtonSize: '1rem',
                },
              },
            },
            className: {
              container: 'space-y-6',
              button: 'w-full bg-primary text-white hover:bg-primary/90 transition-colors duration-200 font-medium',
              input: 'w-full border-secondary hover:border-accent focus:border-accent transition-colors duration-200',
              label: 'text-sm font-medium text-primary',
              message: 'text-sm text-muted',
              anchor: 'text-accent hover:text-accent/80 transition-colors duration-200',
              divider: 'my-6 border-t border-secondary',
            },
          }}
        />
      </div>
    </div>
  );
};

export default AuthForm;