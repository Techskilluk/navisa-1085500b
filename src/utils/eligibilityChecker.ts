import { EligibilityData } from "@/components/eligibility/EligibilityForm";

export const checkEligibility = (data: EligibilityData) => {
  console.log("Checking eligibility for:", data);
  
  // Basic validation
  if (!data.personalInfo?.fullName || !data.personalInfo?.email) {
    return { isEligible: false, reason: "Personal information is incomplete" };
  }

  if (!data.education?.degree || !data.education?.field) {
    return { isEligible: false, reason: "Education information is incomplete" };
  }

  if (!data.experience?.yearsOfExperience) {
    return { isEligible: false, reason: "Experience information is incomplete" };
  }

  // Business rules based on eligibility framework
  const yearsOfExperience = parseInt(data.experience.yearsOfExperience);
  const hasMinimumExperience = yearsOfExperience >= 3;
  const hasRelevantDegree = ["PhD", "Masters", "Bachelors"].includes(data.education.degree);
  const hasSkills = data.skills && data.skills.length >= 2;
  const hasAchievements = data.achievements && data.achievements.length >= 1;

  if (!hasMinimumExperience) {
    return { 
      isEligible: false, 
      reason: "Minimum 3 years of experience required" 
    };
  }

  if (!hasRelevantDegree) {
    return { 
      isEligible: false, 
      reason: "Eligible degree qualification required" 
    };
  }

  if (!hasSkills) {
    return { 
      isEligible: false, 
      reason: "Minimum 2 relevant skills required" 
    };
  }

  if (!hasAchievements) {
    return { 
      isEligible: false, 
      reason: "At least 1 notable achievement required" 
    };
  }

  return { isEligible: true, reason: "All eligibility criteria met" };
};