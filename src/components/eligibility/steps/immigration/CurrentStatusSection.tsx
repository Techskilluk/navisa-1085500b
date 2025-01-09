import { UseFormReturn } from "react-hook-form";
import { EligibilityData } from "../../EligibilityForm";
import SelectField from "../../form-fields/SelectField";
import FormField from "../../form-fields/FormField";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { FormControl, FormField as BaseFormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

interface CurrentStatusSectionProps {
  form: UseFormReturn<EligibilityData>;
}

const immigrationStatuses = [
  { value: "student", label: "Student Visa (F-1/M-1)" },
  { value: "work", label: "Work Visa (H-1B/L-1/O-1)" },
  { value: "permanent_resident", label: "Permanent Resident (Green Card)" },
  { value: "tps", label: "Temporary Protected Status (TPS)" },
  { value: "asylum", label: "Asylum/Refugee Status" },
  { value: "tourist", label: "Tourist/Business Visa (B-1/B-2)" },
  { value: "other", label: "Other (Please specify)" }
];

const CurrentStatusSection = ({ form }: CurrentStatusSectionProps) => {
  const currentStatus = form.watch("immigrationInfo.currentStatus");

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">Current Status</h3>
      
      <SelectField
        form={form}
        name="immigrationInfo.currentStatus"
        label="Current Immigration Status*"
        options={immigrationStatuses}
        placeholder="Select status"
      />

      {currentStatus === "other" && (
        <FormField
          form={form}
          name="immigrationInfo.otherStatusSpecification"
          label="Please specify your status*"
          placeholder="Enter your current status"
        />
      )}

      <BaseFormField
        control={form.control}
        name="immigrationInfo.hasValidVisa"
        render={({ field }) => (
          <FormItem className="space-y-3">
            <FormLabel>Valid Immigration Document Status*</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                value={field.value}
                className="flex flex-col space-y-3"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Yes" id="valid-yes" />
                  <Label htmlFor="valid-yes" className="text-sm">
                    Yes, I have a current valid visa/permit
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="No" id="valid-no" />
                  <Label htmlFor="valid-no" className="text-sm">
                    No, I do not have a current valid visa/permit
                  </Label>
                </div>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default CurrentStatusSection;