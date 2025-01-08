import { Progress } from "@/components/ui/progress";

interface FormStepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

const FormStepIndicator = ({ currentStep, totalSteps }: FormStepIndicatorProps) => {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="space-y-2">
      <Progress value={progress} className="w-full" />
      <p className="text-sm text-muted-foreground">Step {currentStep} of {totalSteps}</p>
    </div>
  );
};

export default FormStepIndicator;