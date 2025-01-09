import { UseFormReturn } from "react-hook-form";
import { FormField } from "@/components/ui/form";
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

  return (
    <>
      {hasValidVisa === "Yes" && (
        <div className="space-y-6">
          <FormField
            name="immigrationInfo.expirationDate"
            render={({ field }) => (
              <div className="space-y-2">
                <label className="text-sm font-medium">Document Expiration Date*</label>
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
        </div>
      )}
    </>
  );
};

export default VisaSection;