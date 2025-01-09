import { useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock } from "lucide-react";

interface TimeZoneSelectorProps {
  selectedTimeZone: string;
  onTimeZoneChange: (value: string) => void;
}

const TimeZoneSelector = ({ selectedTimeZone, onTimeZoneChange }: TimeZoneSelectorProps) => {
  useEffect(() => {
    // Set default timezone on component mount
    if (!selectedTimeZone) {
      const defaultTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      onTimeZoneChange(defaultTimeZone);
    }
  }, [selectedTimeZone, onTimeZoneChange]);

  return (
    <Card className="bg-card/50 backdrop-blur-sm border-accent/20">
      <CardHeader className="border-b border-border/10">
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          <Clock className="h-5 w-5" />
          Select Your Time Zone
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <Select value={selectedTimeZone} onValueChange={onTimeZoneChange}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select time zone" />
          </SelectTrigger>
          <SelectContent>
            {Intl.supportedValuesOf('timeZone').map((zone) => (
              <SelectItem key={zone} value={zone}>
                {zone}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </CardContent>
    </Card>
  );
};

export default TimeZoneSelector;