import { useState, useEffect } from "react";
import { AuthError, AuthApiError } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";

export const useAuthError = (propError: string) => {
  const [authError, setAuthError] = useState<string>("");

  const getErrorMessage = (error: AuthError) => {
    console.log("Processing auth error:", error);
    
    // Handle AuthApiError specifically
    if (error instanceof AuthApiError) {
      console.log("Auth API Error:", {
        status: error.status,
        message: error.message,
        name: error.name,
        code: (error as any).code
      });
      
      // Handle specific API error cases
      if (error.status === 400) {
        return "The email or password you entered is incorrect. Please try again.";
      }
      if (error.status === 422) {
        return "Please check your input and try again.";
      }
      if (error.status === 429) {
        return "Too many attempts. Please try again later.";
      }
    }

    // Parse error message if it's JSON
    try {
      const errorMessage = error.message;
      if (typeof errorMessage === 'string') {
        if (errorMessage.includes('"code":"invalid_credentials"')) {
          return "The email or password you entered is incorrect. Please try again.";
        }
        if (errorMessage.includes("Email not confirmed")) {
          return "Please check your email and click the verification link to confirm your account before signing in.";
        }
      }
    } catch (e) {
      console.log("Error parsing error message:", e);
    }
    
    // Return a generic error message if no specific case matches
    return "An error occurred during authentication. Please try again.";
  };

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      console.log("Auth state changed in useAuthError:", event);
      if (event === 'USER_UPDATED' || event === 'SIGNED_IN') {
        const { error } = await supabase.auth.getSession();
        if (error) {
          console.error("Auth error in state change:", error);
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