import { useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { getCalApi } from "@calcom/embed-react";

interface BookingCalendarProps {
  timeZone?: string;
  onBookingConfirmed?: () => void;
}

const BookingCalendar = ({ timeZone, onBookingConfirmed }: BookingCalendarProps) => {
  const { user } = useAuth();

  useEffect(() => {
    // Initialize Cal.com API
    const initCal = async () => {
      try {
        const cal = await getCalApi();
        console.log("Cal.com API initialized:", cal);

        // Configure Cal.com event listeners
        if (window.Cal) {
          console.log("Setting up Cal.com event listeners");
          window.Cal("on", {
            action: "bookingSuccessful",
            callback: () => {
              console.log("Booking was successful");
              onBookingConfirmed?.();
            },
          });
        } else {
          console.error("Cal.com API not available");
        }
      } catch (error) {
        console.error("Error initializing Cal.com:", error);
      }
    };

    initCal();

    // Cleanup function
    return () => {
      if (window.Cal) {
        window.Cal("off", {
          action: "bookingSuccessful",
        });
      }
    };
  }, [onBookingConfirmed]);

  return (
    <div className="w-full h-full min-h-[600px] rounded-lg overflow-hidden">
      <div
        className="w-full h-full"
        data-cal-embed
        data-cal-link="navisa/consultation"
        data-cal-config={JSON.stringify({
          layout: "month_view",
          hideEventTypeDetails: "false",
          hideLandingPageDetails: "false",
          timeZone: timeZone || "UTC",
          name: user?.email?.split("@")[0] || undefined,
          email: user?.email || undefined,
        })}
      />
    </div>
  );
};

export default BookingCalendar;