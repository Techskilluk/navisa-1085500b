import Cal from "@calcom/embed-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const BookingCalendar = () => {
  return (
    <Card className="bg-white shadow-lg h-full">
      <CardHeader className="border-b border-gray-100">
        <CardTitle className="text-[#002B5C] text-xl font-bold">
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
              hideEventTypeDetails: "false",
              hideLandingPageDetails: "false"
            }}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default BookingCalendar;