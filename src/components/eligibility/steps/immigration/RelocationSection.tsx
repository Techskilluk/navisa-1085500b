import { UseFormReturn } from "react-hook-form";
import { EligibilityData } from "../../EligibilityForm";
import SelectField from "../../form-fields/SelectField";
import FormField from "../../form-fields/FormField";
import DateField from "../../form-fields/DateField";

interface RelocationSectionProps {
  form: UseFormReturn<EligibilityData>;
}

const relocationPurposes = [
  { value: "employment", label: "Employment/Work Authorization" },
  { value: "academic", label: "Academic Studies/Research" },
  { value: "family", label: "Family Reunification" },
  { value: "business", label: "Business Investment" },
  { value: "humanitarian", label: "Humanitarian Protection" },
  { value: "tourism", label: "Tourism/Temporary Visit" },
  { value: "other", label: "Other (Please specify)" }
];

const stayDurations = [
  { value: "less_than_6", label: "Less than 6 months" },
  { value: "6_to_12", label: "6 months to 1 year" },
  { value: "1_to_3", label: "1-3 years" },
  { value: "3_to_5", label: "3-5 years" },
  { value: "5_plus", label: "5+ years" },
  { value: "permanent", label: "Permanent residency intended" }
];

const RelocationSection = ({ form }: RelocationSectionProps) => {
  const relocationPurpose = form.watch("immigrationInfo.relocationPurpose");

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">Purpose & Plans</h3>

      <SelectField
        form={form}
        name="immigrationInfo.relocationPurpose"
        label="Primary Purpose of Relocation*"
        options={relocationPurposes}
        placeholder="Select purpose"
      />

      {relocationPurpose === "other" && (
        <FormField
          form={form}
          name="immigrationInfo.otherPurposeSpecification"
          label="Please specify your purpose*"
          placeholder="Enter your relocation purpose"
        />
      )}

      <SelectField
        form={form}
        name="immigrationInfo.stayDuration"
        label="Intended Length of Stay*"
        options={stayDurations}
        placeholder="Select duration"
      />

      <DateField
        form={form}
        name="immigrationInfo.proposedEntryDate"
        label="Proposed Entry Date*"
      />
    </div>
  );
};

export default RelocationSection;