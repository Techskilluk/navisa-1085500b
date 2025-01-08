import { Button } from "@/components/ui/button";

interface FormNavigationProps {
  currentStep: number;
  totalSteps: number;
  onNext: () => void;
  onPrevious: () => void;
  isSubmitting?: boolean;
}

const FormNavigation = ({ 
  currentStep, 
  totalSteps, 
  onNext, 
  onPrevious,
  isSubmitting = false 
}: FormNavigationProps) => {
  return (
    <div className="flex justify-between pt-6">
      {currentStep > 1 && (
        <Button type="button" variant="outline" onClick={onPrevious}>
          Previous
        </Button>
      )}
      <Button 
        type="submit" 
        className="ml-auto"
        disabled={isSubmitting}
      >
        {currentStep === totalSteps ? "Submit" : "Next"}
      </Button>
    </div>
  );
};

export default FormNavigation;