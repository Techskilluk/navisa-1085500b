import { UseFormReturn } from "react-hook-form";
import { EligibilityData } from "../../EligibilityForm";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface CurrentStatusSectionProps {
  form: UseFormReturn<EligibilityData>;
}

const IMMIGRATION_STATUSES = [
  { value: "student", label: "Student Visa (F-1/M-1)" },
  { value: "work", label: "Work Visa (H-1B/L-1/O-1)" },
  { value: "permanent_resident", label: "Permanent Resident (Green Card)" },
  { value: "tps", label: "Temporary Protected Status (TPS)" },
  { value: "asylum", label: "Asylum/Refugee Status" },
  { value: "tourist", label: "Tourist/Business Visa (B-1/B-2)" },
  { value: "other", label: "Other (Please specify)" },
];

const CurrentStatusSection = ({ form }: CurrentStatusSectionProps) => {
  const currentStatus = form.watch("immigrationInfo.currentStatus");

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">Current Status</h3>
      
      <FormField
        control={form.control}
        name="immigrationInfo.currentStatus"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Current Immigration Status*</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select your current status" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {IMMIGRATION_STATUSES.map((status) => (
                  <SelectItem key={status.value} value={status.value}>
                    {status.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />

      {currentStatus === "other" && (
        <FormField
          control={form.control}
          name="immigrationInfo.otherStatusSpecification"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Please specify your status*</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Enter your current status" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      )}

      <FormField
        control={form.control}
        name="immigrationInfo.hasValidVisa"
        render={({ field }) => (
          <FormItem className="space-y-3">
            <FormLabel>Valid Immigration Document Status*</FormLabel>
            <FormControl>
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
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default CurrentStatusSection;