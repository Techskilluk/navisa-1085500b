import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckSquare, Users, Briefcase, Bell, Globe } from "lucide-react";
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
      title: "Assess Your Eligibility",
      description: "Use our AI-powered assessment tool to evaluate your qualifications and identify the best migration pathways for your profile.",
      icon: CheckSquare,
      cta: "Try Eligibility Check",
      action: () => navigate("/eligibility")
    },
    {
      number: 2,
      title: "Get Tailored Support",
      description: "Receive personalized guidance and document preparation assistance from our expert team.",
      icon: Users,
      cta: "Book Consultation",
      action: () => console.log("Book consultation clicked")
    },
    {
      number: 3,
      title: "Connect with Employers",
      description: "Access our network of global employers and find opportunities that match your skills and aspirations.",
      icon: Briefcase,
      cta: "View Opportunities",
      action: () => console.log("View opportunities clicked")
    },
    {
      number: 4,
      title: "Stay on Track",
      description: "Monitor your progress and receive timely updates through our intuitive tracking system.",
      icon: Bell,
      cta: "View Timeline",
      action: () => console.log("View timeline clicked")
    },
    {
      number: 5,
      title: "Thrive Globally",
      description: "Successfully transition to your new role and begin your international career journey.",
      icon: Globe,
      cta: "Success Stories",
      action: () => console.log("Success stories clicked")
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <PageHeader 
        title="How It Works"
        subtitle="Navigate global talent migration pathways with ease in just five steps"
      />

      {/* Progress Steps */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-32">
            {steps.map((step, index) => (
              <div 
                key={step.number}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } gap-12 items-center`}
              >
                <div className="flex-1 space-y-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-xl font-bold text-white">
                      {step.number}
                    </div>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">
                    {step.title}
                  </h2>
                  <p className="text-lg text-white/60">
                    {step.description}
                  </p>
                  <Button
                    onClick={step.action}
                    variant="outline"
                    className="mt-6"
                  >
                    {step.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="flex-1">
                  <div className="aspect-video rounded-xl glass-effect p-6 flex items-center justify-center">
                    <step.icon className="w-24 h-24 text-white/20" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Begin Your Global Career Journey?
          </h2>
          <p className="text-xl text-white/80 mb-12">
            Let NAVISA guide you with expert advice and powerful tools
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => navigate("/eligibility")}
              className="bg-white hover:bg-white/90 text-black px-8 py-6 text-lg"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg"
              onClick={() => console.log("Contact experts clicked")}
            >
              Contact Our Experts
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
