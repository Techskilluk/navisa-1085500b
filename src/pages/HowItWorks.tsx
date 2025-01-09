import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Compass, Users, Briefcase, Bell, Globe } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PageHeader from "@/components/PageHeader";

const HowItWorks = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const steps = [
    {
      number: 1,
      title: "Begin Your Journey",
      description: "Take the first step towards your global career with our AI-powered assessment tool. We'll evaluate your qualifications and match you with the best migration pathways.",
      icon: Compass,
      cta: "Start Assessment",
      action: () => navigate("/eligibility"),
      imageSrc: "/lovable-uploads/571f81d6-8dbc-45ba-a398-f597c813cd2d.png"
    },
    {
      number: 2,
      title: "Expert Guidance",
      description: "Receive personalized support from our immigration specialists who will guide you through document preparation and visa requirements.",
      icon: Users,
      cta: "Book Consultation",
      action: () => console.log("Book consultation clicked"),
      imageSrc: "/lovable-uploads/942c5089-8393-456e-a19d-8b235d467925.png"
    },
    {
      number: 3,
      title: "Global Opportunities",
      description: "Access our exclusive network of international employers actively seeking skilled professionals like you.",
      icon: Briefcase,
      cta: "View Opportunities",
      action: () => console.log("View opportunities clicked"),
      imageSrc: "/lovable-uploads/912220b2-7eb0-449e-b1e6-23f7926d7091.png"
    },
    {
      number: 4,
      title: "Progress Tracking",
      description: "Stay informed with real-time updates on your application status through our intuitive tracking system.",
      icon: Bell,
      cta: "View Timeline",
      action: () => console.log("View timeline clicked"),
      imageSrc: "/lovable-uploads/62027918-4635-43c4-9326-320d114a1008.png"
    },
    {
      number: 5,
      title: "Global Success",
      description: "Launch your international career with confidence, supported by our comprehensive relocation assistance.",
      icon: Globe,
      cta: "Success Stories",
      action: () => console.log("Success stories clicked"),
      imageSrc: "/lovable-uploads/ae4007e5-9928-4825-9c35-b6ce1819a9dd.png"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <PageHeader 
        title="Your Path to Global Success"
        subtitle="Navigate your international career journey with our proven 5-step process"
      />

      {/* Process Steps */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-32">
            {steps.map((step, index) => (
              <div 
                key={step.number}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-12 items-center`}
              >
                <div className="flex-1 space-y-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-xl font-bold text-white">
                      {step.number}
                    </div>
                    <step.icon className="w-8 h-8 text-white opacity-80" />
                  </div>
                  <h2 className="text-3xl font-bold text-white tracking-tight">
                    {step.title}
                  </h2>
                  <p className="text-lg text-white/70 leading-relaxed">
                    {step.description}
                  </p>
                  <Button
                    onClick={step.action}
                    className="bg-white hover:bg-white/90 text-background"
                  >
                    {step.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="flex-1">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                    <div className="relative aspect-video rounded-xl glass-effect p-2 overflow-hidden">
                      <img 
                        src={step.imageSrc} 
                        alt={step.title}
                        className="w-full h-full object-cover rounded-lg transform transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-3xl"></div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-6 tracking-tight">
            Ready to Begin Your Global Career Journey?
          </h2>
          <p className="text-xl text-white/80 mb-12 leading-relaxed">
            Join thousands of professionals who've successfully relocated with NAVISA's expert guidance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => navigate("/eligibility")}
              className="bg-white hover:bg-white/90 text-background px-8 py-6 text-lg"
            >
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg"
              onClick={() => console.log("Contact experts clicked")}
            >
              Speak to an Expert
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;