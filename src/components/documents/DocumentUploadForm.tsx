import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import DocumentChecklistItem from "./DocumentChecklistItem";
import DocumentUploadZone from "./DocumentUploadZone";

interface DocumentRequirement {
  type: string;
  label: string;
  required: boolean;
  maxSize: number;
  formats: string[];
}

interface DocumentUploadFormProps {
  visaType: string;
  documents: DocumentRequirement[];
}

const DocumentUploadForm = ({ visaType, documents }: DocumentUploadFormProps) => {
  const [uploadedFiles, setUploadedFiles] = useState<Record<string, File>>({});
  const [uploading, setUploading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleFileUpload = async (type: string, file: File) => {
    setUploadedFiles(prev => ({ ...prev, [type]: file }));
  };

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

    try {
      for (const [type, file] of Object.entries(uploadedFiles)) {
        const filePath = `${user.id}/${visaType}/${type}-${Date.now()}.${file.name.split('.').pop()}`;
        
        const { error: uploadError } = await supabase.storage
          .from('documents')
          .upload(filePath, file);

        if (uploadError) throw uploadError;

        await supabase.from('documents').insert({
          user_id: user.id,
          document_type: type,
          file_path: filePath,
          status: 'pending'
        });
      }

      toast({
        title: "Documents uploaded successfully",
        description: "We'll review your documents and get back to you soon."
      });

      navigate('/dashboard');
    } catch (error) {
      console.error('Error uploading documents:', error);
      toast({
        title: "Upload failed",
        description: "There was an error uploading your documents. Please try again.",
        variant: "destructive"
      });
    } finally {
      setUploading(false);
    }
  };

  const isComplete = documents.every(doc => 
    !doc.required || uploadedFiles[doc.type]
  );

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {documents.map((doc) => (
          <div key={doc.type} className="space-y-2">
            <label className="text-sm font-medium">{doc.label}</label>
            <DocumentUploadZone
              onFileSelect={(file) => handleFileUpload(doc.type, file)}
              file={uploadedFiles[doc.type]}
              accept={doc.formats}
              maxSize={doc.maxSize}
            />
          </div>
        ))}
      </div>

      <div className="flex justify-end">
        <Button
          onClick={handleSubmit}
          disabled={!isComplete || uploading}
          className="w-full md:w-auto"
        >
          {uploading ? "Uploading..." : "Submit"}
          {!uploading && <Upload className="w-4 h-4 ml-2" />}
        </Button>
      </div>
    </div>
  );
};

export default DocumentUploadForm;