import { useState, useEffect } from "react";
import { AuthError, AuthApiError } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";

export const useAuthError = (propError: string) => {
  const [authError, setAuthError] = useState<string>("");

  const getErrorMessage = (error: AuthError) => {
    console.log("Processing auth error:", error);
    
    // Handle AuthApiError specifically
    if (error instanceof AuthApiError) {
      console.log("Auth API Error code:", error.status, error.message);
      switch (error.status) {
        case 400:
          if (error.message.includes("Invalid login credentials")) {
            return "The email or password you entered is incorrect. Please try again.";
          }
          break;
        case 422:
          return "Please check your input and try again.";
        case 429:
          return "Too many attempts. Please try again later.";
      }
    }

    // Parse error message if it's JSON
    try {
      if (typeof error.message === 'string' && error.message.includes('{')) {
        const parsedError = JSON.parse(error.message);
        if (parsedError.code === "invalid_credentials") {
          return "The email or password you entered is incorrect. Please try again.";
        }
        return parsedError.message || error.message;
      }
    } catch (e) {
      console.log("Error parsing error message:", e);
    }
    
    // Check for specific error conditions
    if (error.message.includes("Email not confirmed")) {
      return "Please check your email and click the verification link to confirm your account before signing in.";
    }
    
    // Return original message if no specific handling
    return error.message || "An error occurred during authentication. Please try again.";
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