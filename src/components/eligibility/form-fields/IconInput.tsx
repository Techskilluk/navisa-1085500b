import { Input } from "@/components/ui/input";
import { LucideIcon } from "lucide-react";

interface IconInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon: LucideIcon;
}

const IconInput = ({ icon: Icon, className = "", ...props }: IconInputProps) => {
  return (
    <div className="relative">
      <Icon className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
      <Input className={`pl-9 ${className}`} {...props} />
    </div>
  );
};

export default IconInput;