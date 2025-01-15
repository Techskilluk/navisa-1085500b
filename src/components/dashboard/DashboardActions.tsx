import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { BookOpen, Calendar } from "lucide-react";
import { getCalApi } from "@calcom/embed-react";
import { useToast } from "@/components/ui/use-toast";

interface DashboardActionsProps {
  onBookConsultation: () => void;
  onStartApplication: () => void;
}

const DashboardActions = ({ onBookConsultation, onStartApplication }: DashboardActionsProps) => {
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

  return (
    <div className="w-full bg-background/50 border-b border-border/10 p-4 mt-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-center gap-3">
        <Button
          data-cal-namespace="global-talent-consultation"
          data-cal-link="navisa-global/global-talent-consultation"
          data-cal-config='{"layout":"month_view"}'
          className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
          size="lg"
        >
          <Calendar className="w-4 h-4 mr-2" />
          Book Consultation
        </Button>
        <Button
          onClick={onStartApplication}
          variant="outline"
          size="lg"
        >
          <BookOpen className="w-4 h-4 mr-2" />
          Start Application
        </Button>
      </div>
    </div>
  );
};

export default DashboardActions;