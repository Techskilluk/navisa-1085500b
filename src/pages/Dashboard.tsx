import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FileText } from "lucide-react";
import VisaSelectionModal from "@/components/visa/VisaSelectionModal";
import SelectedVisaDetails from "@/components/visa/SelectedVisaDetails";
import { useToast } from "@/components/ui/use-toast";

const Dashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVisa, setSelectedVisa] = useState<any>(null);

  useEffect(() => {
    if (!user) {
      navigate("/signin");
    }
  }, [user, navigate]);

  const handleStartApplication = () => {
    setIsModalOpen(true);
  };

  const handleVisaSelect = (visa: any) => {
    setSelectedVisa(visa);
    setIsModalOpen(false);
    toast({
      title: "Visa Selected",
      description: `You've selected the ${visa.name} pathway. Let's get started!`,
    });
  };

  const handleDeleteVisa = () => {
    setSelectedVisa(null);
    toast({
      title: "Application Removed",
      description: "Your visa application has been removed.",
    });
  };

  const handleContinueApplication = () => {
    navigate("/eligibility");
  };

  if (!user) return null;

  return (
    <DashboardLayout onStartApplication={handleStartApplication}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-card">
          <CardHeader>
            <CardTitle>Active Applications</CardTitle>
            <CardDescription>
              Track your ongoing applications
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center min-h-[300px] text-center">
            {!selectedVisa ? (
              <>
                <FileText className="h-16 w-16 text-muted mb-4" />
                <p className="text-muted">
                  You currently do not have any active/pending applications
                </p>
              </>
            ) : (
              <SelectedVisaDetails
                visa={selectedVisa}
                onContinue={handleContinueApplication}
                onDelete={handleDeleteVisa}
              />
            )}
          </CardContent>
        </Card>
      </div>

      <VisaSelectionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSelect={handleVisaSelect}
      />
    </DashboardLayout>
  );
};

export default Dashboard;