import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useToast } from "@/components/ui/use-toast";
import ConsultationHistory from "./ConsultationHistory";

const ConsultationBooking = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    const initCal = async () => {
      try {
        console.log("Initializing Cal.com widget");
        const cal = await getCalApi();
        
        if (!mounted) return;

        // Initialize Cal.com
        cal("init");
        
        // Configure UI after initialization
        cal("ui", {
          hideEventTypeDetails: false,
          layout: "month_view",
          theme: "light",
        });

        setIsLoading(false);
        console.log("Cal.com widget initialized successfully");
      } catch (error) {
        console.error("Failed to initialize Cal.com widget:", error);
        if (mounted) {
          setIsLoading(false);
          toast({
            title: "Error",
            description: "Failed to load booking calendar. Please try refreshing the page.",
            variant: "destructive",
          });
        }
      }
    };

    if (isOpen) {
      initCal();
    }

    return () => {
      mounted = false;
    };
  }, [isOpen, toast]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="w-full bg-card/50 backdrop-blur-sm border-b border-border/10 p-6 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto">
          <Button
            variant="ghost"
            className="mb-4"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <h1 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
            Book a Consultation
          </h1>
          <p className="text-muted-foreground">
            Schedule a one-on-one consultation with our visa experts
          </p>
        </div>
      </div>

      {/* Booking Section */}
      <div className="w-full max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="flex flex-col items-center justify-center space-y-6">
              <div className="w-full">
                <h2 className="text-2xl font-bold tracking-tight mb-4">
                  Ready to Start Your Journey?
                </h2>
                <p className="text-muted-foreground mb-8">
                  Book a consultation with our expert team to discuss your visa options and get personalized guidance for your immigration journey.
                </p>
                
                <Dialog open={isOpen} onOpenChange={setIsOpen}>
                  <DialogTrigger asChild>
                    <Button size="lg" className="animate-scale-in">
                      <Calendar className="w-4 h-4 mr-2" />
                      Book Your Consultation
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[900px] h-[80vh]">
                    <DialogHeader>
                      <DialogTitle>Schedule Your Consultation</DialogTitle>
                    </DialogHeader>
                    {isLoading ? (
                      <div className="flex items-center justify-center h-full">
                        <div className="animate-pulse text-muted-foreground">
                          Loading calendar...
                        </div>
                      </div>
                    ) : (
                      <div className="h-full w-full">
                        <Cal
                          calLink="navisa-global/global-talent-consultation"
                          style={{
                            width: "100%",
                            height: "100%",
                            overflow: "scroll"
                          }}
                          config={{
                            layout: "month_view"
                          }}
                        />
                      </div>
                    )}
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
          
          {/* Consultation History */}
          <div className="lg:col-span-1">
            <ConsultationHistory />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultationBooking;