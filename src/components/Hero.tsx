import { Button } from "@/components/ui/button";
import { ArrowRight, Building } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import VideoShowcase from "./hero/VideoShowcase";
import StatsSection from "./hero/StatsSection";

const Hero = () => {
  const navigate = useNavigate();

  useEffect(() => {
    (async function initCal() {
      try {
        console.log("Initializing Cal.com widget");
        const cal = await getCalApi({ namespace: "global-talent-consultation" });
        cal("ui", {
          hideEventTypeDetails: false,
          layout: "month_view",
          theme: "light",
        });
        console.log("Cal.com widget initialized successfully");
      } catch (error) {
        console.error("Failed to initialize Cal.com widget:", error);
      }
    })();
  }, []);

  return (
    <div className="relative min-h-[calc(100vh-80px)] flex items-center justify-center px-4 pt-20 lg:pt-0 overflow-hidden bg-gradient-to-br from-background via-background/95 to-background/90">
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight animate-fade-in">
            Transform Your Career Across Borders
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-xl mx-auto lg:mx-0 animate-fade-in delay-100">
            Navigate global opportunities with confidence. NAVISA connects ambitious professionals with international employers, simplifies migration pathways, and turns your dream of a global career into reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in delay-200">
            <Button 
              className="w-full sm:w-auto px-6 py-6 text-lg bg-white text-black hover:bg-white/90 flex items-center gap-2"
              data-cal-namespace="global-talent-consultation"
              data-cal-link="navisa-global/global-talent-consultation"
              data-cal-config='{"layout":"month_view"}'
            >
              Speak to a Consultant
              <ArrowRight className="w-5 h-5 text-black" />
            </Button>
            <Link to="/enterprise" className="w-full sm:w-auto">
              <Button 
                variant="outline"
                className="w-full sm:w-auto px-6 py-6 text-lg border-white text-white hover:bg-white/10 flex items-center gap-2"
              >
                For Businesses
                <Building className="w-5 h-5" />
              </Button>
            </Link>
          </div>
          <StatsSection />
        </div>
        <VideoShowcase />
      </div>
    </div>
  );
};

export default Hero;