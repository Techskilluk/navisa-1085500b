import { Card } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface Benefit {
  text: string;
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  shortDesc: string;
  benefits: string[];
}

const FeatureCard = ({ icon, title, shortDesc, benefits }: FeatureCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card 
      className={`group transition-all duration-300 cursor-pointer 
        ${isExpanded 
          ? 'bg-gradient-to-br from-white/10 to-white/5 shadow-lg shadow-white/5' 
          : 'hover:bg-white/5 hover:shadow-md hover:shadow-white/5'
        } border-white/10 backdrop-blur-sm`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="p-8">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center transform transition-all duration-300 group-hover:scale-110">
              {icon}
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-white mb-2 transition-colors group-hover:text-white/90">
                {title}
              </h3>
              <p className="text-white/70 transition-colors group-hover:text-white/80">
                {shortDesc}
              </p>
            </div>
          </div>
          <div className="transition-transform duration-300 transform">
            {isExpanded ? (
              <ChevronUp className="w-6 h-6 text-white/60 group-hover:text-white/80" />
            ) : (
              <ChevronDown className="w-6 h-6 text-white/60 group-hover:text-white/80" />
            )}
          </div>
        </div>
        
        <div className={`grid transition-all duration-300 ease-in-out ${
          isExpanded ? 'grid-rows-[1fr] mt-6 opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}>
          <div className="overflow-hidden">
            <ul className="space-y-3">
              {benefits.map((benefit, idx) => (
                <li 
                  key={idx} 
                  className="flex items-center text-white/60 group-hover:text-white/70 transition-all duration-300"
                  style={{ 
                    transform: isExpanded ? 'translateY(0)' : 'translateY(10px)',
                    opacity: isExpanded ? 1 : 0,
                    transitionDelay: `${idx * 50}ms`
                  }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-white/40 mr-2 group-hover:bg-white/50 transition-colors"></div>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default FeatureCard;