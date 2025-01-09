import { UseFormReturn } from "react-hook-form";
import { EligibilityData } from "../../EligibilityForm";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

interface VisaSectionProps {
  form: UseFormReturn<EligibilityData>;
}

const VisaSection = ({ form }: VisaSectionProps) => {
  const hasValidVisa = form.watch("immigrationInfo.hasValidVisa");

  return (
    <>
      {hasValidVisa === "Yes" && (
        <div className="space-y-6">
          <FormField
            control={form.control}
            name="immigrationInfo.expirationDate"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Document Expiration Date*</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date < new Date() || date > new Date(2100, 0, 1)
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      )}
    </>
  );
};

export default VisaSection;