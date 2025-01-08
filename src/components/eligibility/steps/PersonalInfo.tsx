import { UseFormReturn } from "react-hook-form";
import { EligibilityData } from "../EligibilityForm";
import FormSection from "../form-fields/FormSection";
import PersonalInfoFields from "./personal-info/PersonalInfoFields";

interface PersonalInfoProps {
  form: UseFormReturn<EligibilityData>;
}

const PersonalInfo = ({ form }: PersonalInfoProps) => {
  return (
    <FormSection
      title="Personal Information"
      description="Please provide your basic information to begin the assessment."
    >
      <div className="space-y-4">
        <PersonalInfoFields form={form} />
      </div>
    </FormSection>
  );
};

export default PersonalInfo;