import { DocumentRequirement } from '../document-types';

export const scaleUpRequirements: DocumentRequirement[] = [
  {
    type: "job_offer",
    label: "Job Offer",
    description: "From approved Scale-up sponsor",
    required: true,
    formats: ["pdf"],
    maxSize: 5000000
  },
  {
    type: "qualification",
    label: "Qualifications",
    description: "Relevant certificates and transcripts",
    required: true,
    formats: ["pdf"],
    maxSize: 5000000
  }
];

export const scaleUpResources = [
  {
    title: "Scale-up Visa Guide",
    description: "Requirements and process",
    url: "https://www.gov.uk/scale-up-visa"
  }
];