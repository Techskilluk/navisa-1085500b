import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";
import BookingCalendar from "./BookingCalendar";
import ConsultationDetails from "./ConsultationDetails";
import TimeZoneSelector from "./TimeZoneSelector";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const ConsultationBooking = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { user } = useAuth();
  const [selectedTimeZone, setSelectedTimeZone] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleBookingConfirmed = () => {
    toast({
      title: "Consultation Booked!",
      description: "You will receive a confirmation email shortly.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="w-full bg-card/50 backdrop-blur-sm border-b border-border/10 p-6">
        <div className="max-w-7xl mx-auto">
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

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Calendar */}
          <div className="order-2 lg:order-1 space-y-6">
            <TimeZoneSelector 
              selectedTimeZone={selectedTimeZone}
              onTimeZoneChange={setSelectedTimeZone}
            />
            <BookingCalendar 
              timeZone={selectedTimeZone}
              onBookingConfirmed={handleBookingConfirmed}
            />
          </div>

          {/* Right Column - Details */}
          <div className="order-1 lg:order-2">
            <ConsultationDetails />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultationBooking;