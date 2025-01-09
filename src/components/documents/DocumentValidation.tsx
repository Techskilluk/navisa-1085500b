import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, CheckCircle2, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";

interface Document {
  id: string;
  document_type: string;
  status: string;
  feedback?: string;
}

export const DocumentValidation = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { user } = useAuth();
  const [documents, setDocuments] = useState<Document[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDocuments = async () => {
      if (!user) return;

      try {
        const { data, error } = await supabase
          .from("documents")
          .select("*")
          .eq("user_id", user.id);

        if (error) throw error;
        setDocuments(data || []);
      } catch (error) {
        console.error("Error fetching documents:", error);
        toast({
          title: "Error",
          description: "Failed to load document status",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchDocuments();
  }, [user, toast]);

  const handleReupload = async (documentType: string) => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".pdf,.doc,.docx,.jpg,.jpeg,.png";
    input.onchange = async (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (!file || !user) return;

      try {
        const fileExt = file.name.split(".").pop();
        const filePath = `${user.id}/${documentType.toLowerCase().replace(/\s+/g, "-")}.${fileExt}`;

        const { error: uploadError } = await supabase.storage
          .from("documents")
          .upload(filePath, file, { upsert: true });

        if (uploadError) throw uploadError;

        const { error: updateError } = await supabase
          .from("documents")
          .update({ status: "pending", feedback: null })
          .eq("user_id", user.id)
          .eq("document_type", documentType);

        if (updateError) throw updateError;

        toast({
          title: "Document updated",
          description: `${documentType} has been re-uploaded successfully`,
        });

        // Refresh the documents list
        const { data, error } = await supabase
          .from("documents")
          .select("*")
          .eq("user_id", user.id);

        if (error) throw error;
        setDocuments(data || []);
      } catch (error) {
        console.error("Error re-uploading document:", error);
        toast({
          title: "Upload failed",
          description: "There was an error re-uploading your document",
          variant: "destructive",
        });
      }
    };
    input.click();
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
        <h1 className="text-2xl font-semibold mb-2">Document Validation</h1>
      </div>

      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="space-y-4">
          {documents.map((doc) => (
            <div
              key={doc.id}
              className="border rounded-lg p-6 flex items-start justify-between bg-card"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  {doc.status === "approved" ? (
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                  ) : doc.status === "rejected" ? (
                    <XCircle className="h-5 w-5 text-red-500" />
                  ) : (
                    <div className="h-5 w-5 rounded-full border-2 border-muted-foreground border-t-transparent animate-spin" />
                  )}
                  <h3 className="font-medium">{doc.document_type}</h3>
                </div>
                {doc.status === "approved" && (
                  <p className="text-sm text-green-500">Approved</p>
                )}
                {doc.status === "rejected" && doc.feedback && (
                  <div>
                    <p className="text-sm text-red-500 mb-2">Rejected</p>
                    <p className="text-sm text-muted-foreground">{doc.feedback}</p>
                  </div>
                )}
              </div>
              {doc.status === "rejected" && (
                <Button
                  variant="outline"
                  onClick={() => handleReupload(doc.document_type)}
                >
                  Re-upload
                </Button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DocumentValidation;