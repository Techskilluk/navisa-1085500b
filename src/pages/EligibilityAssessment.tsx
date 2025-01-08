import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import EligibilityForm from "@/components/eligibility/EligibilityForm";
import FormStepIndicator from "@/components/eligibility/FormStepIndicator";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const EligibilityAssessment = () => {
  const [step, setStep] = useState(1);
  const totalSteps = 7;
  const navigate = useNavigate();

  const handleNext = () => {
    setStep(prev => Math.min(prev + 1, totalSteps));
  };

  const handlePrevious = () => {
    setStep(prev => Math.max(prev - 1, 1));
  };

  return (
    <div className="min-h-screen bg-background p-6">
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
  );
};

export default EligibilityAssessment;