import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const CallToAction = () => {
  const navigate = useNavigate();
  
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-background/95"></div>
      <div className="max-w-3xl mx-auto text-center relative">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          Ready to Transform Your Practice?
        </h2>
        <p className="text-lg text-white/70 mb-8">
          Join leading immigration consultants and law firms already using NAVISA Enterprise
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={() => navigate('/enterprise/signup')}
            className="bg-white hover:bg-white/90 text-black px-8 py-6 text-lg"
          >
            Start Free Trial
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            variant="outline"
            onClick={() => navigate('/enterprise/demo')}
            className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg"
          >
            Request Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;