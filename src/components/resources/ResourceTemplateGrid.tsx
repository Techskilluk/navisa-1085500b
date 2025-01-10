import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import ResourcesLoading from "./ResourcesLoading";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import ResourceGrid from "./ResourceGrid";

const ResourceTemplateGrid = () => {
  const { data: templates, isLoading, error } = useQuery({
    queryKey: ['documentTemplates'],
    queryFn: async () => {
      console.log("Fetching document templates...");
      const { data, error } = await supabase
        .from('document_templates')
        .select('*');
      
      if (error) {
        console.error("Error fetching templates:", error);
        throw error;
      }
      
      console.log("Templates fetched:", data);
      return data;
    }
  });

  if (isLoading) return <ResourcesLoading />;

  if (error) {
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>
          There was an error loading the templates. Please try again later.
        </AlertDescription>
      </Alert>
    );
  }

  return <ResourceGrid templates={templates} />;
};

export default ResourceTemplateGrid;