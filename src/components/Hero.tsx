import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const handleEligibilityCheck = () => {
    navigate("/eligibility");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-20 bg-background">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Transform Your Career Across Borders
          </h1>
          <p className="text-lg text-white/80 max-w-xl">
            Navigate global opportunities with confidence. NAVISA connects ambitious professionals with international employers, simplifies migration pathways, and turns your dream of a global career into reality.
          </p>
          <Button 
            className="px-8 py-6 text-lg bg-white text-black hover:bg-white/90 flex items-center gap-2"
            onClick={handleEligibilityCheck}
          >
            Begin Your Global Journey
            <ArrowRight className="w-5 h-5 text-black" />
          </Button>
          <div className="grid grid-cols-3 gap-8 pt-8">
            <div>
              <div className="text-3xl font-bold text-white">150+</div>
              <div className="text-white/60">Success Stories</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">35+</div>
              <div className="text-white/60">Countries</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">24/7</div>
              <div className="text-white/60">Expert Support</div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2574&auto=format&fit=crop"
              alt="Global Mobility"
              className="w-full h-auto"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-accent/20 rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;