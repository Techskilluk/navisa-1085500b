export interface DocumentRequirement {
  type: string;
  label: string;
  required: boolean;
  maxSize: number;
  formats: string[];
  description?: string;
  multiple?: boolean;
  maxFiles?: number;
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