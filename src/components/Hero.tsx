import { Button } from "@/components/ui/button";
import { ArrowRight, Building } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const handleEligibilityCheck = () => {
    navigate("/eligibility");
  };

  return (
    <div className="relative min-h-[calc(100vh-80px)] flex items-center justify-center px-4 pt-20 lg:pt-0 bg-background overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card opacity-50" />
      
      {/* Content layer */}
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
          <div className="grid grid-cols-3 gap-8 pt-8 animate-fade-in delay-300">
            <div className="text-center lg:text-left">
              <div className="text-2xl lg:text-3xl font-bold text-white">150+</div>
              <div className="text-sm lg:text-base text-white/60">Success Stories</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-2xl lg:text-3xl font-bold text-white">35+</div>
              <div className="text-sm lg:text-base text-white/60">Countries</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-2xl lg:text-3xl font-bold text-white">24/7</div>
              <div className="text-sm lg:text-base text-white/60">Expert Support</div>
            </div>
          </div>
        </div>
        
        <div className="relative hidden lg:block">
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl h-[600px] glass-effect animate-scale-in">
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-card to-background opacity-30" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-bold text-white">Ready to Start?</h3>
                <p className="text-white/80 max-w-md mx-auto">
                  Take the first step towards your international career
                </p>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-accent/20 rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;