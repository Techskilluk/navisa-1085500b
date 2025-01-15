import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import NavLinks from "./NavLinks";
import AuthButtons from "./AuthButtons";
import { useNavigate } from "react-router-dom";

interface MobileNavProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const MobileNav = ({ isOpen, onOpenChange }: MobileNavProps) => {
  const navigate = useNavigate();

  const handleConsultation = () => {
    onOpenChange(false); // Close mobile menu
    navigate('/consultation');
  };

  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="text-white md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] bg-background text-white">
        <SheetHeader>
          <SheetTitle className="text-white">Menu</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col space-y-4 mt-8">
          <NavLinks onLinkClick={() => onOpenChange(false)} />
          <Button 
            variant="outline" 
            onClick={handleConsultation}
            className="w-full"
          >
            Book Consultation
          </Button>
          <AuthButtons 
            onAction={() => onOpenChange(false)} 
            className="w-full"
          />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;