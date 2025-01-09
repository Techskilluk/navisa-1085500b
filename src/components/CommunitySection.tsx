import { Button } from "@/components/ui/button";
import { ListChecks } from "lucide-react";

const CommunitySection = () => {
  return (
    <div className="py-20 px-4 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-white text-center mb-4">
          Join the NAVISA Community
        </h2>
        <p className="text-xl text-white/60 text-center mb-6 max-w-2xl mx-auto">
          Empowering Global Talent:
        </p>
        <p className="text-lg text-white/80 text-center mb-12 max-w-2xl mx-auto">
          Join a growing community of professionals, employers, and experts driving global career success.
        </p>
        
        <div className="max-w-2xl mx-auto mb-12 space-y-4">
          {[
            "Live Q&A sessions with migration specialists",
            "Career advice from industry leaders",
            "Exclusive job postings"
          ].map((feature, index) => (
            <div key={index} className="flex items-center gap-3 text-white/80">
              <ListChecks className="w-5 h-5 text-accent" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="secondary" 
            size="lg"
            className="hover:bg-secondary/90"
          >
            Join the Community
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CommunitySection;