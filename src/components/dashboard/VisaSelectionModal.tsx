import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

interface VisaOption {
  id: string;
  title: string;
  description: string;
  rating: number;
  processingTime: string;
}

interface VisaSelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (visa: VisaOption) => void;
}

const visaOptions: VisaOption[] = [
  {
    id: "global-talent",
    title: "Global Talent Visa (UK)",
    description: "For exceptional talent in science, engineering, humanities, and digital technology",
    rating: 4.5,
    processingTime: "3-8 weeks",
  },
  {
    id: "startup",
    title: "Start-up Visa (UK)",
    description: "For entrepreneurs launching an innovative business",
    rating: 4.2,
    processingTime: "3-4 weeks",
  },
  {
    id: "eb1",
    title: "EB-1 Visa (USA)",
    description: "For individuals with extraordinary ability in sciences, arts, education, business, or athletics",
    rating: 4.0,
    processingTime: "6-8 months",
  },
];

const VisaSelectionModal = ({ isOpen, onClose, onSelect }: VisaSelectionModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Choose Your Visa Pathway</DialogTitle>
          <DialogDescription>
            Select the visa type that best matches your profile and aspirations
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 mt-4">
          {visaOptions.map((visa) => (
            <div
              key={visa.id}
              className="p-4 border rounded-lg hover:bg-accent/5 transition-colors cursor-pointer"
              onClick={() => onSelect(visa)}
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold">{visa.title}</h3>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm">{visa.rating}</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-2">{visa.description}</p>
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">Processing time: {visa.processingTime}</span>
                <Button variant="ghost" size="sm">
                  Select <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VisaSelectionModal;