import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import DashboardSidebar from "./DashboardSidebar";
import { BookOpen, Calendar, Menu } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleBookConsultation = () => {
    window.open('https://calendly.com/techskilluk/techskilluk-consultation', '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Menu */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-background border-b border-border/10 px-4 flex items-center justify-between z-50">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 w-64">
            <DashboardSidebar />
          </SheetContent>
        </Sheet>
        <div className="flex items-center gap-2">
          <img src="/navisa-logo.svg" alt="Navisa" className="h-8" />
        </div>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <DashboardSidebar />
      </div>

      {/* Main Content */}
      <div className="lg:ml-64 p-4 lg:p-8 pt-20 lg:pt-8">
        <header className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-xl lg:text-2xl font-semibold text-white mb-2">
              Welcome back, {user?.email?.split('@')[0] || 'User'}! 👋
            </h1>
            <p className="text-sm lg:text-base text-muted-foreground">
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