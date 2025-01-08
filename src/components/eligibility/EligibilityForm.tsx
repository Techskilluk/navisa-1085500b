import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { checkEligibility } from "@/utils/eligibilityChecker";
import PersonalInfo from "./steps/PersonalInfo";
import Education from "./steps/Education";
import Experience from "./steps/Experience";
import Skills from "./steps/Skills";
import Achievements from "./steps/Achievements";
import PreferredCountries from "./steps/PreferredCountries";
import Summary from "./steps/Summary";

interface EligibilityFormProps {
  currentStep: number;
  onNext: () => void;
  onPrevious: () => void;
}

export type EligibilityData = {
  personalInfo: {
    fullName: string;
    email: string;
    nationality: string;
    currentLocation: string;
  };
  education: {
    degree: string;
    field: string;
    institution: string;
    graduationYear: string;
  };
  experience: {
    yearsOfExperience: string;
    currentRole: string;
    industry: string;
  };
  skills: string[];
  achievements: {
    type: string;
    description: string;
  }[];
  preferredCountries: string[];
};

const EligibilityForm = ({ currentStep, onNext, onPrevious }: EligibilityFormProps) => {
  const [formData, setFormData] = useState<Partial<EligibilityData>>({});
  const [isVerifying, setIsVerifying] = useState(false);
  const form = useForm<EligibilityData>();
  const { toast } = useToast();

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <PersonalInfo form={form} />;
      case 2:
        return <Education form={form} />;
      case 3:
        return <Experience form={form} />;
      case 4:
        return  />;
      case 5:
        return <Achievements form={form} />;
      case 6:
        return <PreferredCountries form={form} />;
      case 7:
        return <Summary data={formData} />;
      default:
        return null;
    }
  };

  const handleSubmit = async (data: EligibilityData) => {
    setFormData(prev => ({ ...prev, ...data }));
    
    if (currentStep === totalSteps) {
      setIsVerifying(true);
      console.log("Starting eligibility verification for:", data);

      try {
        // Check eligibility based on business rules
        const eligibilityResult = checkEligibility(data);
        console.log("Eligibility check result:", eligibilityResult);

        // Get current user
        const { data: { user } } = await supabase.auth.getUser();
        
        if (!user) {
          throw new Error("User not authenticated");
        }

        // Log verification attempt
        const { error: logError } = await supabase
          .from('eligibility_verifications')
          .insert({
            user_id: user.id,
            verification_data: data,
            status: eligibilityResult.isEligible ? 'ELIGIBLE' : 'NOT_ELIGIBLE'
          });

        if (logError) {
          console.error("Error logging verification:", logError);
          throw new Error("Failed to log verification attempt");
        }

        // Show result to user
        if (eligibilityResult.isEligible) {
          toast({
            title: "Eligibility Confirmed",
            description: "Congratulations! You meet all eligibility criteria.",
          });
          // Here you could redirect to next step or show additional information
        } else {
          toast({
            title: "Not Eligible",
            description: eligibilityResult.reason,
            variant: "destructive",
          });
        }
      } catch (error) {
        console.error("Verification error:", error);
        toast({
          title: "Verification Error",
          description: "An error occurred during verification. Please try again.",
          variant: "destructive",
        });
      } finally {
        setIsVerifying(false);
      }
    } else {
      onNext();
    }
  };

  const totalSteps = 7;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        {renderStep()}
        
        <div className="flex justify-between pt-6">
          {currentStep > 1 && (
            <Button 
              type="button" 
              variant="outline" 
              onClick={onPrevious}
              disabled={isVerifying}
            >
              Previous
            </Button>
          )}
          <Button 
            type="submit" 
            className="ml-auto"
            disabled={isVerifying}
          >
            {isVerifying ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Verifying
              </>
            ) : (
              currentStep === totalSteps ? "Submit" : "Next"
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default EligibilityForm;