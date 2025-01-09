import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";

interface DocumentSubmissionHandlerProps {
  visaType: string;
  uploadedFiles: Record<string, File>;
  isUploading: boolean;
  setIsUploading: (value: boolean) => void;
}

const DocumentSubmissionHandler = ({
  visaType,
  uploadedFiles,
  isUploading,
  setIsUploading,
}: DocumentSubmissionHandlerProps) => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [successCount, setSuccessCount] = useState(0);

  const handleSubmit = async () => {
    if (Object.keys(uploadedFiles).length === 0) {
      toast({
        title: "No documents selected",
        description: "Please upload at least one document before submitting.",
        variant: "destructive",
      });
      return;
    }

    setIsUploading(true);
    let successCount = 0;

    try {
      const timestamp = new Date().toLocaleString();
      const { data: { user } } = await supabase.auth.getUser();

      if (!user) {
        throw new Error("User not authenticated");
      }

      for (const [docType, file] of Object.entries(uploadedFiles)) {
        const filePath = `${user.id}/${visaType}/${docType}-${Date.now()}`;
        
        const { error: uploadError } = await supabase.storage
          .from("documents")
          .upload(filePath, file);

        if (uploadError) {
          console.error(`Error uploading ${docType}:`, uploadError);
          continue;
        }

        const { error: insertError } = await supabase
          .from("documents")
          .insert({
            user_id: user.id,
            document_type: docType,
            file_path: filePath,
          });

        if (insertError) {
          console.error(`Error inserting ${docType} record:`, insertError);
          continue;
        }

        successCount++;
      }

      setSuccessCount(successCount);

      toast({
        title: "Documents Submitted Successfully",
        description: `${successCount} documents have been uploaded and are pending review.`,
        duration: 5000,
      });

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
        title: "Submission Error",
        description: "An error occurred while submitting your documents. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <Button
      onClick={handleSubmit}
      disabled={isUploading || Object.keys(uploadedFiles).length === 0}
      className="w-full mt-6"
    >
      <Upload className="w-4 h-4 mr-2" />
      {isUploading ? "Uploading..." : "Submit Documents"}
    </Button>
  );
};

export default DocumentSubmissionHandler;