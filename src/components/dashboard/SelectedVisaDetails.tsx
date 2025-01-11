import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Calendar, Star, Clock, CheckCircle } from "lucide-react";

interface VisaRequirement {
  label: string;
  value: string;
}

interface SelectedVisaDetailsProps {
  visa: {
    id: string;
    title: string;
    description: string;
    rating: number;
    processingTime: string;
    requirements: VisaRequirement[];
  };
  onContinue: () => void;
}

const SelectedVisaDetails = ({ visa, onContinue }: SelectedVisaDetailsProps) => {
  return (
    <Card className="bg-card/50 backdrop-blur-sm border-accent/20">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <span>Selected Visa Pathway</span>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm">{visa.rating}</span>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-2">{visa.title}</h3>
          <p className="text-muted-foreground">{visa.description}</p>
        </div>

        <div className="space-y-4">
          <h4 className="font-medium">Key Requirements</h4>
          <div className="grid gap-3">
            {visa.requirements.map((req, index) => (
              <div key={index} className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-primary mt-1" />
                <div>
                  <span className="font-medium">{req.label}:</span>
                  <span className="text-muted-foreground ml-1">{req.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm">Processing time: {visa.processingTime}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm">Next available slot: 2-3 business days</span>
          </div>
        </div>

        <div className="bg-accent/10 p-4 rounded-lg">
          <p className="text-sm font-medium mb-4">
            "You're on the right path! Let's make your visa application journey smooth and successful."
          </p>
          <Button
            onClick={onContinue}
            className="w-full sm:w-auto"
          >
            Continue Application <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default SelectedVisaDetails;