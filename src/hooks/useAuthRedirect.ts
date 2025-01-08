import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Session, AuthError } from "@supabase/supabase-js";

export const useAuthRedirect = (session: Session | null) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState("");

  useEffect(() => {
    if (session) {
      const returnUrl = location.state?.returnUrl || "/";
      navigate(returnUrl);
    }

    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      console.log("Auth state changed:", event);
      
      if (event === "SIGNED_IN") {
        setError(""); // Clear any errors on successful sign in
        const returnUrl = location.state?.returnUrl || "/";
        navigate(returnUrl);
      } else if (event === "SIGNED_OUT") {
        setError(""); // Clear errors on sign out
      } else if (event === "USER_UPDATED") {
        // Check for auth errors
        const { error } = await supabase.auth.getSession();
        if (error) {
          console.error("Auth error:", error);
          handleAuthError(error);
        }
      }
    });

    return () => subscription.unsubscribe();
  }, [session, navigate, location.state]);

  const handleAuthError = (error: AuthError) => {
    console.error("Authentication error:", error);
    if (error.message.includes("Invalid login credentials")) {
      setError("Invalid email or password. Please check your credentials and try again.");
    } else if (error.message.includes("Email not confirmed")) {
      setError("Please verify your email address before signing in.");
    } else {
      setError(error.message);
    }
  };

  return { error };
};