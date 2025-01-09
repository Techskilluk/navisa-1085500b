import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Flag, Landmark } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Pathways = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <PageHeader 
        title="Get to know the visa pathways"
        subtitle="Discover the best migration pathways for your global career goals"
      />
      
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Global Talent Visa */}
          <div className="bg-accent/5 rounded-xl p-8 space-y-4 hover:bg-accent/10 transition-colors">
            <div className="flex items-center gap-3 mb-2">
              <Globe className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-bold text-white">Global Talent Visa (UK)</h3>
            </div>
            <p className="text-white/60">For highly skilled individuals in science, digital technology, engineering, arts, and humanities who want to live and work in the UK.</p>
            <Button variant="outline" className="w-full" onClick={() => navigate("/eligibility")}>
              Find out how to apply
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Express Entry */}
          <div className="bg-accent/5 rounded-xl p-8 space-y-4 hover:bg-accent/10 transition-colors">
            <div className="flex items-center gap-3 mb-2">
              <Flag className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-bold text-white">Express Entry (Canada)</h3>
            </div>
            <p className="text-white/60">The fastest pathway to Canadian permanent residency for skilled workers who want to immigrate to Canada.</p>
            <Button variant="outline" className="w-full" onClick={() => navigate("/eligibility")}>
              Find out how to apply
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* EB-1/EB-2 */}
          <div className="bg-accent/5 rounded-xl p-8 space-y-4 hover:bg-accent/10 transition-colors">
            <div className="flex items-center gap-3 mb-2">
              <Landmark className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-bold text-white">EB-1/EB-2 (USA)</h3>
            </div>
            <p className="text-white/60">For professionals with extraordinary abilities or exceptional achievements in fields like science, business, or arts who want to stay in the U.S.</p>
            <Button variant="outline" className="w-full" onClick={() => navigate("/eligibility")}>
              Find out how to apply
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* EU Blue Card */}
          <div className="bg-accent/5 rounded-xl p-8 space-y-4 hover:bg-accent/10 transition-colors">
            <div className="flex items-center gap-3 mb-2">
              <Flag className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-bold text-white">EU Blue Card</h3>
            </div>
            <p className="text-white/60">A work permit for highly qualified non-EU citizens, offering a path to permanent residency in participating EU countries.</p>
            <Button variant="outline" className="w-full" onClick={() => navigate("/eligibility")}>
              Find out how to apply
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Golden Visa */}
          <div className="bg-accent/5 rounded-xl p-8 space-y-4 hover:bg-accent/10 transition-colors">
            <div className="flex items-center gap-3 mb-2">
              <Globe className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-bold text-white">Golden Visa (UAE)</h3>
            </div>
            <p className="text-white/60">A long-term residency program designed to attract investors, entrepreneurs, skilled professionals, and exceptional talents to the UAE.</p>
            <Button variant="outline" className="w-full" onClick={() => navigate("/eligibility")}>
              Find out how to apply
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-6">
            Not Sure Which Pathway Is Right for You?
          </h2>
          <p className="text-xl text-white/80 mb-12">
            Take our eligibility assessment to find the best options for your profile
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => navigate("/eligibility")}
              className="bg-white hover:bg-white/90 text-black px-8 py-6 text-lg"
            >
              Start Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg"
              onClick={() => navigate("/how-it-works")}
            >
              Learn More
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pathways;