import { UseFormReturn } from "react-hook-form";
import { FormField } from "@/components/ui/form";
import { Select } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { EligibilityData } from "../../EligibilityForm";

interface CurrentStatusSectionProps {
  form: UseFormReturn<EligibilityData>;
}

const CurrentStatusSection = ({ form }: CurrentStatusSectionProps) => {
  const { watch, formState: { errors } } = form;
  const currentStatus = watch("immigrationInfo.currentStatus");

  const immigrationStatuses = [
    { value: "student", label: "Student Visa (F-1/M-1)" },
    { value: "work", label: "Work Visa (H-1B/L-1/O-1)" },
    { value: "permanent_resident", label: "Permanent Resident (Green Card)" },
    { value: "tps", label: "Temporary Protected Status (TPS)" },
    { value: "asylum", label: "Asylum/Refugee Status" },
    { value: "tourist", label: "Tourist/Business Visa (B-1/B-2)" },
    { value: "other", label: "Other (Please specify)" }
  ];

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">Current Status</h3>
      
      <FormField
        name="immigrationInfo.currentStatus"
        render={({ field }) => (
          <div className="space-y-2">
            <label className="text-sm font-medium">Current Immigration Status*</label>
            <Select
              value={field.value}
              onValueChange={field.onChange}
            >
              <option value="">Select status</option>
              {immigrationStatuses.map((status) => (
                <option key={status.value} value={status.value}>
                  {status.label}
                </option>
              ))}
            </Select>
            {errors.immigrationInfo?.currentStatus && (
              <p className="text-sm text-red-500">{errors.immigrationInfo.currentStatus.message}</p>
            )}
          </div>
        )}
      />

      {currentStatus === "other" && (
        <FormField
          name="immigrationInfo.otherStatusSpecification"
          render={({ field }) => (
            <div className="space-y-2">
              <label className="text-sm font-medium">Please specify your status*</label>
              <Input {...field} placeholder="Enter your current status" />
              {errors.immigrationInfo?.otherStatusSpecification && (
                <p className="text-sm text-red-500">
                  {errors.immigrationInfo.otherStatusSpecification.message}
                </p>
              )}
            </div>
          )}
        />
      )}

      <FormField
        name="immigrationInfo.hasValidVisa"
        render={({ field }) => (
          <div className="space-y-3">
            <label className="text-sm font-medium">Valid Immigration Document Status*</label>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value}
              className="flex flex-col space-y-1"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Yes" id="valid-yes" />
                <Label htmlFor="valid-yes">Yes, I have a current valid visa/permit</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="No" id="valid-no" />
                <Label htmlFor="valid-no">No, I do not have a current valid visa/permit</Label>
              </div>
            </RadioGroup>
            {errors.immigrationInfo?.hasValidVisa && (
              <p className="text-sm text-red-500">{errors.immigrationInfo.hasValidVisa.message}</p>
            )}
          </div>
        )}
      />
    </div>
  );
};

export default CurrentStatusSection;