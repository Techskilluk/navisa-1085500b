import { UseFormReturn } from "react-hook-form";
import { FormField } from "@/components/ui/form";
import { Select } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { EligibilityData } from "../../EligibilityForm";

interface CurrentStatusSectionProps {
  form: UseFormReturn<EligibilityData>;
}

const CurrentStatusSection = ({ form }: CurrentStatusSectionProps) => {
  const { watch, formState: { errors } } = form;
  const currentStatus = watch("immigrationInfo.currentStatus");

  return (
    <>
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
              <option value="Student Visa">Student Visa</option>
              <option value="Work Visa">Work Visa</option>
              <option value="Permanent Resident">Permanent Resident</option>
              <option value="Temporary Protected Status">Temporary Protected Status</option>
              <option value="Other">Other</option>
            </Select>
            {errors.immigrationInfo?.currentStatus && (
              <p className="text-sm text-red-500">{errors.immigrationInfo.currentStatus.message}</p>
            )}
          </div>
        )}
      />

      {currentStatus === "Other" && (
        <FormField
          name="immigrationInfo.otherStatusSpecification"
          render={({ field }) => (
            <div className="space-y-2">
              <label className="text-sm font-medium">Please specify your status*</label>
              <Input {...field} placeholder="Enter your current status" />
              {errors.immigrationInfo?.otherStatusSpecification && (
                <p className="text-sm text-red-500">{errors.immigrationInfo.otherStatusSpecification.message}</p>
              )}
            </div>
          )}
        />
      )}
    </>
  );
};

export default CurrentStatusSection;