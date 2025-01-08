export const landingContent = {
  cards: [
    {
      title: "Visa & Immigration Services",
      subtitle: "Your gateway to international opportunities begins with a hassle-free visa and immigration process.",
      features: [
        {
          heading: "Visa Guidance",
          description: "Navigate complex visa requirements with step-by-step assistance"
        },
        {
          heading: "Immigration Support",
          description: "Get personalized advice on relocating, from documentation to cultural integration"
        },
        {
          heading: "Family Sponsorship",
          description: "Simplify the process of relocating with your loved ones"
        },
        {
          heading: "Legal Assistance",
          description: "Access a network of experts to resolve legal concerns and ensure compliance"
        }
      ],
      cta: "Your next chapter starts here. Let Navisa handle the details while you focus on your dreams."
    },
    {
      title: "Career Development & Global Recruitment",
      subtitle: "Expand your professional horizons or grow your team with the best international talent.",
      sections: [
        {
          sectionTitle: "For Professionals",
          features: [
            "Job search assistance tailored to global markets",
            "Resume building and interview coaching to help you stand out",
            "Insights into industries and opportunities across borders"
          ]
        },
        {
          sectionTitle: "For Employers & Recruiters",
          features: [
            "End-to-end recruitment solutions for hiring global talent",
            "Visa sponsorship and compliance support (Certificates of Sponsorship)",
            "Custom strategies to streamline talent acquisition and onboarding"
          ]
        }
      ],
      cta: "Whether you're advancing your career or building your team, Navisa paves the way."
    },
    {
      title: "Study Abroad Services",
      subtitle: "Turn your educational dreams into reality with our comprehensive study abroad solutions.",
      features: [
        {
          heading: "Program Selection",
          description: "Find the best universities and courses to match your goals"
        },
        {
          heading: "Student Visa Assistance",
          description: "Simplified guidance on student visa applications"
        },
        {
          heading: "Scholarships & Financial Aid",
          description: "Maximize funding opportunities for your education"
        },
        {
          heading: "Application Support",
          description: "Expert help in crafting strong applications to stand out to admissions committees"
        }
      ],
      cta: "From acceptance letters to visas, we're here to guide every step of your academic journey."
    },
    {
      title: "Partnerships for Immigration Consultants",
      subtitle: "Boost your services with Navisa's innovative tools and expertise.",
      features: [
        {
          heading: "Comprehensive Resources",
          description: "Streamline case management with our robust platform"
        },
        {
          heading: "White-Labeled Solutions",
          description: "Offer enhanced services under your brand"
        },
        {
          heading: "Process Automation",
          description: "Simplify client workflows for visa applications, compliance, and more"
        },
        {
          heading: "Expert Collaboration",
          description: "Partner with us for scalable, tailored solutions to meet client needs"
        }
      ],
      cta: "Scale your impact and grow your business with Navisa as your trusted partner."
    }
  ],
  whyChooseUs: {
    title: "Why Choose Navisa.co?",
    reasons: [
      "Expertise You Can Trust: Years of experience navigating global opportunities",
      "Tailored Solutions: Services customized to fit your unique needs",
      "Global Network: Access connections and insights worldwide"
    ]
  },
  finalCta: {
    title: "Ready to take the first step?",
    description: "Explore the world, grow your career, or expand your team with Navisa.co. Contact us today to get started!"
  }
} as const;

export type LandingContent = typeof landingContent;