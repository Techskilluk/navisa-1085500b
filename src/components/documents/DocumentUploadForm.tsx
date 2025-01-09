import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import DocumentUploadZone from "./DocumentUploadZone";
import type { DocumentRequirement } from "@/types/documents";

interface DocumentUploadFormProps {
  visaType: string;
  documents: DocumentRequirement[];
  onFileUpload: (type: string, file: File) => void;
}

const DocumentUploadForm = ({ visaType, documents, onFileUpload }: DocumentUploadFormProps) => {
  const [uploadedFiles, setUploadedFiles] = useState<Record<string, File>>({});
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState<Record<string, number>>({});
  const { toast } = useToast();
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleFileUpload = async (type: string, file: File) => {
    console.log(`Starting upload for ${type}:`, file.name);
    setUploadedFiles(prev => ({ ...prev, [type]: file }));
    setUploadProgress(prev => ({ ...prev, [type]: 0 }));
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
      // Upload files in parallel for better performance
      const uploadPromises = Object.entries(uploadedFiles).map(async ([type, file]) => {
        const filePath = `${user.id}/${visaType}/${type}-${Date.now()}.${file.name.split('.').pop()}`;
        
        console.log(`Uploading ${type} to ${filePath}`);
        
        const { error: uploadError } = await supabase.storage
          .from('documents')
          .upload(filePath, file, {
            upsert: false,
            onProgress: ({ loaded, total }) => {
              const percentage = (loaded / total) * 100;
              setUploadProgress(prev => ({ ...prev, [type]: percentage }));
              console.log(`Upload progress for ${type}: ${percentage}%`);
            }
          });

        if (uploadError) {
          console.error(`Error uploading ${type}:`, uploadError);
          throw uploadError;
        }

        const { error: dbError } = await supabase.from('documents').insert({
          user_id: user.id,
          document_type: type,
          file_path: filePath,
          status: 'pending'
        });

        if (dbError) {
          console.error(`Error saving ${type} metadata:`, dbError);
          throw dbError;
        }

        successCount++;
        console.log(`Successfully uploaded ${type}`);
      });

      await Promise.all(uploadPromises);

      toast({
        title: "Documents uploaded successfully",
        description: `${successCount} documents have been uploaded and will be reviewed soon.`,
        duration: 5000,
      });

      // Short delay before navigation to ensure toast is visible
      setTimeout(() => {
        navigate('/dashboard');
      }, 2000);

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
      setUploadProgress({});
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {documents.map((doc) => (
          <div key={doc.type} className="space-y-2">
            <label className="text-sm font-medium">
              {doc.label}
              {doc.required && <span className="text-destructive ml-1">*</span>}
            </label>
            <DocumentUploadZone
              onFileSelect={(file) => handleFileUpload(doc.type, file)}
              file={uploadedFiles[doc.type]}
              accept={doc.formats}
              maxSize={doc.maxSize}
            />
            {uploadProgress[doc.type] > 0 && uploadProgress[doc.type] < 100 && (
              <div className="w-full bg-secondary rounded-full h-1.5 mt-2">
                <div
                  className="bg-primary h-1.5 rounded-full transition-all duration-300"
                  style={{ width: `${uploadProgress[doc.type]}%` }}
                />
              </div>
            )}
          </div>
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