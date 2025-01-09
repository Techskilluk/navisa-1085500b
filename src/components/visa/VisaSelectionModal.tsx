import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Flag } from "lucide-react";
import { cn } from "@/lib/utils";

interface VisaOption {
  id: string;
  name: string;
  country: string;
  countryCode: string;
  description: string;
  timeline: string;
  successRate: number;
}

interface VisaSelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (visa: VisaOption) => void;
}

const visaOptions: VisaOption[] = [
  {
    id: "express-entry",
    name: "Express Entry",
    country: "Canada",
    countryCode: "ca",
    description: "Fast-track immigration for skilled workers",
    timeline: "0-3 months",
    successRate: 85,
  },
  {
    id: "global-talent",
    name: "Global Talent",
    country: "United Kingdom",
    countryCode: "gb",
    description: "For exceptional talent in specific fields",
    timeline: "2-4 months",
    successRate: 75,
  },
  {
    id: "eb1",
    name: "EB-1 Visa",
    country: "United States",
    countryCode: "us",
    description: "Priority workers and persons of extraordinary ability",
    timeline: "4-8 months",
    successRate: 65,
  },
];

const VisaSelectionModal = ({ isOpen, onClose, onSelect }: VisaSelectionModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold">Select Visa</DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[400px] pr-4">
          <div className="space-y-4">
            {visaOptions.map((visa) => (
              <button
                key={visa.id}
                onClick={() => onSelect(visa)}
                className={cn(
                  "w-full p-4 rounded-lg border border-border",
                  "hover:bg-accent/5 transition-colors duration-200",
                  "flex items-center space-x-4"
                )}
              >
                <div className="flex-shrink-0">
                  <img
                    src={`https://flagcdn.com/${visa.countryCode}.svg`}
                    alt={`${visa.country} flag`}
                    className="w-10 h-6 rounded shadow-sm"
                  />
                </div>
                <div className="flex-grow text-left">
                  <h3 className="font-medium text-lg">{visa.name}</h3>
                  <p className="text-sm text-muted-foreground">{visa.country}</p>
                </div>
              </button>
            ))}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default VisaSelectionModal;