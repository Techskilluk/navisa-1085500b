import { ArrowRight, Globe, Briefcase, GraduationCap, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";

const Pathways = () => {
  const navigate = useNavigate();

  const pathways = [
    {
      icon: <Globe className="w-8 h-8 text-white" />,
      title: "Global Talent Visa (UK)",
      description: "For highly skilled individuals in science, digital technology, engineering, arts, and humanities who want to live and work in the UK.",
      flag: "🇬🇧"
    },
    {
      icon: <Briefcase className="w-8 h-8 text-white" />,
      title: "Express Entry (Canada)",
      description: "The fastest pathway to Canadian permanent residency for skilled workers who want to immigrate to Canada.",
      flag: "🇨🇦"
    },
    {
      icon: <Building2 className="w-8 h-8 text-white" />,
      title: "EB-1/EB-2 (USA)",
      description: "For professionals with extraordinary abilities or exceptional achievements in fields like science, business, or arts who want to stay in the U.S.",
      flag: "🇺🇸"
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-white" />,
      title: "EU (Australia)",
      description: "Designed for skilled workers who want to live and work in Australia, granting permanent residency to those with in-demand skills.",
      flag: "🇦🇺"
    },
    {
      icon: <Building2 className="w-8 h-8 text-white" />,
      title: "Golden Visa (UAE)",
      description: "A long-term residency program designed to attract investors, entrepreneurs, skilled professionals, and exceptional talents to the UAE.",
      flag: "🇦🇪"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-20">
        {/* Hero Section */}
        <div className="text-center mb-16 px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get to know the visa pathways
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Discover the best migration pathways for your global career goals.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pathways.map((pathway, index) => (
              <Card 
                key={index}
                className="p-6 bg-card hover:bg-card/80 transition-all duration-300 hover:-translate-y-1 border-white/10 hover:border-white/20"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                    {pathway.icon}
                  </div>
                  <span className="text-3xl">{pathway.flag}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{pathway.title}</h3>
                <p className="text-white/60 mb-6">{pathway.description}</p>
                <Button 
                  variant="secondary"
                  className="w-full group"
                  onClick={() => navigate("/eligibility")}
                >
                  Find out how to apply
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-20 px-4">
          <div className="max-w-4xl mx-auto text-center p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Not sure which pathway is right for you?
            </h2>
            <p className="text-white/80 mb-6">
              Take our eligibility quiz to find the perfect match for your skills and aspirations.
            </p>
            <Button 
              onClick={() => navigate("/eligibility")}
              className="bg-white hover:bg-white/90 text-black px-8 py-6 text-lg"
            >
              Check Eligibility Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pathways;