import { getCalApi } from "@calcom/embed-react";
import { supabase } from "@/integrations/supabase/client";

// Define the Cal API interface based on actual available methods
type CalApi = ReturnType<typeof getCalApi> extends Promise<infer T> ? T : never;

export type CalInstance = CalApi;

export const initializeCalApi = async (
  elementId: string,
  calLink: string,
  config: {
    timezone?: string;
    name?: string;
    email?: string;
  },
  callbacks: {
    onReady?: () => void;
    onError?: (error: any) => void;
    onBookingSuccess?: () => void;
  }
): Promise<CalInstance | null> => {
  try {
    console.log("Initializing Cal.com API");
    
    // Get the API key from Supabase
    const { data: { key }, error } = await supabase.functions.invoke('get-secret', {
      body: { name: 'CAL_API_KEY' }
    });

    if (error || !key) {
      console.error("Failed to get Cal.com API key:", error);
      throw new Error("Failed to initialize calendar due to missing API key");
    }

    const cal = await getCalApi();

    if (!cal) {
      console.error("Cal.com API failed to initialize");
      throw new Error("Calendar API initialization failed");
    }

    // Set up namespace with API key
    console.log("Setting up Cal.com namespace configuration");
    cal.namespace({ apiKey: key });

    // Configure UI settings separately
    console.log("Setting up Cal.com UI configuration");
    cal("ui", {
      theme: "light",
      styles: {
        branding: {
          brandColor: "#000000"
        }
      }
    });

    // Initialize inline embed
    console.log("Initializing Cal.com inline embed");
    cal("inline", {
      elementOrSelector: `#${elementId}`,
      calLink,
      config
    });

    // Set up event listeners
    cal("on", {
      action: "bookingSuccessful",
      callback: () => {
        console.log("Booking successful");
        callbacks.onBookingSuccess?.();
      },
    });

    cal("on", {
      action: "linkReady",
      callback: () => {
        console.log("Cal.com embed ready");
        callbacks.onReady?.();
      },
    });

    cal("on", {
      action: "linkFailed",
      callback: (error: any) => {
        console.error("Cal.com link failed:", error);
        callbacks.onError?.(error);
      },
    });

    console.log("Cal.com API initialized successfully");
    return cal;
  } catch (error) {
    console.error("Error initializing Cal.com API:", error);
    callbacks.onError?.(error);
    return null;
  }
};