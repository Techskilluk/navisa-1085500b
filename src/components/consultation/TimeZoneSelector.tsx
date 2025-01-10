import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";

interface TimeZoneSelectorProps {
  selectedTimeZone: string;
  onTimeZoneChange: (value: string) => void;
}

const TIMEZONES = [
  "West Africa Time",
  "Eastern Time",
  "Central Time",
  "Pacific Time",
  "Greenwich Mean Time",
];

const TimeZoneSelector = ({ selectedTimeZone, onTimeZoneChange }: TimeZoneSelectorProps) => {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">Time zone</label>
      <Select value={selectedTimeZone} onValueChange={onTimeZoneChange}>
        <SelectTrigger className="w-full bg-white">
          <SelectValue placeholder="Select time zone" />
        </SelectTrigger>
        <SelectContent>
          {TIMEZONES.map((zone) => (
            <SelectItem key={zone} value={zone}>
              {zone}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default TimeZoneSelector;