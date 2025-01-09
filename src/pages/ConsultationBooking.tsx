import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CalendarDays, Check, Clock, Globe } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Cal from "@calcom/embed-react";
import { useToast } from "@/hooks/use-toast";

const ConsultationBooking = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const benefits = [
    "One-on-one consultation with visa experts",
    "Personalized immigration strategy",
    "Document checklist review",
    "Eligibility assessment",
    "Application guidance"
  ];

  return (
    <div className="min-h-screen bg-background py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Calendar */}
          <div className="order-2 lg:order-1">
            <Card className="bg-white shadow-lg">
              <CardHeader className="border-b border-gray-100">
                <CardTitle className="text-[#002B5C] text-xl font-bold">
                  Schedule Your Consultation
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="w-full">
                  <Cal 
                    calLink="techskilluk/techskilluk-consultation"
                    style={{height: "100%", width: "100%", overflow: "hidden"}}
                    config={{
                      layout: 'month_view',
                      hideEventTypeDetails: "false",
                      hideLandingPageDetails: "false"
                    }}
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Details */}
          <div className="order-1 lg:order-2">
            <Card className="bg-white shadow-lg">
              <CardHeader className="border-b border-gray-100">
                <CardTitle className="text-[#002B5C] text-xl font-bold">
                  Consultation Details
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-[#002B5C] mb-2">
                    ₦20,000 / session
                  </h3>
                  <p className="text-gray-600">
                    60-minute comprehensive consultation
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="flex-shrink-0">
                        <Check className="h-5 w-5 text-[#28A745]" />
                      </div>
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-600">
                    <Clock className="h-5 w-5" />
                    <span>60 minutes</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Globe className="h-5 w-5" />
                    <span>Online consultation</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <CalendarDays className="h-5 w-5" />
                    <span>Flexible scheduling</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultationBooking;