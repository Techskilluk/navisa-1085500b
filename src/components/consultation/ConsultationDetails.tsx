import { Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const benefits = [
  "One-on-one session tailored just for you",
  "Answers to all your visa-related queries from an expert",
  "Understand the details of your chosen visa pathway",
  "Receive actionable advice to increase your chances of success"
];

const ConsultationDetails = () => {
  return (
    <Card className="bg-card shadow-lg">
      <CardHeader className="border-b border-border/10">
        <CardTitle className="text-xl font-bold">
          Talk to an expert
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-2">
            ₦20,000/ session
          </h3>
        </div>

        <div className="space-y-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="flex-shrink-0 mt-1">
                <Check className="h-5 w-5 text-[#28A745]" />
              </div>
              <span className="text-muted-foreground">{benefit}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ConsultationDetails;