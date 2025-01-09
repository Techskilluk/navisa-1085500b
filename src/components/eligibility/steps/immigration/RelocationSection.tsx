import { UseFormReturn } from "react-hook-form";
import { FormField } from "@/components/ui/form";
import { Select } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { EligibilityData } from "../../EligibilityForm";

interface RelocationSectionProps {
  form: UseFormReturn<EligibilityData>;
}

const RelocationSection = ({ form }: RelocationSectionProps) => {
  const { formState: { errors } } = form;

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

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">Purpose & Plans</h3>

      <FormField
        name="immigrationInfo.relocationPurpose"
        render={({ field }) => (
          <div className="space-y-2">
            <label className="text-sm font-medium">Primary Purpose of Relocation*</label>
            <Select
              value={field.value}
              onValueChange={field.onChange}
            >
              <option value="">Select purpose</option>
              {relocationPurposes.map((purpose) => (
                <option key={purpose.value} value={purpose.value}>
                  {purpose.label}
                </option>
              ))}
            </Select>
            {errors.immigrationInfo?.relocationPurpose && (
              <p className="text-sm text-red-500">{errors.immigrationInfo.relocationPurpose.message}</p>
            )}
          </div>
        )}
      />

      {form.watch("immigrationInfo.relocationPurpose") === "other" && (
        <FormField
          name="immigrationInfo.otherPurposeSpecification"
          render={({ field }) => (
            <div className="space-y-2">
              <label className="text-sm font-medium">Please specify your purpose*</label>
              <Input {...field} placeholder="Enter your relocation purpose" />
              {errors.immigrationInfo?.otherPurposeSpecification && (
                <p className="text-sm text-red-500">
                  {errors.immigrationInfo.otherPurposeSpecification.message}
                </p>
              )}
            </div>
          )}
        />
      )}

      <FormField
        name="immigrationInfo.stayDuration"
        render={({ field }) => (
          <div className="space-y-2">
            <label className="text-sm font-medium">Intended Length of Stay*</label>
            <Select
              value={field.value}
              onValueChange={field.onChange}
            >
              <option value="">Select duration</option>
              {stayDurations.map((duration) => (
                <option key={duration.value} value={duration.value}>
                  {duration.label}
                </option>
              ))}
            </Select>
            {errors.immigrationInfo?.stayDuration && (
              <p className="text-sm text-red-500">{errors.immigrationInfo.stayDuration.message}</p>
            )}
          </div>
        )}
      />
    </div>
  );
};

export default RelocationSection;