import { Card } from "@/components/ui/card";
import { Briefcase, Building2, GraduationCap, Mail, Phone, Clock } from "lucide-react";
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
    },
    {
      icon: <Mail className="w-6 h-6 text-white" />,
      title: "Let's Get Started",
      description: (
        <div className="space-y-2 lg:space-y-3">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-white/60" />
            <span className="text-sm lg:text-base">info@navisa.co</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-white/60" />
            <span className="text-sm lg:text-base break-words">+447816 247864 | +234 901 546 6402</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-white/60" />
            <span className="text-sm lg:text-base">Monday–Friday, 9 AM–5 PM (GMT)</span>
          </div>
        </div>
      ),
      cta: "Contact Us"
    }
  ];

  return (
    <div className="py-12 lg:py-20 px-4 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Why NAVISA?
          </h2>
          <p className="text-lg lg:text-xl text-white/60 max-w-2xl mx-auto">
            Your trusted partner in achieving international success
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="p-6 hover-lift glass-effect flex flex-col justify-between group transition-all duration-300"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-lg lg:text-xl font-semibold mb-3 text-white">{service.title}</h3>
                <div className="text-white/60 mb-6">{service.description}</div>
              </div>
              <Button variant="outline" className="w-full bg-white text-black hover:bg-white/90 transition-colors">
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