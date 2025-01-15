import { useEffect, useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { initializeCalApi, type CalInstance } from "@/lib/cal-api";
import CalendarPlaceholder from "./CalendarPlaceholder";

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
    let calInstance: CalInstance | null = null;

    const setupCalendar = async () => {
      calInstance = await initializeCalApi(
        "cal-booking-placeholder",
        "navisa-global/global-talent-consultation",
        {
          timezone: timeZone,
          name: user?.email,
          email: user?.email,
        },
        {
          onReady: () => setCalApiLoaded(true),
          onError: () => {
            toast({
              variant: "destructive",
              title: "Error",
              description: "Failed to load booking calendar. Please try again.",
            });
          },
          onBookingSuccess: () => {
            setIsBooking(false);
            toast({
              title: "Consultation Booked!",
              description: "Check your email for confirmation details.",
            });
            onBookingConfirmed?.();
          },
        }
      );
    };

    setupCalendar();

    return () => {
      if (calInstance) {
        console.log("Cleaning up Cal.com instance");
        calInstance.unmount({ elementOrSelector: "#cal-booking-placeholder" });
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
      <CalendarPlaceholder isLoading={!calApiLoaded} />
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