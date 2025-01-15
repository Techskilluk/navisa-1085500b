import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

export const ConsultationButton = () => {
  return (
    <Button
      data-cal-namespace="global-talent-consultation"
      data-cal-link="navisa-global/global-talent-consultation"
      data-cal-config='{"layout":"month_view"}'
      className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
      size="lg"
    >
      <Calendar className="w-4 h-4 mr-2" />
      Book Consultation
    </Button>
  );
};