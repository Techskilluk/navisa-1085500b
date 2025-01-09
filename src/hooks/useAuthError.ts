import { useState, useEffect } from "react";
import { AuthError } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";

export const useAuthError = (propError: string) => {
  const [authError, setAuthError] = useState<string>("");

  const getErrorMessage = (error: AuthError) => {
    console.log("Processing error:", error);
    const errorBody = error.message;
    
    if (errorBody.includes("Email not confirmed")) {
      return "Please check your email and click the verification link to confirm your account before signing in.";
    }
    
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
          setAuthError(getErrorMessage(error));
        }
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  return {
    error: propError || authError,
    setAuthError
  };
};