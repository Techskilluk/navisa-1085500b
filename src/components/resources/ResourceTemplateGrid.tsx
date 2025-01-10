import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText } from "lucide-react";
import ResourcesLoading from "./ResourcesLoading";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

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

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {templates?.map((template) => (
        <Card key={template.id} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <CardContent className="p-6 flex flex-col items-start gap-4">
            <div className="flex items-center gap-3">
              <FileText className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-semibold">{template.document_type}</h3>
                <p className="text-sm text-muted-foreground">
                  For {template.visa_type} visa
                </p>
              </div>
            </div>
            <Badge variant="outline">Template</Badge>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ResourceTemplateGrid;