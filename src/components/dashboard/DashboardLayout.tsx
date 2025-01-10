import { useState } from "react";
import DashboardSidebar from "./DashboardSidebar";
import DashboardBanner from "./DashboardBanner";
import DashboardActions from "./DashboardActions";
import MobileMenuButton from "./MobileMenuButton";
import VisaSelectionModal from "./VisaSelectionModal";
import SelectedVisaDetails from "./SelectedVisaDetails";
import DocumentUpload from "../documents/DocumentUpload";
import ResourcesSection from "./ResourcesSection";
import AccountSection from "./AccountSection";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isVisaModalOpen, setIsVisaModalOpen] = useState(false);
  const [selectedVisa, setSelectedVisa] = useState<any>(null);
  const [showDocumentUpload, setShowDocumentUpload] = useState(false);
  const [activeSection, setActiveSection] = useState<'dashboard' | 'resources' | 'account'>('dashboard');

  const handleBookConsultation = () => {
    window.open('https://calendly.com/techskilluk/techskilluk-consultation', '_blank');
  };

  const handleStartApplication = () => {
    setIsVisaModalOpen(true);
  };

  const handleVisaSelection = (visa: any) => {
    setSelectedVisa(visa);
    setIsVisaModalOpen(false);
  };

  const handleContinueApplication = () => {
    setShowDocumentUpload(true);
  };

  if (showDocumentUpload && selectedVisa) {
    return (
      <DocumentUpload 
        visaType={selectedVisa.id} 
      />
    );
  }

  const renderContent = () => {
    switch (activeSection) {
      case 'resources':
        return <ResourcesSection />;
      case 'account':
        return <AccountSection />;
      default:
        return children;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <MobileMenuButton 
        isOpen={isSidebarOpen} 
        onClick={() => setIsSidebarOpen(!isSidebarOpen)} 
      />

      <DashboardSidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)}
        onSectionChange={setActiveSection}
        activeSection={activeSection}
      />
      
      <div className="lg:ml-64 min-h-screen flex flex-col">
        <DashboardBanner />

        {activeSection === 'dashboard' && (
          <DashboardActions
            onBookConsultation={handleBookConsultation}
            onStartApplication={handleStartApplication}
          />
        )}

        {selectedVisa && activeSection === 'dashboard' && (
          <div className="w-full p-4 mt-4 animate-fade-in">
            <div className="max-w-7xl mx-auto">
              <SelectedVisaDetails 
                visa={selectedVisa} 
                onContinue={handleContinueApplication}
              />
            </div>
          </div>
        )}

        <main className="flex-1 p-6 lg:p-8 mt-4">
          <div className="max-w-7xl mx-auto">
            {renderContent()}
          </div>
        </main>
      </div>

      <VisaSelectionModal
        isOpen={isVisaModalOpen}
        onClose={() => setIsVisaModalOpen(false)}
        onSelect={handleVisaSelection}
      />
    </div>
  );
};

export default DashboardLayout;