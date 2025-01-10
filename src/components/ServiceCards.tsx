import { Card } from "@/components/ui/card";
import { Briefcase, Building2, GraduationCap } from "lucide-react";
import { Button } from "./ui/button";

const ServiceCards = () => {
  const services = [
    {
      icon: <Briefcase className="w-6 h-6 text-white" />,
      title: "Simplify Your Global Move",
      description: "From migration pathways to job placement, we streamline the process, so you can focus on your goals.",
      cta: "Start Assessment"
    },
    {
      icon: <Building2 className="w-6 h-6 text-white" />,
      title: "Expert Guidance",
      description: "Our team of migration and career specialists is here to support you every step of the way.",
      cta: "Meet Our Experts"
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-white" />,
      title: "Global Opportunities",
      description: "Unlock access to international job markets in tech, business, healthcare, academia, and more.",
      cta: "Explore Opportunities"
    }
  ];

  return (
    <div className="py-20 px-4 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Why NAVISA?
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Your trusted partner in achieving international success
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="p-8 hover-lift glass-effect flex flex-col justify-between group transition-all duration-300 border-white/10 hover:border-white/20"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">{service.title}</h3>
                <p className="text-white/70 mb-8 text-lg leading-relaxed">{service.description}</p>
              </div>
              <Button 
                variant="outline" 
                className="w-full bg-white/5 hover:bg-white/10 text-white border-white/20 hover:border-white/30 transition-colors"
              >
                {service.cta}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceCards;