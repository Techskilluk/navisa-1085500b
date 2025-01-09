import { Button } from "@/components/ui/button";
import { ArrowRight, Building } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

const HeroContent = () => {
  const navigate = useNavigate();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleEligibilityCheck = () => {
    navigate("/eligibility");
  };

  const stats = [
    { number: "150+", label: "Success Stories" },
    { number: "35+", label: "Countries" },
    { number: "24/7", label: "Expert Support" },
  ];

  return (
    <div className="max-w-xl space-y-12" ref={ref}>
      <div className="space-y-6">
        <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-[1.1] tracking-tight font-sans">
          Transform Your Career Across Borders
        </h1>
        
        <p className="text-xl text-gray-600 dark:text-white/80 leading-relaxed">
          Navigate global opportunities with confidence. NAVISA connects ambitious professionals with international employers, simplifying migration pathways.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button 
          className="w-full sm:w-auto px-8 py-7 text-lg bg-gray-900 dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-white/90 flex items-center gap-2 transition-all duration-300"
          onClick={handleEligibilityCheck}
        >
          Begin Your Global Journey
          <ArrowRight className="w-5 h-5" />
        </Button>
        
        <Link to="/enterprise" className="w-full sm:w-auto">
          <Button 
            variant="outline"
            className="w-full sm:w-auto px-8 py-7 text-lg border-gray-900 dark:border-white text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 flex items-center gap-2 transition-all duration-300"
          >
            For Businesses
            <Building className="w-5 h-5" />
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200 dark:border-white/10">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={cn(
              "transform transition-all duration-700",
              inView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
              `delay-${index * 200}`
            )}
          >
            <div className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white font-sans">
              {stat.number}
            </div>
            <div className="text-sm lg:text-base text-gray-600 dark:text-white/60 mt-2 font-sans">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroContent;