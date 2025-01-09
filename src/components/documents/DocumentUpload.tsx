import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";

const REQUIRED_DOCUMENTS = [
  { type: "Resume", description: "PDF or Word document" },
  { type: "Personal statement", description: "500-750 words" },
  { type: "Letter of recommendation", description: "Signed by recommender" },
  { type: "Degree certificate", description: "Scanned copy" },
  { type: "Language proficiency result", description: "Official test results" },
  { type: "Proof of funds", description: "Bank statement (less than 3 months old)" },
];

export const DocumentUpload = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { user } = useAuth();
  const [uploading, setUploading] = useState(false);

  const handleFileUpload = async (file: File, documentType: string) => {
    if (!user) {
      toast({
        title: "Authentication required",
        description: "Please sign in to upload documents",
        variant: "destructive",
      });
      return;
    }

    try {
      setUploading(true);

      const fileExt = file.name.split(".").pop();
      const filePath = `${user.id}/${documentType.toLowerCase().replace(/\s+/g, "-")}.${fileExt}`;

      const { error: uploadError } = await supabase.storage
        .from("documents")
        .upload(filePath, file, { upsert: true });

      if (uploadError) throw uploadError;

      const { error: dbError } = await supabase.from("documents").insert({
        user_id: user.id,
        document_type: documentType,
        file_path: filePath,
        status: "pending",
      });

      if (dbError) throw dbError;

      toast({
        title: "Document uploaded",
        description: `${documentType} has been uploaded successfully`,
      });
    } catch (error) {
      console.error("Error uploading document:", error);
      toast({
        title: "Upload failed",
        description: "There was an error uploading your document",
        variant: "destructive",
      });
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Button
          variant="ghost"
          className="flex items-center gap-2"
          onClick={() => navigate("/dashboard")}
        >
          <ArrowLeft className="h-4 w-4" />
          Back to dashboard
        </Button>
      </div>

      <div className="mb-8">
        <h1 className="text-2xl font-semibold mb-2">Required documents</h1>
        <p className="text-muted-foreground">
          Based on your selected visa pathway, we've generated a personalized list of required documents
          and resources to guide you
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {REQUIRED_DOCUMENTS.map((doc) => (
          <div
            key={doc.type}
            className="border rounded-lg p-6 space-y-4 bg-card"
          >
            <h3 className="font-medium">{doc.type}</h3>
            <p className="text-sm text-muted-foreground">{doc.description}</p>
            <div
              className="border-2 border-dashed rounded-lg p-6 text-center cursor-pointer hover:border-primary transition-colors"
              onDragOver={(e) => e.preventDefault()}
              onDrop={async (e) => {
                e.preventDefault();
                const file = e.dataTransfer.files[0];
                if (file) await handleFileUpload(file, doc.type);
              }}
              onClick={() => {
                const input = document.createElement("input");
                input.type = "file";
                input.accept = ".pdf,.doc,.docx,.jpg,.jpeg,.png";
                input.onchange = async (e) => {
                  const file = (e.target as HTMLInputElement).files?.[0];
                  if (file) await handleFileUpload(file, doc.type);
                };
                input.click();
              }}
            >
              <Upload className="mx-auto h-8 w-8 text-muted-foreground mb-2" />
              <p className="text-sm">
                Drag & drop or <span className="text-primary">click to upload</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DocumentUpload;