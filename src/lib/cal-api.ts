import { getCalApi } from "@calcom/embed-react";

// Update the type definition to match Cal.com's actual API shape
export type CalInstance = ReturnType<typeof getCalApi> extends Promise<infer T> ? T : never;

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
    const cal = await getCalApi();

    if (!cal) {
      console.error("Cal.com API failed to initialize");
      throw new Error("Calendar API initialization failed");
    }

    // Configure Cal.com
    console.log("Setting up Cal.com namespace configuration");
    await cal("ui", {
      theme: "light",
      styles: {
        branding: {
          brandColor: "#000000"
        }
      }
    });

    // Initialize inline embed
    console.log("Initializing Cal.com inline embed");
    await cal("inline", {
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