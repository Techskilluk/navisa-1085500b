import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import BookingCalendar from "@/components/consultation/BookingCalendar";
import TimeZoneSelector from "@/components/consultation/TimeZoneSelector";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const ConsultationBooking = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedTimeZone, setSelectedTimeZone] = useState("");

  const handleBookingConfirmed = () => {
    toast({
      title: "Consultation Booked!",
      description: "You will receive a confirmation email shortly.",
    });
  };

  return (
    <div className="min-h-screen bg-background pt-16">
      <div className="w-full bg-card/50 backdrop-blur-sm border-b border-border/10 p-6">
        <div className="max-w-3xl mx-auto">
          <Button
            variant="ghost"
            className="mb-4"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <h1 className="text-2xl lg:text-3xl font-bold text-white mb-2">
            Book a Consultation
          </h1>
          <p className="text-muted-foreground">
            Schedule a one-on-one consultation with our visa experts
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto py-8 px-4">
        <div className="space-y-6">
          <TimeZoneSelector 
            selectedTimeZone={selectedTimeZone}
            onTimeZoneChange={setSelectedTimeZone}
          />
          <BookingCalendar 
            timeZone={selectedTimeZone}
            onBookingConfirmed={handleBookingConfirmed}
          />
        </div>
      </div>
    </div>
  );
};

export default ConsultationBooking;