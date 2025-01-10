import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import PageHeader from "@/components/PageHeader";
import ResourcesGrid from "@/components/resources/ResourcesGrid";
import ResourcesLoading from "@/components/resources/ResourcesLoading";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

const Resources = () => {
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

  return (
    <div className="min-h-screen bg-background pb-12">
      <PageHeader
        title="Immigration Resources"
        subtitle="Access document templates, guides, and resources for your immigration journey"
        showCta={false}
      />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        {isLoading ? (
          <ResourcesLoading />
        ) : error ? (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              There was an error loading the resources. Please try again later.
            </AlertDescription>
          </Alert>
        ) : (
          <ResourcesGrid templates={templates || []} />
        )}
      </main>
    </div>
  );
};

export default Resources;