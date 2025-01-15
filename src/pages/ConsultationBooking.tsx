import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Cal, { getCalApi } from "@calcom/embed-react";

const ConsultationBooking = () => {
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Initializing Cal.com widget");
    (async function initCal() {
      const cal = await getCalApi({ namespace: "global-talent-consultation" });
      cal("ui", {
        hideEventTypeDetails: false,
        layout: "month_view",
        theme: "light",
      });
    })();
  }, []);

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

      {/* Cal.com Embed */}
      <div className="w-full max-w-7xl mx-auto px-4 py-8">
        <div className="w-full h-[800px] rounded-lg overflow-hidden border border-border">
          <Cal
            namespace="global-talent-consultation"
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
      </div>
    </div>
  );
};

export default ConsultationBooking;