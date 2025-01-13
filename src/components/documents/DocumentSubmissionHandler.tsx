import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";

interface DocumentSubmissionHandlerProps {
  visaType: string;
  uploadedFiles: Record<string, File[]>;
  isUploading: boolean;
  setIsUploading: (value: boolean) => void;
}

const DocumentSubmissionHandler = ({
  visaType,
  uploadedFiles,
  isUploading,
  setIsUploading,
}: DocumentSubmissionHandlerProps) => {
  const { user } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);

  const handleSubmit = async () => {
    if (!user) {
      toast({
        variant: "destructive",
        title: "Authentication required",
        description: "Please sign in to submit documents.",
      });
      return;
    }

    setIsUploading(true);
    setProgress(0);

    try {
      const totalFiles = Object.values(uploadedFiles).flat().length;
      let uploadedCount = 0;

      for (const [docType, files] of Object.entries(uploadedFiles)) {
        for (const file of files) {
          const filePath = `${user.id}/${visaType}/${docType}-${Date.now()}-${file.name}`;
          console.log(`Uploading ${docType} to ${filePath}`);

          const { error: uploadError } = await supabase.storage
            .from('documents')
            .upload(filePath, file);

          if (uploadError) {
            console.error(`Error uploading ${docType}:`, uploadError);
            throw uploadError;
          }

          const { error: dbError } = await supabase.from('documents').insert({
            user_id: user.id,
            document_type: docType,
            file_path: filePath,
            status: 'pending'
          });

          if (dbError) {
            console.error(`Error saving ${docType} metadata:`, dbError);
            throw dbError;
          }

          uploadedCount++;
          setProgress((uploadedCount / totalFiles) * 100);
        }
      }

      toast({
        title: "Documents Uploaded",
        description: "Your documents have been successfully uploaded.",
      });

      navigate('/dashboard', {
        state: { documentSubmission: { visaType, timestamp: new Date().toISOString() } }
      });
    } catch (error) {
      console.error('Document submission error:', error);
      toast({
        variant: "destructive",
        title: "Upload Failed",
        description: "There was an error uploading your documents. Please try again.",
      });
    } finally {
      setIsUploading(false);
      setProgress(0);
    }
  };

  return (
    <div className="mt-6">
      {progress > 0 && progress < 100 && (
        <div className="w-full bg-secondary rounded-full h-1.5 mb-4">
          <div
            className="bg-primary h-1.5 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}

      <Button
        onClick={handleSubmit}
        disabled={isUploading || Object.keys(uploadedFiles).length === 0}
        className="w-full"
      >
        {isUploading ? "Uploading..." : "Submit Documents"}
      </Button>
    </div>
  );
};

export default DocumentSubmissionHandler;