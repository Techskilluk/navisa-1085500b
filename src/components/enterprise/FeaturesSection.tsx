import { UserPlus, ListChecks, FolderOpen, UserRound, Sparkles } from "lucide-react";
import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: <UserPlus className="w-12 h-12 text-white/80" />,
    title: "Customer Onboarding Made Easy",
    shortDesc: "Streamline your client intake process with our intuitive system",
    benefits: [
      "Automated document collection",
      "Smart form validation",
      "Digital signature integration",
      "Progress tracking dashboard"
    ]
  },
  {
    icon: <ListChecks className="w-12 h-12 text-white/80" />,
    title: "Application Tracking & Management",
    shortDesc: "Monitor all immigration cases in one centralized platform",
    benefits: [
      "Real-time status updates",
      "Automated deadline reminders",
      "Case milestone tracking",
      "Custom workflow templates"
    ]
  },
  {
    icon: <FolderOpen className="w-12 h-12 text-white/80" />,
    title: "Resource Hub",
    shortDesc: "Access comprehensive immigration resources and templates",
    benefits: [
      "Document templates library",
      "Country-specific guides",
      "Policy updates alerts",
      "Best practices repository"
    ]
  },
  {
    icon: <UserRound className="w-12 h-12 text-white/80" />,
    title: "Consultant Marketplace",
    shortDesc: "Connect with specialized immigration consultants worldwide",
    benefits: [
      "Expert network access",
      "Secure collaboration tools",
      "Revenue sharing platform",
      "Quality rating system"
    ]
  },
  {
    icon: <Sparkles className="w-12 h-12 text-white/80" />,
    title: "AI Tools for Documentation",
    shortDesc: "Leverage AI to streamline document generation and evidence management",
    benefits: [
      "AI-powered document templates",
      "Automated evidence validation",
      "Smart research assistance",
      "Regulatory compliance checks"
    ]
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-background/95"></div>
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
            Comprehensive Features
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Everything you need to manage your immigration practice effectively
          </p>
          <div className="mt-4 flex justify-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-white/40 animate-pulse"></div>
            <div className="w-2 h-2 rounded-full bg-white/40 animate-pulse delay-100"></div>
            <div className="w-2 h-2 rounded-full bg-white/40 animate-pulse delay-200"></div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 animate-fade-in">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
            >
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;