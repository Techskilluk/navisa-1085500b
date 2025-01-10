import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import BookingCalendar from "@/components/consultation/BookingCalendar";
import ConsultationDetails from "@/components/consultation/ConsultationDetails";
import TimeZoneSelector from "@/components/consultation/TimeZoneSelector";

const ConsultationBooking = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedTimeZone, setSelectedTimeZone] = useState("West Africa Time");

  const handleBookingConfirmed = () => {
    toast({
      title: "Consultation Booked!",
      description: "You will receive a confirmation email shortly.",
    });
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold mb-8">Book consultation</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Calendar */}
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

          {/* Right Column - Details */}
          <div>
            <ConsultationDetails />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultationBooking;