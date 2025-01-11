import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface DocumentChecklistItemProps {
  label: string;
  isComplete: boolean;
  required: boolean;
}

const DocumentChecklistItem = ({ label, isComplete, required }: DocumentChecklistItemProps) => {
  return (
    <div className="flex items-center gap-3">
      <div 
        className={cn(
          "w-5 h-5 rounded-full border flex items-center justify-center transition-colors",
          isComplete ? "bg-primary border-primary" : "border-muted"
        )}
      >
        {isComplete && <Check className="w-3 h-3 text-primary-foreground" />}
      </div>
      <span className="text-sm">
        {label}
        {required && <span className="text-destructive ml-1">*</span>}
      </span>
    </div>
  );
};

export default DocumentChecklistItem;