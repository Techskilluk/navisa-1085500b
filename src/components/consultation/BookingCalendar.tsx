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

  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      // Type assertion to handle the namespace method
      (cal as any).namespace({
        "ui": {
          "styles": {
            "branding": {
              "brandColor": "#000000"
            }
          }
        },
        "theme": "light"
      });
      
      // Initialize Cal inline embed
      cal("inline", {
        elementOrSelector: "#cal-booking-placeholder",
        calLink: "your-organization/consultation",
        config: {
          timezone: timeZone,
          name: user?.email,
          email: user?.email,
        }
      });

      // Listen for booking success
      cal("on", {
        action: "bookingSuccessful",
        callback: () => {
          if (onBookingConfirmed) {
            onBookingConfirmed();
          }
        },
      });
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
      <div id="cal-booking-placeholder" className="min-h-[500px]" />
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