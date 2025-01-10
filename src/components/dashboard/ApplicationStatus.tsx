import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/contexts/AuthContext";
import StatusStage from "./StatusStage";
import { useApplicationStatus } from "@/hooks/useApplicationStatus";

const ApplicationStatus = () => {
  const { user } = useAuth();
  const stages = useApplicationStatus(user?.id);

  return (
    <Card className="bg-card/50 backdrop-blur-sm border-accent/20">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Application Status</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {stages.map((stage, index) => (
            <StatusStage
              key={index}
              stage={stage}
              isLast={index === stages.length - 1}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ApplicationStatus;