import { Card } from "@/components/ui/card";
import { Briefcase, Building2, GraduationCap, Users } from "lucide-react";
import { Button } from "./ui/button";

const Features = () => {
  const audiences = [
    {
      icon: <Briefcase className="w-6 h-6 text-white" />,
      title: "International Professionals",
      description: "Navigate visa processes, secure employment abroad, and settle with confidence. Perfect for skilled workers, tech professionals, and healthcare workers.",
      cta: "Book a Consultation"
    },
    {
      icon: <Building2 className="w-6 h-6 text-white" />,
      title: "Employers & Recruiters",
      description: "Simplify sponsorship processes, streamline talent acquisition, and access end-to-end recruitment solutions for your global hiring needs.",
      cta: "Expand Your Team"
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-white" />,
      title: "Students & Institutions",
      description: "Get comprehensive study abroad assistance, visa guidance, and support for educational institutions in managing international students.",
      cta: "Start Your Journey"
    },
    {
      icon: <Users className="w-6 h-6 text-white" />,
      title: "Immigration Consultants",
      description: "Access comprehensive resources, process management tools, and partnership opportunities to enhance your client services.",
      cta: "Partner With Us"
    }
  ];

  return (
    <div className="py-20 px-4 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Who We Serve
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Tailored solutions for every journey in global mobility
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
              <Button variant="outline" className="w-full hover:bg-[#F2FF44] hover:text-black transition-colors">
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