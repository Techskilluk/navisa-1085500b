import { UseFormReturn } from "react-hook-form";
import { EligibilityData } from "../EligibilityForm";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface EducationProps {
  form: UseFormReturn<EligibilityData>;
}

const Education = ({ form }: EducationProps) => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold mb-2">Education</h2>
        <p className="text-muted-foreground">Tell us about your educational background.</p>
      </div>

      <FormField
        control={form.control}
        name="education.degree"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Degree</FormLabel>
            <FormControl>
              <Input placeholder="Enter your degree" {...field} />
            </FormControl>
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
              <Input placeholder="Enter your field of study" {...field} />
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
              <Input type="number" placeholder="Enter graduation year" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default Education;