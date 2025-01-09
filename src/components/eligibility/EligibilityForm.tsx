import { useState } from "react";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import PersonalInfo from "./steps/PersonalInfo";
import Education from "./steps/Education";
import Experience from "./steps/Experience";
import Skills from "./steps/Skills";
import Achievements from "./steps/Achievements";
import PreferredCountries from "./steps/PreferredCountries";
import ImmigrationInfo from "./steps/ImmigrationInfo";
import Summary from "./steps/Summary";
import FormNavigation from "./FormNavigation";
import AssessmentResults from "./AssessmentResults";
import FormSubmissionHandler from "./form-handlers/FormSubmissionHandler";

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
  immigrationInfo: {
    currentStatus: string;
    otherStatusSpecification?: string;
    hasValidVisa: string;
    visaType?: string;
    visaNumber?: string;
    issueDate?: Date;
    expirationDate?: Date;
    relocationPurpose: string;
    otherPurposeSpecification?: string;
    stayDuration: number;
    proposedEntryDate: Date;
  };
};

const EligibilityForm = ({ currentStep, onNext, onPrevious }: EligibilityFormProps) => {
  const [formData, setFormData] = useState<Partial<EligibilityData>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const form = useForm<EligibilityData>();

  const renderStep = () => {
    if (isSubmitted) {
      return <AssessmentResults data={formData as EligibilityData} />;
    }

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
        return <ImmigrationInfo form={form} />;
      case 7:
        return <PreferredCountries form={form} />;
      case 8:
        return (
          <>
            <Summary data={formData} />
            <FormSubmissionHandler 
              formData={formData} 
              onSuccess={() => setIsSubmitted(true)} 
            />
          </>
        );
      default:
        return null;
    }
  };

  const handleSubmit = (data: EligibilityData) => {
    setFormData(prev => ({ ...prev, ...data }));
    if (currentStep < 8) {
      onNext();
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        {renderStep()}
        {!isSubmitted && currentStep < 8 && (
          <FormNavigation 
            currentStep={currentStep}
            totalSteps={8}
            onNext={onNext}
            onPrevious={onPrevious}
          />
        )}
      </form>
    </Form>
  );
};

export default EligibilityForm;