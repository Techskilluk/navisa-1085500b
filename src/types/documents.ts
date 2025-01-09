export interface DocumentRequirement {
  type: string;
  label: string;
  required: boolean;
  maxSize: number;
  formats: string[];
  description?: string;
}

export interface VisaDocuments {
  [key: string]: {
    requirements: DocumentRequirement[];
    resources: {
      title: string;
      description: string;
      url: string;
    }[];
  };
}

export const VISA_DOCUMENTS: VisaDocuments = {
  "global-talent": {
    requirements: [
      {
        type: "resume",
        label: "Resume",
        required: true,
        maxSize: 5,
        formats: [".pdf", ".doc", ".docx"],
        description: "Your professional CV highlighting key achievements"
      },
      {
        type: "personal-statement",
        label: "Personal Statement",
        required: true,
        maxSize: 5,
        formats: [".pdf", ".doc", ".docx"],
        description: "Statement explaining your expertise and achievements"
      },
      {
        type: "recommendation",
        label: "Letters of Recommendation",
        required: true,
        maxSize: 5,
        formats: [".pdf"],
        description: "Minimum 2 letters from recognized experts"
      },
      {
        type: "portfolio",
        label: "Achievement Portfolio",
        required: true,
        maxSize: 5,
        formats: [".pdf"],
        description: "Evidence of professional recognition and impact"
      }
    ],
    resources: [
      {
        title: "Resume Template",
        description: "Tailored template for Global Talent visa applications",
        url: "/templates/global-talent-resume.pdf"
      },
      {
        title: "Recommendation Letter Guide",
        description: "Guidelines for obtaining strong recommendation letters",
        url: "/templates/recommendation-guide.pdf"
      }
    ]
  },
  "express-entry": {
    requirements: [
      {
        type: "resume",
        label: "Resume",
        required: true,
        maxSize: 5,
        formats: [".pdf", ".doc", ".docx"],
        description: "Canadian-style resume format"
      },
      {
        type: "personal-statement",
        label: "Personal Statement",
        required: true,
        maxSize: 5,
        formats: [".pdf", ".doc", ".docx"],
        description: "Statement of purpose for immigration"
      },
      {
        type: "language",
        label: "Language Proficiency Results",
        required: true,
        maxSize: 5,
        formats: [".pdf"],
        description: "IELTS or CELPIP test results"
      },
      {
        type: "education",
        label: "Educational Credentials",
        required: true,
        maxSize: 5,
        formats: [".pdf"],
        description: "Degree certificates and transcripts"
      },
      {
        type: "funds",
        label: "Proof of Funds",
        required: true,
        maxSize: 5,
        formats: [".pdf"],
        description: "Bank statements or other financial documents"
      }
    ],
    resources: [
      {
        title: "Canadian Resume Guide",
        description: "Format your resume for Canadian employers",
        url: "/templates/canadian-resume.pdf"
      },
      {
        title: "Funds Calculator",
        description: "Calculate required proof of funds",
        url: "/templates/funds-calculator.pdf"
      }
    ]
  }
};