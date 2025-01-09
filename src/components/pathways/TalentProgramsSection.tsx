import { Users, Building2, Globe } from "lucide-react";
import VisaPathwayCard from "@/components/visa/VisaPathwayCard";

const TalentProgramsSection = () => {
  return (
    <section className="py-12 px-4">
      <h2 className="text-2xl font-bold text-white mb-8 max-w-7xl mx-auto">Global Talent Programs</h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <VisaPathwayCard
          title="High Potential Individual"
          description="For recent graduates from top global universities"
          icon={Users}
          countryCode="gb"
          requirements={[
            { label: "Education", value: "Top university graduate" },
            { label: "Graduation", value: "Last 5 years" },
            { label: "Degree Level", value: "Bachelor's or higher" }
          ]}
          processingTime="2-3 weeks"
          validityPeriod="2 years"
          officialDocsUrl="https://www.gov.uk/high-potential-individual-visa"
        />

        <VisaPathwayCard
          title="Scale-up Talent Program"
          description="Fast-growing companies hiring international talent"
          icon={Building2}
          countryCode="gb"
          requirements={[
            { label: "Company", value: "Scale-up sponsor" },
            { label: "Salary", value: "£33,000+" },
            { label: "Skills", value: "Graduate level" }
          ]}
          processingTime="2-4 weeks"
          validityPeriod="2 years"
          minimumThreshold="£33,000 annual salary"
          officialDocsUrl="https://www.gov.uk/scale-up-visa"
        />

        <VisaPathwayCard
          title="Global Business Mobility"
          description="For senior executives and specialists in multinational companies"
          icon={Globe}
          countryCode="gb"
          requirements={[
            { label: "Position", value: "Senior/Specialist role" },
            { label: "Experience", value: "12 months with company" },
            { label: "Salary", value: "Meet threshold" }
          ]}
          processingTime="3-5 weeks"
          validityPeriod="5 years"
          minimumThreshold="£42,400 annual salary"
          officialDocsUrl="https://www.gov.uk/global-business-mobility-visa"
        />
      </div>
    </section>
  );
};

export default TalentProgramsSection;