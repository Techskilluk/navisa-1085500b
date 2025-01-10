import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

interface TimeZoneSelectorProps {
  selectedTimeZone: string;
  onTimeZoneChange: (value: string) => void;
}

const TIMEZONES = [
  "Africa/Lagos",
  "Europe/London",
  "America/New_York",
  "America/Chicago",
  "America/Los_Angeles",
  "Asia/Dubai",
];

const TimeZoneSelector = ({ selectedTimeZone, onTimeZoneChange }: TimeZoneSelectorProps) => {
  return (
    <div className="space-y-2">
      <Label htmlFor="timezone">Time zone</Label>
      <Select value={selectedTimeZone} onValueChange={onTimeZoneChange}>
        <SelectTrigger id="timezone" className="w-full bg-card">
          <SelectValue placeholder="Select time zone" />
        </SelectTrigger>
        <SelectContent>
          {TIMEZONES.map((zone) => (
            <SelectItem key={zone} value={zone}>
              {zone.replace('_', ' ')}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default TimeZoneSelector;