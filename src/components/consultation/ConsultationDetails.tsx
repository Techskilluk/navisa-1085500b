import { Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const benefits = [
  "Personalized visa pathway assessment",
  "Document checklist review",
  "Eligibility criteria explanation",
  "Step-by-step application guidance"
];

const ConsultationDetails = () => {
  return (
    <Card className="bg-card shadow-lg">
      <CardHeader className="border-b border-border/10">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-bold">
            Expert Consultation
          </CardTitle>
          <Badge variant="secondary">45 minutes</Badge>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-2">
            ₦20,000
            <span className="text-sm text-muted-foreground ml-2">per session</span>
          </h3>
          <p className="text-muted-foreground text-sm">
            Book a one-on-one session with our visa experts
          </p>
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