interface CalendarPlaceholderProps {
  isLoading: boolean;
}

const CalendarPlaceholder = ({ isLoading }: CalendarPlaceholderProps) => {
  return (
    <div 
      id="cal-booking-placeholder" 
      style={{ minHeight: "500px" }}
      className={`rounded-lg ${isLoading ? 'animate-pulse bg-muted' : ''}`}
    />
  );
};

export default CalendarPlaceholder;