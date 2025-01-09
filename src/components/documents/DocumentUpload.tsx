import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Upload, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";

interface DocumentRequirement {
  type: string;
  label: string;
  required: boolean;
  maxSize: number; // in MB
  formats: string[];
}

const VISA_DOCUMENTS: Record<string, DocumentRequirement[]> = {
  "express-entry": [
    { type: "resume", label: "Resume", required: true, maxSize: 5, formats: ["pdf", "doc", "docx"] },
    { type: "personal-statement", label: "Personal Statement", required: true, maxSize: 5, formats: ["pdf", "doc", "docx"] },
    { type: "recommendation", label: "Letter of Recommendation", required: true, maxSize: 5, formats: ["pdf"] },
    { type: "degree", label: "Degree Certificate", required: true, maxSize: 5, formats: ["pdf", "jpg", "png"] },
    { type: "language", label: "Language Proficiency Result", required: true, maxSize: 5, formats: ["pdf"] },
    { type: "funds", label: "Proof of Funds", required: true, maxSize: 5, formats: ["pdf"] },
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
    if (!file) return;

    const requirement = documents.find(doc => doc.type === type);
    if (!requirement) return;

    // Validate file size
    if (file.size > requirement.maxSize * 1024 * 1024) {
      toast({
        title: "File too large",
        description: `Maximum file size is ${requirement.maxSize}MB`,
        variant: "destructive"
      });
      return;
    }

    // Validate file format
    const fileExt = file.name.split('.').pop()?.toLowerCase();
    if (!requirement.formats.includes(fileExt || '')) {
      toast({
        title: "Invalid file format",
        description: `Allowed formats: ${requirement.formats.join(', ')}`,
        variant: "destructive"
      });
      return;
    }

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
              <div key={doc.type} className="flex items-center gap-3">
                <div className={`w-5 h-5 rounded-full border ${
                  uploadedFiles[doc.type] ? 'bg-primary border-primary' : 'border-muted'
                }`} />
                <span className="text-sm">{doc.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="md:col-span-2 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {documents.map((doc) => (
              <div key={doc.type} className="space-y-2">
                <label className="text-sm font-medium">{doc.label}</label>
                <div
                  className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer hover:border-primary transition-colors ${
                    uploadedFiles[doc.type] ? 'border-primary bg-primary/5' : 'border-muted'
                  }`}
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={(e) => {
                    e.preventDefault();
                    const file = e.dataTransfer.files[0];
                    if (file) handleFileUpload(doc.type, file);
                  }}
                  onClick={() => {
                    const input = document.createElement('input');
                    input.type = 'file';
                    input.accept = doc.formats.map(f => `.${f}`).join(',');
                    input.onchange = (e) => {
                      const file = (e.target as HTMLInputElement).files?.[0];
                      if (file) handleFileUpload(doc.type, file);
                    };
                    input.click();
                  }}
                >
                  {uploadedFiles[doc.type] ? (
                    <div className="flex items-center justify-center gap-2">
                      <FileText className="w-5 h-5 text-primary" />
                      <span className="text-sm">{uploadedFiles[doc.type].name}</span>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <Upload className="w-6 h-6 mx-auto text-muted-foreground" />
                      <div className="text-sm">
                        <span className="text-muted-foreground">Drag & drop or </span>
                        <span className="text-primary font-medium">click to upload</span>
                      </div>
                    </div>
                  )}
                </div>
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
    </div>
  );
};

export default DocumentUpload;