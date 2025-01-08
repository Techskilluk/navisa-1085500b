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

interface ExperienceProps {
  form: UseFormReturn<EligibilityData>;
}

const Experience = ({ form }: ExperienceProps) => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold mb-2">Professional Experience</h2>
        <p className="text-muted-foreground">Tell us about your work experience.</p>
      </div>

      <FormField
        control={form.control}
        name="experience.yearsOfExperience"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Years of Experience</FormLabel>
            <FormControl>
              <Input type="number" placeholder="Enter years of experience" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="experience.currentRole"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Current Role</FormLabel>
            <FormControl>
              <Input placeholder="Enter your current role" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="experience.industry"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Industry</FormLabel>
            <FormControl>
              <Input placeholder="Enter your industry" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default Experience;