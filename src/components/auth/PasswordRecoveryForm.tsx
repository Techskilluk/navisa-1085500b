import { useState } from "react";
import { ArrowLeft, Mail, Phone, Lock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { supabase } from "@/integrations/supabase/client";

interface PasswordRecoveryFormProps {
  currentStep: number;
  onStepChange: (step: number) => void;
  onCancel: () => void;
  onError: (error: string) => void;
}

const PasswordRecoveryForm = ({
  currentStep,
  onStepChange,
  onCancel,
  onError,
}: PasswordRecoveryFormProps) => {
  const [email, setEmail] = useState("");
  const [verificationMethod, setVerificationMethod] = useState("email");
  const [verificationCode, setVerificationCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const progress = (currentStep / 5) * 100;

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`,
      });

      if (error) throw error;
      onStepChange(2);
    } catch (error: any) {
      setError(error.message);
      onError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerificationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, verify the code here
    onStepChange(4);
  };

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const { error } = await supabase.auth.updateUser({
        password: newPassword,
      });

      if (error) throw error;
      onStepChange(5);
    } catch (error: any) {
      setError(error.message);
      onError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <form onSubmit={handleEmailSubmit} className="space-y-4">
            <div className="chat-bubble bg-background p-4 rounded-lg max-w-[150px]">
              <Label htmlFor="email">Enter your email address</Label>
            </div>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
              className="w-full"
            />
            <div className="flex justify-between">
              <Button type="button" variant="ghost" onClick={onCancel}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>
              <Button type="submit" disabled={isLoading}>
                {isLoading ? "Sending..." : "Continue"}
              </Button>
            </div>
          </form>
        );

      case 2:
        return (
          <form onSubmit={(e) => { e.preventDefault(); onStepChange(3); }} className="space-y-4">
            <div className="chat-bubble bg-background p-4 rounded-lg max-w-[150px]">
              <Label>Choose verification method</Label>
            </div>
            <RadioGroup
              value={verificationMethod}
              onValueChange={setVerificationMethod}
              className="space-y-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="email" id="email" />
                <Label htmlFor="email">
                  <Mail className="inline-block mr-2 h-4 w-4" />
                  Email
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="phone" id="phone" />
                <Label htmlFor="phone">
                  <Phone className="inline-block mr-2 h-4 w-4" />
                  Phone
                </Label>
              </div>
            </RadioGroup>
            <div className="flex justify-between">
              <Button type="button" variant="ghost" onClick={() => onStepChange(1)}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>
              <Button type="submit">Continue</Button>
            </div>
          </form>
        );

      case 3:
        return (
          <form onSubmit={handleVerificationSubmit} className="space-y-4">
            <div className="chat-bubble bg-background p-4 rounded-lg max-w-[150px]">
              <Label htmlFor="code">Enter verification code</Label>
            </div>
            <Input
              id="code"
              type="text"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              placeholder="Enter code"
              required
              className="w-full"
            />
            <div className="flex justify-between">
              <Button type="button" variant="ghost" onClick={() => onStepChange(2)}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>
              <Button type="submit">Verify</Button>
            </div>
          </form>
        );

      case 4:
        return (
          <form onSubmit={handlePasswordSubmit} className="space-y-4">
            <div className="chat-bubble bg-background p-4 rounded-lg max-w-[150px]">
              <Label>Create new password</Label>
            </div>
            <div className="space-y-2">
              <Input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="New password"
                required
              />
              <Input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm password"
                required
              />
            </div>
            <div className="flex justify-between">
              <Button type="button" variant="ghost" onClick={() => onStepChange(3)}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>
              <Button type="submit" disabled={isLoading}>
                {isLoading ? "Updating..." : "Update Password"}
              </Button>
            </div>
          </form>
        );

      case 5:
        return (
          <div className="space-y-4 text-center">
            <CheckCircle className="mx-auto h-12 w-12 text-green-500" />
            <h2 className="text-xl font-semibold">Password Updated!</h2>
            <p className="text-muted-foreground">
              Your password has been successfully updated.
            </p>
            <Button onClick={onCancel} className="w-full">
              Return to Sign In
            </Button>
          </div>
        );
    }
  };

  return (
    <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
      <div className="w-full max-w-md space-y-8">
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold tracking-tight">
            Password Recovery
          </h1>
          <p className="text-sm text-muted-foreground">
            Follow the steps to recover your password
          </p>
        </div>

        <Progress value={progress} className="w-full" />

        {error && (
          <Alert variant="destructive">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {renderStep()}

        <div className="text-center">
          <a
            href="/support"
            className="text-sm text-muted-foreground hover:text-primary"
          >
            Need help? Contact support
          </a>
        </div>
      </div>
    </div>
  );
};

export default PasswordRecoveryForm;