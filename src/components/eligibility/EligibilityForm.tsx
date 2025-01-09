import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";
import { useAuth } from "@/contexts/AuthContext";
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
import { supabase } from "@/integrations/supabase/client";
import AuthPromptModal from "./AuthPromptModal";

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
    stayDuration: number;
    proposedEntryDate: Date;
  };
};

const EligibilityForm = ({ currentStep, onNext, onPrevious }: EligibilityFormProps) => {
  const [formData, setFormData] = useState<Partial<EligibilityData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showAuthPrompt, setShowAuthPrompt] = useState(false);
  const form = useForm<EligibilityData>();
  const { toast } = useToast();
  const { user } = useAuth();

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
        return <Summary data={formData} />;
      default:
        return null;
    }
  };

  const formatDateForJson = (date: Date | undefined) => {
    if (!date) return null;
    return date.toISOString();
  };

  const prepareVerificationData = (data: EligibilityData) => {
    // Create a deep copy of the data
    const formattedData = JSON.parse(JSON.stringify(data));
    
    // Format dates for JSON compatibility
    if (formattedData.immigrationInfo) {
      formattedData.immigrationInfo.issueDate = formatDateForJson(data.immigrationInfo.issueDate);
      formattedData.immigrationInfo.expirationDate = formatDateForJson(data.immigrationInfo.expirationDate);
      formattedData.immigrationInfo.proposedEntryDate = formatDateForJson(data.immigrationInfo.proposedEntryDate);
    }
    
    return formattedData;
  };

  const handleSubmit = async (data: EligibilityData) => {
    setFormData(prev => ({ ...prev, ...data }));
    
    if (currentStep === 8) {
      setIsSubmitting(true);
      try {
        const verificationData = {
          verification_data: prepareVerificationData(data),
          status: 'pending',
          is_guest: !user,
          ...(user && { user_id: user.id })
        };

        const { error } = await supabase
          .from('eligibility_verifications')
          .insert(verificationData);

        if (error) throw error;

        if (!user) {
          setShowAuthPrompt(true);
        }

        toast({
          title: "Assessment Submitted",
          description: "We'll analyze your eligibility and get back to you soon.",
        });

        setIsSubmitted(true);
      } catch (error) {
        console.error('Error submitting eligibility assessment:', error);
        toast({
          title: "Submission Error",
          description: "There was an error submitting your assessment. Please try again.",
          variant: "destructive",
        });
      } finally {
        setIsSubmitting(false);
      }
    } else {
      onNext();
    }
  };

  const handleContinueAsGuest = () => {
    setShowAuthPrompt(false);
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          {renderStep()}
          {!isSubmitted && (
            <FormNavigation 
              currentStep={currentStep}
              totalSteps={8}
              onNext={onNext}
              onPrevious={onPrevious}
              isSubmitting={isSubmitting}
            />
          )}
        </form>
      </Form>

      <AuthPromptModal
        isOpen={showAuthPrompt}
        onClose={() => setShowAuthPrompt(false)}
        onContinueAsGuest={handleContinueAsGuest}
      />
    </>
  );
};

export default EligibilityForm;