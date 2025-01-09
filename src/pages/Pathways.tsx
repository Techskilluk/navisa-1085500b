import PageHeader from "@/components/PageHeader";
import VisaPathwaysSection from "@/components/pathways/VisaPathwaysSection";
import SponsorshipSection from "@/components/pathways/SponsorshipSection";
import TalentProgramsSection from "@/components/pathways/TalentProgramsSection";
import CallToActionSection from "@/components/pathways/CallToActionSection";

const Pathways = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader 
        title="Global Migration Pathways"
        subtitle="Explore comprehensive immigration routes, sponsorship opportunities, and talent programs"
      />
      <VisaPathwaysSection />
      <SponsorshipSection />
      <TalentProgramsSection />
      <CallToActionSection />
    </div>
  );
};

export default Pathways;