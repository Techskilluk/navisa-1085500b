import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { UseFormReturn } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SelectFieldProps {
  form: UseFormReturn<any>;
  name: string;
  label: string;
  options: { value: string; label: string }[];
  placeholder?: string;
  className?: string;
  disabled?: boolean;
}

const SelectField = ({ form, name, label, options, placeholder, className, disabled }: SelectFieldProps) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          <FormLabel>{label}</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value} disabled={disabled}>
            <FormControl>
              <SelectTrigger className="bg-primary border-white/10 h-11">
                <SelectValue 
                  placeholder={placeholder} 
                  className="text-muted-foreground"
                />
              </SelectTrigger>
            </FormControl>
            <SelectContent 
              className="relative z-50 bg-modal border border-white/10"
              position="popper"
              sideOffset={4}
            >
              {options.map((option) => (
                <SelectItem 
                  key={option.value} 
                  value={option.value}
                  className="hover:bg-white/5 focus:bg-white/5"
                >
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default SelectField;