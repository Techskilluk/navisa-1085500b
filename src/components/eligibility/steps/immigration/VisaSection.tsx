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

interface VisaSectionProps {
  form: UseFormReturn<EligibilityData>;
}

const VisaSection = ({ form }: VisaSectionProps) => {
  const { watch, formState: { errors } } = form;
  const hasValidVisa = watch("immigrationInfo.hasValidVisa");

  const visaTypes = [
    "Student (F-1)",
    "Work (H-1B)",
    "Exchange Visitor (J-1)",
    "Business (B-1)",
    "Tourist (B-2)",
    "Other"
  ];

  return (
    <>
      <FormField
        name="immigrationInfo.hasValidVisa"
        render={({ field }) => (
          <div className="space-y-2">
            <label className="text-sm font-medium">Do you currently hold a valid visa or permit?*</label>
            <Select
              value={field.value}
              onValueChange={field.onChange}
            >
              <option value="">Select option</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </Select>
            {errors.immigrationInfo?.hasValidVisa && (
              <p className="text-sm text-red-500">{errors.immigrationInfo.hasValidVisa.message}</p>
            )}
          </div>
        )}
      />

      {hasValidVisa === "Yes" && (
        <>
          <FormField
            name="immigrationInfo.visaType"
            render={({ field }) => (
              <div className="space-y-2">
                <label className="text-sm font-medium">Visa/Permit Type*</label>
                <Select
                  value={field.value}
                  onValueChange={field.onChange}
                >
                  <option value="">Select visa type</option>
                  {visaTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </Select>
                {errors.immigrationInfo?.visaType && (
                  <p className="text-sm text-red-500">{errors.immigrationInfo.visaType.message}</p>
                )}
              </div>
            )}
          />

          <FormField
            name="immigrationInfo.visaNumber"
            render={({ field }) => (
              <div className="space-y-2">
                <label className="text-sm font-medium">Visa/Permit Number*</label>
                <Input {...field} placeholder="XXX-YYYY-ZZZZZ" />
                {errors.immigrationInfo?.visaNumber && (
                  <p className="text-sm text-red-500">{errors.immigrationInfo.visaNumber.message}</p>
                )}
              </div>
            )}
          />

          <FormField
            name="immigrationInfo.issueDate"
            render={({ field }) => (
              <div className="space-y-2">
                <label className="text-sm font-medium">Issue Date*</label>
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
                {errors.immigrationInfo?.issueDate && (
                  <p className="text-sm text-red-500">{errors.immigrationInfo.issueDate.message}</p>
                )}
              </div>
            )}
          />

          <FormField
            name="immigrationInfo.expirationDate"
            render={({ field }) => (
              <div className="space-y-2">
                <label className="text-sm font-medium">Expiration Date*</label>
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
                {errors.immigrationInfo?.expirationDate && (
                  <p className="text-sm text-red-500">{errors.immigrationInfo.expirationDate.message}</p>
                )}
              </div>
            )}
          />
        </>
      )}
    </>
  );
};

export default VisaSection;