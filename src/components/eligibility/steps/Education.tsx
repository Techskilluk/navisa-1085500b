import { UseFormReturn } from "react-hook-form";
import { EligibilityData } from "../EligibilityForm";
import FormSection from "../form-fields/FormSection";
import EducationFields from "./education/EducationFields";

interface EducationProps {
  form: UseFormReturn<EligibilityData>;
}

const Education = ({ form }: EducationProps) => {
  return (
    <FormSection
      title="Education"
      description="Tell us about your educational background."
    >
      <div className="space-y-4">
        <EducationFields form={form} />
      </div>
    </FormSection>
  );
};

export default Education;