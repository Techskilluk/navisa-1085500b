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

const timeSlots = [
  "8:00 am", "9:00 am", "10:00 am", "11:00 am",
  "12:00 pm", "1:00 pm", "2:00 pm", "3:00 pm",
  "4:00 pm", "5:00 pm", "6:00 pm", "7:00 pm"
];

const BookingCalendar = ({ timeZone, onBookingConfirmed }: BookingCalendarProps) => {
  const { user } = useAuth();
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const handleBookNow = () => {
    if (selectedDate && selectedTime) {
      console.log("Booking confirmed for:", selectedDate, selectedTime);
      onBookingConfirmed?.();
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <label className="text-sm font-medium">Select date</label>
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={setSelectedDate}
          className="border rounded-lg bg-white"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Select time</label>
        <div className="grid grid-cols-4 gap-2">
          {timeSlots.map((time) => (
            <Button
              key={time}
              variant={selectedTime === time ? "default" : "outline"}
              className="w-full"
              onClick={() => setSelectedTime(time)}
            >
              {time}
            </Button>
          ))}
        </div>
      </div>

      <Button 
        className="w-full bg-[#1A1B1E] text-white hover:bg-[#1A1B1E]/90"
        onClick={handleBookNow}
        disabled={!selectedDate || !selectedTime}
      >
        Book now
      </Button>
    </div>
  );
};

export default BookingCalendar;