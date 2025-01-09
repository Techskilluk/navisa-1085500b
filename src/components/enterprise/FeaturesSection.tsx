import { ClipboardList, Users2, FileCheck, Network, Sparkles, Bot } from "lucide-react";
import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: <ClipboardList className="w-12 h-12 text-white/80" />,
    title: "Customer Onboarding Made Easy",
    shortDesc: "Streamlined client information collection and management",
    benefits: [
      "Intuitive onboarding system",
      "Automated form collection",
      "Secure data storage",
      "Seamless client experience"
    ]
  },
  {
    icon: <FileCheck className="w-12 h-12 text-white/80" />,
    title: "Application Tracking",
    shortDesc: "Real-time monitoring of client application progress",
    benefits: [
      "Live status updates",
      "Milestone tracking",
      "Deadline notifications",
      "Progress reporting"
    ]
  },
  {
    icon: <Network className="w-12 h-12 text-white/80" />,
    title: "Resource Hub",
    shortDesc: "Centralized repository for documentation and evidence",
    benefits: [
      "Document templates",
      "Best practices library",
      "Evidence validation",
      "Secure file management"
    ]
  },
  {
    icon: <Users2 className="w-12 h-12 text-white/80" />,
    title: "Consultant Marketplace",
    shortDesc: "Connect with clients and grow your practice",
    benefits: [
      "Professional showcase",
      "Client matching",
      "Industry networking",
      "Business growth tools"
    ]
  },
  {
    icon: <Bot className="w-12 h-12 text-white/80" />,
    title: "AI-Powered Tools",
    shortDesc: "Advanced automation for document and evidence management",
    benefits: [
      "Automated document generation",
      "Smart evidence validation",
      "AI research assistance",
      "Regulatory updates"
    ]
  },
  {
    icon: <Sparkles className="w-12 h-12 text-white/80" />,
    title: "Evidence Management",
    shortDesc: "Comprehensive tools for handling client documentation",
    benefits: [
      "Document scanning",
      "Automated validation",
      "Organized storage",
      "Quick retrieval"
    ]
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-background/95 pointer-events-none" />
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white bg-clip-text">
            What NAVISA Offers
          </h2>
          <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto">
            Comprehensive tools designed for modern immigration consultants
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="animate-scale-in"
              style={{ 
                animationDelay: `${index * 100}ms`,
                animationFillMode: 'forwards'
              }}
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