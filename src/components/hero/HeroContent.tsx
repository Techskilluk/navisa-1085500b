import { Button } from "@/components/ui/button";
import { ArrowRight, Building } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const HeroContent = () => {
  const navigate = useNavigate();

  const handleEligibilityCheck = () => {
    navigate("/eligibility");
  };

  return (
    <div className="space-y-8 w-full">
      <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight animate-fade-in">
        Transform Your Career Across Borders
      </h1>
      
      <p className="text-xl text-white/80 leading-relaxed max-w-2xl animate-fade-in delay-100">
        Navigate global opportunities with confidence. NAVISA connects ambitious professionals with international employers, simplifies migration pathways, and turns your dream of a global career into reality.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in delay-200">
        <Button 
          className="w-full sm:w-auto px-8 py-7 text-lg bg-white text-black hover:bg-white/90 flex items-center gap-2"
          onClick={handleEligibilityCheck}
        >
          Begin Your Global Journey
          <ArrowRight className="w-5 h-5 text-black" />
        </Button>
        <Link to="/enterprise" className="w-full sm:w-auto">
          <Button 
            variant="outline"
            className="w-full sm:w-auto px-8 py-7 text-lg border-white text-white hover:bg-white/10 flex items-center gap-2"
          >
            For Businesses
            <Building className="w-5 h-5" />
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10 animate-fade-in delay-300">
        <div>
          <div className="text-3xl lg:text-4xl font-bold text-white">150+</div>
          <div className="text-sm lg:text-base text-white/60 mt-1">Success Stories</div>
        </div>
        <div>
          <div className="text-3xl lg:text-4xl font-bold text-white">35+</div>
          <div className="text-sm lg:text-base text-white/60 mt-1">Countries</div>
        </div>
        <div>
          <div className="text-3xl lg:text-4xl font-bold text-white">24/7</div>
          <div className="text-sm lg:text-base text-white/60 mt-1">Expert Support</div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;