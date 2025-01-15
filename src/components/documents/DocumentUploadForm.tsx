import { useState } from "react";
import { Card } from "@/components/ui/card";
import type { DocumentRequirement } from "@/types/documents";
import UploadProgress from "./UploadProgress";
import DocumentSubmissionHandler from "./DocumentSubmissionHandler";
import FileUploadField from "./FileUploadField";

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
  const [uploadedFiles, setUploadedFiles] = useState<Record<string, File[]>>({});
  const [isUploading, setIsUploading] = useState(false);

  const handleFileUpload = (type: string, file: File) => {
    console.log(`Handling file upload for type: ${type}`, file);
    setUploadedFiles(prev => {
      const existingFiles = prev[type] || [];
      const doc = documents.find(d => d.type === type);
      
      if (doc?.multiple && doc?.maxFiles) {
        if (existingFiles.length >= doc.maxFiles) {
          return prev;
        }
        return {
          ...prev,
          [type]: [...existingFiles, file]
        };
      }
      
      return {
        ...prev,
        [type]: [file]
      };
    });
    onFileUpload(type, file);
  };

  const handleRemoveFile = (type: string, index: number) => {
    console.log(`Removing file at index ${index} for type: ${type}`);
    setUploadedFiles(prev => {
      const files = [...(prev[type] || [])];
      files.splice(index, 1);
      return {
        ...prev,
        [type]: files
      };
    });
  };

  return (
    <Card className="p-6 bg-card">
      <h2 className="text-xl font-semibold mb-4">Document Upload</h2>
      
      <div className="space-y-4">
        {documents.map((doc) => (
          <FileUploadField
            key={doc.type}
            document={doc}
            files={uploadedFiles[doc.type] || []}
            onFileSelect={(file) => handleFileUpload(doc.type, file)}
            onRemoveFile={(index) => handleRemoveFile(doc.type, index)}
          />
        ))}
      </div>

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