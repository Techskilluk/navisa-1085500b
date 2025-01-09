import PageHeader from "@/components/PageHeader";
import VisaPathwayCard from "@/components/visa/VisaPathwayCard";
import { Briefcase, Rocket, Building2, GraduationCap, DollarSign } from "lucide-react";

const Pathways = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader 
        title="Global Visa Pathways"
        subtitle="Explore comprehensive immigration routes tailored to your professional profile"
      />
      
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Talent/Skilled Worker Visa */}
          <VisaPathwayCard
            title="Global Talent Visa"
            description="For exceptional talent in science, engineering, humanities, and digital technology"
            icon={GraduationCap}
            countryCode="GB"
            requirements={[
              { label: "Experience", value: "3+ years in field" },
              { label: "Achievements", value: "Significant contributions" },
              { label: "Endorsement", value: "Required from designated body" }
            ]}
            processingTime="3-8 weeks"
            validityPeriod="Up to 5 years"
            officialDocsUrl="https://www.gov.uk/global-talent"
          />

          {/* Startup Visa */}
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

          {/* Scale-up Visa */}
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

          {/* Employment-based Immigration */}
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

          {/* Investment Visa */}
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

      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-6">
            Not Sure Which Pathway Is Right for You?
          </h2>
          <p className="text-xl text-white/80 mb-12">
            Take our eligibility assessment to find the best options for your profile
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/eligibility"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white hover:bg-white/90 text-black h-12 px-8"
            >
              Start Assessment
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-2 h-5 w-5"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
            <a
              href="/how-it-works"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-white text-white hover:bg-white/10 h-12 px-8"
            >
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-2 h-5 w-5"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pathways;