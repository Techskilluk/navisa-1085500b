import { FileText } from "lucide-react";
import DocumentChecklistItem from "./DocumentChecklistItem";

interface DocumentRequirement {
  type: string;
  label: string;
  required: boolean;
}

interface DocumentChecklistPanelProps {
  documents: DocumentRequirement[];
  uploadedFiles: Record<string, File>;
}

const DocumentChecklistPanel = ({ documents, uploadedFiles }: DocumentChecklistPanelProps) => {
  return (
    <div className="bg-card p-6 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Document Checklist</h2>
      <p className="text-sm text-muted-foreground mb-4">
        All documents must be in PDF, PNG, or JPG format and must not exceed 5mb
      </p>
      
      <div className="space-y-4">
        {documents.map((doc) => (
          <DocumentChecklistItem
            key={doc.type}
            label={doc.label}
            isComplete={!!uploadedFiles[doc.type]}
            required={doc.required}
          />
        ))}
      </div>
    </div>
  );
};

export default DocumentChecklistPanel;