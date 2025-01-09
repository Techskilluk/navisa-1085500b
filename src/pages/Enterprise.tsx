import { Button } from "@/components/ui/button";
import { ArrowRight, Building, Globe, Users, LineChart, Briefcase } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PageHeader from "@/components/PageHeader";

const Enterprise = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <PageHeader 
        title="Transform Your Immigration Practice"
        subtitle="Streamline operations, enhance client experience, and scale your business with NAVISA's enterprise solutions"
        ctaText="Start Free Trial"
        ctaLink="/enterprise/signup"
      />

      {/* Features Grid */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass-effect p-8 rounded-xl hover-lift">
              <Building className="w-10 h-10 text-white/80 mb-6" />
              <h3 className="text-xl font-semibold mb-3 text-white">Streamlined Operations</h3>
              <p className="text-white/70">
                Automate client onboarding, document collection, and case management
              </p>
            </div>
            <div className="glass-effect p-8 rounded-xl hover-lift">
              <Globe className="w-10 h-10 text-white/80 mb-6" />
              <h3 className="text-xl font-semibold mb-3 text-white">Global Reach</h3>
              <p className="text-white/70">
                Connect with clients worldwide through our secure platform
              </p>
            </div>
            <div className="glass-effect p-8 rounded-xl hover-lift">
              <Users className="w-10 h-10 text-white/80 mb-6" />
              <h3 className="text-xl font-semibold mb-3 text-white">Team Collaboration</h3>
              <p className="text-white/70">
                Enable seamless communication between team members and clients
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-background/95"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-white">How It Works</h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Get started with NAVISA Enterprise in three simple steps
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-effect p-8 rounded-xl text-center hover-lift">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Setup Your Account</h3>
              <p className="text-white/70">Create your enterprise profile and customize settings</p>
            </div>
            <div className="glass-effect p-8 rounded-xl text-center hover-lift">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Invite Your Team</h3>
              <p className="text-white/70">Add team members and assign roles</p>
            </div>
            <div className="glass-effect p-8 rounded-xl text-center hover-lift">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Start Managing Cases</h3>
              <p className="text-white/70">Begin onboarding clients and managing cases</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-white">Why Choose NAVISA Enterprise</h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Designed specifically for immigration consultants and law firms
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-effect p-8 rounded-xl hover-lift">
              <LineChart className="w-10 h-10 text-white/80 mb-6" />
              <h3 className="text-xl font-semibold mb-3 text-white">Data-Driven Insights</h3>
              <p className="text-white/70">
                Access detailed analytics and reports to optimize your operations
              </p>
            </div>
            <div className="glass-effect p-8 rounded-xl hover-lift">
              <Briefcase className="w-10 h-10 text-white/80 mb-6" />
              <h3 className="text-xl font-semibold mb-3 text-white">Resource Library</h3>
              <p className="text-white/70">
                Access templates, guides, and best practices
              </p>
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