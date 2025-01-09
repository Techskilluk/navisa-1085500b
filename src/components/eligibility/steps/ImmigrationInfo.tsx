import { UseFormReturn } from "react-hook-form";
import { EligibilityData } from "../EligibilityForm";
import FormSection from "../form-fields/FormSection";
import CurrentStatusSection from "./immigration/CurrentStatusSection";
import VisaSection from "./immigration/VisaSection";
import RelocationSection from "./immigration/RelocationSection";

interface ImmigrationInfoProps {
  form: UseFormReturn<EligibilityData>;
}

const ImmigrationInfo = ({ form }: ImmigrationInfoProps) => {
  return (
    <FormSection
      title="Immigration Information Form"
      description="Please complete all required fields (*) regarding your current immigration status and intended purpose. Your accurate responses help us better assist you with your immigration needs."
    >
      <div className="space-y-8">
        <CurrentStatusSection form={form} />
        <VisaSection form={form} />
        <RelocationSection form={form} />
      </div>
    </FormSection>
  );
};

export default ImmigrationInfo;