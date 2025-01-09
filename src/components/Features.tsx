import { Card } from "@/components/ui/card";
import { Briefcase, Building2, GraduationCap, Users } from "lucide-react";
import { Button } from "./ui/button";

const Features = () => {
  const audiences = [
    {
      icon: <Briefcase className="w-6 h-6 text-white" />,
      title: "Clear Path Forward",
      description: "We handle the complexity of global migration, letting you focus on what matters - your career growth.",
      cta: "Start Assessment"
    },
    {
      icon: <Building2 className="w-6 h-6 text-white" />,
      title: "Expert Support Team",
      description: "Access migration specialists and career coaches dedicated to your success abroad.",
      cta: "Meet Our Experts"
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-white" />,
      title: "World of Possibilities",
      description: "Connect with premium employers in tech, healthcare, finance, and more across leading destinations.",
      cta: "Explore Opportunities"
    },
    {
      icon: <Users className="w-6 h-6 text-white" />,
      title: "Global Network",
      description: "Join an elite community of professionals shaping international careers through expert-led sessions and premium opportunities.",
      cta: "Join Network"
    }
  ];

  return (
    <div className="py-20 px-4 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            The NAVISA Advantage
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Your trusted partner in achieving international success
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((audience, index) => (
            <Card 
              key={index} 
              className="p-6 hover-lift glass-effect flex flex-col justify-between group transition-all duration-300"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  {audience.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{audience.title}</h3>
                <p className="text-white/60 mb-6">{audience.description}</p>
              </div>
              <Button variant="outline" className="w-full bg-white text-black hover:bg-white/90 transition-colors">
                {audience.cta}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;