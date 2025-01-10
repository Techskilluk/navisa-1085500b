import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import PageHeader from "@/components/PageHeader";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import ResourceArticleGrid from "@/components/resources/ResourceArticleGrid";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

  // Sample articles data - in a real app, this would come from your backend
  const articles = [
    {
      id: 1,
      title: "Understanding the difference between Work Visa and permanent residency",
      description: "Learn about the key differences between temporary work visas and permanent residency status.",
      image: "/lovable-uploads/d695af27-98df-42b0-88f9-fea555532554.png",
      category: "guides"
    },
    {
      id: 2,
      title: "Common Visa Application Mistakes",
      description: "Avoid these common pitfalls when applying for your visa.",
      image: "/lovable-uploads/d695af27-98df-42b0-88f9-fea555532554.png",
      category: "tips"
    },
    {
      id: 3,
      title: "Latest Immigration Policy Updates",
      description: "Stay informed about recent changes in immigration policies.",
      image: "/lovable-uploads/d695af27-98df-42b0-88f9-fea555532554.png",
      category: "news"
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

          <TabsContent value="articles" className="space-y-8">
            <ResourceArticleGrid articles={articles} />
          </TabsContent>

          <TabsContent value="templates">
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-48 bg-card rounded-lg" />
                ))}
              </div>
            ) : error ? (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  There was an error loading the templates. Please try again later.
                </AlertDescription>
              </Alert>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {templates?.map((template) => (
                  <div key={template.id} className="bg-card rounded-lg p-6 space-y-4">
                    <h3 className="text-lg font-semibold">{template.document_type}</h3>
                    <p className="text-sm text-muted-foreground">
                      For {template.visa_type} visa applications
                    </p>
                  </div>
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Resources;