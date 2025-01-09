import PageHeader from "@/components/PageHeader";
import VisaPathwayCard from "@/components/visa/VisaPathwayCard";
import { ArrowRight, Briefcase, Building2, Globe, GraduationCap, Landmark, UserPlus, Users, Award, Handshake, Rocket, DollarSign } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Pathways = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <PageHeader 
        title="Global Migration Pathways"
        subtitle="Explore comprehensive immigration routes, sponsorship opportunities, and talent programs"
      />
      
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

      {/* Sponsorship Jobs Section */}
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

      {/* Talent Programs Section */}
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

      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Global Journey?
          </h2>
          <p className="text-xl text-white/80 mb-12">
            Take our eligibility assessment to find the best options for your profile
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate("/eligibility")}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white hover:bg-white/90 text-black h-12 px-8"
            >
              Start Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button
              onClick={() => navigate("/how-it-works")}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-white text-white hover:bg-white/10 h-12 px-8"
            >
              Learn More
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pathways;
