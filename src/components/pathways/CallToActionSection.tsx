import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CallToActionSection = () => {
  const navigate = useNavigate();
  
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <h2 className="text-4xl font-bold text-white mb-6">
          Ready to Start Your Global Journey?
        </h2>
        <p className="text-xl text-white/80 mb-12">
          Take our eligibility assessment to find the best options for your profile
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate("/eligibility")}
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white hover:bg-white/90 text-black h-12 px-8"
          >
            Start Assessment
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
          <button
            onClick={() => navigate("/how-it-works")}
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-white text-white hover:bg-white/10 h-12 px-8"
          >
            Learn More
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;