import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Upload, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import DocumentChecklistItem from "./DocumentChecklistItem";
import DocumentUploadZone from "./DocumentUploadZone";
import DocumentResources from "./DocumentResources";

interface DocumentRequirement {
  type: string;
  label: string;
  required: boolean;
  maxSize: number;
  formats: string[];
}

const VISA_DOCUMENTS: Record<string, DocumentRequirement[]> = {
  "express-entry": [
    { type: "resume", label: "Resume", required: true, maxSize: 5, formats: [".pdf", ".doc", ".docx"] },
    { type: "personal-statement", label: "Personal Statement", required: true, maxSize: 5, formats: [".pdf", ".doc", ".docx"] },
    { type: "recommendation", label: "Letter of Recommendation", required: true, maxSize: 5, formats: [".pdf"] },
    { type: "degree", label: "Degree Certificate", required: true, maxSize: 5, formats: [".pdf", ".jpg", ".png"] },
    { type: "language", label: "Language Proficiency Result", required: true, maxSize: 5, formats: [".pdf"] },
    { type: "funds", label: "Proof of Funds", required: true, maxSize: 5, formats: [".pdf"] },
  ],
  // Add more visa types here
};

interface DocumentUploadProps {
  visaType: string;
}

const DocumentUpload = ({ visaType }: DocumentUploadProps) => {
  const [uploadedFiles, setUploadedFiles] = useState<Record<string, File>>({});
  const [uploading, setUploading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  const { user } = useAuth();

  const documents = VISA_DOCUMENTS[visaType] || [];

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

  const resources = [
    {
      title: "Resume Template",
      description: "A professional template tailored for your visa application",
      url: "/templates/resume.pdf"
    },
    {
      title: "Personal Statement Guide",
      description: "Guidelines and examples for writing your personal statement",
      url: "/templates/personal-statement.pdf"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <Button
          variant="ghost"
          onClick={() => navigate('/dashboard')}
          className="mb-4"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to dashboard
        </Button>
        
        <h1 className="text-2xl font-bold mb-2">Required documents</h1>
        <p className="text-muted-foreground">
          Based on your selected visa pathway ({visaType}), we've generated a personalized list of required documents and resources to guide you
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-card p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Document Checklist</h2>
          <p className="text-sm text-muted-foreground mb-4">
            All documents must be in PDF, PNG, or JPG format and must not exceed 5mb
          </p>
          
          <div className="space-y-4">
            {documents.map((doc) => (
              <DocumentChecklistItem
                key={doc.type}
                label={doc.label}
                isComplete={!!uploadedFiles[doc.type]}
                required={doc.required}
              />
            ))}
          </div>
        </div>

        <div className="md:col-span-2 space-y-6">
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
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <DocumentResources resources={resources} />
      </div>
    </div>
  );
};

export default DocumentUpload;