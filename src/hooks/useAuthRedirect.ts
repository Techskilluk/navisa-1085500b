import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Session } from "@supabase/supabase-js";

export const useAuthRedirect = (session: Session | null) => {
  const navigate = useNavigate();
  const [error, setError] = useState("");

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

  return { error };
};