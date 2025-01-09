import { CheckCircle, ClipboardList, Send, Activity } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  {
    icon: CheckCircle,
    title: "Assess Your Eligibility",
    description: "Use our AI-powered tools to evaluate your profile against migration programs worldwide"
  },
  {
    icon: ClipboardList,
    title: "Tailored Support",
    description: "Get personalized advice and step-by-step guidance to navigate global migration pathways and career transitions"
  },
  {
    icon: Send,
    title: "Connect with Employers",
    description: "Discover career opportunities with global employers actively hiring skilled professionals"
  },
  {
    icon: Activity,
    title: "Thrive Globally",
    description: "Land your dream role, relocate with confidence, and achieve your global career aspirations"
  }
];

const VisaProcessBanner = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Your path to international success starts here
          </p>
        </div>
        
        <div className="relative">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/20 hidden lg:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={cn(
                  "relative group",
                  "flex flex-col items-center text-center",
                  "p-6 rounded-xl glass-effect",
                  "transform transition-all duration-300 hover:-translate-y-2"
                )}
              >
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white flex items-center justify-center text-background font-bold">
                  {index + 1}
                </div>
                
                <div className="mb-6 p-4 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-white/60 text-sm">
                  {step.description}
                </p>
                
                {index < steps.length - 1 && (
                  <div className="w-px h-8 bg-white/20 my-4 lg:hidden" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisaProcessBanner;