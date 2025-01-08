import { UseFormReturn } from "react-hook-form";
import { FormField } from "@/components/ui/form";
import { Select } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { EligibilityData } from "../../EligibilityForm";

interface RelocationSectionProps {
  form: UseFormReturn<EligibilityData>;
}

const RelocationSection = ({ form }: RelocationSectionProps) => {
  const { formState: { errors } } = form;

  const relocationPurposes = [
    "Employment",
    "Education",
    "Family Reunification",
    "Investment",
    "Humanitarian",
    "Other"
  ];

  return (
    <>
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
                <option key={purpose} value={purpose}>{purpose}</option>
              ))}
            </Select>
            {errors.immigrationInfo?.relocationPurpose && (
              <p className="text-sm text-red-500">{errors.immigrationInfo.relocationPurpose.message}</p>
            )}
          </div>
        )}
      />

      <FormField
        name="immigrationInfo.stayDuration"
        render={({ field }) => (
          <div className="space-y-2">
            <label className="text-sm font-medium">Intended Length of Stay (in months)*</label>
            <Input {...field} type="number" min="1" placeholder="Enter number of months" />
            {errors.immigrationInfo?.stayDuration && (
              <p className="text-sm text-red-500">{errors.immigrationInfo.stayDuration.message}</p>
            )}
          </div>
        )}
      />

      <FormField
        name="immigrationInfo.proposedEntryDate"
        render={({ field }) => (
          <div className="space-y-2">
            <label className="text-sm font-medium">Proposed Entry Date*</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !field.value && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={field.value}
                  onSelect={field.onChange}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            {errors.immigrationInfo?.proposedEntryDate && (
              <p className="text-sm text-red-500">{errors.immigrationInfo.proposedEntryDate.message}</p>
            )}
          </div>
        )}
      />
    </>
  );
};

export default RelocationSection;