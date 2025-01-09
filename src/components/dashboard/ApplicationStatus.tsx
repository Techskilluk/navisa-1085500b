import { Check, Circle, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

interface Stage {
  label: string;
  status: 'completed' | 'active' | 'pending';
  timestamp?: string;
  tooltip?: string;
}

const ApplicationStatus = () => {
  const location = useLocation();
  const [stages, setStages] = useState<Stage[]>([]);
  
  useEffect(() => {
    const submission = location.state?.documentSubmission;
    
    setStages([
      {
        label: "Documents Uploaded",
        status: submission ? "completed" : "pending",
        timestamp: submission?.timestamp,
        tooltip: "All required documents have been successfully uploaded"
      },
      {
        label: "Expert Review",
        status: submission ? "active" : "pending",
        tooltip: "Documents currently under review by our team"
      },
      {
        label: "Application Submitted",
        status: "pending",
        tooltip: "Pending review completion"
      },
      {
        label: "Final Result",
        status: "pending",
        tooltip: "Awaiting visa decision"
      }
    ]);
  }, [location.state]);

  return (
    <Card className="bg-card/50 backdrop-blur-sm border-accent/20">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Application Status</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {stages.map((stage, index) => (
            <div key={index} className="flex items-start gap-4">
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
                  {stage.status === "active" && (
                    <Clock className="w-4 h-4 animate-spin" />
                  )}
                  {stage.status === "pending" && <Circle className="w-4 h-4" />}
                </div>
                {index < stages.length - 1 && (
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
                      {stage.timestamp}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ApplicationStatus;