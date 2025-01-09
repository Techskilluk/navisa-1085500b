import { useState, useEffect } from "react";
import { AuthError } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";

export const useAuthError = (propError: string) => {
  const [authError, setAuthError] = useState<string>("");

  const getErrorMessage = (error: AuthError) => {
    console.log("Processing auth error:", error);
    
    // Parse the error body if it's a string
    let errorBody = error.message;
    try {
      if (typeof error.message === 'string' && error.message.includes('{')) {
        const parsedError = JSON.parse(error.message);
        errorBody = parsedError.message || error.message;
      }
    } catch (e) {
      console.log("Error parsing error message:", e);
    }
    
    // Check for specific error conditions
    if (errorBody.includes("Email not confirmed")) {
      return "Please check your email and click the verification link to confirm your account before signing in.";
    }
    
    // Handle invalid credentials errors - check multiple possible error formats
    if (
      errorBody.includes("Invalid login credentials") || 
      errorBody.includes("invalid_credentials") || 
      error.message.includes("invalid_credentials") ||
      (error as any).code === "invalid_credentials"
    ) {
      return "The email or password you entered is incorrect. Please try again.";
    }
    
    // Handle generic errors
    return errorBody || "An error occurred during authentication. Please try again.";
  };

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      console.log("Auth state changed:", event);
      if (event === 'USER_UPDATED' || event === 'SIGNED_IN') {
        const { error } = await supabase.auth.getSession();
        if (error) {
          console.error("Auth error:", error);
          setAuthError(getErrorMessage(error));
        }
      }
      if (event === 'SIGNED_OUT') {
        setAuthError(""); // Clear any existing errors
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  // Update error when propError changes
  useEffect(() => {
    if (propError) {
      setAuthError(propError);
    }
  }, [propError]);

  return {
    error: propError || authError,
    setAuthError
  };
};