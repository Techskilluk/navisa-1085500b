import { Check, Clock, Globe, CalendarDays } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const benefits = [
  "One-on-one consultation with visa experts",
  "Personalized immigration strategy",
  "Document checklist review",
  "Eligibility assessment",
  "Application guidance"
];

const ConsultationDetails = () => {
  return (
    <Card className="bg-card/50 backdrop-blur-sm border-accent/20">
      <CardHeader className="border-b border-border/10">
        <CardTitle className="text-xl font-bold text-white">
          Consultation Details
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-white mb-2">
            ₦20,000 / session
          </h3>
          <p className="text-muted-foreground">
            60-minute comprehensive consultation
          </p>
        </div>

        <div className="space-y-4 mb-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="flex-shrink-0">
                <Check className="h-5 w-5 text-[#28A745]" />
              </div>
              <span className="text-muted-foreground">{benefit}</span>
            </div>
          ))}
        </div>

        <div className="space-y-4 border-t border-border/10 pt-6">
          <div className="flex items-center gap-3 text-muted-foreground">
            <Clock className="h-5 w-5" />
            <span>60 minutes</span>
          </div>
          <div className="flex items-center gap-3 text-muted-foreground">
            <Globe className="h-5 w-5" />
            <span>Online consultation</span>
          </div>
          <div className="flex items-center gap-3 text-muted-foreground">
            <CalendarDays className="h-5 w-5" />
            <span>Flexible scheduling</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ConsultationDetails;