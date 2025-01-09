import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Explore Global Talent Migration Pathways
          </h1>
          <p className="text-xl md:text-2xl text-white/60 mb-4">
            Opportunities Await:
          </p>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-3xl mx-auto">
            Whether you're a seasoned professional, recent graduate, or immigrant exploring new pathways, NAVISA connects you to:
          </p>
          <ul className="text-white/70 text-lg space-y-3 mb-8 max-w-2xl mx-auto">
            <li>Skilled worker programs</li>
            <li>Talent visas for professionals</li>
            <li>Startup and innovation-focused pathways</li>
            <li>Study-to-work transition programs</li>
            <li>Employer-sponsored migration schemes</li>
          </ul>
          <Button 
            size="lg" 
            className="bg-white text-black hover:bg-white/90 font-semibold"
          >
            Learn More
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;