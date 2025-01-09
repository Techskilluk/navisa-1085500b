import { Briefcase, UserPlus, Award } from "lucide-react";
import VisaPathwayCard from "@/components/visa/VisaPathwayCard";

const SponsorshipSection = () => {
  return (
    <section className="py-12 px-4 bg-accent/5">
      <h2 className="text-2xl font-bold text-white mb-8 max-w-7xl mx-auto">Sponsorship Opportunities</h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <VisaPathwayCard
          title="Tech Talent Sponsorship"
          description="Fast-track sponsorship for software engineers, data scientists, and tech professionals"
          icon={Briefcase}
          countryCode="gb"
          requirements={[
            { label: "Experience", value: "2+ years in tech" },
            { label: "Skills", value: "In-demand tech stack" },
            { label: "Language", value: "English proficiency" }
          ]}
          processingTime="4-6 weeks"
          validityPeriod="3-5 years"
          minimumThreshold="£35,000+ annual salary"
          officialDocsUrl="https://www.gov.uk/skilled-worker-visa"
        />

        <VisaPathwayCard
          title="Healthcare Professionals"
          description="Dedicated sponsorship route for doctors, nurses, and healthcare specialists"
          icon={UserPlus}
          countryCode="gb"
          requirements={[
            { label: "Qualification", value: "Medical degree/certification" },
            { label: "Registration", value: "GMC/NMC registration" },
            { label: "Experience", value: "Clinical experience" }
          ]}
          processingTime="4-8 weeks"
          validityPeriod="3 years"
          minimumThreshold="NHS pay scale"
          officialDocsUrl="https://www.gov.uk/health-care-worker-visa"
        />

        <VisaPathwayCard
          title="Academic Sponsorship"
          description="For researchers, professors, and academic professionals"
          icon={Award}
          countryCode="gb"
          requirements={[
            { label: "Qualification", value: "PhD or equivalent" },
            { label: "Research", value: "Publication record" },
            { label: "Position", value: "Academic role offer" }
          ]}
          processingTime="6-8 weeks"
          validityPeriod="Up to 5 years"
          officialDocsUrl="https://www.gov.uk/government/publications/uk-points-based-immigration-system-sponsor-guidance"
        />
      </div>
    </section>
  );
};

export default SponsorshipSection;