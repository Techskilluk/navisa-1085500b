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
        <SelectTrigger id="timezone" className="w-full bg-[#141413] border-white/10 h-11">
          <SelectValue 
            placeholder="Select time zone" 
            className="text-muted-foreground"
          />
        </SelectTrigger>
        <SelectContent 
          className="bg-[#0A0B0E] border border-white/10"
          position="popper"
          sideOffset={4}
        >
          {TIMEZONES.map((zone) => (
            <SelectItem 
              key={zone} 
              value={zone}
              className="hover:bg-white/5 focus:bg-white/5"
            >
              {zone.replace('_', ' ')}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default TimeZoneSelector;