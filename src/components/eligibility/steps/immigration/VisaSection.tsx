import { UseFormReturn } from "react-hook-form";
import { EligibilityData } from "../../EligibilityForm";
import DateField from "../../form-fields/DateField";
import FormField from "../../form-fields/FormField";

interface VisaSectionProps {
  form: UseFormReturn<EligibilityData>;
}

const VisaSection = ({ form }: VisaSectionProps) => {
  const hasValidVisa = form.watch("immigrationInfo.hasValidVisa");

  if (hasValidVisa !== "Yes") return null;

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">Visa Information</h3>
      
      <FormField
        form={form}
        name="immigrationInfo.visaType"
        label="Visa Type*"
        placeholder="Enter your visa type"
      />

      <FormField
        form={form}
        name="immigrationInfo.visaNumber"
        label="Visa Number*"
        placeholder="Enter your visa number"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <DateField
          form={form}
          name="immigrationInfo.issueDate"
          label="Issue Date*"
        />

        <DateField
          form={form}
          name="immigrationInfo.expirationDate"
          label="Expiration Date*"
        />
      </div>
    </div>
  );
};

export default VisaSection;