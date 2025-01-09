import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import BookingCalendar from "@/components/consultation/BookingCalendar";
import ConsultationDetails from "@/components/consultation/ConsultationDetails";

const ConsultationBooking = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="min-h-screen bg-background py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Calendar */}
          <div className="order-2 lg:order-1">
            <BookingCalendar />
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