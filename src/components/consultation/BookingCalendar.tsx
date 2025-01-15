import { useEffect, useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { getCalApi } from "@calcom/embed-react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface BookingCalendarProps {
  timeZone?: string;
  onBookingConfirmed?: () => void;
}

const BookingCalendar = ({ timeZone, onBookingConfirmed }: BookingCalendarProps) => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [calApiLoaded, setCalApiLoaded] = useState(false);
  const [isBooking, setIsBooking] = useState(false);

  useEffect(() => {
    let calInstance: any = null;

    const initializeCal = async () => {
      try {
        console.log("Initializing Cal.com API");
        const cal = await getCalApi();
        calInstance = cal;

        if (!cal) {
          console.error("Cal.com API failed to initialize");
          throw new Error("Calendar API initialization failed");
        }

        // Configure Cal.com
        console.log("Setting up Cal.com namespace configuration");
        await cal("ui", {
          theme: "light",
          styles: {
            branding: {
              brandColor: "#000000"
            }
          }
        });

        // Initialize inline embed
        console.log("Initializing Cal.com inline embed");
        await cal("inline", {
          elementOrSelector: "#cal-booking-placeholder",
          calLink: "navisa-global/global-talent-consultation",
          config: {
            timezone: timeZone,
            name: user?.email,
            email: user?.email,
          }
        });

        // Set up event listeners
        cal("on", {
          action: "bookingSuccessful",
          callback: () => {
            console.log("Booking successful");
            setIsBooking(false);
            toast({
              title: "Consultation Booked!",
              description: "Check your email for confirmation details.",
            });
            if (onBookingConfirmed) {
              onBookingConfirmed();
            }
          },
        });

        // Handle loading state
        cal("on", {
          action: "linkReady",
          callback: () => {
            console.log("Cal.com embed ready");
            setCalApiLoaded(true);
          },
        });

        // Handle booking failed state
        cal("on", {
          action: "linkFailed",
          callback: (e: any) => {
            console.error("Cal.com link failed:", e);
            toast({
              variant: "destructive",
              title: "Booking Error",
              description: "There was an error with the booking system. Please try again.",
            });
          },
        });

        console.log("Cal.com API initialized successfully");
      } catch (error) {
        console.error("Error initializing Cal.com API:", error);
        toast({
          variant: "destructive",
          title: "Error",
          description: "Failed to load booking calendar. Please try again.",
        });
      }
    };

    initializeCal();

    // Cleanup function
    return () => {
      if (calInstance) {
        console.log("Cleaning up Cal.com instance");
        calInstance("unmount", { elementOrSelector: "#cal-booking-placeholder" });
      }
    };
  }, [timeZone, user, onBookingConfirmed, toast]);

  const handleBooking = () => {
    if (!selectedDate) return;
    setIsBooking(true);
    console.log("Initiating booking for date:", selectedDate);
  };

  return (
    <div className="space-y-6">
      <Calendar
        mode="single"
        selected={selectedDate}
        onSelect={setSelectedDate}
        className="rounded-md border bg-card"
        disabled={(date) => date < new Date() || date > new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)}
      />
      <div 
        id="cal-booking-placeholder" 
        style={{ minHeight: "500px" }}
        className={`rounded-lg ${!calApiLoaded ? 'animate-pulse bg-muted' : ''}`}
      />
      <Button 
        className="w-full"
        disabled={!selectedDate || isBooking}
        onClick={handleBooking}
      >
        {isBooking ? "Booking..." : "Book Consultation"}
      </Button>
    </div>
  );
};

export default BookingCalendar;