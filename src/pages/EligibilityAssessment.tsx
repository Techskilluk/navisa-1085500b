import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card } from "@/components/ui/card";
import EligibilityForm from "@/components/eligibility/EligibilityForm";
import { useNavigate } from "react-router-dom";

const EligibilityAssessment = () => {
  const [step, setStep] = useState(1);
  const totalSteps = 7;
  const progress = (step / totalSteps) * 100;
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="space-y-2">
          <Button 
            variant="ghost" 
            onClick={() => navigate(-1)}
            className="mb-4"
          >
            ← Back
          </Button>
          <Progress value={progress} className="w-full" />
          <p className="text-sm text-muted">Step {step} of {totalSteps}</p>
        </div>
        
        <Card className="p-6">
          <EligibilityForm 
            currentStep={step} 
            onNext={() => setStep(prev => Math.min(prev + 1, totalSteps))}
            onPrevious={() => setStep(prev => Math.max(prev - 1, 1))}
          />
        </Card>
      </div>
    </div>
  );
};

export default EligibilityAssessment;