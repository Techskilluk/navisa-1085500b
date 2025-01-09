import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import DashboardSidebar from "./DashboardSidebar";
import { BookOpen, Calendar } from "lucide-react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleBookConsultation = () => {
    window.open('https://calendly.com/techskilluk/techskilluk-consultation', '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar />
      <div className="ml-64 p-8">
        <header className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-semibold text-white mb-2">
              Welcome back, {user?.email?.split('@')[0] || 'User'}! 👋
            </h1>
            <p className="text-muted-foreground">
              Manage your visa application process and track your progress
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              onClick={handleBookConsultation}
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground w-full sm:w-auto"
              size="lg"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Book Consultation
            </Button>
            <Button
              onClick={() => navigate('/eligibility')}
              variant="outline"
              size="lg"
              className="w-full sm:w-auto"
            >
              <BookOpen className="w-4 h-4 mr-2" />
              Start Application
            </Button>
          </div>
        </header>
        <main>{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;