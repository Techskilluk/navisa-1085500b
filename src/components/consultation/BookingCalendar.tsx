import { useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { getCalApi } from "@calcom/embed-react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface BookingCalendarProps {
  timeZone?: string;
  onBookingConfirmed?: () => void;
}

const BookingCalendar = ({ timeZone, onBookingConfirmed }: BookingCalendarProps) => {
  const { user } = useAuth();
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [calApiLoaded, setCalApiLoaded] = useState(false);

  useEffect(() => {
    (async function () {
      try {
        console.log("Initializing Cal.com API");
        const cal = await getCalApi();
        
        // Configure Cal.com UI
        cal?.namespace({
          "ui": {
            "styles": {
              "branding": {
                "brandColor": "#000000"
              }
            }
          },
          "theme": "light"
        });
        
        console.log("Initializing Cal inline embed");
        cal?.("inline", {
          elementOrSelector: "#cal-booking-placeholder",
          calLink: "navisa/consultation", // Replace with your actual Cal.com link
          config: {
            timezone: timeZone,
            name: user?.email,
            email: user?.email,
          }
        });

        // Listen for booking success
        cal?.("on", {
          action: "bookingSuccessful",
          callback: () => {
            console.log("Booking successful");
            if (onBookingConfirmed) {
              onBookingConfirmed();
            }
          },
        });

        setCalApiLoaded(true);
        console.log("Cal.com API initialized successfully");
      } catch (error) {
        console.error("Error initializing Cal.com API:", error);
      }
    })();
  }, [timeZone, user, onBookingConfirmed]);

  return (
    <div className="space-y-6">
      <Calendar
        mode="single"
        selected={selectedDate}
        onSelect={setSelectedDate}
        className="rounded-md border"
      />
      <div 
        id="cal-booking-placeholder" 
        className={`min-h-[500px] ${!calApiLoaded ? 'animate-pulse bg-muted' : ''}`} 
      />
      <Button 
        className="w-full"
        disabled={!selectedDate}
        onClick={() => {
          console.log("Selected date:", selectedDate);
        }}
      >
        Book Consultation
      </Button>
    </div>
  );
};

export default BookingCalendar;