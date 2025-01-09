import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Users, GraduationCap, Building2 } from "lucide-react";

const ServiceCards = () => {
  const services = [
    {
      icon: <Globe className="w-8 h-8 text-white" />,
      title: "Global Mobility Solutions",
      tagline: "Navigate your immigration journey with confidence and expert guidance",
      points: [
        "Streamline visa applications with personalized support",
        "Access comprehensive relocation assistance",
        "Receive ongoing compliance monitoring"
      ],
      cta: "Start Your Journey"
    },
    {
      icon: <Building2 className="w-8 h-8 text-white" />,
      title: "Corporate Immigration",
      tagline: "Empower your business with seamless global talent mobility",
      points: [
        "Optimize workforce mobility strategies",
        "Ensure compliance with immigration regulations",
        "Facilitate international assignments"
      ],
      cta: "Partner With Us"
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-white" />,
      title: "Study Abroad Success",
      tagline: "Transform your educational aspirations into reality worldwide",
      points: [
        "Secure student visas with expert guidance",
        "Access top global educational institutions",
        "Receive comprehensive settlement support"
      ],
      cta: "Explore Programs"
    },
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: "Family Reunification",
      tagline: "Bring your loved ones closer with trusted immigration support",
      points: [
        "Navigate family sponsorship requirements confidently",
        "Expedite reunion through expert guidance",
        "Access settlement assistance services"
      ],
      cta: "Unite Your Family"
    }
  ];

  return (
    <section className="py-20 px-4 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Our Services
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Comprehensive immigration solutions tailored to your unique journey
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-xl transition-all duration-300 bg-card border-accent/10 hover:border-accent/20"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
              <p className="text-white/60 text-sm mb-6">{service.tagline}</p>
              <ul className="space-y-3 mb-6">
                {service.points.map((point, idx) => (
                  <li key={idx} className="text-white/80 text-sm flex items-start">
                    <ArrowRight className="w-4 h-4 text-white mr-2 mt-1 flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <Button 
                variant="outline" 
                className="w-full hover:bg-white hover:text-primary transition-colors"
              >
                {service.cta}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;