import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import DocumentChecklistPanel from "./DocumentChecklistPanel";
import DocumentUploadForm from "./DocumentUploadForm";
import DocumentResources from "./DocumentResources";

interface DocumentRequirement {
  type: string;
  label: string;
  required: boolean;
  maxSize: number;
  formats: string[];
}

const VISA_DOCUMENTS: Record<string, DocumentRequirement[]> = {
  "express-entry": [
    { type: "resume", label: "Resume", required: true, maxSize: 5, formats: [".pdf", ".doc", ".docx"] },
    { type: "personal-statement", label: "Personal Statement", required: true, maxSize: 5, formats: [".pdf", ".doc", ".docx"] },
    { type: "recommendation", label: "Letter of Recommendation", required: true, maxSize: 5, formats: [".pdf"] },
    { type: "degree", label: "Degree Certificate", required: true, maxSize: 5, formats: [".pdf", ".jpg", ".png"] },
    { type: "language", label: "Language Proficiency Result", required: true, maxSize: 5, formats: [".pdf"] },
    { type: "funds", label: "Proof of Funds", required: true, maxSize: 5, formats: [".pdf"] },
  ],
  // Add more visa types here
};

interface DocumentUploadProps {
  visaType: string;
}

const DocumentUpload = ({ visaType }: DocumentUploadProps) => {
  const [uploadedFiles, setUploadedFiles] = useState<Record<string, File>>({});
  const navigate = useNavigate();

  const documents = VISA_DOCUMENTS[visaType] || [];

  const resources = [
    {
      title: "Resume Template",
      description: "A professional template tailored for your visa application",
      url: "/templates/resume.pdf"
    },
    {
      title: "Personal Statement Guide",
      description: "Guidelines and examples for writing your personal statement",
      url: "/templates/personal-statement.pdf"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <Button
          variant="ghost"
          onClick={() => navigate('/dashboard')}
          className="mb-4"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to dashboard
        </Button>
        
        <h1 className="text-2xl font-bold mb-2">Required documents</h1>
        <p className="text-muted-foreground">
          Based on your selected visa pathway ({visaType}), we've generated a personalized list of required documents and resources to guide you
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <DocumentChecklistPanel 
          documents={documents}
          uploadedFiles={uploadedFiles}
        />

        <div className="md:col-span-2">
          <DocumentUploadForm 
            visaType={visaType}
            documents={documents}
          />
        </div>
      </div>

      <div className="mt-8">
        <DocumentResources resources={resources} />
      </div>
    </div>
  );
};

export default DocumentUpload;