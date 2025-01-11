import { Card } from "@/components/ui/card";
import { Briefcase, Building2, GraduationCap } from "lucide-react";

const ServiceCards = () => {
  const services = [
    {
      icon: <Briefcase className="w-8 h-8 text-white/80" />,
      title: "Simplify Your Global Move",
      description: "From migration pathways to job placement, we streamline the process, so you can focus on your goals."
    },
    {
      icon: <Building2 className="w-8 h-8 text-white/80" />,
      title: "Expert Guidance",
      description: "Our team of migration and career specialists is here to support you every step of the way."
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-white/80" />,
      title: "Global Opportunities",
      description: "Unlock access to international job markets in tech, business, healthcare, academia, and more."
    }
  ];

  return (
    <div className="py-16 lg:py-24 px-4 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-background/80 backdrop-blur-3xl"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80 mb-4">
            Why NAVISA?
          </h2>
          <p className="text-lg lg:text-xl text-white/60 max-w-2xl mx-auto">
            Your trusted partner in achieving international success
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 px-4">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="relative group overflow-hidden border-white/10 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl hover:from-white/15 hover:to-white/10 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="p-8 relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl lg:text-2xl font-semibold mb-4 text-white group-hover:text-white/90 transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/60 group-hover:text-white/70 transition-colors leading-relaxed">
                  {service.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceCards;