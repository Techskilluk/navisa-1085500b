import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
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
          {/* Skilled Worker Visa */}
          <div className="bg-accent/5 rounded-xl p-8 space-y-4">
            <h3 className="text-2xl font-bold text-white">Skilled Worker Visa</h3>
            <p className="text-white/60">For professionals with job offers from UK employers. Work and live in the UK with a pathway to settlement.</p>
            <Button variant="outline" className="w-full" onClick={() => navigate("/eligibility")}>
              Check Eligibility
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Global Talent Visa */}
          <div className="bg-accent/5 rounded-xl p-8 space-y-4">
            <h3 className="text-2xl font-bold text-white">Global Talent Visa</h3>
            <p className="text-white/60">For leaders or promising talents in academia, research, digital technology, or arts and culture.</p>
            <Button variant="outline" className="w-full" onClick={() => navigate("/eligibility")}>
              Check Eligibility
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Start-up Visa */}
          <div className="bg-accent/5 rounded-xl p-8 space-y-4">
            <h3 className="text-2xl font-bold text-white">Start-up Visa</h3>
            <p className="text-white/60">For entrepreneurs looking to establish an innovative business in the UK for the first time.</p>
            <Button variant="outline" className="w-full" onClick={() => navigate("/eligibility")}>
              Check Eligibility
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Innovator Visa */}
          <div className="bg-accent/5 rounded-xl p-8 space-y-4">
            <h3 className="text-2xl font-bold text-white">Innovator Visa</h3>
            <p className="text-white/60">For experienced business people seeking to establish a innovative business in the UK.</p>
            <Button variant="outline" className="w-full" onClick={() => navigate("/eligibility")}>
              Check Eligibility
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* High Potential Individual */}
          <div className="bg-accent/5 rounded-xl p-8 space-y-4">
            <h3 className="text-2xl font-bold text-white">High Potential Individual</h3>
            <p className="text-white/60">For graduates from top global universities looking to work or find work in the UK.</p>
            <Button variant="outline" className="w-full" onClick={() => navigate("/eligibility")}>
              Check Eligibility
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Scale-up Visa */}
          <div className="bg-accent/5 rounded-xl p-8 space-y-4">
            <h3 className="text-2xl font-bold text-white">Scale-up Visa</h3>
            <p className="text-white/60">For talented individuals with a job offer from an approved scale-up company.</p>
            <Button variant="outline" className="w-full" onClick={() => navigate("/eligibility")}>
              Check Eligibility
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