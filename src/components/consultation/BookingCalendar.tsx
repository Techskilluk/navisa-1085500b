import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/contexts/AuthContext";

interface BookingCalendarProps {
  timeZone?: string;
  onBookingConfirmed?: () => void;
}

const BookingCalendar = ({ timeZone, onBookingConfirmed }: BookingCalendarProps) => {
  const { user } = useAuth();

  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal.on('bookingSuccessful', () => {
        console.log('Booking was successful');
        onBookingConfirmed?.();
      });
    })();
  }, [onBookingConfirmed]);

  return (
    <Card className="bg-card/50 backdrop-blur-sm border-accent/20">
      <CardHeader className="border-b border-border/10">
        <CardTitle className="text-xl font-bold text-white">
          Schedule Your Consultation
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="w-full">
          <Cal 
            calLink="techskilluk/techskilluk-consultation"
            style={{height: "100%", width: "100%", overflow: "hidden"}}
            config={{
              layout: 'month_view',
              hideEventTypeDetails: false,
              hideLandingPageDetails: false,
              timeZone: timeZone,
              name: user?.email,
              email: user?.email,
            }}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default BookingCalendar;