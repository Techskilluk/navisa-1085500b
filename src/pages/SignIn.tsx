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
    <div className="min-h-screen bg-[#F1F0FB] flex">
      {/* Left side - Image */}
      <div className="hidden lg:block lg:w-1/2 relative">
        <img 
          src="/lovable-uploads/942c5089-8393-456e-a19d-8b235d467925.png" 
          alt="Sign in background" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" /> {/* Overlay */}
      </div>

      {/* Right side - Auth form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center space-y-2">
            <img src="/navisa-logo.svg" alt="Navisa" className="h-12 mx-auto" />
            <h2 className="text-2xl font-semibold text-[#1A1F2C]">Welcome back</h2>
            <p className="text-[#8E9196]">Sign in to your account to continue</p>
          </div>

          <Auth
            supabaseClient={supabase}
            appearance={{
              theme: ThemeSupa,
              variables: {
                default: {
                  colors: {
                    brand: '#1A1F2C',
                    brandAccent: '#2A2F3C',
                    inputBackground: '#F1F1F1',
                    inputText: '#403E43',
                    inputPlaceholder: '#8A898C',
                    messageText: '#8E9196',
                    anchorTextColor: '#1EAEDB',
                    dividerBackground: '#E5E5E5',
                  },
                  space: {
                    inputPadding: '1rem',
                    buttonPadding: '1rem',
                  },
                  borderWidths: {
                    buttonBorderWidth: '0px',
                    inputBorderWidth: '1px',
                  },
                  radii: {
                    borderRadiusButton: '0.5rem',
                    buttonBorderRadius: '0.5rem',
                    inputBorderRadius: '0.5rem',
                  },
                  fontSizes: {
                    baseInputSize: '0.875rem',
                    baseButtonSize: '0.875rem',
                  },
                },
              },
              className: {
                container: 'space-y-6',
                button: 'w-full bg-[#1A1F2C] text-white hover:bg-[#2A2F3C] transition-colors duration-200',
                input: 'w-full bg-[#F1F1F1] border-[#E5E5E5]',
                label: 'text-sm font-medium text-[#403E43]',
                message: 'text-sm text-[#8E9196]',
                anchor: 'text-[#1EAEDB] hover:text-[#0FA0CE] transition-colors duration-200',
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