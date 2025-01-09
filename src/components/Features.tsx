import { Card } from "@/components/ui/card";
import { ArrowRight, Briefcase, GraduationCap, Rocket, Users2 } from "lucide-react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

const Features = () => {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate("/eligibility");
  };

  const pathways = [
    {
      icon: <Briefcase className="w-6 h-6 text-accent" />,
      title: "Skilled Worker Programs",
      description: "Access opportunities through specialized work visa programs designed for professionals in high-demand sectors."
    },
    {
      icon: <Users2 className="w-6 h-6 text-accent" />,
      title: "Talent Visas",
      description: "Explore dedicated visa pathways for exceptional professionals and industry experts."
    },
    {
      icon: <Rocket className="w-6 h-6 text-accent" />,
      title: "Startup & Innovation Pathways",
      description: "Launch your venture or join innovative companies through specialized immigration routes."
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-accent" />,
      title: "Study-to-Work Transition",
      description: "Seamlessly transition from international student to skilled professional with our guidance."
    }
  ];

  return (
    <div className="py-20 px-4 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Explore Global Talent Migration Pathways
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
            Whether you're a seasoned professional, recent graduate, or immigrant exploring new pathways, NAVISA connects you to opportunities worldwide.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {pathways.map((pathway, index) => (
            <Card 
              key={index} 
              className="p-6 bg-card/50 backdrop-blur-sm border-accent/20 hover:border-accent/40 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                {pathway.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{pathway.title}</h3>
              <p className="text-white/60">{pathway.description}</p>
            </Card>
          ))}
        </div>
        <div className="text-center">
          <Button 
            onClick={handleLearnMore}
            className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg inline-flex items-center gap-2"
          >
            Learn More
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Features;