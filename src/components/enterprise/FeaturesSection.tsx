import { Shield, Users2, FileCheck, Network, Sparkles } from "lucide-react";
import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: <Shield className="w-12 h-12 text-white/80" />,
    title: "Secure Document Management",
    shortDesc: "Enterprise-grade security for all your immigration documents",
    benefits: [
      "End-to-end encryption",
      "Automated backups",
      "Access control",
      "Audit trails"
    ]
  },
  {
    icon: <Users2 className="w-12 h-12 text-white/80" />,
    title: "Team Collaboration",
    shortDesc: "Streamline workflow across your immigration team",
    benefits: [
      "Real-time updates",
      "Role-based access",
      "Team chat",
      "Task assignment"
    ]
  },
  {
    icon: <FileCheck className="w-12 h-12 text-white/80" />,
    title: "Smart Processing",
    shortDesc: "Automated document processing and verification",
    benefits: [
      "AI-powered validation",
      "Auto-fill forms",
      "Error detection",
      "Compliance checks"
    ]
  },
  {
    icon: <Network className="w-12 h-12 text-white/80" />,
    title: "Global Network",
    shortDesc: "Access to worldwide immigration expertise",
    benefits: [
      "Expert consultants",
      "Local partners",
      "24/7 support",
      "Multi-language"
    ]
  },
  {
    icon: <Sparkles className="w-12 h-12 text-white/80" />,
    title: "Advanced Analytics",
    shortDesc: "Data-driven insights for better decision making",
    benefits: [
      "Custom reports",
      "Success metrics",
      "Trend analysis",
      "ROI tracking"
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
            Enterprise Features
          </h2>
          <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto">
            Powerful tools designed for immigration teams
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