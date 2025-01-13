import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { uploadDocumentToStorage, createDocumentRecord } from "@/lib/document-upload";

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
  const [successCount, setSuccessCount] = useState(0);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmission = async () => {
    if (Object.keys(uploadedFiles).length === 0) {
      toast({
        title: "No Documents Selected",
        description: "Please select at least one document to upload.",
        variant: "destructive",
      });
      return;
    }

    setIsUploading(true);
    let successCount = 0;

    try {
      const { data: { user } } = await supabase.auth.getUser();

      if (!user) {
        throw new Error("User not authenticated");
      }

      console.log("Starting document upload process...");

      for (const [docType, file] of Object.entries(uploadedFiles)) {
        try {
          const filePath = await uploadDocumentToStorage(user.id, visaType, docType, file);
          await createDocumentRecord(user.id, docType, filePath);
          successCount++;
          console.log(`Successfully uploaded ${docType}`);
        } catch (error) {
          console.error(`Failed to process ${docType}:`, error);
          toast({
            title: `Failed to Upload ${docType}`,
            description: "Please try again or contact support if the issue persists.",
            variant: "destructive",
          });
        }
      }

      setSuccessCount(successCount);

      if (successCount > 0) {
        console.log("Documents uploaded successfully, preparing to navigate...");
        
        toast({
          title: "Documents Submitted Successfully",
          description: `${successCount} documents have been uploaded and are pending review.`,
          duration: 5000,
        });

        // Force a small delay to ensure toast is shown before navigation
        setTimeout(() => {
          console.log("Navigating to dashboard...");
          navigate("/dashboard", {
            replace: true,
            state: {
              documentSubmission: {
                timestamp: new Date().toLocaleString(),
                visaType,
                documentCount: successCount
              }
            }
          });
        }, 500); // Increased delay to ensure toast is visible
      } else {
        toast({
          title: "Submission Failed",
          description: "No documents were successfully uploaded. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Document submission error:", error);
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="mt-6">
      <Button
        onClick={handleSubmission}
        disabled={isUploading || Object.keys(uploadedFiles).length === 0}
        className="w-full"
      >
        {isUploading ? "Uploading..." : "Submit Documents for Review"}
      </Button>
    </div>
  );
};

export default DocumentSubmissionHandler;