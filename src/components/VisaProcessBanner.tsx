import { CheckCircle, ClipboardList, Send, Activity } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  {
    icon: CheckCircle,
    title: "Check Eligibility",
    description: "Answer a few questions to instantly discover your ideal visa category"
  },
  {
    icon: ClipboardList,
    title: "Document Checklist",
    description: "Get your personalized list of required documents based on your visa type"
  },
  {
    icon: Send,
    title: "Submit Application",
    description: "Prepare and submit your complete visa application through our secure platform"
  },
  {
    icon: Activity,
    title: "Real-Time Tracking",
    description: "Monitor your application status 24/7 with live updates at every stage"
  }
];

const VisaProcessBanner = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Simple 4-Step Process
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Your journey to global mobility made seamless
          </p>
        </div>
        
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-accent/20 -translate-y-1/2 hidden lg:block" />
          
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
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
                
                {/* Icon */}
                <div className="mb-6 p-4 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors">
                  <step.icon className="w-8 h-8 text-accent" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-white/60 text-sm">
                  {step.description}
                </p>
                
                {/* Arrow for mobile */}
                {index < steps.length - 1 && (
                  <div className="w-px h-8 bg-accent/20 my-4 lg:hidden" />
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