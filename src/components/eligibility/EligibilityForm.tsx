import { useState } from "react";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
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
import { toast } from "sonner";

const formSchema = z.object({
  personalInfo: z.object({
    fullName: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    nationality: z.string().min(2, "Please select your nationality"),
    currentLocation: z.string().min(2, "Please enter your current location"),
  }),
  education: z.object({
    degree: z.string().min(2, "Please select your degree"),
    field: z.string().min(2, "Please enter your field of study"),
    institution: z.string().min(2, "Please enter your institution"),
    graduationYear: z.string().min(4, "Please enter graduation year"),
  }),
  experience: z.object({
    yearsOfExperience: z.string().min(1, "Please select years of experience"),
    currentRole: z.string().min(2, "Please enter your current role"),
    industry: z.string().min(2, "Please enter your industry"),
  }),
  skills: z.array(z.string()).min(1, "Please add at least one skill"),
  achievements: z.array(z.object({
    type: z.string().min(2, "Please enter achievement type"),
    description: z.string().min(10, "Please provide more details"),
  })),
  preferredCountries: z.array(z.string()).min(1, "Please select at least one country"),
  immigrationInfo: z.object({
    currentStatus: z.string().min(1, "Please select your current status"),
    otherStatusSpecification: z.string().optional(),
    hasValidVisa: z.string().min(1, "Please indicate your visa status"),
    visaType: z.string().optional(),
    visaNumber: z.string().optional(),
    issueDate: z.date().optional(),
    expirationDate: z.date().optional(),
    relocationPurpose: z.string().min(1, "Please select your purpose"),
    otherPurposeSpecification: z.string().optional(),
    stayDuration: z.number().min(1, "Please select intended stay duration"),
    proposedEntryDate: z.date(),
  }),
});

export type EligibilityData = z.infer<typeof formSchema>;

interface EligibilityFormProps {
  currentStep: number;
  onNext: () => void;
  onPrevious: () => void;
}

const EligibilityForm = ({ currentStep, onNext, onPrevious }: EligibilityFormProps) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const form = useForm<EligibilityData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      skills: [],
      achievements: [],
      preferredCountries: [],
    },
  });

  const renderStep = () => {
    if (isSubmitted) {
      return <AssessmentResults data={form.getValues()} />;
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
            <Summary data={form.getValues()} />
            <FormSubmissionHandler 
              formData={form.getValues()} 
              onSuccess={() => {
                setIsSubmitted(true);
                toast.success("Assessment submitted successfully!");
              }} 
            />
          </>
        );
      default:
        return null;
    }
  };

  const onSubmit = async (data: EligibilityData) => {
    console.log("Form submitted:", data);
    if (currentStep < 8) {
      onNext();
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {renderStep()}
        {!isSubmitted && currentStep < 8 && (
          <FormNavigation 
            currentStep={currentStep}
            totalSteps={8}
            onNext={onNext}
            onPrevious={onPrevious}
            isSubmitting={form.formState.isSubmitting}
          />
        )}
      </form>
    </Form>
  );
};

export default EligibilityForm;