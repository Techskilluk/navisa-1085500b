import { Check, Circle, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";

interface Stage {
  label: string;
  status: 'completed' | 'active' | 'pending';
  timestamp?: string;
  tooltip?: string;
}

const ApplicationStatus = () => {
  const location = useLocation();
  const { user } = useAuth();
  const [stages, setStages] = useState<Stage[]>([]);
  
  useEffect(() => {
    const fetchDocumentStatus = async () => {
      if (!user) return;

      const { data: documents, error } = await supabase
        .from('documents')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })
        .limit(1);

      console.log('Fetched documents:', documents);
      console.log('Fetch error:', error);

      if (error) {
        console.error('Error fetching documents:', error);
        return;
      }

      const latestDocument = documents?.[0];
      
      setStages([
        {
          label: "Documents Uploaded",
          status: latestDocument ? "completed" : "pending",
          timestamp: latestDocument?.created_at,
          tooltip: "All required documents have been successfully uploaded"
        },
        {
          label: "Expert Review",
          status: latestDocument?.status === 'pending' ? "active" : 
                 latestDocument?.status === 'approved' ? "completed" : "pending",
          tooltip: "Documents currently under review by our team"
        },
        {
          label: "Application Submitted",
          status: latestDocument?.status === 'approved' ? "completed" : "pending",
          tooltip: "Review completion status"
        },
        {
          label: "Final Result",
          status: latestDocument?.status === 'approved' ? "active" : "pending",
          tooltip: "Awaiting final visa decision"
        }
      ]);
    };

    fetchDocumentStatus();

    // Set up real-time subscription
    const channel = supabase
      .channel('document-updates')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'documents',
          filter: `user_id=eq.${user?.id}`
        },
        () => {
          console.log('Document status changed, refreshing...');
          fetchDocumentStatus();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [user, location.state]);

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
                      {new Date(stage.timestamp).toLocaleDateString()}
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