import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

interface PageHeaderProps {
  title: string;
  subtitle: string;
  showCta?: boolean;
  ctaText?: string;
  ctaLink?: string;
}

const PageHeader = ({ 
  title, 
  subtitle, 
  showCta = true,
  ctaText = "Get Started Today",
  ctaLink = "/eligibility"
}: PageHeaderProps) => {
  const navigate = useNavigate();
  
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-background/95"></div>
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold text-white mb-6">
            {title}
          </h1>
          <p className="text-xl text-white/80 mb-8">
            {subtitle}
          </p>
          {showCta && (
            <Button 
              onClick={() => navigate(ctaLink)}
              className="bg-white hover:bg-white/90 text-black px-8 py-6 text-lg"
            >
              {ctaText}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHeader;