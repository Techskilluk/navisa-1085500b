import { Button } from "@/components/ui/button";
import { LogIn, LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/components/ui/use-toast";

interface AuthButtonsProps {
  onAction?: () => void;
  className?: string;
}

const AuthButtons = ({ onAction, className }: AuthButtonsProps) => {
  const { user, signOut } = useAuth();
  const { toast } = useToast();

  const handleSignOut = async () => {
    try {
      await signOut();
      toast({
        title: "Signed out successfully",
        description: "You have been signed out of your account.",
      });
      if (onAction) onAction();
    } catch (error) {
      console.error("Error signing out:", error);
      toast({
        variant: "destructive",
        title: "Error signing out",
        description: "There was a problem signing you out. Please try again.",
      });
    }
  };

  if (user) {
    return (
      <Button 
        onClick={() => {
          handleSignOut();
          if (onAction) onAction();
        }}
        className={`bg-white text-black hover:bg-white/90 transition-colors ${className}`}
      >
        Sign out
        <LogOut className="w-4 h-4 ml-2" />
      </Button>
    );
  }

  return (
    <Link to="/signin" onClick={onAction}>
      <Button className={`bg-white text-black hover:bg-white/90 transition-colors ${className}`}>
        Sign in
        <LogIn className="w-4 h-4 ml-2" />
      </Button>
    </Link>
  );
};

export default AuthButtons;