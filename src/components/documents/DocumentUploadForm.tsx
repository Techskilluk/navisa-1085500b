import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
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
  const [uploadedFiles, setUploadedFiles] = useState<Record<string, File[]>>({});
  const [isUploading, setIsUploading] = useState(false);

  const handleFileUpload = (type: string, file: File) => {
    setUploadedFiles(prev => {
      // If the document type is recommendation_letter, handle multiple files
      if (type === 'recommendation_letter') {
        const existingFiles = prev[type] || [];
        return {
          ...prev,
          [type]: [...existingFiles, file]
        };
      }
      // For other document types, keep single file behavior
      return {
        ...prev,
        [type]: [file]
      };
    });
    onFileUpload(type, file);
  };

  const handleRemoveFile = (type: string, index: number) => {
    setUploadedFiles(prev => {
      const files = [...(prev[type] || [])];
      files.splice(index, 1);
      return {
        ...prev,
        [type]: files
      };
    });
  };

  const renderUploadZone = (doc: DocumentRequirement) => {
    const files = uploadedFiles[doc.type] || [];
    
    if (doc.type === 'recommendation_letter') {
      return (
        <div className="space-y-4">
          {files.map((file, index) => (
            <div key={index} className="flex items-center gap-2">
              <DocumentUploadZone
                onFileSelect={(file) => handleFileUpload(doc.type, file)}
                file={file}
                accept={doc.formats}
                maxSize={doc.maxSize / (1024 * 1024)}
              />
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleRemoveFile(doc.type, index)}
              >
                Remove
              </Button>
            </div>
          ))}
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => document.getElementById(`upload-${doc.type}`)?.click()}
            className="w-full"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Another Letter
          </Button>
          <input
            id={`upload-${doc.type}`}
            type="file"
            className="hidden"
            accept={doc.formats.join(',')}
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) {
                handleFileUpload(doc.type, file);
              }
            }}
          />
        </div>
      );
    }

    return (
      <DocumentUploadZone
        onFileSelect={(file) => handleFileUpload(doc.type, file)}
        file={files[0]}
        accept={doc.formats}
        maxSize={doc.maxSize / (1024 * 1024)}
      />
    );
  };

  return (
    <Card className="p-6 bg-card">
      <h2 className="text-xl font-semibold mb-4">Document Upload</h2>
      
      <div className="space-y-4">
        {documents.map((doc) => (
          <div key={doc.type} className="space-y-2">
            <label className="text-sm font-medium">
              {doc.label}
              {doc.required && <span className="text-destructive ml-1">*</span>}
            </label>
            {renderUploadZone(doc)}
            {doc.description && (
              <p className="text-sm text-muted-foreground">{doc.description}</p>
            )}
          </div>
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
