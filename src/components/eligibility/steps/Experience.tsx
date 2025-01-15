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
import { Briefcase } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ExperienceProps {
  form: UseFormReturn<EligibilityData>;
}

const EXPERIENCE_RANGES = [
  "0-2 years",
  "3-5 years",
  "6-10 years",
  "10+ years"
];

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
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger className="bg-[#141413] border-white/10 h-11">
                  <SelectValue 
                    placeholder="Select years of experience" 
                    className="text-muted-foreground"
                  />
                </SelectTrigger>
              </FormControl>
              <SelectContent 
                className="relative z-50 bg-[#0A0B0E] border border-white/10"
                position="popper"
                sideOffset={4}
              >
                {EXPERIENCE_RANGES.map((range) => (
                  <SelectItem 
                    key={range} 
                    value={range}
                    className="hover:bg-white/5 focus:bg-white/5"
                  >
                    {range}
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
        name="experience.currentRole"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Current Role</FormLabel>
            <FormControl>
              <div className="relative">
                <Briefcase className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input className="pl-9" placeholder="Enter your current role" {...field} />
              </div>
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