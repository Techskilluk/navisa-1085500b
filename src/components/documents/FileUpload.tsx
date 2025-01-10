import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import DocumentUploadZone from "./DocumentUploadZone";
import type { DocumentRequirement } from "@/types/documents";

interface FileUploadProps {
  document: DocumentRequirement;
  visaType: string;
  userId: string;
  onUploadComplete: (type: string, file: File) => void;
}

const FileUpload = ({ document, visaType, userId, onUploadComplete }: FileUploadProps) => {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [file, setFile] = useState<File | null>(null);

  const handleFileSelect = async (selectedFile: File) => {
    setFile(selectedFile);
    setUploadProgress(0);
    
    const filePath = `${userId}/${visaType}/${document.type}-${Date.now()}.${selectedFile.name.split('.').pop()}`;
    console.log(`Starting upload for ${document.type} to ${filePath}`);

    try {
      const { error: uploadError } = await supabase.storage
        .from('documents')
        .upload(filePath, selectedFile, {
          upsert: false
        });

      if (uploadError) {
        console.error(`Error uploading ${document.type}:`, uploadError);
        throw uploadError;
      }

      const { error: dbError } = await supabase.from('documents').insert({
        user_id: userId,
        document_type: document.type,
        file_path: filePath,
        status: 'pending'
      });

      if (dbError) {
        console.error(`Error saving ${document.type} metadata:`, dbError);
        throw dbError;
      }

      setUploadProgress(100);
      onUploadComplete(document.type, selectedFile);
      console.log(`Successfully uploaded ${document.type}`);

    } catch (error) {
      console.error(`Upload failed for ${document.type}:`, error);
      setUploadProgress(0);
      setFile(null);
      throw error;
    }
  };

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">
        {document.label}
        {document.required && <span className="text-destructive ml-1">*</span>}
      </label>
      <DocumentUploadZone
        onFileSelect={handleFileSelect}
        file={file || undefined}
        accept={['.pdf', '.jpg', '.jpeg', '.png']}
        maxSize={5}
      />
      {uploadProgress > 0 && uploadProgress < 100 && (
        <div className="w-full bg-secondary rounded-full h-1.5 mt-2">
          <div
            className="bg-primary h-1.5 rounded-full transition-all duration-300"
            style={{ width: `${uploadProgress}%` }}
          />
        </div>
      )}
    </div>
  );
};

export default FileUpload;