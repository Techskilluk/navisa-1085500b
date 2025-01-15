import { DocumentRequirement } from '../document-types';

export const highPotentialRequirements: DocumentRequirement[] = [
  {
    type: "degree",
    label: "Degree Certificate",
    description: "From eligible university",
    required: true,
    formats: ["pdf"],
    maxSize: 5000000
  },
  {
    type: "transcript",
    label: "Academic Transcript",
    description: "Official transcript with grades",
    required: true,
    formats: ["pdf"],
    maxSize: 5000000
  }
];

export const highPotentialResources = [
  {
    title: "HPI Visa Guide",
    description: "Eligibility and application process",
    url: "https://www.gov.uk/high-potential-individual-visa"
  }
];