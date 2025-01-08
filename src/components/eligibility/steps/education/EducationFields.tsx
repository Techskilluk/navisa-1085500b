import { UseFormReturn } from "react-hook-form";
import { EligibilityData } from "../../EligibilityForm";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { GraduationCap, BookOpen } from "lucide-react";
import IconInput from "../../form-fields/IconInput";

interface EducationFieldsProps {
  form: UseFormReturn<EligibilityData>;
}

const DEGREES = [
  "High School",
  "Bachelor's",
  "Master's",
  "PhD",
  "Other",
];

const EducationFields = ({ form }: EducationFieldsProps) => {
  return (
    <>
      <FormField
        control={form.control}
        name="education.degree"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Degree Level</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <div className="relative">
                  <GraduationCap className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <SelectTrigger className="pl-9">
                    <SelectValue placeholder="Select your degree level" />
                  </SelectTrigger>
                </div>
              </FormControl>
              <SelectContent>
                {DEGREES.map((degree) => (
                  <SelectItem key={degree} value={degree}>
                    {degree}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="education.field"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Field of Study</FormLabel>
            <FormControl>
              <IconInput icon={BookOpen} placeholder="Enter your field of study" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="education.institution"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Institution</FormLabel>
            <FormControl>
              <Input placeholder="Enter your institution" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="education.graduationYear"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Graduation Year</FormLabel>
            <FormControl>
              <Input 
                type="number" 
                placeholder="Enter graduation year"
                min={1950}
                max={new Date().getFullYear() + 5}
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};

export default EducationFields;