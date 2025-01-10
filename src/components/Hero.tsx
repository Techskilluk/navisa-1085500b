import { Button } from "@/components/ui/button";
import { ArrowRight, Building } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import VideoShowcase from "./hero/VideoShowcase";
import StatsSection from "./hero/StatsSection";

const Hero = () => {
  const navigate = useNavigate();

  const handleEligibilityCheck = () => {
    navigate("/eligibility");
  };

  return (
    <div className="relative min-h-[calc(100vh-80px)] flex items-center justify-center px-4 pt-20 lg:pt-0 overflow-hidden bg-gradient-to-br from-background via-background/95 to-background/90">
      <div className="relative z-10 max-w-7xl mx-auto w-full space-y-8">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight animate-fade-in text-center">
          Transform Your Career Across Borders
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
            <p className="text-lg sm:text-xl text-white/80 max-w-xl mx-auto lg:mx-0 animate-fade-in delay-100">
              Navigate global opportunities with confidence. NAVISA connects ambitious professionals with international employers, simplifies migration pathways, and turns your dream of a global career into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in delay-200">
              <Button 
                className="w-full sm:w-auto px-6 py-6 text-lg bg-white text-black hover:bg-white/90 flex items-center gap-2"
                onClick={handleEligibilityCheck}
              >
                Begin Your Global Journey
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

          <div className="lg:block">
            <VideoShowcase />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;