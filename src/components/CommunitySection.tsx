import { Button } from "@/components/ui/button";
import { ListChecks } from "lucide-react";

const CommunitySection = () => {
  return (
    <div className="py-24 px-4 relative overflow-hidden bg-gradient-to-br from-white/20 via-background to-primary">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px_32px]" />
      <div className="absolute h-96 w-96 -top-48 -right-48 rounded-full bg-white/20 blur-3xl" />
      <div className="absolute h-96 w-96 -bottom-48 -left-48 rounded-full bg-white/20 blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-5xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
            Join the NAVISA Community
          </h2>
          <p className="text-xl bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent font-medium">
            Empowering Global Talent
          </p>
          <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Join a growing community of professionals, employers, and experts driving global career success.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {[
            {
              title: "Live Q&A Sessions",
              description: "Connect with migration specialists",
            },
            {
              title: "Career Guidance",
              description: "Expert advice from industry leaders",
            },
            {
              title: "Exclusive Access",
              description: "First look at premium job postings",
            }
          ].map((feature, index) => (
            <div 
              key={index} 
              className="glass-effect p-6 rounded-xl hover-lift group cursor-pointer"
            >
              <ListChecks className="w-8 h-8 text-white mb-4 group-hover:text-white/80 transition-colors" />
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-white/70">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="secondary" 
            size="lg"
            className="hover:bg-secondary/90 hover-lift text-lg px-8 py-6 h-auto font-medium"
          >
            Join the Community
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CommunitySection;