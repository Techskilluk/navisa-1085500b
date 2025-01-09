import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import DashboardSidebar from "./DashboardSidebar";
import { BookOpen, Calendar } from "lucide-react";
import { useState } from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleBookConsultation = () => {
    window.open('https://calendly.com/techskilluk/techskilluk-consultation', '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-accent/10 text-white"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isSidebarOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      <DashboardSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      
      <div className="lg:ml-64 min-h-screen flex flex-col">
        {/* Banner Section */}
        <header className="w-full bg-card/50 backdrop-blur-sm border-b border-border/10 p-6 lg:p-8 sticky top-0 z-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
              <div>
                <h1 className="text-xl lg:text-2xl font-semibold text-white mb-2">
                  Welcome back, {user?.email?.split('@')[0] || 'User'}! 👋
                </h1>
                <p className="text-sm lg:text-base text-muted-foreground">
                  Manage your visa application process and track your progress
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* Action Buttons Section */}
        <div className="w-full bg-background/50 border-b border-border/10 p-4">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-center gap-3">
            <Button
              onClick={handleBookConsultation}
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
              size="lg"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Book Consultation
            </Button>
            <Button
              onClick={() => navigate('/eligibility')}
              variant="outline"
              size="lg"
            >
              <BookOpen className="w-4 h-4 mr-2" />
              Start Application
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <main className="flex-1 p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;