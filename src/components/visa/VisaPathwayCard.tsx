import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface VisaRequirement {
  label: string;
  value: string;
}

interface VisaPathwayCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  countryCode: string;
  requirements: VisaRequirement[];
  processingTime: string;
  validityPeriod: string;
  minimumThreshold?: string;
  officialDocsUrl: string;
}

const VisaPathwayCard = ({
  title,
  description,
  icon: Icon,
  countryCode,
  requirements,
  processingTime,
  validityPeriod,
  minimumThreshold,
  officialDocsUrl,
}: VisaPathwayCardProps) => {
  const navigate = useNavigate();

  return (
    <Card className="bg-accent/5 hover:bg-accent/10 transition-colors border-accent/20">
      <CardHeader>
        <div className="flex items-center gap-4 mb-4">
          <img
            src={`https://flagcdn.com/${countryCode.toLowerCase()}.svg`}
            alt={`${title} flag`}
            className="w-12 h-8 object-cover rounded shadow-lg"
          />
          <Icon className="h-8 w-8 text-primary" />
        </div>
        <CardTitle className="text-2xl font-bold text-white">{title}</CardTitle>
        <CardDescription className="text-white/60">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-white/80">Key Requirements:</h4>
          <ul className="list-disc list-inside space-y-1 text-sm text-white/60">
            {requirements.map((req, index) => (
              <li key={index}>
                <span className="font-medium">{req.label}:</span> {req.value}
              </li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="font-semibold text-white/80">Processing Time</p>
            <p className="text-white/60">{processingTime}</p>
          </div>
          <div>
            <p className="font-semibold text-white/80">Validity Period</p>
            <p className="text-white/60">{validityPeriod}</p>
          </div>
        </div>
        {minimumThreshold && (
          <div className="bg-accent/10 p-3 rounded-lg">
            <p className="font-semibold text-white/80">Minimum Threshold</p>
            <p className="text-white/60">{minimumThreshold}</p>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex flex-col space-y-3">
        <Button
          variant="outline"
          className="w-full"
          onClick={() => navigate("/eligibility")}
        >
          Check Eligibility
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
        <a
          href={officialDocsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-white/60 hover:text-white transition-colors underline"
        >
          Official Documentation →
        </a>
      </CardFooter>
    </Card>
  );
};

export default VisaPathwayCard;