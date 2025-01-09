import { Button } from "@/components/ui/button";
import { ArrowRight, Building, Globe, Users, LineChart, Briefcase, UserPlus, ListChecks, FolderOpen, UserRound } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PageHeader from "@/components/PageHeader";

const Enterprise = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <UserPlus className="w-12 h-12 text-white/80" />,
      title: "Customer Onboarding Made Easy",
      description: "Streamline your client intake process with our intuitive onboarding system. Automate document collection, verification, and initial assessments to save time and reduce manual work.",
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
      description: "Keep track of all your immigration cases in one centralized platform. Monitor progress, set reminders, and manage deadlines efficiently with our comprehensive tracking system.",
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
      description: "Access a comprehensive library of immigration resources, templates, and country-specific documentation requirements. Stay updated with the latest immigration policies and procedures.",
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
      description: "Connect with specialized immigration consultants worldwide. Expand your service offerings and collaborate with experts to handle complex cases across different jurisdictions.",
      benefits: [
        "Expert network access",
        "Secure collaboration tools",
        "Revenue sharing platform",
        "Quality rating system"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <PageHeader 
        title="Transform Your Immigration Practice"
        subtitle="Streamline operations, enhance client experience, and scale your business with NAVISA's enterprise solutions"
        ctaText="Start Free Trial"
        ctaLink="/enterprise/signup"
      />

      {/* Features Grid */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-background/95"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-white">Comprehensive Features</h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Everything you need to manage your immigration practice effectively
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="glass-effect p-8 rounded-xl hover-lift relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-white/70 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-white/60">
                        <div className="w-1.5 h-1.5 rounded-full bg-white/40 mr-2"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-background/95"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-white">Get Started in Three Steps</h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Begin transforming your practice with NAVISA Enterprise
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-effect p-8 rounded-xl text-center hover-lift">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Create Your Profile</h3>
              <p className="text-white/70">Set up your enterprise account and customize your workspace</p>
            </div>
            <div className="glass-effect p-8 rounded-xl text-center hover-lift">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Import Your Cases</h3>
              <p className="text-white/70">Easily transfer existing cases and client data</p>
            </div>
            <div className="glass-effect p-8 rounded-xl text-center hover-lift">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Start Managing</h3>
              <p className="text-white/70">Begin using our tools to streamline your practice</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-background/95"></div>
        <div className="max-w-3xl mx-auto text-center relative">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Transform Your Practice?
          </h2>
          <p className="text-lg text-white/70 mb-8">
            Join leading immigration consultants and law firms already using NAVISA Enterprise
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => navigate('/enterprise/signup')}
              className="bg-white hover:bg-white/90 text-black px-8 py-6 text-lg"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline"
              onClick={() => navigate('/enterprise/demo')}
              className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg"
            >
              Request Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Enterprise;