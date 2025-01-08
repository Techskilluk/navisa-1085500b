import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "@/integrations/supabase/client";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/components/ui/use-toast";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AuthError } from "@supabase/supabase-js";

const SignIn = () => {
  const navigate = useNavigate();
  const { session } = useAuth();
  const { toast } = useToast();
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (session) {
      navigate("/");
    }

    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      console.log("Auth state changed:", event);
      
      if (event === "SIGNED_IN") {
        setError(""); // Clear any errors on successful sign in
        navigate("/");
      } else if (event === "SIGNED_OUT") {
        setError(""); // Clear errors on sign out
      } else if (event === "USER_UPDATED") {
        // Check for auth errors
        const { error } = await supabase.auth.getSession();
        if (error) {
          console.error("Auth error:", error);
          switch (error.message) {
            case "Invalid login credentials":
              setError("Invalid email or password. Please check your credentials and try again.");
              break;
            case "Email not confirmed":
              setError("Please verify your email address before signing in.");
              break;
            default:
              setError(error.message);
          }
        }
      }
    });

    return () => subscription.unsubscribe();
  }, [session, navigate]);

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left side - Image */}
      <div className="hidden lg:block lg:w-1/2 relative">
        <img 
          src="/lovable-uploads/de492bbf-a7aa-4f4d-a5d3-b9a7e0143516.png"
          alt="Global Mobility"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex items-center justify-center p-12">
          <div className="max-w-xl text-white space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight text-white/95 drop-shadow-lg">
              Your Gateway to Global Opportunities
            </h1>
            <p className="text-lg text-white/90 font-medium drop-shadow">
              Join thousands of professionals who trust Navisa for their international mobility journey.
            </p>
          </div>
        </div>
      </div>

      {/* Right side - Auth form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center space-y-4">
            <img src="/navisa-logo.svg" alt="Navisa" className="h-12 mx-auto" />
            <h2 className="text-3xl font-bold text-primary">Welcome Back</h2>
            <p className="text-muted">Sign in to continue your journey</p>
          </div>

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
            redirectTo={window.location.origin}
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
    </div>
  );
};

export default SignIn;