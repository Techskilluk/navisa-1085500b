import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import PageHeader from "@/components/PageHeader";
import ResourceGrid from "@/components/resources/ResourceGrid";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

const Resources = () => {
  const { data: templates, isLoading: templatesLoading, error: templatesError } = useQuery({
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
      
      return data;
    }
  });

  // Sample articles data - in a real app, this would come from your backend
  const articles = [
    {
      id: 1,
      title: "Understanding Work Visas",
      description: "A comprehensive guide to different types of work visas and their requirements.",
      image: "/lovable-uploads/d695af27-98df-42b0-88f9-fea555532554.png",
      category: "Visa Guide"
    },
    {
      id: 2,
      title: "Immigration Process Overview",
      description: "Step-by-step guide to navigating the immigration process successfully.",
      image: "/lovable-uploads/d695af27-98df-42b0-88f9-fea555532554.png",
      category: "Process Guide"
    },
    {
      id: 3,
      title: "Document Preparation Tips",
      description: "Essential tips for preparing your immigration documents correctly.",
      image: "/lovable-uploads/d695af27-98df-42b0-88f9-fea555532554.png",
      category: "Tips"
    }
  ];

  return (
    <div className="min-h-screen bg-background pb-12">
      <PageHeader
        title="Immigration Resources"
        subtitle="Access guides, articles, and document templates for your immigration journey"
        showCta={false}
      />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <Tabs defaultValue="articles" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 lg:w-[400px]">
            <TabsTrigger value="articles">Articles & Guides</TabsTrigger>
            <TabsTrigger value="templates">Document Templates</TabsTrigger>
          </TabsList>

          <TabsContent value="articles">
            <ResourceGrid articles={articles} />
          </TabsContent>

          <TabsContent value="templates">
            {templatesLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                  <Skeleton key={i} className="h-48" />
                ))}
              </div>
            ) : templatesError ? (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  There was an error loading the templates. Please try again later.
                </AlertDescription>
              </Alert>
            ) : (
              <ResourceGrid templates={templates} />
            )}
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Resources;