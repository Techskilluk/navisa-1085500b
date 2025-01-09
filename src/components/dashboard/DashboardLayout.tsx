import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import DashboardSidebar from "./DashboardSidebar";
import { BookOpen, Calendar, LogOut } from "lucide-react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleBookConsultation = () => {
    window.open('https://calendly.com/techskilluk/techskilluk-consultation', '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar />
      <div className="ml-64 p-8">
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-semibold text-white">
              Welcome, {user?.email?.split('@')[0] || 'User'}
            </h1>
          </div>
          <div className="flex gap-4">
            <Button
              onClick={handleBookConsultation}
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Book Consultation
            </Button>
            <Button
              onClick={() => navigate('/eligibility')}
              variant="outline"
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