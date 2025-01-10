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
    (async function () {
      try {
        console.log("Initializing Cal.com API");
        const cal = await getCalApi();
        
        // Configure Cal.com UI
        if (cal && typeof cal === 'object' && 'namespace' in cal) {
          cal.namespace({
            "ui": {
              "styles": {
                "branding": {
                  "brandColor": "#000000"
                }
              }
            },
            "theme": "light"
          });
        }
        
        console.log("Initializing Cal inline embed");
        cal?.("inline", {
          elementOrSelector: "#cal-booking-placeholder",
          calLink: "navisa/consultation",
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

        setCalApiLoaded(true);
        console.log("Cal.com API initialized successfully");
      } catch (error) {
        console.error("Error initializing Cal.com API:", error);
        toast({
          variant: "destructive",
          title: "Error",
          description: "Failed to load booking calendar. Please try again.",
        });
      }
    })();
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
        className={`min-h-[500px] rounded-lg ${!calApiLoaded ? 'animate-pulse bg-muted' : ''}`} 
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