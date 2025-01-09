import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface AuthPromptModalProps {
  isOpen: boolean;
  onClose: () => void;
  onContinueAsGuest: () => void;
}

const AuthPromptModal = ({ isOpen, onClose, onContinueAsGuest }: AuthPromptModalProps) => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate("/signin", { 
      state: { 
        returnUrl: "/eligibility",
        preserveFormData: true 
      } 
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100 mb-4">
            <CheckCircle className="h-6 w-6 text-green-600" />
          </div>
          <DialogTitle className="text-center">Eligibility Check Complete!</DialogTitle>
          <DialogDescription className="text-center">
            Create an account to save your results and get personalized immigration guidance
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <h4 className="font-medium">With an account, you can:</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Save and access your eligibility results anytime</li>
              <li>Track your immigration journey progress</li>
              <li>Receive personalized recommendations</li>
              <li>Get notified about relevant opportunities</li>
            </ul>
          </div>
        </div>

        <DialogFooter className="flex-col gap-2 sm:flex-col">
          <Button onClick={handleSignIn} className="w-full">
            Create Account / Sign In
          </Button>
          <Button
            variant="outline"
            onClick={onContinueAsGuest}
            className="w-full"
          >
            Continue as Guest
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AuthPromptModal;