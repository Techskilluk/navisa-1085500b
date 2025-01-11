import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Calendar, Star, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface SelectedVisaDetailsProps {
  visa: {
    title: string;
    description: string;
    rating: number;
    processingTime: string;
  };
}

const SelectedVisaDetails = ({ visa }: SelectedVisaDetailsProps) => {
  const navigate = useNavigate();

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
            onClick={() => navigate("/eligibility")}
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