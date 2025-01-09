import { FC } from "react";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const VerificationConfirmation: FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8 text-center">
        <div 
          className="animate-scale-in flex flex-col items-center justify-center space-y-6"
          role="alert"
          aria-live="polite"
        >
          {/* Animated checkmark icon */}
          <div className="animate-bounce-slow">
            <CheckCircle className="w-20 h-20 text-green-500" aria-hidden="true" />
          </div>
          
          {/* Main heading */}
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Your account has been successfully verified!
          </h1>
          
          {/* Subtext */}
          <p className="text-lg text-white/80">
            Thank you for verifying your account. You can now access all features.
          </p>
          
          {/* Action button */}
          <Button
            onClick={() => navigate("/signin")}
            className="mt-8 w-full max-w-xs bg-white text-black hover:bg-white/90 transition-colors duration-300"
          >
            Continue to Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VerificationConfirmation;