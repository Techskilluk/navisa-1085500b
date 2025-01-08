import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";
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
        return <Skills form={form} />;
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
      // Final submission
      console.log("Final form data:", formData);
      toast({
        title: "Assessment Submitted",
        description: "We'll analyze your eligibility and get back to you soon.",
      });
      // Here you would typically send the data to your backend
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
            <Button type="button" variant="outline" onClick={onPrevious}>
              Previous
            </Button>
          )}
          <Button type="submit" className="ml-auto">
            {currentStep === totalSteps ? "Submit" : "Next"}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default EligibilityForm;