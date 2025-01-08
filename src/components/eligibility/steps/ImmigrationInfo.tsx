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
      title="Immigration Information"
      description="Please provide details about your current immigration status and future plans."
    >
      <div className="space-y-6">
        <CurrentStatusSection form={form} />
        <VisaSection form={form} />
        <RelocationSection form={form} />
      </div>
    </FormSection>
  );
};

export default ImmigrationInfo;