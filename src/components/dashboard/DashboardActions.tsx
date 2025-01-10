import { Button } from "@/components/ui/button";
import { BookOpen, Calendar } from "lucide-react";

interface DashboardActionsProps {
  onBookConsultation: () => void;
  onStartApplication: () => void;
}

const DashboardActions = ({ onBookConsultation, onStartApplication }: DashboardActionsProps) => {
  return (
    <div className="w-full bg-background/50 border-b border-border/10 p-4 mt-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-center gap-3">
        <Button
          onClick={onBookConsultation}
          className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
          size="lg"
        >
          <Calendar className="w-4 h-4 mr-2" />
          Book Consultation
        </Button>
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