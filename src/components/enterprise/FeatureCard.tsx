import { Card } from "@/components/ui/card";
import { ChevronDown, ChevronUp, LucideIcon } from "lucide-react";
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
      className={`glass-effect transition-all duration-300 ${
        isExpanded 
          ? 'bg-gradient-to-br from-white/10 to-white/5' 
          : 'hover:bg-white/5'
      }`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="p-8 cursor-pointer">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center">
              {icon}
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-white mb-2">
                {title}
              </h3>
              <p className="text-white/70">
                {shortDesc}
              </p>
            </div>
          </div>
          {isExpanded ? (
            <ChevronUp className="w-6 h-6 text-white/60" />
          ) : (
            <ChevronDown className="w-6 h-6 text-white/60" />
          )}
        </div>
        
        <div className={`grid grid-rows-[0fr] transition-all duration-300 ${
          isExpanded ? 'grid-rows-[1fr] mt-6' : ''
        }`}>
          <div className="overflow-hidden">
            <ul className="space-y-3">
              {benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-center text-white/60">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/40 mr-2"></div>
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