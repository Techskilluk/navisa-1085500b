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
    <div className="min-h-screen bg-background flex">
      {/* Left side - Image */}
      <div className="hidden lg:block lg:w-1/2 relative">
        <img 
          src="/lovable-uploads/de492bbf-a7aa-4f4d-a5d3-b9a7e0143516.png"
          alt="Global Mobility"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center p-12">
          <div className="max-w-xl text-white space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Your Gateway to Global Opportunities
            </h1>
            <p className="text-lg text-white/80">
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

          <Auth
            supabaseClient={supabase}
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
            providers={[]}
          />
        </div>
      </div>
    </div>
  );
};

export default SignIn;