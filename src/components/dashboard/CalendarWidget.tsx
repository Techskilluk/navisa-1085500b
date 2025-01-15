import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import { useToast } from "@/components/ui/use-toast";

export const CalendarWidget = () => {
  const { toast } = useToast();

  useEffect(() => {
    (async () => {
      try {
        console.log("Initializing Cal.com widget");
        const cal = await getCalApi({
          namespace: "global-talent-consultation"
        });
        
        cal("ui", {
          hideEventTypeDetails: false,
          layout: "month_view",
          theme: "light"
        });
        
        console.log("Cal.com widget initialized successfully");
      } catch (error) {
        console.error("Failed to initialize Cal.com widget:", error);
        toast({
          title: "Error",
          description: "Failed to load booking calendar. Please try again later.",
          variant: "destructive",
        });
      }
    })();
  }, [toast]);

  return null;
};