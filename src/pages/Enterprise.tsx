import PageHeader from "@/components/PageHeader";
import FeaturesSection from "@/components/enterprise/FeaturesSection";
import ProcessSection from "@/components/enterprise/ProcessSection";
import CallToAction from "@/components/enterprise/CallToAction";

const Enterprise = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader 
        title="Transform Your Immigration Practice"
        subtitle="Streamline operations, enhance client experience, and scale your business with NAVISA's enterprise solutions"
        ctaText="Start Free Trial"
        ctaLink="/enterprise/signup"
      />
      <FeaturesSection />
      <ProcessSection />
      <CallToAction />
    </div>
  );
};

export default Enterprise;