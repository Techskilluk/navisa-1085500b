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

interface RelocationSectionProps {
  form: UseFormReturn<EligibilityData>;
}

const RELOCATION_PURPOSES = [
  { value: "employment", label: "Employment/Work Authorization" },
  { value: "academic", label: "Academic Studies/Research" },
  { value: "family", label: "Family Reunification" },
  { value: "business", label: "Business Investment" },
  { value: "humanitarian", label: "Humanitarian Protection" },
  { value: "tourism", label: "Tourism/Temporary Visit" },
  { value: "other", label: "Other (Please specify)" },
];

const STAY_DURATIONS = [
  { value: "1", label: "Less than 6 months" },
  { value: "2", label: "6 months to 1 year" },
  { value: "3", label: "1-3 years" },
  { value: "4", label: "3-5 years" },
  { value: "5", label: "5+ years" },
  { value: "6", label: "Permanent residency intended" },
];

const RelocationSection = ({ form }: RelocationSectionProps) => {
  const relocationPurpose = form.watch("immigrationInfo.relocationPurpose");

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">Purpose & Plans</h3>

      <FormField
        control={form.control}
        name="immigrationInfo.relocationPurpose"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Primary Purpose of Relocation*</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select your purpose" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {RELOCATION_PURPOSES.map((purpose) => (
                  <SelectItem key={purpose.value} value={purpose.value}>
                    {purpose.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />

      {relocationPurpose === "other" && (
        <FormField
          control={form.control}
          name="immigrationInfo.otherPurposeSpecification"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Please specify your purpose*</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Enter your relocation purpose" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      )}

      <FormField
        control={form.control}
        name="immigrationInfo.stayDuration"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Intended Length of Stay*</FormLabel>
            <Select 
              onValueChange={(value) => field.onChange(parseInt(value))} 
              defaultValue={field.value?.toString()}
            >
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select duration" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {STAY_DURATIONS.map((duration) => (
                  <SelectItem key={duration.value} value={duration.value}>
                    {duration.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default RelocationSection;