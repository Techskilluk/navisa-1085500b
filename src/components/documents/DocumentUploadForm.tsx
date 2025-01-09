import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";
import FileUpload from "./FileUpload";
import type { DocumentRequirement } from "@/types/documents";

interface DocumentUploadFormProps {
  visaType: string;
  documents: DocumentRequirement[];
  onFileUpload: (type: string, file: File) => void;
}

const DocumentUploadForm = ({ visaType, documents, onFileUpload }: DocumentUploadFormProps) => {
  const [uploadedFiles, setUploadedFiles] = useState<Record<string, File>>({});
  const [uploading, setUploading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleUploadComplete = (type: string, file: File) => {
    setUploadedFiles(prev => ({ ...prev, [type]: file }));
    onFileUpload(type, file);
  };

  const isComplete = documents.every(doc => 
    !doc.required || uploadedFiles[doc.type]
  );

  const handleSubmit = async () => {
    if (!user) {
      toast({
        title: "Authentication required",
        description: "Please sign in to submit documents",
        variant: "destructive"
      });
      return;
    }

    setUploading(true);
    console.log("Starting document submission process");
    let successCount = 0;

    try {
      await Promise.all(
        documents.map(async (doc) => {
          if (uploadedFiles[doc.type]) {
            successCount++;
          }
        })
      );

      const timestamp = new Date().toLocaleString('en-US', {
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
      });

      toast({
        title: "Documents uploaded successfully",
        description: `Your documents were submitted on ${timestamp}. Our team will review them shortly.`,
        duration: 5000,
      });

      // Ensure we're using replace to prevent back navigation
      navigate('/dashboard', { 
        replace: true,
        state: { 
          documentSubmission: {
            timestamp,
            visaType,
            documentCount: successCount
          }
        }
      });

    } catch (error) {
      console.error('Error in document submission:', error);
      toast({
        title: "Upload failed",
        description: "There was an error uploading your documents. Please try again.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {documents.map((doc) => (
          <FileUpload
            key={doc.type}
            document={doc}
            visaType={visaType}
            userId={user?.id || ''}
            onUploadComplete={handleUploadComplete}
          />
        ))}
      </div>

      <div className="flex justify-end">
        <Button
          onClick={handleSubmit}
          disabled={!isComplete || uploading}
          className="w-full md:w-auto"
        >
          {uploading ? (
            <>
              <span className="animate-pulse">Uploading documents...</span>
              <Upload className="w-4 h-4 ml-2 animate-bounce" />
            </>
          ) : (
            <>
              Submit Documents
              <Upload className="w-4 h-4 ml-2" />
            </>
          )}
        </Button>
      </div>
    </div>
  );
};

export default DocumentUploadForm;