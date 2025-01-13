import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Trash2 } from "lucide-react";
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
    console.log(`Handling file upload for type: ${type}`, file);
    setUploadedFiles(prev => {
      if (type === 'recommendation_letter') {
        const existingFiles = prev[type] || [];
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

  const renderUploadZone = (doc: DocumentRequirement) => {
    const files = uploadedFiles[doc.type] || [];
    
    if (doc.type === 'recommendation_letter') {
      return (
        <div className="space-y-4">
          {files.map((file, index) => (
            <div key={`${doc.type}-${index}`} className="flex items-center gap-2">
              <div className="flex-1">
                <DocumentUploadZone
                  onFileSelect={(file) => handleFileUpload(doc.type, file)}
                  file={file}
                  accept={doc.formats}
                  maxSize={doc.maxSize}
                />
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleRemoveFile(doc.type, index)}
                className="shrink-0 text-destructive hover:text-destructive/90"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          ))}
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => {
              const input = document.createElement('input');
              input.type = 'file';
              input.accept = doc.formats.join(',');
              input.onchange = (e) => {
                const file = (e.target as HTMLInputElement).files?.[0];
                if (file) {
                  handleFileUpload(doc.type, file);
                }
              };
              input.click();
            }}
            className="w-full"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Another Letter
          </Button>
        </div>
      );
    }

    return (
      <DocumentUploadZone
        onFileSelect={(file) => handleFileUpload(doc.type, file)}
        file={files[0]}
        accept={doc.formats}
        maxSize={doc.maxSize}
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