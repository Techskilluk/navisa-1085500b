import { createContext, useContext, useEffect, useState } from "react";
import { Session, User } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

interface AuthContextType {
  session: Session | null;
  user: User | null;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      if (session?.user) {
        navigate("/dashboard");
      }
    });

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      console.log("Auth state changed:", event, session);
      setSession(session);
      setUser(session?.user ?? null);

      switch (event) {
        case "SIGNED_IN":
          toast({
            title: "Welcome back!",
            description: "You have successfully signed in.",
          });
          navigate("/dashboard");
          break;

        case "SIGNED_OUT":
          toast({
            title: "Signed out",
            description: "You have been signed out successfully.",
          });
          navigate("/signin");
          break;

        case "USER_UPDATED":
          // Handle email verification
          if (session?.user.email_confirmed_at) {
            toast({
              title: "Email verified!",
              description: "Your email has been successfully verified.",
            });
            navigate("/verify-success");
          }
          break;

        case "PASSWORD_RECOVERY":
          // Handle verification required notification
          toast({
            title: "Verification Required",
            description: "Please check your email to verify your account.",
          });
          break;
      }
    });

    // Check for email confirmation in URL
    const hashParams = new URLSearchParams(window.location.hash.substring(1));
    const type = hashParams.get("type");
    
    if (type === "email_confirmation") {
      navigate("/verify-success");
    }

    return () => subscription.unsubscribe();
  }, [navigate, toast]);

  const signOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <AuthContext.Provider value={{ session, user, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};