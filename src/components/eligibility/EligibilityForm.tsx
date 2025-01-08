import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
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

  const handleSubmit = (data: EligibilityData) => {
    setFormData(prev => ({ ...prev, ...data }));
    onNext();
  };

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
            {currentStep === 7 ? "Submit" : "Next"}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default EligibilityForm;