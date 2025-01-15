import { DocumentRequirement } from '../document-types';

export const techTalentRequirements: DocumentRequirement[] = [
  {
    type: "cv",
    label: "Technical CV",
    description: "Highlighting technical skills and projects",
    required: true,
    formats: ["pdf"],
    maxSize: 5000000
  },
  {
    type: "certificates",
    label: "Technical Certifications",
    description: "Relevant technical qualifications",
    required: false,
    formats: ["pdf"],
    maxSize: 5000000
  }
];

export const techTalentResources = [
  {
    title: "Tech Talent Guide",
    description: "Sponsorship process for tech roles",
    url: "https://www.gov.uk/skilled-worker-visa"
  }
];