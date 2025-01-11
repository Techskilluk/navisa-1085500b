import { Check, Circle, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatusStageProps {
  stage: {
    label: string;
    status: 'completed' | 'active' | 'pending';
    timestamp?: string;
    tooltip?: string;
  };
  isLast: boolean;
}

const StatusStage = ({ stage, isLast }: StatusStageProps) => {
  return (
    <div className="flex items-start gap-4">
      <div className="relative">
        <div
          className={cn(
            "w-8 h-8 rounded-full flex items-center justify-center",
            stage.status === "completed" && "bg-[#28A745]/10 text-[#28A745]",
            stage.status === "active" && "bg-[#002B5C]/10 text-[#002B5C]",
            stage.status === "pending" && "bg-[#CCCCCC]/10 text-[#CCCCCC]"
          )}
        >
          {stage.status === "completed" && <Check className="w-4 h-4" />}
          {stage.status === "active" && <Clock className="w-4 h-4 animate-spin" />}
          {stage.status === "pending" && <Circle className="w-4 h-4" />}
        </div>
        {!isLast && (
          <div
            className={cn(
              "absolute top-8 left-1/2 w-0.5 h-10 -translate-x-1/2",
              stage.status === "completed" ? "bg-[#28A745]/30" : "bg-[#CCCCCC]/30"
            )}
          />
        )}
      </div>
      <div className="flex-1 pt-1">
        <div className="flex justify-between items-start">
          <div>
            <p className="font-medium">{stage.label}</p>
            {stage.tooltip && (
              <p className="text-sm text-muted-foreground">
                {stage.tooltip}
              </p>
            )}
          </div>
          {stage.timestamp && (
            <span className="text-sm text-muted-foreground">
              {new Date(stage.timestamp).toLocaleDateString()}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default StatusStage;