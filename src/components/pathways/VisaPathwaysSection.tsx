import { GraduationCap, Rocket, Building2, Briefcase, DollarSign } from "lucide-react";
import VisaPathwayCard from "@/components/visa/VisaPathwayCard";

const VisaPathwaysSection = () => {
  return (
    <section className="py-12 px-4">
      <h2 className="text-2xl font-bold text-white mb-8 max-w-7xl mx-auto">Visa Pathways</h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <VisaPathwayCard
          title="Global Talent Visa"
          description="For exceptional talent in science, engineering, humanities, and digital technology"
          icon={GraduationCap}
          countryCode="gb"
          requirements={[
            { label: "Experience", value: "3+ years in field" },
            { label: "Achievements", value: "Significant contributions" },
            { label: "Endorsement", value: "Required from designated body" }
          ]}
          processingTime="3-8 weeks"
          validityPeriod="Up to 5 years"
          officialDocsUrl="https://www.gov.uk/global-talent"
        />

        <VisaPathwayCard
          title="Start-up Visa"
          description="For entrepreneurs launching an innovative business"
          icon={Rocket}
          countryCode="GB"
          requirements={[
            { label: "Business Plan", value: "Required" },
            { label: "Innovation", value: "Must be unique/viable" },
            { label: "Endorsement", value: "From approved body" }
          ]}
          processingTime="3-4 weeks"
          validityPeriod="2 years"
          officialDocsUrl="https://www.gov.uk/start-up-visa"
        />

        <VisaPathwayCard
          title="Scale-up Visa"
          description="For talented individuals joining high-growth UK companies"
          icon={Building2}
          countryCode="GB"
          requirements={[
            { label: "Job Offer", value: "From approved scale-up" },
            { label: "Salary", value: "£33,000+ per year" },
            { label: "Skills", value: "Graduate level" }
          ]}
          processingTime="2-3 weeks"
          validityPeriod="2 years"
          minimumThreshold="£33,000 annual salary"
          officialDocsUrl="https://www.gov.uk/scale-up-visa"
        />

        <VisaPathwayCard
          title="EB-1 Visa (USA)"
          description="For individuals with extraordinary ability in sciences, arts, education, business, or athletics"
          icon={Briefcase}
          countryCode="US"
          requirements={[
            { label: "Achievement", value: "International recognition" },
            { label: "Evidence", value: "Awards/publications" },
            { label: "Impact", value: "Field leadership" }
          ]}
          processingTime="6-8 months"
          validityPeriod="Permanent"
          officialDocsUrl="https://www.uscis.gov/working-in-the-united-states/permanent-workers/employment-based-immigration-first-preference-eb-1"
        />

        <VisaPathwayCard
          title="Golden Visa"
          description="Long-term residency through significant investment"
          icon={DollarSign}
          countryCode="AE"
          requirements={[
            { label: "Investment", value: "AED 2M+ in real estate" },
            { label: "Business", value: "Company ownership" },
            { label: "Maintenance", value: "Investment period" }
          ]}
          processingTime="2-3 weeks"
          validityPeriod="10 years"
          minimumThreshold="AED 2,000,000"
          officialDocsUrl="https://u.ae/en/information-and-services/visa-and-emirates-id/residence-visa/getting-a-golden-visa"
        />
      </div>
    </section>
  );
};

export default VisaPathwaysSection;