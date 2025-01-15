import { DocumentRequirement } from '../document-types';

export const healthcareRequirements: DocumentRequirement[] = [
  {
    type: "cv",
    label: "Professional CV",
    description: "Detailed healthcare experience and qualifications",
    required: true,
    formats: ["pdf"],
    maxSize: 5000000
  },
  {
    type: "qualification",
    label: "Medical Qualification",
    description: "Medical degree or nursing qualification",
    required: true,
    formats: ["pdf"],
    maxSize: 5000000
  },
  {
    type: "registration",
    label: "Professional Registration",
    description: "GMC/NMC registration certificate",
    required: true,
    formats: ["pdf"],
    maxSize: 5000000
  },
  {
    type: "experience",
    label: "Experience Certificates",
    description: "Clinical experience documentation",
    required: true,
    formats: ["pdf"],
    maxSize: 5000000
  }
];

export const healthcareResources = [
  {
    title: "Healthcare Worker Visa",
    description: "Guide for medical professionals",
    url: "https://www.gov.uk/health-care-worker-visa"
  }
];