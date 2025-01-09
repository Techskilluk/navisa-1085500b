import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import EligibilityForm from "@/components/eligibility/EligibilityForm";
import FormStepIndicator from "@/components/eligibility/FormStepIndicator";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/components/ui/use-toast";
import PageHeader from "@/components/PageHeader";

const EligibilityAssessment = () => {
  const [step, setStep] = useState(1);
  const totalSteps = 8;
  const navigate = useNavigate();
  const { user } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "Please sign in to submit an eligibility assessment.",
        variant: "destructive",
      });
      navigate("/signin", { state: { returnUrl: "/eligibility" } });
    }
  }, [user, navigate, toast]);

  const handleNext = () => {
    setStep(prev => Math.min(prev + 1, totalSteps));
  };

  const handlePrevious = () => {
    setStep(prev => Math.max(prev - 1, 1));
  };

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <PageHeader 
        title="Check Your Eligibility"
        subtitle="Answer a few questions to find the best migration pathways for you"
        showCta={false}
      />
      
      <div className="p-6">
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="space-y-2">
            <Button 
              variant="ghost" 
              onClick={() => navigate(-1)}
              className="mb-4"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
            <FormStepIndicator currentStep={step} totalSteps={totalSteps} />
          </div>
          
          <Card className="p-6">
            <EligibilityForm 
              currentStep={step} 
              onNext={handleNext}
              onPrevious={handlePrevious}
            />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default EligibilityAssessment;