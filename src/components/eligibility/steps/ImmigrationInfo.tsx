import { UseFormReturn } from "react-hook-form";
import { FormField } from "@/components/ui/form";
import { Select } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import FormSection from "../form-fields/FormSection";
import { EligibilityData } from "../EligibilityForm";

interface ImmigrationInfoProps {
  form: UseFormReturn<EligibilityData>;
}

const ImmigrationInfo = ({ form }: ImmigrationInfoProps) => {
  const { register, watch, setValue, formState: { errors } } = form;
  const currentStatus = watch("immigrationInfo.currentStatus");
  const hasValidVisa = watch("immigrationInfo.hasValidVisa");

  const visaTypes = [
    "Student (F-1)",
    "Work (H-1B)",
    "Exchange Visitor (J-1)",
    "Business (B-1)",
    "Tourist (B-2)",
    "Other"
  ];

  const relocationPurposes = [
    "Employment",
    "Education",
    "Family Reunification",
    "Investment",
    "Humanitarian",
    "Other"
  ];

  return (
    <FormSection
      title="Immigration Information"
      description="Please provide details about your current immigration status and future plans."
    >
      <div className="space-y-6">
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
      </div>
    </FormSection>
  );
};

export default ImmigrationInfo;