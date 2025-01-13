import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import PasswordRecoveryForm from "@/components/auth/PasswordRecoveryForm";
import AuthHero from "@/components/auth/AuthHero";

const PasswordRecovery = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleStepChange = (step: number) => {
    setCurrentStep(step);
  };

  const handleCancel = () => {
    navigate("/signin");
  };

  const handleError = (error: string) => {
    toast({
      variant: "destructive",
      title: "Error",
      description: error,
    });
  };

  return (
    <div className="min-h-screen bg-white flex">
      <AuthHero />
      <PasswordRecoveryForm
        currentStep={currentStep}
        onStepChange={handleStepChange}
        onCancel={handleCancel}
        onError={handleError}
      />
    </div>
  );
};

export default PasswordRecovery;