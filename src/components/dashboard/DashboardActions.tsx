import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";
import { CalendarWidget } from "./CalendarWidget";
import { ConsultationButton } from "./ConsultationButton";

interface DashboardActionsProps {
  onBookConsultation: () => void;
  onStartApplication: () => void;
}

const DashboardActions = ({ onStartApplication }: DashboardActionsProps) => {
  return (
    <div className="w-full bg-background/50 border-b border-border/10 p-4 mt-4">
      <CalendarWidget />
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-center gap-3">
        <ConsultationButton />
        <Button
          onClick={onStartApplication}
          variant="outline"
          size="lg"
        >
          <BookOpen className="w-4 h-4 mr-2" />
          Start Application
        </Button>
      </div>
    </div>
  );
};

export default DashboardActions;