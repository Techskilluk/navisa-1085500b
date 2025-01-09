import { createContext, useContext, useEffect, useState } from "react";
import { Session, User, AuthError } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

interface AuthContextType {
  session: Session | null;
  user: User | null;
  signIn: (credentials: { email: string; password: string }) => Promise<{ error: AuthError | null }>;
  signUp: (credentials: { email: string; password: string }) => Promise<{ error: AuthError | null }>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      console.log("Initial session check:", session);
      setSession(session);
      setUser(session?.user ?? null);
      if (session?.user) {
        navigate("/dashboard");
      }
    });

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
          navigate("/login");
          break;

        case "USER_UPDATED":
          if (session?.user.email_confirmed_at) {
            toast({
              title: "Email verified!",
              description: "Your email has been successfully verified.",
            });
          }
          break;
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate, toast]);

  const signIn = async ({ email, password }: { email: string; password: string }) => {
    console.log("Attempting to sign in:", email);
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    return { error };
  };

  const signUp = async ({ email, password }: { email: string; password: string }) => {
    console.log("Attempting to sign up:", email);
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });
    return { error };
  };

  const signOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <AuthContext.Provider value={{ session, user, signIn, signUp, signOut }}>
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