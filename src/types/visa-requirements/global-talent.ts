import { DocumentRequirement } from '../document-types';

export const globalTalentRequirements: DocumentRequirement[] = [
  {
    type: "cv",
    label: "Curriculum Vitae",
    description: "Detailed CV highlighting achievements and experience",
    required: true,
    formats: ["pdf"],
    maxSize: 5000000
  },
  {
    type: "recommendation_letter",
    label: "Letters of Recommendation",
    description: "Up to 3 letters from academic or professional references. Each letter must be signed and on official letterhead.",
    required: true,
    formats: ["pdf"],
    maxSize: 5000000,
    multiple: true,
    maxFiles: 3
  },
  {
    type: "portfolio",
    label: "Portfolio of Work",
    description: "Evidence of significant contributions (up to 3 files)",
    required: true,
    formats: ["pdf"],
    maxSize: 10000000,
    multiple: true,
    maxFiles: 3
  }
];

export const globalTalentResources = [
  {
    title: "Global Talent Visa Guide",
    description: "Official guidance on application process",
    url: "https://www.gov.uk/global-talent"
  }
];