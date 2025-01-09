import { useState } from "react";
import { Card } from "@/components/ui/card";
import { DocumentRequirement } from "@/types/documents";
import DocumentUploadZone from "./DocumentUploadZone";
import UploadProgress from "./UploadProgress";
import DocumentSubmissionHandler from "./DocumentSubmissionHandler";

interface DocumentUploadFormProps {
  visaType: string;
  documents: DocumentRequirement[];
  onFileUpload: (type: string, file: File) => void;
}

const DocumentUploadForm = ({
  visaType,
  documents,
  onFileUpload,
}: DocumentUploadFormProps) => {
  const [uploadedFiles, setUploadedFiles] = useState<Record<string, File>>({});
  const [isUploading, setIsUploading] = useState(false);

  const handleFileUpload = (type: string, file: File) => {
    setUploadedFiles(prev => ({ ...prev, [type]: file }));
    onFileUpload(type, file);
  };

  return (
    <Card className="p-6 bg-card">
      <h2 className="text-xl font-semibold mb-4">Document Upload</h2>
      
      {documents.map((doc) => (
        <DocumentUploadZone
          key={doc.type}
          document={doc}
          onFileUpload={handleFileUpload}
          uploadedFile={uploadedFiles[doc.type]}
          disabled={isUploading}
        />
      ))}

      <UploadProgress
        totalFiles={documents.length}
        uploadedFiles={Object.keys(uploadedFiles).length}
      />

      <DocumentSubmissionHandler
        visaType={visaType}
        uploadedFiles={uploadedFiles}
        isUploading={isUploading}
        setIsUploading={setIsUploading}
      />
    </Card>
  );
};

export default DocumentUploadForm;