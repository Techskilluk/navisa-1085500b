import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar } from "lucide-react";

interface CallToActionProps {
  onBookConsultation: () => void;
}

const CallToAction = ({ onBookConsultation }: CallToActionProps) => {
  const handleBookConsultation = () => {
    window.open('https://calendly.com/techskilluk/techskilluk-consultation', '_blank');
    onBookConsultation(); // Keep the existing callback for any side effects
  };

  return (
    <Card className="p-8 bg-accent/10">
      <div className="text-center space-y-4">
        <h2 className="text-2xl font-semibold">Ready to Take the Next Step?</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Book a consultation with our immigration experts to discuss your results
          and create a personalized immigration strategy.
        </p>
        <Button 
          onClick={handleBookConsultation}
          size="lg"
          className="bg-secondary hover:bg-secondary/90 text-secondary-foreground space-x-2 px-6 py-4 text-base rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          <Calendar className="h-5 w-5" />
          <span>Book Immigration Consultation</span>
        </Button>
      </div>
    </Card>
  );
};

export default CallToAction;