import { DocumentRequirement } from '../document-types';

export const academicRequirements: DocumentRequirement[] = [
  {
    type: "cv",
    label: "Academic CV",
    description: "Including publications and research",
    required: true,
    formats: ["pdf"],
    maxSize: 5000000
  },
  {
    type: "publications",
    label: "Key Publications",
    description: "Selected research papers",
    required: true,
    formats: ["pdf"],
    maxSize: 10000000
  },
  {
    type: "research",
    label: "Research Proposal",
    description: "If applicable",
    required: false,
    formats: ["pdf"],
    maxSize: 5000000
  }
];

export const academicResources = [
  {
    title: "Academic Visa Guide",
    description: "Information for researchers and academics",
    url: "https://www.gov.uk/government/publications/uk-points-based-immigration-system-sponsor-guidance"
  }
];